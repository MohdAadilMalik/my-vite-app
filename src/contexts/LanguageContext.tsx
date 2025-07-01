import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, languages } from "@/data/translations";

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (languageCode: string) => void;
  availableLanguages: Language[];
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages[0],
  );

  const setLanguage = (languageCode: string) => {
    const language =
      languages.find((l) => l.code === languageCode) || languages[0];
    setCurrentLanguage(language);
    localStorage.setItem("language", languageCode);
  };

  const t = (key: string): string => {
    return currentLanguage.translations[key] || key;
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      const language =
        languages.find((l) => l.code === savedLanguage) || languages[0];
      setCurrentLanguage(language);
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        availableLanguages: languages,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
