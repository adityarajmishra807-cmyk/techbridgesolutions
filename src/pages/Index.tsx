import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductShowcase from "@/components/ProductShowcase";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingElements />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductShowcase />
      <Gallery />
      <CTASection />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Index;
