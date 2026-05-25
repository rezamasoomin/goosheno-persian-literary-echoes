import { useLang } from "../lib/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-hero.jpeg')" }}
      />

      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 text-center max-w-3xl mx-auto bg-black/40 backdrop-blur-sm rounded-3xl px-10 py-12 border border-amber-900/20">
  <p className="text-amber-500/80 text-sm tracking-[0.3em] uppercase mb-4">
    {t("Persian Literary Podcast", "پادکست ادبی فارسی")}
  </p>

  <h1 className="text-7xl font-bold text-amber-400 mb-2 tracking-wide">
    {t("Goosheno", "گوشنو")}
  </h1>

  <p className="text-amber-100/40 text-lg mb-2">گوشنو</p>

  <p className="text-amber-100/70 text-lg mt-6 leading-relaxed max-w-xl mx-auto">
    {t(
      "Retelling classic Persian literary treasures in simple, accessible language.",
      "بازگویی گنج‌های ادبی کلاسیک فارسی به زبانی ساده و روان"
    )}
  </p>

  <div className="mt-10">
    <iframe
      src="https://open.spotify.com/embed/episode/0DMmc3nC88IUUYgJrGPZma?utm_source=generator&theme=0"
      width="100%"
      height="152"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="rounded-xl max-w-xl mx-auto"
    />
  </div>

  <a
    href="#episodes"
    className="inline-block mt-8 px-8 py-3 bg-amber-600/20 border border-amber-600/50 text-amber-400 rounded-full hover:bg-amber-600/30 transition-colors"
  >
    {t("Browse Episodes", "مشاهده قسمت‌ها")}
  </a>
</div>
    </section>
  );
}