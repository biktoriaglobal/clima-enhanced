import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PoliticaPrivacidad = () => {
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
            Política de Privacidad
          </h1>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                1. Responsable del tratamiento
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Identidad:</strong> Max Efficiency SL
                </li>
                <li>
                  <strong className="text-foreground">Nombre comercial:</strong> CLIMATIC
                </li>
                <li>
                  <strong className="text-foreground">Dirección:</strong> Valencia, España
                </li>
                <li>
                  <strong className="text-foreground">Teléfono:</strong> +34 603 14 00 26
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                2. Finalidad del tratamiento de datos
              </h2>
              <p>
                En Max Efficiency SL tratamos la información que nos facilitan
                las personas interesadas con los siguientes fines:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Gestionar las solicitudes de información y presupuestos</li>
                <li>Prestar los servicios contratados</li>
                <li>Enviar comunicaciones comerciales sobre nuestros servicios (solo con consentimiento previo)</li>
                <li>Gestionar la relación comercial con nuestros clientes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                3. Legitimación
              </h2>
              <p>
                La base legal para el tratamiento de sus datos es:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>El consentimiento del interesado</li>
                <li>La ejecución de un contrato</li>
                <li>El cumplimiento de obligaciones legales</li>
                <li>El interés legítimo del responsable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. Conservación de datos
              </h2>
              <p>
                Los datos personales proporcionados se conservarán mientras se
                mantenga la relación comercial o durante los años necesarios para
                cumplir con las obligaciones legales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Destinatarios
              </h2>
              <p>
                Los datos no se comunicarán a terceros salvo obligación legal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                6. Derechos del interesado
              </h2>
              <p>
                Cualquier persona tiene derecho a obtener confirmación sobre si en
                Max Efficiency SL estamos tratando datos personales que les
                conciernan. Las personas interesadas tienen derecho a:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Acceder a sus datos personales</li>
                <li>Solicitar la rectificación de los datos inexactos</li>
                <li>Solicitar su supresión</li>
                <li>Solicitar la limitación del tratamiento</li>
                <li>Oponerse al tratamiento</li>
                <li>Solicitar la portabilidad de los datos</li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, puede contactar con nosotros a través
                del teléfono +34 603 14 00 26.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                7. Seguridad de los datos
              </h2>
              <p>
                Max Efficiency SL ha adoptado las medidas de seguridad técnicas y
                organizativas necesarias para garantizar la seguridad de los datos
                de carácter personal y evitar su alteración, pérdida, tratamiento
                o acceso no autorizado.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;
