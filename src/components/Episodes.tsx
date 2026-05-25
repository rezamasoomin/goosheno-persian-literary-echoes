import { useLang } from "../lib/LanguageContext";
import { episodes } from "../data/episodes";

export default function Episodes() {
  const { t } = useLang();

  return (
    <section id="episodes" className="bg-[#0d0d12] py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-400 mb-8 text-center">
          {t("Episodes", "قسمت‌ها")}
        </h2>

        <div className="w-16 h-px bg-amber-600/50 mx-auto mb-12" />

        <div className="flex flex-col gap-8">
          {episodes.map((ep) => (
            <div
              key={ep.id}
              className="border border-amber-900/30 bg-amber-900/10 rounded-xl p-6 hover:border-amber-600/40 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-amber-300 font-semibold text-lg">
                    {t(ep.titleEn, ep.titleFa)}
                  </h3>
                  <p className="text-amber-100/40 text-sm mt-1">
                    {ep.date}
                  </p>
                </div>
                <span className="text-amber-600/50 text-sm font-mono">
                  #{ep.id}
                </span>
              </div>

              <p className="text-amber-100/60 text-sm leading-relaxed mb-4">
                {t(ep.descriptionEn, ep.descriptionFa)}
              </p>

              <iframe
                src={`https://open.spotify.com/embed/show/${ep.spotifyId}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}