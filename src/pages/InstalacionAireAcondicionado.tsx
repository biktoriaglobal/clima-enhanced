import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Shield, Phone, Check, ThermometerSun, Wrench, Star } from "lucide-react";
import { motion } from "framer-motion";

const locationData: Record<string, { region: string; nearby: string[] }> = {
  "valencia": { region: "Valencia", nearby: ["Torrent", "Paterna", "Mislata", "Burjassot", "Xirivella"] },
  "torrent": { region: "Valencia", nearby: ["Valencia", "Picanya", "Paiporta", "Alaquàs", "Aldaia"] },
  "gandia": { region: "La Safor", nearby: ["Oliva", "Xeraco", "Tavernes de la Valldigna", "Real de Gandía"] },
  "paterna": { region: "Valencia", nearby: ["Valencia", "Burjassot", "Mislata", "Bétera", "Godella"] },
  "sagunto": { region: "Valencia", nearby: ["Puçol", "Puig", "Quart de les Valls", "Algimia de Alfara"] },
  "alzira": { region: "La Ribera", nearby: ["Algemesí", "Carcaixent", "Alberic", "Sueca", "Cullera"] },
  "denia": { region: "Marina Alta", nearby: ["Jávea", "Ondara", "Pego", "Dénia"] },
  "javea": { region: "Marina Alta", nearby: ["Dénia", "Teulada", "Moraira", "Benissa"] },
  "xativa": { region: "La Costera", nearby: ["Ontinyent", "Canals", "Alzira", "Alberic"] },
  "ontinyent": { region: "La Costera", nearby: ["Xàtiva", "Canals", "Bocairent", "Agullent"] },
  "cullera": { region: "La Ribera", nearby: ["Sueca", "Sollana", "Favara", "Alzira"] },
  "oliva": { region: "La Safor", nearby: ["Gandía", "Pego", "Dénia", "Xeraco"] },
  "sueca": { region: "La Ribera", nearby: ["Cullera", "Sollana", "Alzira", "Algemesí"] },
  "mislata": { region: "Valencia", nearby: ["Valencia", "Xirivella", "Quart de Poblet", "Manises"] },
  "burjassot": { region: "Valencia", nearby: ["Valencia", "Godella", "Paterna", "Moncada"] },
  "manises": { region: "Valencia", nearby: ["Quart de Poblet", "Alaquàs", "Aldaia", "Xirivella"] },
  "alboraia": { region: "Valencia", nearby: ["Valencia", "Tavernes Blanques", "Meliana", "Almàssera"] },
  "aldaia": { region: "Valencia", nearby: ["Alaquàs", "Xirivella", "Quart de Poblet", "Torrent"] },
  "silla": { region: "L'Horta Sud", nearby: ["Almussafes", "Benifaió", "Alcàsser", "Albal"] },
  "paiporta": { region: "Valencia", nearby: ["Picanya", "Torrent", "Valencia", "Benetússer"] },
  "moncada": { region: "Valencia", nearby: ["Alfara del Patriarca", "Godella", "Bétera", "Rocafort"] },
  "llíria": { region: "Camp de Túria", nearby: ["La Pobla de Vallbona", "Benaguasil", "Benisanó"] },
  "benissa": { region: "Marina Alta", nearby: ["Teulada", "Moraira", "Altea", "Calpe"] },
  "ondara": { region: "Marina Alta", nearby: ["Dénia", "Pego", "Pedreguer", "Vergel"] },
  "moraira": { region: "Marina Alta", nearby: ["Teulada", "Benissa", "Jávea", "Calpe"] },
  "teulada": { region: "Marina Alta", nearby: ["Moraira", "Benissa", "Jávea", "Ondara"] },
  "altea": { region: "Marina Baixa", nearby: ["Benidorm", "Calpe", "Alfaz del Pi", "La Nucia"] },
  "pego": { region: "Marina Alta", nearby: ["Oliva", "Dénia", "Ondara", "Vergel"] },
  "requena": { region: "Requena-Utiel", nearby: ["Buñol", "Chiva", "Utiel"] },
  "algemesi": { region: "La Ribera", nearby: ["Alzira", "Sueca", "Carcaixent", "Alginet"] },
  "carcaixent": { region: "La Ribera", nearby: ["Alzira", "Algemesí", "Xàtiva"] },
  "picanya": { region: "Valencia", nearby: ["Paiporta", "Torrent", "Valencia"] },
  "alfafar": { region: "L'Horta Sud", nearby: ["Massanassa", "Benetússer", "Sedaví"] },
  "quart-de-poblet": { region: "Valencia", nearby: ["Manises", "Mislata", "Xirivella", "Alaquàs"] },
  "alaquas": { region: "Valencia", nearby: ["Quart de Poblet", "Aldaia", "Xirivella", "Torrent"] },
  "betera": { region: "Camp de Túria", nearby: ["La Pobla de Vallbona", "Moncada", "Godella"] },
  "godella": { region: "Valencia", nearby: ["Rocafort", "Burjassot", "Moncada", "Bétera"] },
  "chiva": { region: "La Hoya de Buñol", nearby: ["Cheste", "Buñol", "Godelleta"] },
  "bunol": { region: "La Hoya de Buñol", nearby: ["Chiva", "Cheste", "Requena"] },
};

// All locations for the index page
const allLocations = [
  "Valencia", "Torrent", "Gandía", "Paterna", "Sagunto", "Alzira", "Dénia", "Jávea",
  "Xàtiva", "Ontinyent", "Cullera", "Oliva", "Sueca", "Mislata", "Burjassot",
  "Manises", "Alboraia", "Aldaia", "Silla", "Paiporta", "Moncada", "Llíria",
  "Benissa", "Ondara", "Moraira", "Teulada", "Altea", "Pego", "Requena",
  "Algemesí", "Carcaixent", "Picanya", "Alfafar", "Quart de Poblet", "Alaquàs",
  "Bétera", "Godella", "Chiva", "Buñol"
];

function toSlug(name: string): string {
  return name.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function fromSlug(slug: string): string {
  const map: Record<string, string> = {};
  allLocations.forEach(loc => { map[toSlug(loc)] = loc; });
  return map[slug] || slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

const InstalacionAireAcondicionado = () => {
  const { ciudad } = useParams<{ ciudad: string }>();

  // Index page listing all locations
  if (!ciudad) {
    return (
      <>
        <Helmet>
          <title>Instalación Aire Acondicionado Valencia y Costa Blanca | CLIMATIC</title>
          <meta name="description" content="Instaladores autorizados de aire acondicionado con carnet RITE en Valencia, Gandía, Dénia, Jávea, Torrent y más de 80 localidades. Presupuesto sin compromiso." />
          <link rel="canonical" href="https://climatic.es/instalacion-aire-acondicionado" />
        </Helmet>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="pt-24 pb-16">
            <div className="container mx-auto px-6 max-w-5xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Instalación de Aire Acondicionado en <span className="text-gradient">Valencia y Costa Blanca</span>
                </h1>
                <p className="text-muted-foreground text-lg mb-12 max-w-3xl">
                  Somos instaladores autorizados con carnet RITE. Realizamos instalaciones profesionales de aire acondicionado en más de 80 localidades de la Comunidad Valenciana y la Costa Blanca.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {allLocations.map((loc, i) => (
                  <motion.div
                    key={loc}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.02 }}
                  >
                    <Link
                      to={`/instalacion-aire-acondicionado/${toSlug(loc)}`}
                      className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
                    >
                      <MapPin size={18} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-foreground font-medium">Aire acondicionado en {loc}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </>
    );
  }

  // Individual city page
  const cityName = fromSlug(ciudad);
  const data = locationData[ciudad] || { region: "Comunidad Valenciana", nearby: ["Valencia", "Gandía"] };
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=34602359972&text=${encodeURIComponent(`¡Hola! Me interesa instalar aire acondicionado en ${cityName}`)}&type=phone_number&app_absent=0`;

  const services = [
    { icon: ThermometerSun, title: "Instalación Split y Multisplit", desc: `Instalación profesional de aire acondicionado Split y Multisplit en ${cityName}. Primeras marcas como Daikin, Mitsubishi, Fujitsu y Gree.` },
    { icon: Wrench, title: "Mantenimiento y limpieza", desc: `Servicio de mantenimiento preventivo y limpieza a vapor de aires acondicionados en ${cityName}. Prolongamos la vida útil de tu equipo.` },
    { icon: Shield, title: "Recarga de gas R32 y R410A", desc: `Recarga de gas refrigerante R32 y R410A para aires acondicionados en ${cityName}. Técnicos certificados RITE.` },
  ];

  return (
    <>
      <Helmet>
        <title>Instalación Aire Acondicionado en {cityName} | Instaladores RITE | CLIMATIC</title>
        <meta name="description" content={`Instalación profesional de aire acondicionado en ${cityName} (${data.region}). Instaladores autorizados con carnet RITE. Daikin, Mitsubishi, Fujitsu. Presupuesto gratis ☎ 602 35 99 72`} />
        <meta name="keywords" content={`aire acondicionado ${cityName}, instalación aire acondicionado ${cityName}, instalador aire acondicionado ${cityName}, mantenimiento aire acondicionado ${cityName}, RITE ${cityName}, climatización ${cityName}`} />
        <link rel="canonical" href={`https://climatic.es/instalacion-aire-acondicionado/${ciudad}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `CLIMATIC - Aire Acondicionado en ${cityName}`,
            "description": `Instaladores autorizados de aire acondicionado con carnet RITE en ${cityName}. Instalación, mantenimiento y recarga de gas.`,
            "telephone": "+34602359972",
            "email": "info@max-efficiency.es",
            "areaServed": { "@type": "City", "name": cityName },
            "serviceType": ["Instalación de aire acondicionado", "Mantenimiento de aire acondicionado", "Recarga de gas R32 y R410A"],
            "priceRange": "€€",
            "address": { "@type": "PostalAddress", "addressRegion": data.region, "addressCountry": "ES" }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          {/* Hero */}
          <section className="container mx-auto px-6 max-w-5xl mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-4">
                <MapPin size={16} />
                <span>{data.region}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Instalación de Aire Acondicionado en <span className="text-gradient">{cityName}</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-3xl">
                ¿Buscas un <strong>instalador de aire acondicionado en {cityName}</strong>? En CLIMATIC somos instaladores autorizados con <strong>carnet RITE</strong>. Ofrecemos instalación profesional de las mejores marcas con garantía y al mejor precio de {data.region}.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold">
                    <MessageCircle size={20} />
                    Pedir presupuesto gratis
                  </Button>
                </a>
                <a href="tel:+34602359972">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Phone size={20} />
                    602 35 99 72
                  </Button>
                </a>
              </div>
            </motion.div>
          </section>

          {/* Services */}
          <section className="container mx-auto px-6 max-w-5xl mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              Nuestros servicios de climatización en {cityName}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <s.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Why choose us */}
          <section className="container mx-auto px-6 max-w-5xl mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              ¿Por qué elegir CLIMATIC en {cityName}?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Instaladores autorizados con carnet RITE",
                "Primeras marcas: Daikin, Mitsubishi, Fujitsu, Gree",
                "Presupuesto sin compromiso",
                "Garantía en todas las instalaciones",
                "Precios competitivos con instalación incluida",
                "Servicio técnico post-venta",
                "Mantenimiento y limpieza a vapor",
                "Recarga de gas R32 y R410A",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Brands */}
          <section className="container mx-auto px-6 max-w-5xl mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Marcas que instalamos en {cityName}
            </h2>
            <p className="text-muted-foreground mb-8">
              Trabajamos con las mejores marcas del mercado para ofrecer a nuestros clientes en {cityName} la máxima calidad y eficiencia energética.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {["Daikin", "Mitsubishi", "Fujitsu", "Gree", "Ekokai"].map((brand) => (
                <div key={brand} className="p-4 rounded-xl border border-border/50 bg-card text-center">
                  <p className="font-bold text-foreground">{brand}</p>
                  <div className="flex justify-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Nearby locations */}
          <section className="container mx-auto px-6 max-w-5xl mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              También instalamos aire acondicionado cerca de {cityName}
            </h2>
            <div className="flex flex-wrap gap-3">
              {data.nearby.map((loc) => (
                <Link
                  key={loc}
                  to={`/instalacion-aire-acondicionado/${toSlug(loc)}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card hover:border-primary/40 hover:shadow-sm transition-all text-sm"
                >
                  <MapPin size={14} className="text-primary" />
                  Aire acondicionado en {loc}
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="container mx-auto px-6 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl border border-primary/30 bg-gradient-card"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                ¿Necesitas aire acondicionado en {cityName}?
              </h2>
              <p className="text-muted-foreground mb-6">
                Contacta con nosotros y recibe un presupuesto personalizado sin compromiso.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-lg px-8 py-6">
                  <MessageCircle size={22} />
                  Pedir presupuesto en {cityName}
                </Button>
              </a>
            </motion.div>
          </section>

          {/* SEO content */}
          <section className="container mx-auto px-6 max-w-5xl mt-16">
            <div className="prose prose-invert max-w-none">
              <h2>Aire acondicionado en {cityName}: todo lo que necesitas saber</h2>
              <p>
                Si estás buscando un <strong>instalador de aire acondicionado en {cityName}</strong>, has llegado al lugar correcto. En CLIMATIC somos especialistas en la instalación, mantenimiento y reparación de sistemas de climatización en {cityName} y toda la comarca de {data.region}.
              </p>
              <p>
                Contamos con el <strong>carnet RITE</strong> (Reglamento de Instalaciones Térmicas en los Edificios), lo que nos acredita como instaladores autorizados para realizar cualquier tipo de instalación de aire acondicionado en {cityName}. Trabajamos con las mejores marcas del mercado como Daikin, Mitsubishi Electric, Fujitsu, Gree y Ekokai.
              </p>
              <h3>Tipos de instalación de aire acondicionado en {cityName}</h3>
              <p>
                Ofrecemos diferentes tipos de instalación adaptados a las necesidades de cada cliente en {cityName}:
              </p>
              <ul>
                <li><strong>Aire acondicionado Split</strong>: ideal para climatizar una habitación o estancia individual en {cityName}.</li>
                <li><strong>Aire acondicionado Multisplit</strong>: perfecto para climatizar varias estancias con una sola unidad exterior.</li>
                <li><strong>Aire acondicionado por Conductos</strong>: la solución más discreta y eficiente para viviendas completas en {cityName}.</li>
              </ul>
              <h3>Mantenimiento de aire acondicionado en {cityName}</h3>
              <p>
                Además de la instalación, ofrecemos servicio de <strong>mantenimiento de aire acondicionado en {cityName}</strong>. Realizamos limpiezas a vapor de radiadores y filtros, recargas de gas refrigerante R32 y R410A, y revisiones completas del equipo para garantizar su óptimo funcionamiento.
              </p>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default InstalacionAireAcondicionado;
