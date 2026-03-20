import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-card border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-gradient">CLIMA</span>
                <span className="text-accent">TIC</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Expertos en instalación de aire acondicionado en Valencia y Costa
              Blanca. Tu confort es nuestra prioridad.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: "Servicios", href: "#servicios" },
                { name: "Marcas", href: "#marcas" },
                { name: "Por qué elegirnos", href: "#por-que" },
                { name: "Zonas de servicio", href: "#zonas" },
                { name: "Aire acondicionado por ciudades", href: "/instalacion-aire-acondicionado", isRoute: true },
                { name: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+34603140026"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone size={16} />
                  +34 603 14 00 26
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                Valencia, Costa Blanca, Marina Alta
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm text-center md:text-left">
            <p>© {currentYear} CLIMATIC - Max Efficiency SL</p>
            <p className="text-xs mt-1">Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/politica-privacidad" className="hover:text-primary transition-colors">
              Política de privacidad
            </Link>
            <Link to="/politica-cookies" className="hover:text-primary transition-colors">
              Política de cookies
            </Link>
            <Link to="/aviso-legal" className="hover:text-primary transition-colors">
              Aviso legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
