import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-gray-900/50 border-t border-[#6645E8]/20 w-full overflow-hidden">
      <div className="w-full max-w-[90vw] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Company */}
          <div className="w-full">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#6645E8] to-[#6645E8] rounded-lg"></div>
              <span className="text-xl font-bold text-white">FormationIA</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              L'intelligence artificielle au service de votre centre de formation. 
              Automatisation, conformité et excellence pédagogique.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-[#6645E8]/20 rounded-lg flex items-center justify-center hover:bg-[#6645E8]/40 transition-colors">
                <Linkedin className="w-4 h-4 text-[#6645E8]" />
              </a>
              <a href="#" className="w-9 h-9 bg-[#6645E8]/20 rounded-lg flex items-center justify-center hover:bg-[#6645E8]/40 transition-colors">
                <Twitter className="w-4 h-4 text-[#6645E8]" />
              </a>
              <a href="#" className="w-9 h-9 bg-[#6645E8]/20 rounded-lg flex items-center justify-center hover:bg-[#6645E8]/40 transition-colors">
                <Youtube className="w-4 h-4 text-[#6645E8]" />
              </a>
            </div>
          </div>

          {/* Solution */}
          <div className="w-full">
            <h3 className="text-lg font-semibold text-white mb-4">Notre solution</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#6645E8] transition-colors">Fonctionnalités</a></li>
              <li><a href="#" className="hover:text-[#6645E8] transition-colors">Conformité Qualiopi</a></li>
              <li><a href="#" className="hover:text-[#6645E8] transition-colors">Création de contenus IA</a></li>
              <li><a href="#" className="hover:text-[#6645E8] transition-colors">Analytics prédictifs</a></li>
              <li><a href="#" className="hover:text-[#6645E8] transition-colors">Support 24/7</a></li>
            </ul>
          </div>

          {/* Ressources */}
          <div className="w-full">
            <h3 className="text-lg font-semibold text-white mb-4">Ressources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#6645E8] transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-[#6645E8] transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-[#6645E8] transition-colors">Cas d'usage</a></li>
              <li><a href="#" className="hover:text-[#6645E8] transition-colors">Webinaires</a></li>
              <li><a href="#" className="hover:text-[#6645E8] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#6645E8]" />
                <span className="text-gray-400 text-sm">01 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#6645E8]" />
                <span className="text-gray-400 text-sm">contact@formation-ia.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#6645E8]" />
                <span className="text-gray-400 text-sm">123 Avenue Innovation<br />75001 Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#6645E8]/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} FormationIA. Tous droits réservés.
          </div>
          <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
            <a href="#" className="hover:text-[#6645E8] transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-[#6645E8] transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-[#6645E8] transition-colors">CGU</a>
            <a href="#" className="hover:text-[#6645E8] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
