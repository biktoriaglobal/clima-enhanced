import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const zones = [
  {
    region: "Valencia",
    cities: ["Valencia", "Cullera", "Gandía", "Oliva"],
  },
  {
    region: "Costa Blanca",
    cities: ["Dénia", "Jávea", "Calpe", "Altea", "Benidorm"],
  },
  {
    region: "Marina Alta",
    cities: ["Moraira", "Benissa", "Teulada", "Pedreguer", "Gata de Gorgos"],
  },
  {
    region: "Interior",
    cities: ["Ondara", "Xàbia", "Llíber", "Alcalalí", "Orba"],
  },
];

const Zones = () => {
  return (
    <section id="zonas" className="py-24 bg-card/30">
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
            Área de cobertura
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Dónde <span className="text-gradient">trabajamos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos nuestros servicios en toda la provincia de Valencia, Costa
            Blanca y zonas limítrofes
          </p>
        </motion.div>

        {/* Zones grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {zones.map((zone, index) => (
            <motion.div
              key={zone.region}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gradient">
                    {zone.region}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {zone.cities.map((city) => (
                    <li
                      key={city}
                      className="text-muted-foreground text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground mt-12"
        >
          ¿No encuentras tu localidad?{" "}
          <a
            href="tel:+34602359972"
            className="text-primary hover:underline font-medium"
          >
            Contáctanos
          </a>{" "}
          y te confirmaremos la cobertura
        </motion.p>
      </div>
    </section>
  );
};

export default Zones;
