import { useLang } from "@/lib/language";
import logo from "@/assets/goosheno-logo.png";

export function Navbar() {
  const { lang, setLang, t } = useLang();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Goosheno logo" className="h-10 w-10 rounded-md object-contain" />
          <span className="text-xl font-semibold text-gold tracking-wide" style={{ fontFamily: "var(--font-serif)" }}>
            {lang === "fa" ? "گوشنو" : "Goosheno"}
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#episodes" className="hover:text-gold transition-colors">{t("nav.episodes")}</a>
          <a href="#listen" className="hover:text-gold transition-colors">{t("nav.listen")}</a>
          <a href="#about" className="hover:text-gold transition-colors">{t("nav.about")}</a>
        </nav>
        <button
          onClick={() => setLang(lang === "en" ? "fa" : "en")}
          className="px-4 py-2 rounded-full border border-gold/40 text-gold text-sm hover:bg-gold hover:text-primary-foreground transition-all"
          aria-label="Toggle language"
        >
          {lang === "en" ? "فا" : "EN"}
        </button>
      </div>
    </header>
  );
}
