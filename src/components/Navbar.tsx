import { useLang } from "../lib/LanguageContext";

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 bg-black/80 backdrop-blur-sm border-b border-amber-900/30">
      <div className="flex items-center gap-3">
        <img src="/logo.jpg" alt="Goosheno" className="h-10 w-10 rounded-md object-cover" />
        <span className="text-amber-400 font-bold text-xl tracking-wider">
          {t("Goosheno", "گوشنو")}
        </span>
      </div>

      <div className="flex items-center gap-6">
        <a href="#episodes" className="text-amber-100/70 hover:text-amber-400 transition-colors text-sm">
          {t("Episodes", "قسمت‌ها")}
        </a>
        <a href="#about" className="text-amber-100/70 hover:text-amber-400 transition-colors text-sm">
          {t("About", "درباره")}
        </a>
        <a href="#listen" className="text-amber-100/70 hover:text-amber-400 transition-colors text-sm">
          {t("Listen On", "گوش بده")}
        </a>
        <button
          onClick={toggleLang}
          className="px-3 py-1 border border-amber-600/50 text-amber-400 text-sm rounded-full hover:bg-amber-600/20 transition-colors"
        >
          {lang === "en" ? "فارسی" : "English"}
        </button>
      </div>
    </nav>
  );
}