import { useLang } from "@/lib/language";

const SHOW_ID = "5GfO62XP7wIEeetNNxl2tC";

// Featured episodes — Spotify episode IDs (placeholder examples; user can replace)
const episodes = [
  {
    id: "show",
    titleEn: "Layla and Majnun — The Desert Lovers",
    titleFa: "لیلی و مجنون — عاشقان صحرا",
    descEn: "The eternal tale of devotion that crossed deserts and centuries.",
    descFa: "حکایت جاودانهٔ دلدادگی که از صحراها و قرن‌ها گذشت.",
  },
  {
    id: "show",
    titleEn: "Shahnameh — The Book of Kings",
    titleFa: "شاهنامه — کتاب شاهان",
    descEn: "Ferdowsi's epic, told one hero at a time.",
    descFa: "حماسهٔ فردوسی، روایتی پهلوان به پهلوان.",
  },
  {
    id: "show",
    titleEn: "Khosrow and Shirin — A Royal Romance",
    titleFa: "خسرو و شیرین — عشق پادشاهانه",
    descEn: "Nezami's tender chronicle of love, loss, and longing.",
    descFa: "روایت لطیف نظامی از عشق، فقدان و اشتیاق.",
  },
];

export function Episodes() {
  const { lang, t } = useLang();
  return (
    <section id="episodes" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gold mb-4 ornament inline-block">
            {t("episodes.title")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t("episodes.desc")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((ep, i) => (
            <article
              key={i}
              className="bg-card/60 border border-border rounded-xl p-6 shadow-elegant backdrop-blur-sm hover:border-gold/50 transition-all group"
            >
              <div className="mb-4">
                <h3 className="text-xl text-cream mb-2 group-hover:text-gold transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                  {lang === "fa" ? ep.titleFa : ep.titleEn}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lang === "fa" ? ep.descFa : ep.descEn}
                </p>
              </div>
              <iframe
                title={ep.titleEn}
                src={`https://open.spotify.com/embed/show/${SHOW_ID}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                frameBorder={0}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
