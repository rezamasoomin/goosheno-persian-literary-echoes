import { useLang } from "@/lib/language";

export function Footer() {
  const { lang, t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 py-12 px-6 mt-12">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl text-gold" style={{ fontFamily: "var(--font-serif)" }}>❦</span>
          <div>
            <div className="text-gold font-semibold" style={{ fontFamily: "var(--font-serif)" }}>
              {lang === "fa" ? "گوشنو" : "Goosheno"}
            </div>
            <div className="text-xs text-muted-foreground">{t("footer.tagline")}</div>
          </div>
        </div>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a href="https://open.spotify.com/show/5GfO62XP7wIEeetNNxl2tC" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Spotify</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Twitter</a>
        </div>
        <div className="text-xs text-muted-foreground">
          © {year} Goosheno. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
