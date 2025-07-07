import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/ui/animated-section";

const API_URL =
  "https://payload-cms-ai-booking.vercel.app/api/faq/1?depth=2&draft=false";

const FAQSection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch FAQ data");
        return res.json();
      })
      .then((json) => {
        if (json && json.faqs && json.faqs.length > 0) {
          setData(json);
        } else {
          setError("No FAQ data found");
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading FAQ...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  return (
    <section className="py-20 w-4xl relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {data.title} <br />
              <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#9487FC] via-[#6E4DF2] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
                {data.subtitle}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {data.description}
            </p>
          </div>
        </AnimatedSection>

        {/* FAQ Accordion */}
        <AnimatedSection>
          <div className="sm:w-[70vw] md:w-[50vw] lg:w-[50vw]">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {data.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="w-full glass-card rounded-xl border-[#563FC0]-500/20"
                >
                  <AccordionTrigger className="text-left px-6 py-4 text-white hover:text-[#8D7CFB] text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="w-full px-6 pb-4 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <div className="text-center mt-16">
            <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Une question spécifique ?
              </h3>
              <p className="text-gray-300 mb-6">
                Échangez directement avec un expert lors de votre démo
                personnalisée
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-gradient-to-r from-[#6645E8] to-[#6645E8] hover:from-purple-700 hover:to-purple-900 text-white px-4 sm:px-8 py-4 rounded-xl font-semibold text-md sm:text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                {data.ctaText}
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;

// import React from 'react';
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
// import AnimatedSection from '@/components/ui/animated-section';

// const FAQSection = () => {
//   const faqs = [
//     {
//       question: "Combien de temps faut-il pour implémenter l'outil ?",
//       answer: "L'implémentation complète prend entre 24h et 48h maximum. Notre équipe technique s'occupe de tout : migration des données, formation de vos équipes (30 minutes), et paramétrage personnalisé. Vous êtes opérationnels en moins de 2 jours."
//     },
//     {
//       question: "L'outil est-il vraiment conforme Qualiopi ?",
//       answer: "Absolument. Notre IA est développée en partenariat avec des experts Qualiopi certifiés. Elle respecte automatiquement tous les 32 critères, génère les preuves nécessaires et vous prépare aux audits. Nous garantissons la conformité à 100%."
//     },
//     {
//       question: "Que se passe-t-il avec nos données existantes ?",
//       answer: "Migration sécurisée et automatique de toutes vos données (apprenants, formations, historiques). Aucune perte de données, backup complet avant migration. Vos données restent 100% privées et sécurisées (RGPD compliant)."
//     },
//     {
//       question: "L'IA peut-elle vraiment créer des contenus de qualité ?",
//       answer: "Notre IA génère des contenus personnalisés basés sur vos spécificités métier. Elle crée : modules de formation, exercices, évaluations, supports visuels. Vous gardez le contrôle total avec possibilité de modification en temps réel."
//     },
//     {
//       question: "Quel est le coût réel et y a-t-il des frais cachés ?",
//       answer: "Tarification transparente tout inclus : plateforme, support 24/7, mises à jour, formation équipe, conformité Qualiopi. Pas de frais cachés. ROI moyen de 300% dès la première année grâce aux 15h/semaine économisées."
//     },
//     {
//       question: "Que faire si mon équipe résiste au changement ?",
//       answer: "Accompagnement humain inclus : formation personnalisée de 30 minutes par personne, support dédié pendant 3 mois, interface ultra-intuitive. 98% de nos clients adoptent l'outil en moins d'une semaine."
//     },
//     {
//       question: "L'outil fonctionne-t-il pour tous types de formations ?",
//       answer: "Oui, notre IA s'adapte à tous secteurs : formation professionnelle, continue, apprentissage, reconversion, etc. Elle apprend de vos spécificités métier et s'améliore en continu selon vos besoins."
//     },
//     {
//       question: "Que se passe-t-il si l'outil ne convient pas ?",
//       answer: "Garantie satisfait ou remboursé 30 jours. Si l'outil ne vous convient pas, remboursement intégral + récupération de vos données dans leur format d'origine. Zero risque pour vous."
//     }
//   ];

//   return (
//     <section className="py-20 w-4xl relative">
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <AnimatedSection>
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Questions fréquentes <br />
//               <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#9487FC] via-[#6E4DF2] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent"> et réponses expertes</span>
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Toutes les réponses à vos questions pour prendre la meilleure décision
//             </p>
//           </div>
//         </AnimatedSection>

//         {/* FAQ */}
//         <AnimatedSection>
//           <div className="sm:w-[70vw] md:w-[50vw] lg:w-[50vw]">
//             <Accordion type="single" collapsible className="w-full space-y-4">
//               {faqs.map((faq, index) => (
//                 <AccordionItem key={index} value={`item-${index}`} className="w-fullglass-card rounded-xl border-[#563FC0]-500/20">
//                   <AccordionTrigger className="text-left px-6 py-4 text-white hover:text-[#8D7CFB] text-lg font-medium ">
//                     {faq.question}
//                   </AccordionTrigger>
//                   <AccordionContent className="w-full px-6 pb-4 text-gray-300 leading-relaxed">
//                     {faq.answer}
//                   </AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>
//         </AnimatedSection>

//         {/* CTA */}
//         <AnimatedSection>
//           <div className="text-center mt-16">
//             <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
//               <h3 className="text-2xl font-bold text-white mb-4">Une question spécifique ?</h3>
//               <p className="text-gray-300 mb-6">
//                 Échangez directement avec un expert lors de votre démo personnalisée
//               </p>
//               <button
//                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//                 className="bg-gradient-to-r from-[#6645E8] to-[#6645E8] hover:from-purple-700 hover:to-purple-900 text-white px-4 sm:px-8 py-4 rounded-xl font-semibold text-md sm:text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
//               >
//                 Poser ma question en démo
//               </button>
//             </div>
//           </div>
//         </AnimatedSection>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;
