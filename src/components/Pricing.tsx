import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { Button } from "./ui/button";

const offers = [
  {
    brand: "FUJITSU",
    model: "ASY35UI-KP 1x1 3000 Frigorías Inverter A++",
    oldPrice: "1.090",
    newPrice: "649",
    discount: "40%",
    features: [
      "Clase energética A++",
      "Tecnología Inverter",
      "Instalación incluida",
      "Garantía 3 años",
    ],
  },
  {
    brand: "MITSUBISHI",
    model: "MSZ-HR35VF 1x1 3000 Frigorías Inverter A++",
    oldPrice: "1.190",
    newPrice: "729",
    discount: "38%",
    features: [
      "Clase energética A++",
      "Filtro anti-alérgenos",
      "Instalación incluida",
      "Garantía 3 años",
    ],
  },
  {
    brand: "GREE",
    model: "Pular 1x1 3000 Frigorías Inverter A++",
    oldPrice: "899",
    newPrice: "549",
    discount: "39%",
    features: [
      "WiFi integrado",
      "Modo silencioso",
      "Instalación incluida",
      "Garantía 2 años",
    ],
  },
  {
    brand: "DAIKIN",
    model: "TXC35C 1x1 3000 Frigorías Inverter A++",
    oldPrice: "1.390",
    newPrice: "899",
    discount: "35%",
    features: [
      "Tecnología Flash Streamer",
      "Modo Econo",
      "Instalación incluida",
      "Garantía 3 años",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="precios" className="py-24 relative overflow-hidden bg-background">
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
            Ofertas Especiales
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Las <span className="text-gradient">mejores ofertas</span> del mercado
          </h2>
          <p className="text-muted-foreground text-lg">
            Equipos de primeras marcas con instalación incluida. Precios imbatibles.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.brand}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-gradient-card border-2 border-accent/50 hover:border-accent hover:shadow-[0_10px_30px_rgba(var(--accent-rgb),0.3)] transition-all duration-500 flex flex-col">
                {/* Brand logo */}
                <div className="h-16 flex items-center justify-center mb-4">
                  <h3 className="text-accent text-2xl font-bold tracking-wider uppercase">
                    {offer.brand}
                  </h3>
                </div>

                {/* Model name */}
                <p className="text-foreground text-sm font-medium text-center mb-4 min-h-[60px] flex items-center justify-center">
                  {offer.model}
                </p>

                {/* Features */}
                <div className="bg-accent/10 rounded-lg p-4 mb-4 flex-grow">
                  {offer.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-sm text-foreground mb-2">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price section */}
                <div className="text-center">
                  <p className="text-destructive text-lg line-through mb-1">
                    {offer.oldPrice}€
                  </p>
                  <p className="text-accent text-4xl font-bold mb-2" style={{ textShadow: "0 0 10px rgba(var(--accent-rgb), 0.5)" }}>
                    {offer.newPrice}€
                  </p>
                  <span className="inline-block bg-gradient-to-r from-destructive to-destructive/80 text-destructive-foreground px-4 py-1 rounded-full text-sm font-bold">
                    -{offer.discount} OFERTA
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <div className="p-8 rounded-2xl glass border border-border/50 hover:border-primary/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Limpieza Anual</h3>
            <p className="text-muted-foreground text-sm mb-4">Mantenimiento preventivo recomendado</p>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gradient">90€</span>
              <span className="text-muted-foreground text-sm ml-2">IVA no incluido</span>
            </div>
            <ul className="space-y-2 mb-6">
              {["Limpieza de radiador interior", "Limpieza de filtros", "Revisión general del equipo", "Comprobación de funcionamiento"].map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <a href="tel:+34602359972" className="block">
              <Button variant="outline" size="lg" className="w-full gap-2">
                <Phone size={18} />
                Solicitar
              </Button>
            </a>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-card border border-primary/50 shadow-glow hover:shadow-glow-strong transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">Instalación Básica</h3>
              <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">Más popular</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">Instalación profesional incluida</p>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gradient">250€</span>
              <span className="text-muted-foreground text-sm ml-2">IVA no incluido</span>
            </div>
            <ul className="space-y-2 mb-6">
              {["Instalación completa del equipo", "Material de instalación incluido", "Hasta 3 metros de tubería", "Puesta en marcha y pruebas", "Garantía de instalación"].map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <a href="tel:+34602359972" className="block">
              <Button variant="hero" size="lg" className="w-full gap-2">
                <Phone size={18} />
                Solicitar
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground mt-12 text-sm"
        >
          * Los precios pueden variar según la complejidad de la instalación. Solicita un presupuesto personalizado.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
