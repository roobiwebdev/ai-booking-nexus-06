import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";
import LoadingSpinner from "./ui/loadingSpinner";

const API_URL =
  "https://payload-cms-ai-booking.vercel.app/api/hero/1?depth=2&draft=false";

interface TrustIndicator {
  id: string;
  text: string;
}

interface HeroData {
  id: number;
  iframeUrl?: string;
  badgeText: string;
  mainTitle: string;
  gradientTitle: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  trustIndicators: TrustIndicator[];
  showScrollIndicator: boolean;
  updatedAt: string;
  createdAt: string;
}

const HeroSection = () => {
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        console.log('API Response:', response.data); // Debug log
        setHeroData(response.data);
      })
      .catch((err) => {
        console.error('API Error:', err); // Debug log
        setError("Failed to fetch data");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;
  if (!heroData) return null;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {heroData.iframeUrl && (
        <iframe
          src={heroData.iframeUrl}
          style={{
            width: "100%",
            height: "100vh",
            border: "none",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          title="Framer Animation"
        />
      )}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden ">
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full glass-card my-4 sm:mb-8 sm:mt-0 border-[#513CB3] ">
                <span className="inline-flex cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-gray-950 px-2 sm:px-4 py-1 text-sm font-normal sm:text-md sm:font-medium text-gray-300 backdrop-blur-3xl">
                  <span className="bg-gradient-to-t from-[#fff] to-[#8678f9] bg-clip-text text-transparent">
                    {heroData.badgeText}
                  </span>
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[-1px] sm:leading-tight mt-4 sm:mt-0">
                {heroData.mainTitle}
                <br />
                <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#9487FC] via-[#6E4DF2] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
                  {heroData.gradientTitle}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-1 sm:leading-relaxed">
                {heroData.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button
                  onClick={scrollToContact}
                  className="relative inline-flex overflow-hidden rounded-full p-[1px]"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-6 sm:px-8 py-2 text-md sm:text-lg font-medium text-gray-50 backdrop-blur-3xl ">
                    {heroData.primaryCtaText} <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </button>
                {heroData.secondaryCtaText && (
                  <a
                    href={heroData.secondaryCtaLink || "#"}
                    className="relative inline-flex overflow-hidden rounded-full p-[1px]"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-6 sm:px-8 py-2 text-md sm:text-lg font-medium text-gray-50 backdrop-blur-3xl ">
                      {heroData.secondaryCtaText}
                    </div>
                  </a>
                )}
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
                {heroData.trustIndicators?.map((indicator) => (
                  <div key={indicator.id} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">{indicator.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
        {heroData.showScrollIndicator && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
            <div className="w-6 h-10 border-2 border-[#6645E8] rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#6645E8] rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default HeroSection;