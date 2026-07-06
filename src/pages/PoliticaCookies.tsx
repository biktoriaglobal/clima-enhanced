import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PoliticaCookies = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Volver al inicio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert max-w-none"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-8">
            Política de Cookies
          </h1>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                1. ¿Qué son las cookies?
              </h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su
                dispositivo cuando visita un sitio web. Se utilizan ampliamente
                para hacer que los sitios web funcionen de manera más eficiente y
                para proporcionar información a los propietarios del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                2. ¿Qué tipos de cookies utilizamos?
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    Cookies técnicas (necesarias)
                  </h3>
                  <p>
                    Son aquellas que permiten al usuario la navegación a través
                    del sitio web y la utilización de las diferentes opciones o
                    servicios que en ella existan.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    Cookies de preferencias
                  </h3>
                  <p>
                    Permiten recordar información para que el usuario acceda al
                    servicio con determinadas características que pueden
                    diferenciar su experiencia de la de otros usuarios.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                3. ¿Cómo gestionar las cookies?
              </h2>
              <p>
                Puede permitir, bloquear o eliminar las cookies instaladas en su
                equipo mediante la configuración de las opciones del navegador
                instalado en su ordenador.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong className="text-foreground">Chrome:</strong>{" "}
                  Configuración → Privacidad y seguridad → Cookies
                </li>
                <li>
                  <strong className="text-foreground">Firefox:</strong>{" "}
                  Opciones → Privacidad y seguridad → Cookies
                </li>
                <li>
                  <strong className="text-foreground">Safari:</strong>{" "}
                  Preferencias → Privacidad → Cookies
                </li>
                <li>
                  <strong className="text-foreground">Edge:</strong>{" "}
                  Configuración → Cookies y permisos del sitio
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. Actualización de la política de cookies
              </h2>
              <p>
                CLIMATIC puede modificar esta Política de Cookies en
                función de exigencias legislativas, reglamentarias, o con la
                finalidad de adaptar dicha política a las instrucciones dictadas
                por la Agencia Española de Protección de Datos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Contacto
              </h2>
              <p>
                Si tiene cualquier duda sobre esta Política de Cookies, puede
                contactar con nosotros a través del teléfono +34 602 35 99 72.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PoliticaCookies;
