import React, { useRef } from 'react';
import { Clock, Shield, Brain, Users, BarChart3, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import AnimatedSection from '@/components/ui/animated-section';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Gain de temps radical",
      description: "Économisez 15h par semaine grâce à l'automatisation complète des tâches administratives répétitives.",
      metric: "75% de temps économisé"
    },
    {
      icon: Shield,
      title: "Conformité Qualiopi automatique",
      description: "Notre IA s'assure que tous vos processus respectent automatiquement les critères Qualiopi en temps réel.",
      metric: "100% de conformité"
    },
    {
      icon: Brain,
      title: "Création de contenus intelligente",
      description: "Générez des modules de formation, évaluations et supports pédagogiques adaptés à vos apprenants.",
      metric: "10x plus rapide"
    },
    {
      icon: Users,
      title: "Suivi personnalisé des apprenants",
      description: "IA qui analyse les performances et propose des parcours d'apprentissage personnalisés pour chaque apprenant.",
      metric: "85% de satisfaction"
    },
    {
      icon: BarChart3,
      title: "Analytics prédictifs",
      description: "Anticipez les difficultés, identifiez les risques de décrochage et optimisez vos formations en continu.",
      metric: "30% d'amélioration"
    },
    {
      icon: Zap,
      title: "Support IA 24/7",
      description: "Assistant intelligent disponible en permanence pour vous et vos équipes, réponses instantanées garanties.",
      metric: "Disponible 24/7"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transformez votre centre <br />
              <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#9487FC] via-[#6E4DF2] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent"> en quelques clics</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez comment notre IA révolutionne la gestion de votre centre de formation
            </p>
          </div>
        </AnimatedSection>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const cardRef = useRef<HTMLDivElement>(null);
            const shadowRef = useRef<HTMLDivElement>(null);

            const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
              if (cardRef.current) {
                const { left, top } = cardRef.current.getBoundingClientRect();
                const x = e.clientX - left;
                const y = e.clientY - top;

                if (shadowRef.current) {
                  shadowRef.current.style.top = `${y}px`;
                  shadowRef.current.style.left = `${x}px`;
                  shadowRef.current.style.transform = "translate(-50%, -50%)";
                  (cardRef.current as any).style.setProperty('--cursor-x', `${x}px`);
                  (cardRef.current as any).style.setProperty('--cursor-y', `${y}px`);
                }
              }
            };

            return (
              <AnimatedSection>
                <div 
                  key={index}
                  ref={cardRef}
                  onMouseMove={handleMouseMove}
                  className="relative py-5 px-0 z-20 group overflow-hidden border border-zinc-800 rounded-xl bg-[radial-gradient(500px_circle_at_var(--cursor-x)_var(--cursor-y),#8872FC_0,transparent,transparent_70%)]"
                >
                  <div className="space-y-4 relative z-10 p-5 bg-[linear-gradient(180deg,_rgba(24,_24,_27,_0.00)_0%,_rgba(24,_24,_27,_0.00)_100%)]">
                    <div className="flex items-center mb-6">
                      <div className="text-gray-500 w-12 h-12 rounded-full bg-[linear-gradient(180deg,_rgba(39,_39,_42,_0.68)_0%,_rgba(39,_39,_42,_0.00)_100%)] flex items-center justify-center border border-zinc-700">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-md sm:text-xl font-semibold text-white">{benefit.title}</h3>
                        <div className="text-sm text-[#8872FC] font-medium">{benefit.metric}</div>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                  <div
                    ref={shadowRef}
                    className="bg-[linear-gradient(180deg,_#1E293B_0%,_rgba(136,114,252,0.00)_137.53%,_rgba(32,_69,_129,_0.00)_195%)] blur-[70px] opacity-0 absolute top-0 left-0 w-4/5 h-4/5 duration-150 group-hover:opacity-90"
                  ></div>
                  <div className="absolute inset-[1px] -z-10 rounded-xl bg-gradient-to-tr from-black/90 via-transparent/80 to-transparent/20"></div>
                  <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#8872FC10_1px,transparent_1px),linear-gradient(to_bottom,#8872FC10_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          {/* <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-[#8872FC] to-[#8872FC]/80 hover:from-[#8872FC]/90 hover:to-[#8872FC]/70 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-[#8872FC]/25 transition-all duration-300 transform hover:scale-105"
          >
            Découvrir ces bénéfices en démo
          </button> */}

            <span className="relative inline-block overflow-hidden rounded-full p-[1px]"  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-6 sm:px-8 py-2 text-md sm:text-lg font-medium text-gray-50 backdrop-blur-3xl ">
              Découvrir ces bénéfices en démo
                <ArrowRight className="w-5 h-5 ml-2 hidden sm:block" />
              </div>
            </span>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
