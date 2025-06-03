
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit, Save, X, Plus, Trash } from 'lucide-react';
import { CMSContent } from '@/types/cms';
import { useCMSContent } from '@/hooks/useCMSContent';
import { useToast } from '@/hooks/use-toast';

interface ContentEditorProps {
  onClose: () => void;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ onClose }) => {
  const { content, updateContent, loading, isStatic } = useCMSContent();
  const { toast } = useToast();
  const [editedContent, setEditedContent] = useState<CMSContent>(content);

  const handleSave = async () => {
    try {
      await updateContent(editedContent);
      toast({
        title: "Contenu sauvegardé",
        description: "Les modifications ont été appliquées avec succès.",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder les modifications.",
        variant: "destructive",
      });
    }
  };

  const updateHeroContent = (field: keyof typeof content.hero, value: string) => {
    setEditedContent(prev => ({
      ...prev,
      hero: { ...prev.hero, [field]: value }
    }));
  };

  const updateContactContent = (field: keyof typeof content.contact, value: string) => {
    setEditedContent(prev => ({
      ...prev,
      contact: { ...prev.contact, [field]: value }
    }));
  };

  if (!isStatic) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-gray-900 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              Éditeur de contenu
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-white">
            <p className="text-gray-300">
              L'éditeur de contenu sera disponible après l'intégration avec Strapi CMS.
              En mode statique, les modifications se font directement dans le code.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-auto bg-gray-900 border-purple-500/30">
        <CardHeader className="sticky top-0 bg-gray-900 border-b border-purple-500/30">
          <CardTitle className="text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Edit className="w-5 h-5 text-purple-400" />
              Éditeur de contenu
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSave} disabled={loading} className="bg-purple-600 hover:bg-purple-700">
                <Save className="w-4 h-4 mr-2" />
                Sauvegarder
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="p-6">
          <Tabs defaultValue="hero" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-gray-800">
              <TabsTrigger value="hero" className="text-white">Hero</TabsTrigger>
              <TabsTrigger value="benefits" className="text-white">Bénéfices</TabsTrigger>
              <TabsTrigger value="testimonials" className="text-white">Témoignages</TabsTrigger>
              <TabsTrigger value="faq" className="text-white">FAQ</TabsTrigger>
              <TabsTrigger value="contact" className="text-white">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="hero" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-300">Badge</label>
                  <Input
                    value={editedContent.hero.badge}
                    onChange={(e) => updateHeroContent('badge', e.target.value)}
                    className="bg-gray-800 border-purple-500/30 text-white"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300">Titre principal</label>
                  <Input
                    value={editedContent.hero.title}
                    onChange={(e) => updateHeroContent('title', e.target.value)}
                    className="bg-gray-800 border-purple-500/30 text-white"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300">Sous-titre</label>
                  <Textarea
                    value={editedContent.hero.subtitle}
                    onChange={(e) => updateHeroContent('subtitle', e.target.value)}
                    className="bg-gray-800 border-purple-500/30 text-white min-h-[100px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-300">CTA Principal</label>
                    <Input
                      value={editedContent.hero.ctaPrimary}
                      onChange={(e) => updateHeroContent('ctaPrimary', e.target.value)}
                      className="bg-gray-800 border-purple-500/30 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300">CTA Secondaire</label>
                    <Input
                      value={editedContent.hero.ctaSecondary}
                      onChange={(e) => updateHeroContent('ctaSecondary', e.target.value)}
                      className="bg-gray-800 border-purple-500/30 text-white"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-300">Titre de la section</label>
                  <Input
                    value={editedContent.contact.title}
                    onChange={(e) => updateContactContent('title', e.target.value)}
                    className="bg-gray-800 border-purple-500/30 text-white"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300">Sous-titre</label>
                  <Textarea
                    value={editedContent.contact.subtitle}
                    onChange={(e) => updateContactContent('subtitle', e.target.value)}
                    className="bg-gray-800 border-purple-500/30 text-white"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-300">Téléphone</label>
                    <Input
                      value={editedContent.contact.phone}
                      onChange={(e) => updateContactContent('phone', e.target.value)}
                      className="bg-gray-800 border-purple-500/30 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300">Email</label>
                    <Input
                      value={editedContent.contact.email}
                      onChange={(e) => updateContactContent('email', e.target.value)}
                      className="bg-gray-800 border-purple-500/30 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300">Adresse</label>
                    <Input
                      value={editedContent.contact.address}
                      onChange={(e) => updateContactContent('address', e.target.value)}
                      className="bg-gray-800 border-purple-500/30 text-white"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Autres onglets pour benefits, testimonials, faq... */}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentEditor;
