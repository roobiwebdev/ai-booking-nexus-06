
import React from 'react';
import { Clock, Shield, Brain, Users, BarChart3, Zap } from 'lucide-react';

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transformez votre centre de formation 
            <span className="neon-text"> en quelques clics</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Notre IA révolutionne la gestion de votre centre de formation avec des résultats mesurables dès la première semaine
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl p-8 hover:bg-purple-500/5 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center group-hover:animate-glow">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                  <div className="text-sm text-purple-400 font-medium">{benefit.metric}</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Découvrir ces bénéfices en démo
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
