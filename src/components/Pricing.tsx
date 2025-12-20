import { motion } from "framer-motion";
import { Check, Sparkles, Phone } from "lucide-react";
import { Button } from "./ui/button";

const offers = [
  {
    title: "Limpieza Anual",
    price: "90",
    description: "Mantenimiento preventivo recomendado",
    features: [
      "Limpieza de radiador interior",
      "Limpieza de filtros",
      "Revisión general del equipo",
      "Comprobación de funcionamiento",
    ],
    featured: false,
  },
  {
    title: "Instalación Básica",
    price: "250",
    description: "Instalación profesional incluida",
    features: [
      "Instalación completa del equipo",
      "Material de instalación incluido",
      "Hasta 3 metros de tubería",
      "Puesta en marcha y pruebas",
      "Garantía de instalación",
    ],
    featured: true,
  },
];

const Pricing = () => {
  return (
    <section id="precios" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Ofertas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Precios <span className="text-gradient">transparentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Sin sorpresas. Te ofrecemos presupuestos claros y sin compromiso
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {offer.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                    <Sparkles size={14} />
                    Más popular
                  </div>
                </div>
              )}

              <div
                className={`h-full p-8 rounded-2xl border transition-all duration-500 ${
                  offer.featured
                    ? "bg-gradient-card border-primary/50 shadow-glow"
                    : "glass hover:border-primary/30"
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {offer.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gradient">
                    {offer.price}€
                  </span>
                  <span className="text-muted-foreground text-sm ml-2">
                    IVA no incluido
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {offer.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="tel:+34602359972" className="block">
                  <Button
                    variant={offer.featured ? "hero" : "outline"}
                    size="lg"
                    className="w-full gap-2"
                  >
                    <Phone size={18} />
                    Solicitar
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground mt-12 text-sm"
        >
          * Los precios pueden variar según la complejidad de la instalación.
          Solicita un presupuesto personalizado.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
