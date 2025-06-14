import React from "react";
import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import SocialProofSection from "../components/SocialProofSection";
import DemoSection from "../components/DemoSection";
import BeforeAfterSection from "../components/BeforeAfterSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <div className="w-full flex flex-col justify-center items-center max-w-[100vw]">
        <HeroSection />
        <BenefitsSection />
        <SocialProofSection />
        <DemoSection />
        <BeforeAfterSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
