import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    location: "Valencia",
    rating: 5,
    text: "Excelente servicio. Instalaron el aire acondicionado en mi casa en menos de 3 horas. Muy profesionales, limpios y con un trato inmejorable. 100% recomendables.",
    service: "Instalación Split Daikin",
  },
  {
    name: "Javier Martínez",
    location: "Dénia",
    rating: 5,
    text: "Contratamos CLIMATIC para instalar aire acondicionado por conductos en toda la vivienda. Presupuesto muy competitivo y acabado impecable. Repetiremos seguro.",
    service: "Instalación por conductos",
  },
  {
    name: "Laura Sánchez",
    location: "Gandía",
    rating: 5,
    text: "Muy contenta con el mantenimiento anual. Vinieron puntuales, hicieron la limpieza a vapor de los radiadores y ahora el equipo enfría como nuevo. Precio justo.",
    service: "Mantenimiento anual",
  },
  {
    name: "Carlos Ruiz",
    location: "Jávea",
    rating: 5,
    text: "Instaladores autorizados con carnet RITE, con certificado oficial de la instalación. Se nota la profesionalidad desde el primer contacto. Muy recomendable.",
    service: "Instalación Multisplit Mitsubishi",
  },
  {
    name: "Ana Torres",
    location: "Torrent",
    rating: 5,
    text: "Nos hicieron un presupuesto sin compromiso y fue el más ajustado de todos los que pedimos. La instalación perfecta y en el plazo prometido. Gracias!",
    service: "Instalación Fujitsu",
  },
  {
    name: "Roberto Navarro",
    location: "Altea",
    rating: 5,
    text: "Averió mi aire acondicionado en pleno agosto. Vinieron el mismo día, diagnosticaron el problema y me recargaron el gas R32. Servicio de 10.",
    service: "Reparación y recarga de gas",
  },
];

const Testimonials = () => {
  return (
    <section id="valoraciones" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Valoraciones <span className="text-gradient">reales</span>
          </h2>

          {/* Global rating */}
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full glass border border-border/50 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400" fill="currentColor" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gradient leading-none">4.9/5</div>
              <div className="text-xs text-muted-foreground">Basado en +200 opiniones</div>
            </div>
          </div>

          <p className="text-muted-foreground text-lg mt-4">
            Miles de clientes satisfechos avalan nuestro trabajo profesional
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/40 transition-all duration-500 flex flex-col">
                {/* Quote icon */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Quote size={20} />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="text-foreground/90 text-sm leading-relaxed mb-6 flex-grow">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm truncate">{t.name}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {t.location} · {t.service}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
