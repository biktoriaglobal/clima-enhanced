import { motion } from "framer-motion";
import { Check, MessageCircle, Star, Flame, Wifi, Snowflake, Sun, Zap } from "lucide-react";
import { Button } from "./ui/button";

const brandThemes: Record<string, {
  gradient: string;
  border: string;
  glow: string;
  text: string;
  iconBg: string;
  checkColor: string;
  badgeBg: string;
  priceShadow: string;
  hoverBorder: string;
  emoji: string;
  tagline: string;
}> = {
  FUJITSU: {
    gradient: "from-orange-950/50 via-card to-amber-950/30",
    border: "border-orange-500/30",
    glow: "shadow-[0_0_0_1px_rgba(249,115,22,0.1)]",
    text: "text-orange-400",
    iconBg: "bg-orange-500/15",
    checkColor: "text-orange-400",
    badgeBg: "bg-gradient-to-r from-orange-500 to-amber-500",
    priceShadow: "drop-shadow-[0_0_20px_rgba(249,115,22,0.5)]",
    hoverBorder: "group-hover:border-orange-500/70",
    emoji: "🇯🇵",
    tagline: "Tecnología japonesa",
  },
  MITSUBISHI: {
    gradient: "from-amber-950/50 via-card to-yellow-950/30",
    border: "border-amber-500/30",
    glow: "shadow-[0_0_0_1px_rgba(245,158,11,0.1)]",
    text: "text-amber-400",
    iconBg: "bg-amber-500/15",
    checkColor: "text-amber-400",
    badgeBg: "bg-gradient-to-r from-amber-500 to-yellow-500",
    priceShadow: "drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]",
    hoverBorder: "group-hover:border-amber-500/70",
    emoji: "⚡",
    tagline: "Hyper Inverter",
  },
  GREE: {
    gradient: "from-yellow-950/50 via-card to-orange-950/30",
    border: "border-yellow-500/30",
    glow: "shadow-[0_0_0_1px_rgba(234,179,8,0.1)]",
    text: "text-yellow-400",
    iconBg: "bg-yellow-500/15",
    checkColor: "text-yellow-400",
    badgeBg: "bg-gradient-to-r from-yellow-500 to-orange-400",
    priceShadow: "drop-shadow-[0_0_20px_rgba(234,179,8,0.5)]",
    hoverBorder: "group-hover:border-yellow-500/70",
    emoji: "📶",
    tagline: "WiFi integrado",
  },
  DAIKIN: {
    gradient: "from-amber-950/50 via-card to-orange-950/30",
    border: "border-amber-400/30",
    glow: "shadow-[0_0_0_1px_rgba(251,191,36,0.1)]",
    text: "text-amber-300",
    iconBg: "bg-amber-400/15",
    checkColor: "text-amber-300",
    badgeBg: "bg-gradient-to-r from-amber-400 to-orange-500",
    priceShadow: "drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]",
    hoverBorder: "group-hover:border-amber-400/70",
    emoji: "👑",
    tagline: "Calidad Premium",
  },
};

const offers = [
  {
    brand: "FUJITSU",
    model: "ASY35",
    oldPrice: "1.380",
    newPrice: "950",
    discount: "31%",
    highlight: "Silencioso",
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
    newPrice: "950",
    discount: "49%",
    highlight: "Top ventas",
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
    newPrice: "750",
    discount: "11%",
    highlight: "WiFi",
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
    newPrice: "1.000",
    discount: "46%",
    highlight: "Premium",
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

        {/* ═══════════════ EKOKAI HERO OFFER ═══════════════ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          className="mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Animated border glow */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-green-500 via-emerald-400 to-green-600 rounded-3xl animate-pulse-slow" />
            
            <div className="relative m-[2px] rounded-3xl bg-gradient-to-br from-green-950/60 via-background to-emerald-950/40 p-8 md:p-12 overflow-hidden">
              {/* Decorative orbs */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/15 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-400/10 rounded-full blur-[80px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-[120px]" />

              {/* Floating badge */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute top-4 right-4 md:top-8 md:right-8 z-20"
              >
                <div className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-[0_4px_20px_rgba(220,38,38,0.4)]">
                  <Flame size={18} />
                  AGOTADO
                </div>
              </motion.div>

              <div className="grid md:grid-cols-5 gap-8 items-center relative z-10">
                {/* Left - Brand & Info (3 cols) */}
                <div className="md:col-span-3">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-green-400" size={16} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-green-400/80 text-xs font-medium">Mejor relación calidad-precio</span>
                  </div>

                  <h3 className="text-5xl md:text-6xl font-black tracking-wider text-green-400 mb-1" style={{ textShadow: "0 0 40px rgba(34,197,94,0.3)" }}>
                    EKOKAI
                  </h3>
                  <p className="text-foreground/80 text-lg font-medium mb-8">
                    Modelo DPA35FGX · WiFi integrado
                  </p>

                  {/* Feature pills */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { icon: Snowflake, text: "2.752 kcal/h frío", sub: "A++" },
                      { icon: Sun, text: "2.924 kcal/h calor", sub: "A+++" },
                      { icon: Wifi, text: "WiFi integrado", sub: "Control remoto" },
                      { icon: Zap, text: "Hasta 35 m²", sub: "Alta eficiencia" },
                    ].map((feat) => (
                      <motion.div
                        key={feat.text}
                        whileHover={{ scale: 1.03, y: -2 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-green-500/10 border border-green-500/20"
                      >
                        <div className="w-9 h-9 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                          <feat.icon className="text-green-400" size={18} />
                        </div>
                        <div>
                          <p className="text-foreground text-sm font-semibold leading-tight">{feat.text}</p>
                          <p className="text-green-400/70 text-xs">{feat.sub}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-green-400/60 text-sm">
                    <Check size={16} />
                    <span>Instalación profesional incluida en el precio</span>
                  </div>
                </div>

                {/* Right - Price CTA (2 cols) */}
                <div className="md:col-span-2 text-center">
                  <p className="text-muted-foreground text-xl line-through mb-1">840€</p>
                  
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                  >
                    <p
                      className="text-green-400 text-8xl md:text-9xl font-black leading-none mb-2"
                      style={{ textShadow: "0 0 60px rgba(34,197,94,0.4), 0 0 120px rgba(34,197,94,0.15)" }}
                    >
                      620<span className="text-5xl md:text-6xl">€</span>
                    </p>
                  </motion.div>

                  <p className="text-muted-foreground text-sm mb-3">IVA no incluido</p>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-block mb-6"
                  >
                    <span className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full text-base font-bold shadow-lg uppercase tracking-wide">
                      Sin stock actualmente
                    </span>
                  </motion.div>

                  <Button
                    size="lg"
                    disabled
                    className="w-full gap-2 bg-muted text-muted-foreground text-lg px-8 py-7 rounded-xl font-bold cursor-not-allowed opacity-70"
                  >
                    <MessageCircle size={22} />
                    No disponible
                  </Button>
                  <p className="text-muted-foreground text-xs mt-3">Consulta otras marcas disponibles más abajo</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════ OTHER BRANDS ═══════════════ */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => {
            const t = brandThemes[offer.brand];
            return (
              <motion.div
                key={offer.brand}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className={`relative h-full rounded-2xl bg-gradient-to-b ${t.gradient} border ${t.border} ${t.hoverBorder} ${t.glow} group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden`}>
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${t.badgeBg} opacity-60 group-hover:opacity-100 transition-opacity`} />

                  <div className="p-6 flex flex-col h-full">
                    {/* Brand header with emoji */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{t.emoji}</span>
                        <div>
                          <h3 className={`${t.text} text-2xl font-black tracking-wider`}>
                            {offer.brand}
                          </h3>
                          <p className="text-muted-foreground text-[11px] mt-0.5">{t.tagline}</p>
                        </div>
                      </div>
                      <span className={`${t.badgeBg} text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg`}>
                        {offer.highlight}
                      </span>
                    </div>
                    <p className="text-muted-foreground/60 text-xs mb-3">{offer.model}</p>

                    {/* Discount strip */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`${t.iconBg} rounded-xl p-3 mb-4 text-center border border-transparent group-hover:border-current/10 transition-all`}
                    >
                      <span className="text-muted-foreground text-sm line-through">{offer.oldPrice}€</span>
                      <p className={`${t.text} text-5xl font-black my-1 ${t.priceShadow}`}>
                        {offer.newPrice}<span className="text-2xl">€</span>
                      </p>
                      <span className={`inline-block ${t.badgeBg} text-white px-3 py-0.5 rounded-full text-xs font-bold`}>
                        -{offer.discount}
                      </span>
                    </motion.div>

                    {/* Features */}
                    <div className="flex-grow space-y-2.5 mb-5">
                      {offer.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5">
                          <div className={`w-4 h-4 rounded-full ${t.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                            <Check className={`w-2.5 h-2.5 ${t.checkColor}`} />
                          </div>
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a href={`https://api.whatsapp.com/send/?phone=34602359972&text=%C2%A1Hola!%20Me%20interesa%20el%20${encodeURIComponent(offer.brand + ' ' + offer.model)}&type=phone_number&app_absent=0`} target="_blank" rel="noopener noreferrer" className="block">
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Button variant="outline" size="lg" className={`w-full gap-2 border-current/20 hover:${t.badgeBg} hover:text-white transition-all duration-300 ${t.text}`}>
                          <MessageCircle size={16} />
                          Pedir presupuesto
                        </Button>
                      </motion.div>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ═══════════════ SERVICES ═══════════════ */}
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
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Desde </span>
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
            <a href="https://api.whatsapp.com/send/?phone=34602359972&text=%C2%A1Hola!%20Me%20interesa%20la%20limpieza%20anual&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="outline" size="lg" className="w-full gap-2">
                <MessageCircle size={18} />
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
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Desde </span>
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
            <a href="https://api.whatsapp.com/send/?phone=34602359972&text=%C2%A1Hola!%20Me%20interesa%20la%20instalaci%C3%B3n%20b%C3%A1sica&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="hero" size="lg" className="w-full gap-2">
                <MessageCircle size={18} />
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
