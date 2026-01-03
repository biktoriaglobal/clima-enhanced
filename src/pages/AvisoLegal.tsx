import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AvisoLegal = () => {
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
            Aviso Legal
          </h1>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                1. Datos identificativos
              </h2>
              <p>
                En cumplimiento con el deber de información recogido en artículo
                10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad
                de la Información y del Comercio Electrónico, a continuación se
                reflejan los siguientes datos:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong className="text-foreground">Denominación social:</strong> Max Efficiency SL
                </li>
                <li>
                  <strong className="text-foreground">Nombre comercial:</strong> CLIMATIC
                </li>
                <li>
                  <strong className="text-foreground">Domicilio:</strong> Valencia, España
                </li>
                <li>
                  <strong className="text-foreground">Teléfono:</strong> +34 603 14 00 26
                </li>
                <li>
                  <strong className="text-foreground">Actividad:</strong> Instalación y mantenimiento de sistemas de aire acondicionado
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                2. Objeto
              </h2>
              <p>
                El presente aviso legal regula el uso del sitio web CLIMATIC, del
                que es titular Max Efficiency SL. La navegación por el sitio web
                atribuye la condición de usuario del mismo e implica la aceptación
                plena y sin reservas de todas y cada una de las disposiciones
                incluidas en este Aviso Legal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                3. Propiedad intelectual e industrial
              </h2>
              <p>
                El sitio web, incluyendo a título enunciativo pero no limitativo
                su programación, edición, compilación y demás elementos necesarios
                para su funcionamiento, los diseños, logotipos, texto y/o
                gráficos, son propiedad de Max Efficiency SL o, en su caso,
                dispone de licencia o autorización expresa por parte de los
                autores.
              </p>
              <p className="mt-4">
                Todos los contenidos del sitio web se encuentran debidamente
                protegidos por la normativa de propiedad intelectual e industrial,
                así como inscritos en los registros públicos correspondientes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. Exención de responsabilidades
              </h2>
              <p>
                Max Efficiency SL se exime de cualquier tipo de responsabilidad
                derivada de la información publicada en su sitio web siempre que
                esta información haya sido manipulada o introducida por un tercero
                ajeno al mismo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Ley aplicable y jurisdicción
              </h2>
              <p>
                Para la resolución de todas las controversias o cuestiones
                relacionadas con el presente sitio web o de las actividades en él
                desarrolladas, será de aplicación la legislación española, a la
                que se someten expresamente las partes, siendo competentes para la
                resolución de todos los conflictos derivados o relacionados con su
                uso los Juzgados y Tribunales de Valencia.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AvisoLegal;
