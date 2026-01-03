import { motion } from "framer-motion";
import { Award, Clock, ThumbsUp, Zap, Users, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Profesionales certificados",
    description: "Técnicos cualificados con años de experiencia en el sector",
  },
  {
    icon: Clock,
    title: "Respuesta rápida",
    description: "Atención inmediata y presupuestos sin compromiso",
  },
  {
    icon: ThumbsUp,
    title: "Garantía total",
    description: "Todos nuestros trabajos incluyen garantía de satisfacción",
  },
  {
    icon: Zap,
    title: "Eficiencia energética",
    description: "Instalaciones optimizadas para el máximo ahorro",
  },
  {
    icon: Users,
    title: "Trato directo",
    description: "Comunicación directa con el instalador sin intermediarios",
  },
  {
    icon: HeartHandshake,
    title: "Compromiso",
    description: "Tu confort y satisfacción son nuestra máxima prioridad",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="por-que" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Por qué elegirnos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              La mejor opción para tu{" "}
              <span className="text-gradient">climatización</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              En CLIMATIC nos comprometemos a ofrecer un servicio de calidad
              superior. Somos expertos en instalación de aire acondicionado con
              5 años de experiencia en Valencia y la Costa Blanca.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-gradient mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Años experiencia</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-gradient-accent mb-2">3000+</div>
                <div className="text-sm text-muted-foreground">Instalaciones</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-gradient mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Features grid */}
          <div className="grid grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group p-5 rounded-xl glass hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <reason.icon size={20} />
                </div>
                <h3 className="font-semibold mb-2 text-sm">{reason.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
