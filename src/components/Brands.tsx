import { motion } from "framer-motion";

const brands = [
  { name: "Daikin", logo: "DAIKIN" },
  { name: "Mitsubishi", logo: "MITSUBISHI" },
  { name: "Fujitsu", logo: "FUJITSU" },
  { name: "Panasonic", logo: "PANASONIC" },
  { name: "LG", logo: "LG" },
  { name: "Gree", logo: "GREE" },
];

const Brands = () => {
  return (
    <section id="marcas" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Marcas de confianza
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4">
            Trabajamos con las <span className="text-gradient">mejores marcas</span>
          </h2>
        </motion.div>

        {/* Brands grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group"
            >
              <div className="flex items-center justify-center h-24 rounded-xl glass hover:border-primary/40 transition-all duration-300">
                <span className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300 tracking-wider">
                  {brand.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground mt-10 text-sm"
        >
          Seleccionamos las mejores marcas para garantizar calidad, durabilidad y
          eficiencia energética
        </motion.p>
      </div>
    </section>
  );
};

export default Brands;
