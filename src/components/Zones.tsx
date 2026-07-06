import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const zones = [
  {
    region: "Valencia y alrededores",
    cities: [
      "Valencia", "Torrent", "Paterna", "Mislata", "Burjassot", "Xirivella",
      "Quart de Poblet", "Alaquàs", "Manises", "Aldaia", "Picanya", "Paiporta",
      "Moncada", "Godella", "Rocafort", "Tavernes Blanques", "Foios", "Meliana",
      "Alboraia", "Massamagrell", "Museros", "Puçol", "Albuixech", "Alfara del Patriarca",
      "Rafelbunyol", "Albalat dels Sorells", "Massalfassar", "Bétera", "La Pobla de Vallbona",
      "Llíria", "Benaguasil", "Benisanó", "Chiva", "Cheste", "Buñol"
    ],
  },
  {
    region: "L'Horta Sud y Ribera",
    cities: [
      "Alfafar", "Massanassa", "Silla", "Almussafes", "Benifaió", "Alginet",
      "Albal", "Benetússer", "Alcàsser", "Sollana", "Sueca", "Cullera",
      "Alzira", "Algemesí", "Carcaixent", "Alberic", "Alcúdia", "Turís",
      "Montserrat", "Llombai", "Albalat de la Ribera", "Favara",
      "Alcàntera de Xúquer", "Montroy", "Villanueva de Castellón"
    ],
  },
  {
    region: "La Safor y La Costera",
    cities: [
      "Gandía", "Oliva", "Tavernes de la Valldigna", "Xeraco", "Xeresa",
      "Real de Gandía", "Benifairó de la Valldigna", "Rafelcofer",
      "Xàtiva", "Ontinyent", "Canals", "Requena", "Sagunto",
      "Algimia de Alfara", "Quart de les Valls", "Puig", "Benavites"
    ],
  },
  {
    region: "Marina Alta y Costa Blanca",
    cities: [
      "Dénia", "Jávea", "Benissa", "Ondara", "Moraira", "Cap Martí",
      "Teulada", "Pego", "Altea"
    ],
  },
];

const allCities = zones.flatMap(z => z.cities);

const Zones = () => {
  return (
    <section id="zonas" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
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
            Instaladores de aire acondicionado en Valencia, Costa Blanca y Marina Alta.
            Más de {allCities.length} localidades cubiertas.
          </p>
        </motion.div>

        {/* Zones grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {zones.map((zone, index) => (
            <motion.div
              key={zone.region}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
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
                <div className="flex flex-wrap gap-2">
                  {zone.cities.map((city) => (
                    <span
                      key={city}
                      className="text-muted-foreground text-xs bg-muted/50 px-2.5 py-1 rounded-full border border-border/30"
                    >
                      {city}
                    </span>
                  ))}
                </div>
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

      {/* Hidden SEO text */}
      <div className="sr-only">
        <h3>Instalación de aire acondicionado en {allCities.join(", ")}</h3>
        <p>
          CLIMATIC ofrece servicios de instalación, mantenimiento y reparación de aires acondicionados
          en {allCities.join(", ")}. Somos instaladores autorizados con carnet RITE en toda la
          provincia de Valencia, Costa Blanca y Marina Alta.
        </p>
      </div>
    </section>
  );
};

export default Zones;
