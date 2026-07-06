import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import WhyChooseUs from "@/components/WhyChooseUs";
import RiteCertification from "@/components/RiteCertification";
import Zones from "@/components/Zones";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CLIMATIC - Instaladores de Aire Acondicionado en Valencia y Costa Blanca</title>
        <meta
          name="description"
          content="Instalación profesional de aire acondicionado en Valencia, Costa Blanca y Marina Alta. Expertos en Daikin, Mitsubishi, Fujitsu. Presupuesto sin compromiso."
        />
        <meta
          name="keywords"
          content="aire acondicionado Valencia, instalación aire acondicionado Gandía, climatización Torrent, aire acondicionado Dénia, instaladores RITE Valencia, aire acondicionado Jávea, Sagunto, Paterna, Alzira, Cullera, Oliva, Xàtiva, Ontinyent, Benidorm, Altea, Moraira, Ondara, Costa Blanca, Marina Alta"
        />
        <link rel="canonical" href="https://climatic.es" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "CLIMATIC - CLIMATIC",
            "description": "Instaladores autorizados de aire acondicionado con carnet RITE en Valencia, Costa Blanca y Marina Alta.",
            "telephone": "+34602359972",
            "email": "info@max-efficiency.es",
            "areaServed": [
              "Valencia", "Gandía", "Torrent", "Sagunto", "Paterna", "Alzira", "Dénia", "Jávea",
              "Benissa", "Ondara", "Moraira", "Teulada", "Altea", "Cullera", "Oliva", "Xàtiva"
            ],
            "serviceType": ["Instalación de aire acondicionado", "Mantenimiento de aire acondicionado", "Recarga de gas R32 y 410A"],
            "priceRange": "€€"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Brands />
          <WhyChooseUs />
          <RiteCertification />
          <Zones />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
