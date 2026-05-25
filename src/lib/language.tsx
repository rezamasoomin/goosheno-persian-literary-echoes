import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type Lang = "en" | "fa";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
};

const translations = {
  en: {
    "nav.episodes": "Episodes",
    "nav.listen": "Listen On",
    "nav.about": "About",
    "hero.title": "Goosheno",
    "hero.subtitle": "Persian Literary Podcast",
    "hero.desc": "Retelling the timeless treasures of Persian literature — Layla and Majnun, Shahnameh, Khosrow and Shirin — in simple, accessible language.",
    "hero.listen": "Listen Now",
    "episodes.title": "Episodes",
    "episodes.desc": "Stories told slowly, the way they were meant to be heard.",
    "listen.title": "Listen On",
    "listen.desc": "Available wherever you find your podcasts.",
    "about.title": "About Goosheno",
    "about.p1": "Goosheno is a Persian literary podcast dedicated to opening the doors of classical Persian literature to every listener. Verses once locked behind centuries of language and tradition become living stories again.",
    "about.p2": "From the desert love of Layla and Majnun to the heroic verses of the Shahnameh, each episode is a careful retelling — faithful to the soul of the text, told in the warmth of everyday Persian.",
    "footer.tagline": "Persian Literary Podcast",
    "footer.rights": "All rights reserved.",
  },
  fa: {
    "nav.episodes": "اپیزودها",
    "nav.listen": "شنیدن در",
    "nav.about": "درباره",
    "hero.title": "گوشنو",
    "hero.subtitle": "پادکست ادبی گوشنو",
    "hero.desc": "بازگویی گنجینه‌های جاودانهٔ ادب پارسی — لیلی و مجنون، شاهنامه، خسرو و شیرین — به زبانی ساده و دلنشین.",
    "hero.listen": "بشنوید",
    "episodes.title": "اپیزودها",
    "episodes.desc": "داستان‌هایی که آرام روایت می‌شوند، همان‌گونه که باید شنیده شوند.",
    "listen.title": "بشنوید در",
    "listen.desc": "در هر پلتفرمی که پادکست گوش می‌دهید، در دسترس است.",
    "about.title": "دربارهٔ گوشنو",
    "about.p1": "گوشنو پادکستی ادبی است که می‌کوشد دروازه‌های ادب کلاسیک پارسی را به روی همهٔ شنوندگان بگشاید؛ ابیاتی که قرن‌ها در پس زبان و سنت پنهان مانده‌اند، بار دیگر به داستان‌هایی زنده بدل می‌شوند.",
    "about.p2": "از عشق صحرایی لیلی و مجنون تا ابیات پهلوانی شاهنامه، هر اپیزود بازگویی‌ای است وفادار به روح متن، با گرمای فارسی روزمره.",
    "footer.tagline": "پادکست ادبی گوشنو",
    "footer.rights": "تمامی حقوق محفوظ است.",
  },
} as const;

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const dir = lang === "fa" ? "rtl" : "ltr";

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    }
  }, [lang, dir]);

  const t = (key: string) => (translations[lang] as Record<string, string>)[key] ?? key;

  return (
    <LangContext.Provider value={{ lang, setLang, t, dir }}>
      <div dir={dir}>{children}</div>
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
