import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import pego from "@/assets/installations/pego.jpeg";
import exterior1 from "@/assets/installations/exterior1.jpeg";
import benissa from "@/assets/installations/benissa.jpeg";
import javea1 from "@/assets/installations/javea1.jpeg";
import interior1 from "@/assets/installations/interior1.jpg";
import altea from "@/assets/installations/altea.jpeg";
import javea2 from "@/assets/installations/javea2.jpeg";
import mitsubishi1 from "@/assets/installations/mitsubishi1.jpeg";
import mitsubishi2 from "@/assets/installations/mitsubishi2.jpeg";
import mitsubishi3 from "@/assets/installations/mitsubishi3.jpg";

const installations = [
  { src: pego, location: "Pego", type: "Interior" },
  { src: exterior1, location: "Marina Alta", type: "Exterior" },
  { src: benissa, location: "Benissa", type: "Exterior" },
  { src: javea1, location: "Jávea", type: "Exterior" },
  { src: interior1, location: "Denia", type: "Interior" },
  { src: altea, location: "Altea", type: "Exterior" },
  { src: javea2, location: "Jávea", type: "Interior" },
  { src: mitsubishi1, location: "Valencia", type: "Exterior" },
  { src: mitsubishi2, location: "Calpe", type: "Interior" },
  { src: mitsubishi3, location: "Moraira", type: "Exterior" },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + installations.length) % installations.length);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % installations.length);
    }
  };

  return (
    <section id="galeria" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Nuestros trabajos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Galería de <span className="text-gradient">instalaciones</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Más de 3000 instalaciones realizadas en Valencia y la Costa Blanca. 
            Aquí puedes ver algunos de nuestros trabajos más recientes.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {installations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer rounded-xl overflow-hidden aspect-square"
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.src}
                alt={`Instalación en ${item.location}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-white font-semibold text-sm">{item.location}</p>
                  <p className="text-white/70 text-xs">{item.type}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-50"
              >
                <X size={32} />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                className="absolute left-4 text-white/80 hover:text-white p-2 z-50"
              >
                <ChevronLeft size={40} />
              </button>

              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={installations[selectedIndex].src}
                alt={`Instalación en ${installations[selectedIndex].location}`}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 text-white/80 hover:text-white p-2 z-50"
              >
                <ChevronRight size={40} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
                <p className="font-semibold">{installations[selectedIndex].location}</p>
                <p className="text-white/70 text-sm">{installations[selectedIndex].type}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
