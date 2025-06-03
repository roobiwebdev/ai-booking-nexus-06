
import React, { createContext, useContext, ReactNode } from 'react';
import { useCMSContent } from '@/hooks/useCMSContent';
import { CMSContent } from '@/types/cms';

interface CMSContextType {
  content: CMSContent;
  loading: boolean;
  error: string | null;
  updateContent: (newContent: Partial<CMSContent>) => Promise<void>;
  isStatic: boolean;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};

interface CMSProviderProps {
  children: ReactNode;
}

export const CMSProvider: React.FC<CMSProviderProps> = ({ children }) => {
  const cmsData = useCMSContent();

  return (
    <CMSContext.Provider value={cmsData}>
      {children}
    </CMSContext.Provider>
  );
};

export default CMSProvider;
