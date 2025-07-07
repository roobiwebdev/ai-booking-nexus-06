import React, { useState } from "react";
import {
  Calendar,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Shield,
} from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactSection = ({ data }) => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    centerSize: "",
    needs: "",
    preferredTime: "",
    urgency: "",
  });

  if (!data) return null;

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée avec succès !",
      description:
        "Nous vous recontactons dans les 2h pour programmer votre démo personnalisée.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      role: "",
      centerSize: "",
      needs: "",
      preferredTime: "",
      urgency: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-20 my-[-80px] sm:my-0 w-full flex flex-col justify-center items-center"
    >
      <div className="container w-full px-6 flex flex-col justify-center items-center">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {data.title} <br />
              <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#9487FC] via-[#6E4DF2] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
                {data.subtitle}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {data.description}
            </p>
          </div>
        </AnimatedSection>

        <div className="w-full sm:max-w-6xl mx-auto grid justify-center items-center md:justify-start md:items-start md:grid-cols-2 gap-y-0 md:gap-12">
          {/* Contact Form */}
          <AnimatedSection>
            <div className="w-96 md:w-full glass-card rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-6 h-6 text-[#6645E8]" />
                <h3 className="text-2xl font-bold text-white">
                  Planifier ma démo
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Votre nom*"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="bg-gray-800/50 border-[#6645E8]/30 text-white placeholder:text-gray-400"
                  />
                  <Input
                    type="email"
                    placeholder="votre@email.com*"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="bg-gray-800/50 border-[#6645E8]/30 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    placeholder="Téléphone*"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="bg-gray-800/50 border-[#6645E8]/30 text-white placeholder:text-gray-400"
                  />
                  <Input
                    placeholder="Nom de votre centre*"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    required
                    className="bg-gray-800/50 border-[#6645E8]/30 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Select
                    onValueChange={(value) => handleInputChange("role", value)}
                  >
                    <SelectTrigger className="bg-gray-800/50 border-[#6645E8]/30 text-white">
                      <SelectValue placeholder="Votre fonction*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="director">
                        Directeur/Directrice
                      </SelectItem>
                      <SelectItem value="pedagogical">
                        Responsable pédagogique
                      </SelectItem>
                      <SelectItem value="quality">
                        Responsable qualité
                      </SelectItem>
                      <SelectItem value="admin">
                        Responsable administratif
                      </SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select
                    onValueChange={(value) => handleInputChange("centerSize", value)}
                  >
                    <SelectTrigger className="bg-gray-800/50 border-[#6645E8]/30 text-white">
                      <SelectValue placeholder="Taille de votre centre*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">1-50 apprenants</SelectItem>
                      <SelectItem value="medium">51-200 apprenants</SelectItem>
                      <SelectItem value="large">201-500 apprenants</SelectItem>
                      <SelectItem value="enterprise">
                        500+ apprenants
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Select
                  onValueChange={(value) => handleInputChange("urgency", value)}
                >
                  <SelectTrigger className="bg-gray-800/50 border-[#6645E8]/30 text-white">
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
                  onChange={(e) => handleInputChange("needs", e.target.value)}
                  className="bg-gray-800/50 border-[#6645E8]/30 text-white placeholder:text-gray-400 min-h-[100px]"
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#6645E8] to-[#6645E8] hover:from-purple-700 hover:to-purple-900 text-white px-4 sm:px-8 py-4 rounded-xl font-semibold text-md sm:text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Envoyer ma demande
                </Button>

                <p className="text-sm text-gray-400 text-center">
                  * Champs obligatoires. Vos données sont protégées et ne seront
                  jamais partagées.
                </p>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Info, Demo Process, Guarantees */}
          <AnimatedSection>
            <div className="space-y-0 md:space-y-8">
              {/* Contact Info */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contactez-nous directement
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#6645E8]" />
                    <div>
                      <div className="text-white font-medium">
                        {data.contactInfo.phone}
                      </div>
                      <div className="text-sm text-gray-400">
                        {data.contactInfo.phoneHours}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#6645E8]" />
                    <div>
                      <div className="text-white font-medium">
                        {data.contactInfo.email}
                      </div>
                      <div className="text-sm text-gray-400">
                        {data.contactInfo.emailResponseTime}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#6645E8]" />
                    <div>
                      <div className="text-white font-medium">
                        {data.contactInfo.location}
                      </div>
                      <div className="text-sm text-gray-400">
                        {data.contactInfo.locationNote}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Process */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Comment se déroule la démo ?
                </h3>
                <div className="space-y-4">
                  {data.demoProcess.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-[#6645E8] rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                        {step.stepNumber}
                      </div>
                      <div>
                        <div className="text-white font-medium">
                          {step.title}
                        </div>
                        <div className="text-sm text-gray-400">
                          {step.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantees */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Nos garanties
                </h3>
                <div className="space-y-3">
                  {data.guarantees.map((item, idx) => {
                    const Icon = item.icon === "Shield" ? Shield : CheckCircle;
                    return (
                      <div key={idx} className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Final CTA */}
        <AnimatedSection>
          <div className="w-full flex flex-col justify-center items-center text-center md:mt-16">
            <div className="glass-card rounded p-6 mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                {data.finalCTA.title}
              </h3>
              <p className="text-gray-300 mb-6">{data.finalCTA.description}</p>
              <Button
                onClick={() =>
                  document
                    .querySelector("form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-gradient-to-r from-[#6645E8] to-[#6645E8] hover:from-[#6645E8] hover:to-[#6645E8] text-white px-8 py-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                {data.finalCTA.buttonText}
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
