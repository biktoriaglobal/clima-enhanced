import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card border border-border rounded-xl p-6 shadow-2xl">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    Utilizamos cookies propias y de terceros para mejorar nuestros
                    servicios. Si continúa navegando, consideramos que acepta su
                    uso. Puede obtener más información en nuestra{" "}
                    <Link
                      to="/politica-cookies"
                      className="text-primary hover:underline"
                    >
                      Política de Cookies
                    </Link>
                    .
                  </p>
                </div>
                <div className="flex gap-3 shrink-0 w-full md:w-auto">
                  <Button
                    variant="outline"
                    onClick={rejectCookies}
                    className="flex-1 md:flex-none"
                  >
                    Rechazar
                  </Button>
                  <Button
                    onClick={acceptCookies}
                    className="flex-1 md:flex-none bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Aceptar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
