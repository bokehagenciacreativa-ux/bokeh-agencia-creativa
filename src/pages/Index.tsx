import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoffeeCacaoSection from "@/components/CoffeeCacaoSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import ClientsSection from "@/components/ClientsSection";
import PortfolioSection from "@/components/PortfolioSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoffeeCacaoSection />
      <ServicesSection />
      <TeamSection />
      <ClientsSection />
      <PortfolioSection />
      <CtaSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
