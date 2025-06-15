import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import AnimatedSection from '@/components/ui/animated-section';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <iframe
        src="https://peaceful-brand-237536.framer.app/second"
        style={{ width: '100%', height: '100vh', border: 'none', position:'absolute', top:0, left:0,  }}
        title="Framer Animation"
      />

     <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden ">
      {/* Background Effects */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 md:bg-purple-600/30 rounded-full filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 md:bg-neon-purple/20 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full"></div>
      </div> */}

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full glass-card my-4 sm:mb-8 sm:mt-0 border-[#513CB3] ">
              <span className="inline-flex cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-gray-950 px-2 sm:px-4 py-1 text-sm font-normal sm:text-md sm:font-medium text-gray-300 backdrop-blur-3xl">
                <span className="bg-gradient-to-t from-[#fff] to-[#8678f9] bg-clip-text text-transparent">
                  L'IA révolutionnaire pour centres de formation
                </span>
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[-1px] sm:leading-tight mt-4 sm:mt-0">
              Automatisez votre centre
              <br />
              <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#9487FC] via-[#6E4DF2] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
                avec l'IA
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-1 sm:leading-relaxed">
              Gagnez 15h par semaine grâce à notre outil IA tout-en-un : gestion
              administrative automatique, conformité Qualiopi, création de
              contenus et suivi des apprenants.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-6 sm:px-8 py-2 text-md sm:text-lg font-medium text-gray-50 backdrop-blur-3xl ">
                  Réserver une démo gratuite
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </span>

              {/* <Button
                variant="outline"
                size="lg"
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg rounded-xl backdrop-blur-sm"
              >
                Voir la démonstration (2min)
              </Button> */}

            <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-6 sm:px-8 py-2 text-md sm:text-lg font-medium text-gray-50 backdrop-blur-3xl ">
                Voir la démonstration (2min)
                </div>
              </span>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">500+ centres déjà équipés</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Conformité Qualiopi garantie</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Support IA 24/7</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-[#6645E8] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#6645E8] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
    </>
   
  );
};

export default HeroSection;
