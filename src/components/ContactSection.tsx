
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Phone, Mail, MapPin, Clock, Users } from 'lucide-react';
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
    
    // Simulate form submission
    toast({
      title: "Demande envoyée avec succès !",
      description: "Nous vous recontactons dans les 2h pour programmer votre démo personnalisée.",
    });

    // Reset form
    setFormData({
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
            30 minutes pour découvrir comment notre IA peut transformer votre centre de formation
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="glass-card rounded-2xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Programmez votre démo</h3>
              <div className="flex items-center gap-2 text-green-400 mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Réponse garantie sous 2h</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">Démo 100% personnalisée à vos besoins</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nom complet *</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-gray-800/50 border-purple-500/30 text-white"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email professionnel *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-gray-800/50 border-purple-500/30 text-white"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Téléphone *</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-gray-800/50 border-purple-500/30 text-white"
                    placeholder="06 XX XX XX XX"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nom du centre *</label>
                  <Input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="bg-gray-800/50 border-purple-500/30 text-white"
                    placeholder="Nom de votre centre"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Votre fonction</label>
                  <Select onValueChange={(value) => handleInputChange('role', value)}>
                    <SelectTrigger className="bg-gray-800/50 border-purple-500/30 text-white">
                      <SelectValue placeholder="Sélectionnez votre rôle" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-purple-500/30">
                      <SelectItem value="directeur">Directeur/Directrice</SelectItem>
                      <SelectItem value="responsable-pedagogique">Responsable pédagogique</SelectItem>
                      <SelectItem value="coordinateur">Coordinateur/Coordinatrice</SelectItem>
                      <SelectItem value="responsable-qualite">Responsable qualité</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Taille du centre</label>
                  <Select onValueChange={(value) => handleInputChange('centerSize', value)}>
                    <SelectTrigger className="bg-gray-800/50 border-purple-500/30 text-white">
                      <SelectValue placeholder="Nombre d'apprenants/an" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-purple-500/30">
                      <SelectItem value="1-50">1 à 50 apprenants</SelectItem>
                      <SelectItem value="51-200">51 à 200 apprenants</SelectItem>
                      <SelectItem value="201-500">201 à 500 apprenants</SelectItem>
                      <SelectItem value="500+">Plus de 500 apprenants</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Principaux défis actuels</label>
                <Textarea
                  value={formData.needs}
                  onChange={(e) => handleInputChange('needs', e.target.value)}
                  className="bg-gray-800/50 border-purple-500/30 text-white"
                  placeholder="Ex: gestion administrative chronophage, conformité Qualiopi, suivi des apprenants..."
                  rows={3}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Créneau préféré</label>
                  <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                    <SelectTrigger className="bg-gray-800/50 border-purple-500/30 text-white">
                      <SelectValue placeholder="Quand vous contacter ?" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-purple-500/30">
                      <SelectItem value="matin">Matin (9h-12h)</SelectItem>
                      <SelectItem value="apres-midi">Après-midi (14h-17h)</SelectItem>
                      <SelectItem value="fin-journee">Fin de journée (17h-19h)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Urgence du projet</label>
                  <Select onValueChange={(value) => handleInputChange('urgency', value)}>
                    <SelectTrigger className="bg-gray-800/50 border-purple-500/30 text-white">
                      <SelectValue placeholder="Délai souhaité" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-purple-500/30">
                      <SelectItem value="immediat">Immédiat (cette semaine)</SelectItem>
                      <SelectItem value="1-mois">Dans le mois</SelectItem>
                      <SelectItem value="3-mois">Dans les 3 mois</SelectItem>
                      <SelectItem value="exploration">Simple exploration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Réserver ma démo gratuite
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contactez-nous directement</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Appelez-nous</div>
                    <div className="text-purple-400">01 23 45 67 89</div>
                    <div className="text-sm text-gray-400">Lun-Ven 9h-18h</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email direct</div>
                    <div className="text-purple-400">demo@formation-ia.com</div>
                    <div className="text-sm text-gray-400">Réponse sous 2h</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Adresse</div>
                    <div className="text-purple-400">123 Avenue Innovation</div>
                    <div className="text-sm text-gray-400">75001 Paris, France</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Processus de démo</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div>
                    <div className="text-white font-medium">Analyse de vos besoins</div>
                    <div className="text-sm text-gray-400">Nous étudions votre contexte (10 min)</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div>
                    <div className="text-white font-medium">Démonstration personnalisée</div>
                    <div className="text-sm text-gray-400">Présentation adaptée à vos défis (15 min)</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div>
                    <div className="text-white font-medium">Calcul ROI personnalisé</div>
                    <div className="text-sm text-gray-400">Estimation précise de vos gains (5 min)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Nos garanties</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Aucun engagement lors de la démo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Réponse sous 2h garantie</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Expert métier dédié</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Suivi personnalisé inclus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
