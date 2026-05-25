import { useLang } from "@/lib/language";

const platforms = [
  { name: "Spotify", url: "https://open.spotify.com/show/5GfO62XP7wIEeetNNxl2tC" },
  { name: "Apple Podcasts", url: "https://podcasts.apple.com/" },
  { name: "Podbean", url: "https://www.podbean.com/" },
  { name: "Castbox", url: "https://castbox.fm/" },
];

export function ListenOn() {
  const { t } = useLang();
  return (
    <section id="listen" className="py-24 px-6 border-y border-border/40 bg-card/30">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl text-gold mb-4 ornament inline-block">{t("listen.title")}</h2>
        <p className="text-muted-foreground mb-12">{t("listen.desc")}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-gold/40 text-cream hover:bg-gradient-gold hover:text-primary-foreground hover:border-transparent transition-all shadow-elegant"
            >
              {p.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
