import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import WhyChooseUs from "@/components/WhyChooseUs";
import Zones from "@/components/Zones";
import Pricing from "@/components/Pricing";
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
          content="aire acondicionado, instalación, Valencia, Costa Blanca, Denia, Javea, Calpe, Altea, Moraira, climatización"
        />
        <link rel="canonical" href="https://climatic.es" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Brands />
          <WhyChooseUs />
          <Zones />
          <Pricing />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
