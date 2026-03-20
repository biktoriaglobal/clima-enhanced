import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuáles son los tipos de aire acondicionado que instaláis?",
    answer:
      "Instalamos una amplia variedad de aires acondicionados: Split, Multisplit y Conductos. Cada tipo se adapta a diferentes necesidades y espacios.",
  },
  {
    question: "¿Cuánto cuesta instalar un aire acondicionado?",
    answer:
      "No hay un precio exacto ya que el costo varía según la marca y modelo del equipo, el tipo de instalación y el tamaño del espacio a climatizar. Puedes ver nuestras promociones de aires acondicionados con instalación incluida, pero si necesitas más de tres metros de tubería hay que concretar un presupuesto personalizado.",
  },
  {
    question: "¿Ofrecéis mantenimiento y recargas de gas R32 y 410A?",
    answer:
      "Sí, ofrecemos servicios completos de mantenimiento y recargas de gas para aires acondicionados (R32 y 410A). Nuestro servicio incluye la limpieza de los radiadores y filtros con máquina de vapor, lo que previene problemas y mantiene un rendimiento óptimo durante todo el año.",
  },
  {
    question: "¿Cuáles son los beneficios de un sistema por conductos frente a un Split?",
    answer:
      "Un sistema por conductos ofrece distribución uniforme del aire en toda la casa, mayor eficiencia energética, control centralizado de la temperatura y reducción del ruido en comparación con los splits.",
  },
  {
    question: "¿Qué medidas de eficiencia energética debo considerar?",
    answer:
      "Es importante fijarse en la clasificación energética del equipo (etiqueta SEER). También la tecnología inverter, que permite un funcionamiento más eficiente y menor consumo de energía.",
  },
  {
    question: "¿Cuánto dura la vida útil de un aire acondicionado?",
    answer:
      "En general, un aire acondicionado tiene una vida útil de 10 a 15 años aproximadamente. Un mantenimiento regular y los cuidados adecuados pueden prolongar significativamente su vida útil.",
  },
  {
    question: "¿Cómo sé qué tamaño de aire acondicionado necesito?",
    answer:
      "El tamaño depende de las dimensiones de la habitación o espacio a climatizar. Como profesionales, podemos asesorarte sobre el equipo adecuado para tu espacio sin compromiso.",
  },
  {
    question: "¿Cuánto tiempo tarda la instalación?",
    answer:
      "El tiempo depende del tipo de equipo y la complejidad de la instalación. Por lo general, una instalación puede tardar desde una hora hasta un día completo.",
  },
  {
    question: "¿Ofrecéis garantía en las instalaciones?",
    answer:
      "Sí, ofrecemos garantía en todas nuestras instalaciones para asegurar la satisfacción de nuestros clientes y la calidad de nuestro trabajo.",
  },
  {
    question: "¿Dónde realizáis instalaciones?",
    answer:
      "Realizamos instalaciones en Valencia, Gandía, Torrent, Sagunto, Paterna, Alzira, Mislata, Burjassot, Ontinyent, Oliva, Cullera, Sueca, Xàtiva, Dénia, Jávea, Benissa, Ondara, Moraira, Teulada, Pego, Altea y muchas más localidades de la provincia de Valencia y la Marina Alta.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Resolvemos tus dudas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Preguntas <span className="text-gradient">frecuentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Todo lo que necesitas saber sobre nuestros servicios de aire acondicionado
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-xl px-6 bg-card/50 hover:border-primary/30 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-medium hover:no-underline gap-3">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
