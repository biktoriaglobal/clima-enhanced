import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              ¿Listo para mejorar tu{" "}
              <span className="text-gradient">confort</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Ponte en contacto con nosotros para obtener un presupuesto
              personalizado sin compromiso. Respuesta rápida garantizada.
            </p>

            {/* Contact methods */}
            <div className="space-y-6">
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
                href="https://wa.me/34602359972"
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
            </div>
          </motion.div>

          {/* Right column - Quick info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-card border border-border/50"
          >
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

            <div className="mt-10 pt-8 border-t border-border/50">
              <p className="text-muted-foreground text-sm mb-6">
                ¿Prefieres que te llamemos nosotros? Déjanos un mensaje por
                WhatsApp y te contactamos a la hora que prefieras.
              </p>
              <a
                href="https://wa.me/34602359972?text=Hola,%20me%20gustaría%20solicitar%20un%20presupuesto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg" className="w-full gap-2">
                  <MessageCircle size={20} />
                  Solicitar presupuesto
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
