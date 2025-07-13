import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import SocialProofSection from "../components/SocialProofSection";
import DemoSection from "../components/DemoSection";
import BeforeAfterSection from "../components/BeforeAfterSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/ui/loadingSpinner";
import { Helmet } from "react-helmet";

const API_ENDPOINTS = {
  hero: "https://payload-cms-ai-booking.vercel.app/api/hero/1?depth=2&draft=false",
  benefits: "https://payload-cms-ai-booking.vercel.app/api/benefits/1?depth=2&draft=false",
  socialProof: "https://payload-cms-ai-booking.vercel.app/api/socialProof/1?depth=2&draft=false",
  demo: "https://payload-cms-ai-booking.vercel.app/api/demo/1?depth=2&draft=false",
  beforeAfter: "https://payload-cms-ai-booking.vercel.app/api/beforeAfter/1?depth=2&draft=false",
  faq: "https://payload-cms-ai-booking.vercel.app/api/faq/1?depth=2&draft=false",
  contact: "https://payload-cms-ai-booking.vercel.app/api/contact/1?depth=2&draft=false",
  footer: "https://payload-cms-ai-booking.vercel.app/api/footer/2?depth=2&draft=false&locale=undefined",
};

const Index = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    Promise.all([
      fetch(API_ENDPOINTS.hero).then((r) => r.json()),
      fetch(API_ENDPOINTS.benefits).then((r) => r.json()),
      fetch(API_ENDPOINTS.socialProof).then((r) => r.json()),
      fetch(API_ENDPOINTS.demo).then((r) => r.json()),
      fetch(API_ENDPOINTS.beforeAfter).then((r) => r.json()),
      fetch(API_ENDPOINTS.faq).then((r) => r.json()),
      fetch(API_ENDPOINTS.contact).then((r) => r.json()),
      fetch(API_ENDPOINTS.footer).then((r) => r.json()),
    ])
      .then(([
        hero,
        benefits,
        socialProof,
        demo,
        beforeAfter,
        faq,
        contact,
        footer,
      ]) => {
        setData({
          hero,
          benefits,
          socialProof,
          demo,
          beforeAfter,
          faq,
          contact,
          footer,
        });
      })
      .catch((err) => setError(err.message || "Failed to fetch data"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background w-full">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background w-full text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>FormationIA - L'IA révolutionnaire pour centres de formation</title>
        <meta name="description" content="Automatisez votre centre de formation avec notre IA : conformité Qualiopi, création de contenus, suivi des apprenants. Gagnez 15h/semaine. Démo gratuite." />
        <meta name="author" content="FormationIA" />
        <meta property="og:title" content="FormationIA - L'IA révolutionnaire pour centres de formation" />
        <meta property="og:description" content="Automatisez votre centre de formation avec notre IA : conformité Qualiopi, création de contenus, suivi des apprenants. Gagnez 15h/semaine." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://91e46c57-8fa5-4529-871d-6d68f3343378.lovableproject.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FormationIA" />
        <meta name="twitter:image" content="https://91e46c57-8fa5-4529-871d-6d68f3343378.lovableproject.com/og-image.jpg" />
        <link rel="canonical" href="https://ai-booking-nexus.vercel.app/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FormationIA",
            "url": "https://ai-booking-nexus.vercel.app/",
            "logo": "https://91e46c57-8fa5-4529-871d-6d68f3343378.lovableproject.com/og-image.jpg",
            "sameAs": [
              "https://twitter.com/FormationIA"
            ]
          }
        `}</script>
      </Helmet>
      <div className="min-h-screen bg-background w-full overflow-x-hidden">
        <div className="w-full flex flex-col justify-center items-center max-w-[100vw]">
          <HeroSection data={data.hero} />
          <BenefitsSection data={data.benefits} />
          <SocialProofSection data={data.socialProof} />
          <DemoSection data={data.demo} />
          <BeforeAfterSection data={data.beforeAfter} />
          <FAQSection data={data.faq} />
          <ContactSection data={data.contact} />
          <Footer data={data.footer} />
        </div>
      </div>
    </>
  );
};

export default Index;
