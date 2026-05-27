import { useLang } from "../lib/LanguageContext";

const platforms = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/show/5GfO62XP7wIEeetNNxl2tC",
    color: "#1DB954",
    icon: "🎵",
  },
  {
    name: "Apple Podcasts",
    url: "https://podcasts.apple.com/us/podcast/goosheno-%D9%BE%D8%A7%D8%AF%DA%A9%D8%B3%D8%AA-%D8%A7%D8%AF%D8%A8%DB%8C-%DA%AF%D9%88%D8%B4%D9%86%D9%88/id1505116534",
    color: "#fc3c44",
    icon: "🎙️",
  },
  {
    name: "Podbean",
    url: "https://www.podbean.com/podcast-detail/aefwg-f52d7/Goosheno",
    color: "#f47b20",
    icon: "🎧",
  },
  {
    name: "Castbox",
    url: "https://castbox.fm/channel/Goosheno-%D9%BE%D8%A7%D8%AF%DA%A9%D8%B3%D8%AA-%D8%A7%D8%AF%D8%A8%DB%8C-%DA%AF%D9%88%D8%B4%D9%86%D9%88-id2717720?country=us",
    color: "#f0a500",
    icon: "📻",
  },
  {
    name: "Telegram",
    url: "https://t.me/gooshenoyyd",
    icon: "✈️",
  },
];

export default function ListenOn() {
  const { t } = useLang();

  return (
    <section id="listen" className="bg-[#080808] py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-amber-400 mb-8">
          {t("Listen On", "گوش بده در")}
        </h2>

        <div className="w-16 h-px bg-amber-600/50 mx-auto mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-amber-900/30 bg-amber-900/10 hover:bg-amber-900/20 hover:border-amber-600/50 transition-all group"
            >
              <span className="text-3xl">{p.icon}</span>
              <span className="text-amber-100/70 text-sm group-hover:text-amber-400 transition-colors">
                {p.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}