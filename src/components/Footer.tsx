
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-gray-900/50 border-t border-purple-500/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg"></div>
              <span className="text-xl font-bold text-white">FormationIA</span>
            </div>
            <p className="text-gray-400 mb-6">
              L'intelligence artificielle au service de votre centre de formation. 
              Automatisation, conformité et excellence pédagogique.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center hover:bg-purple-600/40 transition-colors">
                <Linkedin className="w-5 h-5 text-purple-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center hover:bg-purple-600/40 transition-colors">
                <Twitter className="w-5 h-5 text-purple-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center hover:bg-purple-600/40 transition-colors">
                <Youtube className="w-5 h-5 text-purple-400" />
              </a>
            </div>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Notre solution</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Fonctionnalités</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Conformité Qualiopi</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Création de contenus IA</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Analytics prédictifs</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Support 24/7</a></li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Ressources</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Cas d'usage</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Webinaires</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">01 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">contact@formation-ia.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">123 Avenue Innovation<br />75001 Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} FormationIA. Tous droits réservés.
          </div>
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-purple-400 transition-colors">CGU</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
