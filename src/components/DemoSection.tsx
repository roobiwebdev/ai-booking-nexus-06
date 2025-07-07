import React, { useEffect, useState } from "react";
import * as Icons from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";
import { ArrowRight } from "lucide-react";

const API_URL =
  "https://payload-cms-ai-booking.vercel.app/api/demo/1?depth=2&draft=false";

const DemoSection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch demo section");
        return res.json();
      })
      .then((json) => {
        if (json && json.features && json.features.length > 0) {
          setData(json);
        } else {
          setError("No demo data found");
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading demo section...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  return (
    <section className="py-20 w-full flex flex-col justify-center items-center">
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

        {/* Video Demo */}
        <AnimatedSection>
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative glass-card rounded-2xl p-2 h-[51.5vh] sm:h-auto">
              <div className="h-[49vh] sm:h-auto w-full relative aspect-video bg-gradient-to-br from-[#8872FC]/50 to-[#6E4DF2]/30 rounded-xl overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src={data.videoThumbnail}
                    alt="Dashboard Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors duration-300" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#6E4DF2] to-[#8872FC] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300 animate-glow">
                      <Icons.Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {data.videoTitle}
                    </h3>
                    <p className="text-gray-300">{data.videoDescription}</p>
                  </div>
                </div>

                <div className="absolute top-4 left-4 right-4 z-10">
                  <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="ml-4 text-sm text-gray-300">
                        Formation IA - Dashboard
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {data.features.map((feature, index) => {
            const Icon = Icons[feature.icon] || Icons.Monitor;
            return (
              <AnimatedSection key={index}>
                <div className="glass-card rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#563FC0] to-[#6645E8] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA */}
        <AnimatedSection>
          <div className="text-center">
            <span
              className="relative inline-block overflow-hidden rounded-full p-[1px]"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-6 sm:px-8 py-2 text-md sm:text-lg font-medium text-gray-50 backdrop-blur-3xl ">
                {data.ctaText}
                <ArrowRight className="w-5 h-5 ml-2 hidden sm:block" />
              </div>
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DemoSection;

// import React from 'react';
// import { Play, Monitor, Smartphone, Tablet, ArrowRight } from 'lucide-react';
// import AnimatedSection from '@/components/ui/animated-section';

// const DemoSection = () => {
//   return (
//     <section className="py-20 w-full flex flex-col justify-center items-center">
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <AnimatedSection>
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Découvrez l'outil en action <br />
//               <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#9487FC] via-[#6E4DF2] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">en 2 minutes</span>
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Voyez comment notre IA transforme concrètement la gestion de votre centre de formation
//             </p>
//           </div>
//         </AnimatedSection>

//         {/* Video Demo */}
//         <AnimatedSection>
//           <div className="max-w-5xl mx-auto mb-16">
//             <div className="relative glass-card rounded-2xl p-2 h-[51.5vh] sm:h-auto">
//               <div className="h-[49vh] sm:h-auto w-full relative aspect-video bg-gradient-to-br from-[#8872FC]/50 to-[#6E4DF2]/30 rounded-xl overflow-hidden">
//                 {/* Video thumbnail */}
//                 <div className="absolute inset-0">
//                   <img
//                     src="/dashboard.png"
//                     alt="Dashboard Preview"
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors duration-300" />
//                 </div>

//                 {/* Play button overlay */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="w-20 h-20 bg-gradient-to-br from-[#6E4DF2] to-[#8872FC] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300 animate-glow">
//                       <Play className="w-8 h-8 text-white ml-1" />
//                     </div>
//                     <h3 className="text-xl font-semibold text-white mb-2">Démonstration interactive</h3>
//                     <p className="text-gray-300">Découvrez toutes les fonctionnalités en 2 minutes</p>
//                   </div>
//                 </div>

//                 {/* Mock interface elements */}
//                 <div className="absolute top-4 left-4 right-4 z-10">
//                   <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3">
//                     <div className="flex items-center gap-2">
//                       <div className="w-3 h-3 bg-red-400 rounded-full"></div>
//                       <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//                       <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//                       <div className="ml-4 text-sm text-gray-300">Formation IA - Dashboard</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </AnimatedSection>

//         {/* Features Preview */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           <AnimatedSection>
//             <div className="glass-card rounded-2xl p-6 text-center">
//               <div className="w-16 h-16 bg-gradient-to-br from-[#563FC0] to-[#6645E8] rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <Monitor className="w-8 h-8 text-white " />
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-3">Dashboard intelligent</h3>
//               <p className="text-gray-300">Vue d'ensemble temps réel de votre centre avec KPIs automatiques</p>
//             </div>
//           </AnimatedSection>

//           <AnimatedSection>
//             <div className="glass-card rounded-2xl p-6 text-center">
//               <div className="w-16 h-16 bg-gradient-to-br from-[#563FC0] to-[#6645E8] rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <Smartphone className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-3">Mobile-first</h3>
//               <p className="text-gray-300">Accès complet depuis mobile, tablette ou ordinateur</p>
//             </div>
//           </AnimatedSection>

//           <AnimatedSection>
//             <div className="glass-card rounded-2xl p-6 text-center">
//               <div className="w-16 h-16 bg-gradient-to-br from-[#563FC0] to-[#6645E8] rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <Tablet className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-3">Interface intuitive</h3>
//               <p className="text-gray-300">Prise en main immédiate, formation de 30 minutes maximum</p>
//             </div>
//           </AnimatedSection>
//         </div>

//         {/* CTA */}
//         <AnimatedSection>
//           <div className="text-center">
//             {/* <button
//               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//               className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
//             >
//               Tester l'outil en démo personnalisée
//             </button> */}

//             <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
//               <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//               <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-6 sm:px-8 py-2 text-md sm:text-lg font-medium text-gray-50 backdrop-blur-3xl">
//               Tester l'outil en démo personnalisée
//                 <ArrowRight className="w-5 h-5 ml-2 hidden sm:block" />
//               </div>
//             </span>
//           </div>
//         </AnimatedSection>
//       </div>
//     </section>
//   );
// };

// export default DemoSection;
