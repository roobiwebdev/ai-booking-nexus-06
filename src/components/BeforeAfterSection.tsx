import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

// Custom hook for counting animation
const useCountAnimation = (target: number, duration: number = 2) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useSpring(0, { 
    stiffness: 50,
    damping: 20,
    duration: duration * 1000
  });
  
  const rounded = useTransform(count, (latest) => Math.round(latest));

  React.useEffect(() => {
    if (inView) {
      count.set(target);
    }
  }, [inView, target, count]);

  return { count: rounded, ref };
};

const StatNumber = ({ value, suffix = "" }) => {
  const { count, ref } = useCountAnimation(value);
  return (
    <div ref={ref} className="text-3xl font-bold inline-flex animate-text-gradient bg-gradient-to-r from-[#9487FC] via-[#6E4DF2] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent mb-2">
      <motion.span>{count}</motion.span>{suffix}
    </div>
  );
};

const BeforeAfterSection = () => {
  const beforeItems = [
    "15h/semaine perdues en tâches administratives",
    "Stress permanent des audits Qualiopi",
    "Création manuelle de contenus (2-3 jours/module)",
    "Suivi des apprenants sur Excel",
    "Gestion des plannings complexe",
    "Réponses aux questions répétitives",
    "Rapports manuels chronophages",
    "Risque d'erreurs humaines"
  ];

  const afterItems = [
    "15h/semaine libérées pour la pédagogie",
    "Conformité Qualiopi automatique et garantie",
    "Contenus générés en 10 minutes par l'IA",
    "Suivi intelligent et prédictif des apprenants",
    "Planification automatisée et optimisée",
    "Assistant IA 24/7 pour toutes les questions",
    "Rapports automatiques et KPIs temps réel",
    "Zéro erreur grâce à l'automatisation"
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Avant / Après <br />
            <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#9487FC] via-[#6E4DF2] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent"> l'intégration de notre IA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez la transformation radicale de votre quotidien professionnel
          </p>
        </div>

        {/* Comparison */}
        <div className="max-w-[1100px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 relative">
            {/* Before */}
            <div className="glass-card rounded-2xl p-8 border-red-500/20 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-red-500/20 border border-red-500 rounded-full flex items-center justify-center">
                  <X className="w-4 h-4 text-red-400" />
                </div>
              </div>
              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold text-white mb-2">AVANT</h3>
                <p className="text-red-400 font-medium">Gestion traditionnelle chronophage</p>
              </div>

              <div className="space-y-4">
                {beforeItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-12 h-12 bg-gradient-to-r from-[#6645E8] to-[#6645E8] rounded-full flex items-center justify-center animate-green-glow">
                <ArrowRight className="w-8 h-8 text-green-500 font-bold text-xl" />
              </div>
            </div>

            {/* After */}
            <div className="glass-card rounded-2xl p-8 border-green-500/20 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-green-500/20 border border-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
              </div>
              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold text-white mb-2">APRÈS</h3>
                <p className="text-green-400 font-medium">Automatisation intelligente par IA</p>
              </div>

              <div className="space-y-4">
                {afterItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ROI Section */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Retour sur investissement immédiat</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <StatNumber value={300} suffix="%" />
                <div className="text-gray-300">Dès la première année</div>
              </div>
              <div>
                <StatNumber value={15} suffix="h" />
                <div className="text-gray-300">Économisées par semaine</div>
              </div>
              <div>
                <StatNumber value={3000} suffix="€" />
                <div className="text-gray-300">Économies mensuelles moyennes</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          {/* <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Calculer mon ROI personnalisé
          </button> */}

            <span className="relative inline-block overflow-hidden rounded-full p-[1px]"   onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-2 text-lg font-medium text-gray-50 backdrop-blur-3xl ">
              Calculer mon ROI personnalisé
              </div>
            </span>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
