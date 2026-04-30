import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import MidFunnelCTA from "@/components/MidFunnelCTA";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CertificatesSection from "@/components/CertificatesSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import StickyHireCTA from "@/components/StickyHireCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* 1. Hook */}
      <HeroSection />
      {/* 2. Trust signals */}
      <TrustBar />
      {/* 3. About / Value */}
      <AboutSection />
      {/* 4. Portfolio showcase */}
      <PortfolioSection />
      {/* 5. Mid-funnel CTA */}
      <MidFunnelCTA />
      {/* 6. Services */}
      <ServicesSection />
      {/* 7. Social proof */}
      <TestimonialsSection />
      {/* 8. Credentials */}
      <CertificatesSection />
      {/* 9. Blog */}
      <BlogSection />
      {/* 10. Lead capture */}
      <ContactSection />
      {/* Sticky CTA */}
      <StickyHireCTA />
    </div>
  );
};

export default Index;
