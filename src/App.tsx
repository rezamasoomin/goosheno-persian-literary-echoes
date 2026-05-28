import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { LanguageProvider } from "./lib/LanguageContext";
import { useLang } from "./lib/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Episodes from "./components/Episodes";
import About from "./components/About";
import ListenOn from "./components/ListenOn";
import Comments from "./components/Comments";
import LaylaPage from "./pages/LaylaPage";

function LaylaCard() {
  const { t } = useLang();
  const navigate = useNavigate();

  return (
    <div className="bg-[#0a0a0f] px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/layla-majnun")}
          className="w-full group border border-amber-600/40 bg-gradient-to-br from-amber-900/20 to-amber-900/5 hover:from-amber-900/30 hover:border-amber-600/60 rounded-2xl p-8 text-start transition-all duration-300"
        >
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <p className="text-amber-500/70 text-xs uppercase tracking-widest mb-2">
                {t("Featured Story", " گنج اول")}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-2">
                {t("Layla & Majnun", "لیلی و مجنون")}
              </h2>
              <p className="text-amber-100/50 text-sm sm:text-base max-w-xl leading-relaxed">
                {t(
                  "A comprehensive literary analysis of Nezami Ganjavi's timeless epic — mystical love, spiritual transformation, and classical Persian poetry.",
                  "تحلیل جامع ادبی منظومه جاودان نظامی گنجوی — عشق عرفانی، تحول روحی و شعر کلاسیک فارسی."
                )}
              </p>
            </div>
            <span className="text-amber-600 text-3xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
              ↗
            </span>
          </div>

          <div className="flex gap-2 mt-6 flex-wrap">
            {[
              t("8 Sections", "۸ بخش"),
              t("Bilingual", "دوزبانه"),
              t("Nezami Ganjavi", "نظامی گنجوی"),
              t("Mystical Love", "عشق عرفانی"),
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full border border-amber-800/40 text-amber-600/70 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </button>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <LaylaCard />
      <Episodes />
      <Comments />
      <About />
      <ListenOn />
      <footer className="bg-[#080808] border-t border-amber-900/30 py-8 text-center text-amber-100/30 text-sm">
        © 2024 Goosheno · گوشنو
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/layla-majnun" element={<LaylaPage />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}