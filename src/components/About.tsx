import { useLang } from "../lib/LanguageContext";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="bg-[#0a0a0f] py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-amber-400 mb-8">
          {t("About Goosheno", "درباره گوشنو")}
        </h2>

        <div className="w-16 h-px bg-amber-600/50 mx-auto mb-8" />

        <p className="text-amber-100/70 text-lg leading-relaxed mb-6">
          {t(
            "Goosheno is a Persian literary podcast dedicated to retelling classic Persian literary treasures — such as the epic romance of Layla and Majnun — in simple, accessible language for modern listeners.",
            "گوشنو یک پادکست ادبی فارسی است که به بازگویی گنج‌های ادبی کلاسیک فارسی — مانند داستان حماسی عاشقانه لیلی و مجنون — به زبانی ساده و روان برای شنوندگان امروزی می‌پردازد."
          )}
        </p>

        <p className="text-amber-100/50 text-base leading-relaxed">
          {t(
            "Available on Spotify, Apple Podcasts, Podbean, and other major platforms.",
            "در دسترس در اسپاتیفای، اپل پادکست، پادبین و سایر پلتفرم‌های اصلی."
          )}
        </p>
      </div>
    </section>
  );
}