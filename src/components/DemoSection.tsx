
import React from 'react';
import { Play, Monitor, Smartphone, Tablet } from 'lucide-react';

const DemoSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Découvrez l'outil en action
            <span className="neon-text"> en 2 minutes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Voyez comment notre IA transforme concrètement la gestion de votre centre de formation
          </p>
        </div>

        {/* Video Demo */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative glass-card rounded-2xl p-2">
            <div className="relative aspect-video bg-gradient-to-br from-purple-900/50 to-purple-700/30 rounded-xl overflow-hidden">
              {/* Placeholder for video */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300 animate-glow">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Démonstration interactive</h3>
                  <p className="text-gray-300">Découvrez toutes les fonctionnalités en 2 minutes</p>
                </div>
              </div>
              
              {/* Mock interface elements */}
              <div className="absolute top-4 left-4 right-4">
                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="ml-4 text-sm text-gray-300">Formation IA - Dashboard</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Dashboard intelligent</h3>
            <p className="text-gray-300">Vue d'ensemble temps réel de votre centre avec KPIs automatiques</p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Mobile-first</h3>
            <p className="text-gray-300">Accès complet depuis mobile, tablette ou ordinateur</p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Tablet className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Interface intuitive</h3>
            <p className="text-gray-300">Prise en main immédiate, formation de 30 minutes maximum</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Tester l'outil en démo personnalisée
          </button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
