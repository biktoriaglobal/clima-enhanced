import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
    poblacion: "",
    tipoServicio: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast.success("¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.");
      setFormData({
        nombre: "",
        apellidos: "",
        telefono: "",
        poblacion: "",
        tipoServicio: "",
        mensaje: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error al enviar el mensaje. Inténtalo de nuevo o contacta por WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            ¿Listo para mejorar tu{" "}
            <span className="text-gradient">confort</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Ponte en contacto con nosotros para obtener un presupuesto personalizado sin compromiso
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-card/80 border border-border/50 backdrop-blur-sm"
          >
            <h3 className="text-accent text-2xl font-semibold mb-6 text-center">
              Solicita tu presupuesto
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-accent text-sm font-medium mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border border-accent/30 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-accent text-sm font-medium mb-2">
                    Apellidos *
                  </label>
                  <input
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border border-accent/30 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Tus apellidos"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-accent text-sm font-medium mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border border-accent/30 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Tu teléfono"
                  />
                </div>
                <div>
                  <label className="block text-accent text-sm font-medium mb-2">
                    Población *
                  </label>
                  <input
                    type="text"
                    name="poblacion"
                    value={formData.poblacion}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border border-accent/30 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Tu población"
                  />
                </div>
              </div>

              <div>
                <label className="block text-accent text-sm font-medium mb-2">
                  Tipo de servicio
                </label>
                <select
                  name="tipoServicio"
                  value={formData.tipoServicio}
                  onChange={handleChange}
                  className="w-full bg-background/50 border border-accent/30 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors cursor-pointer"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Instalación">Instalación</option>
                  <option value="Mantenimiento">Mantenimiento</option>
                  <option value="Reparación">Reparación</option>
                  <option value="Presupuesto equipo">Presupuesto equipo</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-accent text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-background/50 border border-accent/30 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Cuéntanos qué necesitas..."
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                <Send size={20} />
                {isSubmitting ? "Enviando..." : "Enviar solicitud"}
              </Button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact methods */}
            <motion.a
              href="tel:+34602359972"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-5 p-5 rounded-xl glass hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Llámanos</div>
                <div className="text-xl font-semibold">+34 602 35 99 72</div>
              </div>
            </motion.a>

            <motion.a
              href="https://api.whatsapp.com/send/?phone=34602359972&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-5 p-5 rounded-xl glass hover:border-accent/40 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <MessageCircle size={24} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">WhatsApp</div>
                <div className="text-xl font-semibold">Escríbenos ahora</div>
              </div>
            </motion.a>

            {/* Quick info card */}
            <div className="p-8 rounded-2xl bg-gradient-card border border-border/50">
              <h3 className="text-2xl font-semibold mb-8">Información rápida</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Zona de servicio</div>
                    <div className="text-muted-foreground text-sm">
                      Valencia, Costa Blanca, Marina Alta y alrededores
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Horario de atención</div>
                    <div className="text-muted-foreground text-sm">
                      Lunes a Viernes: 8:00 - 20:00
                      <br />
                      Sábados: 9:00 - 14:00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
