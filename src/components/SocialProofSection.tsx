
import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProofSection = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Directrice pédagogique",
      company: "FormationPro Lyon",
      content: "Notre productivité a explosé ! 15h de gagnées par semaine, conformité Qualiopi automatique. L'IA anticipe même nos besoins.",
      rating: 5,
      avatar: "MD"
    },
    {
      name: "Jean-Pierre Martin",
      role: "Responsable qualité",
      company: "Centre Excellence Formation",
      content: "Plus jamais de stress pour les audits Qualiopi. L'outil gère tout automatiquement. Nos apprenants ont 30% de meilleurs résultats.",
      rating: 5,
      avatar: "JPM"
    },
    {
      name: "Sophie Leclerc",
      role: "Coordinatrice pédagogique",
      company: "InnovaForm",
      content: "La création de contenus est révolutionnaire. En 10 minutes, j'ai des modules complets personnalisés. Incroyable !",
      rating: 5,
      avatar: "SL"
    }
  ];

  const partners = [
    { name: "Qualiopi", logo: "🏆" },
    { name: "France Compétences", logo: "🇫🇷" },
    { name: "OPCO", logo: "💼" },
    { name: "Pôle Emploi", logo: "👥" },
    { name: "Région", logo: "🏛️" },
    { name: "CPF", logo: "📚" }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Stats Bar */}
        <div className="glass-card rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold neon-text mb-2">500+</div>
              <div className="text-gray-300">Centres équipés</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold neon-text mb-2">15h</div>
              <div className="text-gray-300">Gagnées / semaine</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold neon-text mb-2">98%</div>
              <div className="text-gray-300">Satisfaction client</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold neon-text mb-2">24/7</div>
              <div className="text-gray-300">Support IA</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ils ont transformé leur centre 
            <span className="neon-text"> avec notre IA</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 relative">
              <Quote className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-purple-400">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-300 mb-8">Partenaires officiels et certifications</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg">
                <span className="text-2xl">{partner.logo}</span>
                <span className="text-gray-300 font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
