import { useState } from "react";
import { useLang } from "../lib/LanguageContext";
import { episodes } from "../data/episodes";

export default function Episodes() {
  const { t } = useLang();
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="episodes" className="bg-[#0d0d12] py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-400 mb-8 text-center">
          {t("Episodes", "قسمت‌ها")}
        </h2>

        <div className="w-16 h-px bg-amber-600/50 mx-auto mb-12" />

        <div className="flex flex-col gap-4">
          {episodes.map((ep) => (
            <div
              key={ep.id}
              className="border border-amber-900/30 bg-amber-900/10 rounded-xl overflow-hidden hover:border-amber-600/40 transition-all"
            >
              <button
                onClick={() => setOpenId(openId === ep.id ? null : ep.id)}
                className="w-full p-6 text-start flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-amber-300 font-semibold text-base">
                    {t(ep.titleEn, ep.titleFa)}
                  </h3>
                  <p className="text-amber-100/50 text-sm mt-1 leading-relaxed">
                    {t(ep.descriptionEn, ep.descriptionFa)}
                  </p>
                  <p className="text-amber-600/40 text-xs mt-2">{ep.date}</p>
                </div>
                <span className="text-amber-600/50 text-xl mt-1">
                  {openId === ep.id ? "▲" : "▼"}
                </span>
              </button>

              {openId === ep.id && (
                <div className="px-6 pb-6">
                  <iframe
                    src={`https://open.spotify.com/embed/episode/${ep.spotifyId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}