
import { useState, useEffect } from 'react';
import { CMSContent } from '@/types/cms';

// Configuration pour différents environnements CMS
const CMS_CONFIG = {
  // Mode statique (actuel)
  static: true,
  // URL de l'API Strapi (à configurer plus tard)
  strapiUrl: process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337',
  // Token d'API (à configurer plus tard)  
  apiToken: process.env.REACT_APP_STRAPI_TOKEN || '',
};

// Contenu statique par défaut (sera migré vers Strapi)
const defaultContent: CMSContent = {
  hero: {
    badge: "L'IA révolutionnaire pour centres de formation",
    title: "Automatisez votre centre avec l'IA",
    subtitle: "Gagnez 15h par semaine grâce à notre outil IA tout-en-un : gestion administrative automatique, conformité Qualiopi, création de contenus et suivi des apprenants.",
    ctaPrimary: "Réserver une démo gratuite",
    ctaSecondary: "Voir la démonstration (2min)",
    trustIndicators: [
      { icon: "users", text: "500+ centres déjà équipés" },
      { icon: "shield", text: "Conformité Qualiopi garantie" },
      { icon: "headphones", text: "Support IA 24/7" }
    ]
  },
  benefits: [
    {
      id: "time-saving",
      icon: "Clock",
      title: "Gain de temps radical",
      description: "Économisez 15h par semaine grâce à l'automatisation complète des tâches administratives répétitives.",
      metric: "75% de temps économisé"
    },
    {
      id: "qualiopi",
      icon: "Shield", 
      title: "Conformité Qualiopi automatique",
      description: "Notre IA s'assure que tous vos processus respectent automatiquement les critères Qualiopi en temps réel.",
      metric: "100% de conformité"
    },
    // ... autres bénéfices
  ],
  socialProof: {
    stats: [
      { label: "Centres équipés", value: "500+" },
      { label: "Gagnées / semaine", value: "15h" },
      { label: "Satisfaction client", value: "98%" },
      { label: "Support IA", value: "24/7" }
    ],
    testimonials: [
      {
        id: "marie-dubois",
        name: "Marie Dubois",
        role: "Directrice pédagogique",
        company: "FormationPro Lyon",
        content: "Notre productivité a explosé ! 15h de gagnées par semaine, conformité Qualiopi automatique. L'IA anticipe même nos besoins.",
        rating: 5,
        avatar: "MD"
      }
      // ... autres témoignages
    ],
    partners: [
      { id: "qualiopi", name: "Qualiopi", logo: "🏆" },
      { id: "france-competences", name: "France Compétences", logo: "🇫🇷" }
      // ... autres partenaires
    ]
  },
  demo: {
    title: "Découvrez l'outil en action en 2 minutes",
    subtitle: "Voyez comment notre IA transforme concrètement la gestion de votre centre de formation",
    features: [
      {
        icon: "Monitor",
        title: "Dashboard intelligent", 
        description: "Vue d'ensemble temps réel de votre centre avec KPIs automatiques"
      }
      // ... autres fonctionnalités
    ]
  },
  beforeAfter: {
    before: [
      "15h/semaine perdues en tâches administratives",
      "Stress permanent des audits Qualiopi",
      // ... autres points
    ],
    after: [
      "15h/semaine libérées pour la pédagogie",
      "Conformité Qualiopi automatique et garantie", 
      // ... autres points
    ],
    roi: [
      { label: "ROI", value: "300%" },
      { label: "Économies mensuelles", value: "€3000" }
    ]
  },
  faq: [
    {
      id: "implementation-time",
      question: "Combien de temps faut-il pour implémenter l'outil ?",
      answer: "L'implémentation complète prend entre 24h et 48h maximum. Notre équipe technique s'occupe de tout : migration des données, formation de vos équipes (30 minutes), et paramétrage personnalisé."
    }
    // ... autres FAQ
  ],
  contact: {
    title: "Réservez votre démo personnalisée gratuite",
    subtitle: "Découvrez en 30 minutes comment notre IA peut transformer votre centre de formation. Démo adaptée à vos besoins spécifiques.",
    phone: "01 23 45 67 89",
    email: "demo@formation-ia.com", 
    address: "Paris & visioconférence",
    process: [
      {
        step: 1,
        title: "Analyse de vos besoins (10 min)",
        description: "Compréhension de votre contexte actuel"
      },
      {
        step: 2, 
        title: "Démonstration personnalisée (15 min)",
        description: "Parcours adapté à votre secteur d'activité"
      },
      {
        step: 3,
        title: "Questions & calcul ROI (5 min)", 
        description: "Estimation de votre retour sur investissement"
      }
    ],
    guarantees: [
      { icon: "CheckCircle", text: "Démo 100% gratuite et sans engagement" },
      { icon: "Clock", text: "Réponse garantie sous 2h ouvrées" },
      { icon: "Shield", text: "Données 100% sécurisées (RGPD)" },
      { icon: "Shield", text: "Aucune prospection commerciale" }
    ]
  }
};

export const useCMSContent = () => {
  const [content, setContent] = useState<CMSContent>(defaultContent);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = async () => {
    if (CMS_CONFIG.static) {
      // Mode statique - utilise le contenu par défaut
      return content;
    }

    setLoading(true);
    setError(null);

    try {
      // Future intégration Strapi
      const response = await fetch(`${CMS_CONFIG.strapiUrl}/api/landing-page?populate=deep`, {
        headers: {
          'Authorization': `Bearer ${CMS_CONFIG.apiToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Erreur lors du chargement du contenu');
      }

      const data = await response.json();
      
      // Transformation des données Strapi vers notre format
      const transformedContent = transformStrapiData(data);
      setContent(transformedContent);
      
      return transformedContent;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      console.error('CMS Content Error:', err);
      return defaultContent; // Fallback vers le contenu statique
    } finally {
      setLoading(false);
    }
  };

  const updateContent = async (newContent: Partial<CMSContent>) => {
    if (CMS_CONFIG.static) {
      // Mode statique - mise à jour locale uniquement
      setContent(prev => ({ ...prev, ...newContent }));
      return;
    }

    setLoading(true);
    try {
      // Future intégration Strapi pour la mise à jour
      const response = await fetch(`${CMS_CONFIG.strapiUrl}/api/landing-page`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${CMS_CONFIG.apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: newContent }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour');
      }

      await fetchContent(); // Recharger le contenu
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de mise à jour');
      console.error('CMS Update Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return {
    content,
    loading,
    error,
    fetchContent,
    updateContent,
    isStatic: CMS_CONFIG.static
  };
};

// Fonction de transformation des données Strapi (à implémenter plus tard)
const transformStrapiData = (strapiData: any): CMSContent => {
  // Cette fonction transformera les données de Strapi vers notre format
  // Sera implémentée lors de l'intégration Strapi
  return strapiData;
};

export default useCMSContent;
