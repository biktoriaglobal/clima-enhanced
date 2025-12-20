import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

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
                <span className="text-accent">TRIX</span>
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
                  href="tel:+34602359972"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone size={16} />
                  +34 602 35 99 72
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@climatrix.es"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail size={16} />
                  info@climatrix.es
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
          <p className="text-muted-foreground text-sm">
            © {currentYear} Climatrix. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Aviso legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
