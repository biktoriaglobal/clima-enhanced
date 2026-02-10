import { motion } from "framer-motion";
import { Check, Phone, Star, Flame } from "lucide-react";
import { Button } from "./ui/button";

const brandColors: Record<string, { accent: string; accentLight: string; border: string; glow: string; text: string; bg: string }> = {
  FUJITSU: {
    accent: "text-red-500",
    accentLight: "bg-red-500/10",
    border: "border-red-500/40 hover:border-red-500",
    glow: "hover:shadow-[0_10px_30px_rgba(239,68,68,0.25)]",
    text: "text-red-500",
    bg: "bg-red-500",
  },
  MITSUBISHI: {
    accent: "text-red-600",
    accentLight: "bg-red-600/10",
    border: "border-red-600/40 hover:border-red-600",
    glow: "hover:shadow-[0_10px_30px_rgba(220,38,38,0.25)]",
    text: "text-red-600",
    bg: "bg-red-600",
  },
  GREE: {
    accent: "text-emerald-500",
    accentLight: "bg-emerald-500/10",
    border: "border-emerald-500/40 hover:border-emerald-500",
    glow: "hover:shadow-[0_10px_30px_rgba(16,185,129,0.25)]",
    text: "text-emerald-500",
    bg: "bg-emerald-500",
  },
  DAIKIN: {
    accent: "text-sky-500",
    accentLight: "bg-sky-500/10",
    border: "border-sky-500/40 hover:border-sky-500",
    glow: "hover:shadow-[0_10px_30px_rgba(14,165,233,0.25)]",
    text: "text-sky-500",
    bg: "bg-sky-500",
  },
};

const offers = [
  {
    brand: "FUJITSU",
    model: "ASY35",
    oldPrice: "1.380",
    newPrice: "900",
    discount: "35%",
    features: [
      "Potencia frigorífica 3.5 kW",
      "Clase energética A++",
      "Inverter",
      "Bajo nivel sonoro",
      "Instalación incluida",
    ],
  },
  {
    brand: "MITSUBISHI",
    model: "MSZ-HR35VF",
    oldPrice: "1.870",
    newPrice: "900",
    discount: "52%",
    features: [
      "Potencia frigorífica 3.5 kW",
      "Clase energética A+++",
      "Tecnología Hyper Inverter",
      "Filtro plasma quad",
      "Instalación incluida",
    ],
  },
  {
    brand: "GREE",
    model: "Pular 12",
    oldPrice: "840",
    newPrice: "700",
    discount: "17%",
    features: [
      "Potencia frigorífica 3.5 kW",
      "Clase energética A++",
      "Inverter",
      "WiFi integrado",
      "Instalación incluida",
    ],
  },
  {
    brand: "DAIKIN",
    model: "Sensira FTXF35C",
    oldPrice: "1.850",
    newPrice: "950",
    discount: "49%",
    features: [
      "Potencia frigorífica 3.5 kW",
      "Clase energética A++",
      "Inverter",
      "Modo silencioso",
      "Instalación incluida",
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

        {/* EKOKAI Featured Offer - Full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="relative p-8 md:p-10 rounded-3xl border-2 border-green-500 bg-gradient-to-br from-green-500/10 via-background to-green-500/5 shadow-[0_0_40px_rgba(34,197,94,0.15)] overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-400/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />

            {/* Badge */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6">
              <span className="inline-flex items-center gap-1.5 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-green-500/30">
                <Flame size={16} />
                OFERTA ESTRELLA
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              {/* Left - Info */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Star className="text-green-500" size={24} fill="currentColor" />
                  <span className="text-green-500 text-sm font-semibold tracking-wider uppercase">
                    Mejor relación calidad-precio
                  </span>
                </div>
                <h3 className="text-green-500 text-4xl md:text-5xl font-black tracking-wider mb-2">
                  EKOKAI
                </h3>
                <p className="text-foreground text-lg font-medium mb-6">
                  Modelo DPA35FGX con WiFi
                </p>

                <div className="space-y-3">
                  {[
                    "Potencia: 2.752 kcal/h frío · 2.924 kcal/h calor",
                    "Clase energética A++ frío / A+++ calor",
                    "WiFi integrado",
                    "Ideal para estancias de hasta 35 m²",
                    "Instalación incluida",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-foreground">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Price */}
              <div className="text-center md:text-right">
                <p className="text-muted-foreground text-lg line-through mb-2">840€</p>
                <div className="relative inline-block">
                  <p
                    className="text-green-500 text-7xl md:text-8xl font-black mb-3"
                    style={{ textShadow: "0 0 30px rgba(34,197,94,0.4)" }}
                  >
                    620€
                  </p>
                </div>
                <p className="text-muted-foreground text-sm mb-4">IVA no incluido · Instalación incluida</p>
                <span className="inline-block bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-2 rounded-full text-lg font-bold shadow-lg shadow-green-500/30 mb-6">
                  -26% AHORRA 220€
                </span>
                <div className="mt-4">
                  <a href="tel:+34602359972" className="block">
                    <Button size="lg" className="w-full md:w-auto gap-2 bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 shadow-lg shadow-green-500/30">
                      <Phone size={20} />
                      ¡Lo quiero!
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other brands grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => {
            const colors = brandColors[offer.brand];
            return (
              <motion.div
                key={offer.brand}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`h-full p-6 rounded-2xl bg-gradient-card border-2 ${colors.border} ${colors.glow} transition-all duration-500 flex flex-col`}>
                  {/* Brand logo */}
                  <div className="h-16 flex items-center justify-center mb-4">
                    <h3 className={`${colors.accent} text-2xl font-bold tracking-wider uppercase`}>
                      {offer.brand}
                    </h3>
                  </div>

                  {/* Model name */}
                  <p className="text-foreground text-sm font-medium text-center mb-4 min-h-[60px] flex items-center justify-center">
                    {offer.model}
                  </p>

                  {/* Features */}
                  <div className={`${colors.accentLight} rounded-lg p-4 mb-4 flex-grow`}>
                    {offer.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-sm text-foreground mb-2">
                        <Check className={`w-4 h-4 ${colors.accent} shrink-0 mt-0.5`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price section */}
                  <div className="text-center">
                    <p className="text-destructive text-lg line-through mb-1">
                      {offer.oldPrice}€
                    </p>
                    <p className={`${colors.accent} text-4xl font-bold mb-2`}>
                      {offer.newPrice}€
                    </p>
                    <span className={`inline-block ${colors.bg} text-white px-4 py-1 rounded-full text-sm font-bold`}>
                      -{offer.discount} OFERTA
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
