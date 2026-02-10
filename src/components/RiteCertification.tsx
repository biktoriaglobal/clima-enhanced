import { motion } from "framer-motion";
import { ShieldCheck, Award, FileCheck, BadgeCheck } from "lucide-react";

const certifications = [
  {
    icon: ShieldCheck,
    title: "Carnet R.I.T.E.",
    description:
      "Reglamento de Instalaciones Térmicas en los Edificios. Certificación obligatoria para instaladores profesionales.",
  },
  {
    icon: Award,
    title: "Instaladores autorizados",
    description:
      "Empresa registrada y autorizada por la Consellería para realizar instalaciones de climatización.",
  },
  {
    icon: FileCheck,
    title: "Certificados oficiales",
    description:
      "Emitimos certificado de instalación oficial para cada trabajo realizado, con garantía total.",
  },
  {
    icon: BadgeCheck,
    title: "Cumplimiento normativo",
    description:
      "Todas nuestras instalaciones cumplen con la normativa vigente y los estándares de calidad exigidos.",
  },
];

const RiteCertification = () => {
  return (
    <section id="certificacion" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Profesionalidad garantizada
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Instaladores <span className="text-gradient">autorizados</span> con carnet R.I.T.E.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Somos instaladores oficialmente autorizados con la certificación R.I.T.E.
            (Reglamento de Instalaciones Térmicas en los Edificios), lo que garantiza
            que tu instalación cumple con toda la normativa vigente.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group p-6 rounded-2xl glass border border-border/50 hover:border-primary/40 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <cert.icon size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-3">{cert.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlight banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-card border border-primary/50 shadow-glow text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShieldCheck className="text-primary" size={32} />
            <h3 className="text-2xl font-bold">Tu tranquilidad, nuestra prioridad</h3>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Al ser instaladores con carnet R.I.T.E., todas nuestras instalaciones incluyen
            certificado oficial, lo que te permite registrar tu equipo correctamente y acceder
            a la garantía completa del fabricante.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RiteCertification;
