import { useLang } from "../lib/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0f] px-4 pt-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#2a1a0a_0%,_#0a0a0f_70%)] pointer-events-none" />

      {/* Stars effect */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(1px 1px at 20% 30%, #c9a84c 0%, transparent 100%), radial-gradient(1px 1px at 80% 10%, #c9a84c 0%, transparent 100%), radial-gradient(1px 1px at 50% 60%, #c9a84c 0%, transparent 100%), radial-gradient(1px 1px at 10% 80%, #c9a84c 0%, transparent 100%), radial-gradient(1px 1px at 90% 70%, #c9a84c 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <p className="text-amber-500/60 text-sm tracking-[0.3em] uppercase mb-4">
          {t("Persian Literary Podcast", "پادکست ادبی فارسی")}
        </p>

        <h1 className="text-7xl font-bold text-amber-400 mb-2 tracking-wide">
          {t("Goosheno", "گوشنو")}
        </h1>

        <p className="text-amber-100/40 text-lg mb-2">گوشنو</p>

        <p className="text-amber-100/60 text-lg mt-6 leading-relaxed max-w-xl mx-auto">
          {t(
            "Retelling classic Persian literary treasures in simple, accessible language.",
            "بازگویی گنج‌های ادبی کلاسیک فارسی به زبانی ساده و روان"
          )}
        </p>

        <div className="mt-10">
          <iframe
            src="https://open.spotify.com/embed/show/5GfO62XP7wIEeetNNxl2tC?utm_source=generator&theme=0"
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