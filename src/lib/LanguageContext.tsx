import { createContext, useContext, useState } from "react";

type Language = "en" | "fa";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (en: string, fa: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("fa");

  const toggleLang = () => setLang((l) => (l === "en" ? "fa" : "en"));

  const t = (en: string, fa: string) => (lang === "en" ? en : fa);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      <div dir={lang === "fa" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}