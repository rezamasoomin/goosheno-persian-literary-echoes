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

        <div className="flex flex-col gap-3">
          {episodes.map((ep) => {
            const isOpen = openId === ep.id;
            return (
              <div
                key={ep.id}
                className={`rounded-xl overflow-hidden border transition-all duration-300 ${
                  isOpen
                    ? "border-amber-600/50 bg-gradient-to-b from-amber-900/20 to-amber-900/10"
                    : "border-amber-900/30 bg-amber-900/10 hover:border-amber-800/50"
                }`}
              >
                {/* Header row — always visible */}
                <button
                  onClick={() => setOpenId(isOpen ? null : ep.id)}
                  className="w-full px-6 py-4 flex items-center gap-4 text-start group"
                >
                  {/* Episode number */}
                  <span className={`shrink-0 text-xs font-mono w-8 text-center transition-colors ${
                    isOpen ? "text-amber-400" : "text-amber-700"
                  }`}>
                    {ep.id}
                  </span>

                  {/* Divider */}
                  <span className="shrink-0 w-px h-8 bg-amber-900/50" />

                  {/* Title */}
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold text-sm leading-snug transition-colors ${
                      isOpen ? "text-amber-300" : "text-amber-200/80 group-hover:text-amber-300"
                    }`}>
                      {t(ep.titleEn, ep.titleFa)}
                    </p>
                    {/* Show subtitle only when closed */}
                    {!isOpen && (
                      <p className="text-amber-100/30 text-xs mt-0.5 truncate">
                        {t(ep.descriptionEn, ep.descriptionFa)}
                      </p>
                    )}
                  </div>

                  {/* Date */}
                  <span className="shrink-0 text-amber-700/60 text-xs hidden sm:block">
                    {ep.date}
                  </span>

                  {/* Chevron */}
                  <span className={`shrink-0 text-amber-600 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}>
                    ▾
                  </span>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div className="px-6 pb-6">
                    {/* Description card */}
                    <div className="mb-5 p-4 rounded-lg bg-black/30 border border-amber-900/20">
                      <div className="flex items-start gap-2">
                        <span className="text-amber-600/60 mt-0.5 text-lg leading-none shrink-0">📖</span>
                        <p className="text-amber-100/70 text-sm leading-relaxed">
                          {t(ep.descriptionEn, ep.descriptionFa)}
                        </p>
                      </div>
                    </div>

                    {/* Spotify player */}
                    <iframe
                      src={`https://open.spotify.com/embed/episode/${ep.spotifyId}?utm_source=generator&theme=0`}
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-lg"
                    />

                    {/* Date on mobile */}
                    <p className="text-amber-700/40 text-xs mt-3 sm:hidden">{ep.date}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}