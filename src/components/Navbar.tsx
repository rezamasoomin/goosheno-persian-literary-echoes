import { useState } from "react";
import { useLang } from "../lib/LanguageContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t("Episodes", "قسمت‌ها"), href: "#episodes" },
    { label: t("About", "درباره"), href: "#about" },
    { label: t("Listen On", "گوش بده"), href: "#listen" },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    // if we're not on homepage, navigate there first
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-amber-900/30">
      <div className="flex items-center justify-between px-5 py-3">

        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => { navigate("/"); setMenuOpen(false); }}
        >
          <img src="/logo.jpg" alt="Goosheno" className="h-9 w-9 rounded-md object-cover" />
          <span className="text-amber-400 font-bold text-lg tracking-wider">
            {t("Goosheno", "گوشنو")}
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-amber-100/70 hover:text-amber-400 transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { navigate("/layla-majnun"); setMenuOpen(false); }}
            className="text-amber-100/70 hover:text-amber-400 transition-colors text-sm"
          >
            {t("Layla & Majnun", "لیلی و مجنون")}
          </button>
          <button
            onClick={toggleLang}
            className="px-3 py-1 border border-amber-600/50 text-amber-400 text-sm rounded-full hover:bg-amber-600/20 transition-colors"
          >
            {lang === "en" ? "فارسی" : "English"}
          </button>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLang}
            className="px-3 py-1 border border-amber-600/50 text-amber-400 text-xs rounded-full hover:bg-amber-600/20 transition-colors"
          >
            {lang === "en" ? "فارسی" : "English"}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="text-amber-400 text-2xl leading-none w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-amber-900/30 bg-black/90 backdrop-blur-sm px-5 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-amber-100/70 hover:text-amber-400 transition-colors text-sm py-1"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { navigate("/layla-majnun"); setMenuOpen(false); }}
            className="text-amber-100/70 hover:text-amber-400 transition-colors text-sm py-1 text-start"
          >
            {t("Layla & Majnun", "لیلی و مجنون")}
          </button>
        </div>
      )}
    </nav>
  );
}