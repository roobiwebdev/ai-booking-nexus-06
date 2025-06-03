
import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

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
            Avant / Après
            <span className="neon-text"> l'intégration de notre IA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez la transformation radicale de votre quotidien professionnel
          </p>
        </div>

        {/* Comparison */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 relative">
            {/* Before */}
            <div className="glass-card rounded-2xl p-8 border-red-500/20">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-500/20 border border-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <X className="w-8 h-8 text-red-400" />
                </div>
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
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center animate-glow">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* After */}
            <div className="glass-card rounded-2xl p-8 border-green-500/20">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-500/20 border border-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-400" />
                </div>
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
                <div className="text-3xl font-bold neon-text mb-2">ROI 300%</div>
                <div className="text-gray-300">Dès la première année</div>
              </div>
              <div>
                <div className="text-3xl font-bold neon-text mb-2">15h</div>
                <div className="text-gray-300">Économisées par semaine</div>
              </div>
              <div>
                <div className="text-3xl font-bold neon-text mb-2">€3000</div>
                <div className="text-gray-300">Économies mensuelles moyennes</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Calculer mon ROI personnalisé
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
