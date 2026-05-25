import { useLang } from "@/lib/language";

export function Hero() {
  const { lang, t } = useLang();
  return (
    <section id="top" className="relative pt-20 pb-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.74 0.13 85 / 30%) 0%, transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.78 0.15 70 / 25%) 0%, transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="text-gold/60 text-3xl mb-6" style={{ fontFamily: "var(--font-serif)" }}>❦</div>
        <h1 className="text-6xl md:text-8xl text-gold mb-4 tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
          {lang === "fa" ? "گوشنو" : "Goosheno"}
        </h1>
        <div className="text-xl md:text-2xl text-cream/80 mb-2" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
          {lang === "fa" ? "Goosheno" : "گوشنو"}
        </div>
        <p className="text-base md:text-lg text-gold/80 mt-6 mb-4 uppercase tracking-[0.3em]">
          {t("hero.subtitle")}
        </p>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed mb-12">
          {t("hero.desc")}
        </p>
        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-gold border border-gold/20">
          <iframe
            title="Goosheno on Spotify"
            src="https://open.spotify.com/embed/show/5GfO62XP7wIEeetNNxl2tC?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder={0}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
