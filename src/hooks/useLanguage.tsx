import { createContext, useContext, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  t: (typeof translations)[Language];
  otherLangs: Array<{ lang: Language; path: string }>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  // Determine language from URL path
  let lang: Language = "it"; // Default to Italian
  if (location.pathname.startsWith("/en")) {
    lang = "en";
  } else if (location.pathname.startsWith("/de")) {
    lang = "de";
  }

  const t = translations[lang];

  // Generate paths for other languages
  const otherLangs: Array<{ lang: Language; path: string }> = [
    { lang: "it", path: "/" },
    { lang: "en", path: "/en" },
    { lang: "de", path: "/de" },
  ].filter((item) => item.lang !== lang);

  return (
    <LanguageContext.Provider value={{ lang, t, otherLangs }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
