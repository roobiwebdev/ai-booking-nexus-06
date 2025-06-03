
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Phone, Mail, MapPin, Clock, Users, CheckCircle, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    centerSize: '',
    needs: '',
    preferredTime: '',
    urgency: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Demande envoyée avec succès !",
      description: "Nous vous recontactons dans les 2h pour programmer votre démo personnalisée.",
    });
    
    // Reset form
    setFormData({
      name: '', email: '', phone: '', company: '', role: '', centerSize: '', 
      needs: '', preferredTime: '', urgency: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Réservez votre démo
            <span className="neon-text"> personnalisée gratuite</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez en 30 minutes comment notre IA peut transformer votre centre de formation. 
            Démo adaptée à vos besoins spécifiques.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Planifier ma démo</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Votre nom*" 
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required 
                  className="bg-gray-800/50 border-purple-500/30 text-white placeholder:text-gray-400"
                />
                <Input 
                  type="email" 
                  placeholder="votre@email.com*" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required 
                  className="bg-gray-800/50 border-purple-500/30 text-white placeholder:text-gray-400"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  type="tel" 
                  placeholder="Téléphone*" 
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required 
                  className="bg-gray-800/50 border-purple-500/30 text-white placeholder:text-gray-400"
                />
                <Input 
                  placeholder="Nom de votre centre*" 
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  required 
                  className="bg-gray-800/50 border-purple-500/30 text-white placeholder:text-gray-400"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Select onValueChange={(value) => handleInputChange('role', value)}>
                  <SelectTrigger className="bg-gray-800/50 border-purple-500/30 text-white">
                    <SelectValue placeholder="Votre fonction*" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="director">Directeur/Directrice</SelectItem>
                    <SelectItem value="pedagogical">Responsable pédagogique</SelectItem>
                    <SelectItem value="quality">Responsable qualité</SelectItem>
                    <SelectItem value="admin">Responsable administratif</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={(value) => handleInputChange('centerSize', value)}>
                  <SelectTrigger className="bg-gray-800/50 border-purple-500/30 text-white">
                    <SelectValue placeholder="Taille de votre centre*" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">1-50 apprenants</SelectItem>
                    <SelectItem value="medium">51-200 apprenants</SelectItem>
                    <SelectItem value="large">201-500 apprenants</SelectItem>
                    <SelectItem value="enterprise">500+ apprenants</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Select onValueChange={(value) => handleInputChange('urgency', value)}>
                <SelectTrigger className="bg-gray-800/50 border-purple-500/30 text-white">
                  <SelectValue placeholder="Quand souhaitez-vous démarrer ?*" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">Dès que possible</SelectItem>
                  <SelectItem value="month">Dans le mois</SelectItem>
                  <SelectItem value="quarter">Dans le trimestre</SelectItem>
                  <SelectItem value="explore">Phase d'exploration</SelectItem>
                </SelectContent>
              </Select>

              <Textarea 
                placeholder="Décrivez vos principaux défis actuels (optionnel)"
                value={formData.needs}
                onChange={(e) => handleInputChange('needs', e.target.value)}
                className="bg-gray-800/50 border-purple-500/30 text-white placeholder:text-gray-400 min-h-[100px]"
              />

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Réserver ma démo gratuite (30 min)
              </Button>

              <p className="text-sm text-gray-400 text-center">
                * Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
              </p>
            </form>
          </div>

          {/* Informations de contact et processus */}
          <div className="space-y-8">
            {/* Contact direct */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contactez-nous directement</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-white font-medium">01 23 45 67 89</div>
                    <div className="text-sm text-gray-400">Lun-Ven 9h-18h</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-white font-medium">demo@formation-ia.com</div>
                    <div className="text-sm text-gray-400">Réponse sous 2h</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-white font-medium">Paris & visioconférence</div>
                    <div className="text-sm text-gray-400">Démos partout en France</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Processus de démo */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Comment se déroule la démo ?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">1</div>
                  <div>
                    <div className="text-white font-medium">Analyse de vos besoins (10 min)</div>
                    <div className="text-sm text-gray-400">Compréhension de votre contexte actuel</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">2</div>
                  <div>
                    <div className="text-white font-medium">Démonstration personnalisée (15 min)</div>
                    <div className="text-sm text-gray-400">Parcours adapté à votre secteur d'activité</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">3</div>
                  <div>
                    <div className="text-white font-medium">Questions & calcul ROI (5 min)</div>
                    <div className="text-sm text-gray-400">Estimation de votre retour sur investissement</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Garanties */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Nos garanties</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Démo 100% gratuite et sans engagement</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Réponse garantie sous 2h ouvrées</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Données 100% sécurisées (RGPD)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Aucune prospection commerciale</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA supplémentaire */}
        <div className="text-center mt-16">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Prêt à transformer votre centre ?</h3>
            <p className="text-gray-300 mb-6">
              Rejoignez les 500+ centres qui ont déjà automatisé leur gestion avec notre IA
            </p>
            <Button 
              onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Commencer maintenant
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
