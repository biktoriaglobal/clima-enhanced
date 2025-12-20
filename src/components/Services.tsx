import { motion } from "framer-motion";
import { Wrench, Snowflake, RefreshCw, Droplets, Settings, Shield } from "lucide-react";

const services = [
  {
    icon: Snowflake,
    title: "Instalación de Aire Acondicionado",
    description:
      "Instalación profesional de sistemas Split, Multisplit y conductos con las mejores marcas del mercado.",
    color: "primary",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Preventivo",
    description:
      "Servicio de limpieza y mantenimiento anual para garantizar el óptimo funcionamiento de tu equipo.",
    color: "accent",
  },
  {
    icon: RefreshCw,
    title: "Reparación de Averías",
    description:
      "Diagnóstico y reparación rápida de cualquier tipo de avería en sistemas de climatización.",
    color: "primary",
  },
  {
    icon: Droplets,
    title: "Recarga de Gas R32",
    description:
      "Recarga de refrigerante ecológico R32 y R410A con equipos de última generación.",
    color: "accent",
  },
  {
    icon: Settings,
    title: "Sistemas Multisplit",
    description:
      "Instalación de sistemas multi-zona para climatizar varias estancias con una sola unidad exterior.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Garantía de Servicio",
    description:
      "Todos nuestros trabajos incluyen garantía. Tu satisfacción es nuestra prioridad.",
    color: "accent",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Soluciones completas en{" "}
            <span className="text-gradient">climatización</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos un servicio integral para todas tus necesidades de aire
            acondicionado, desde la instalación hasta el mantenimiento.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-card">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${
                    service.color === "primary"
                      ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                      : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                  } transition-all duration-300`}
                >
                  <service.icon size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
