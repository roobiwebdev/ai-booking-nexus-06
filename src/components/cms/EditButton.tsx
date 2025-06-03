
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import ContentEditor from './ContentEditor';

const EditButton: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Condition pour afficher le bouton (par exemple, si on est en mode dev ou avec un paramètre URL)
  const showEditButton = process.env.NODE_ENV === 'development' || 
                         window.location.search.includes('edit=true');

  if (!showEditButton) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 z-40">
        <Button
          onClick={() => setIsEditing(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
          size="lg"
        >
          <Edit className="w-4 h-4 mr-2" />
          Éditer le contenu
        </Button>
      </div>

      {isEditing && (
        <ContentEditor onClose={() => setIsEditing(false)} />
      )}
    </>
  );
};

export default EditButton;
