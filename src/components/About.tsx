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

        <p className="text-amber-100/70 text-lg leading-relaxed mb-10">
          {t(
            "Goosheno is a Persian literary podcast dedicated to retelling classic Persian literary treasures — such as the epic romance of Layla and Majnun — in simple, accessible language for modern listeners.",
            "گوشنو یک پادکست ادبی فارسی است که به بازگویی گنج‌های ادبی کلاسیک فارسی — مانند داستان حماسی عاشقانه لیلی و مجنون — به زبانی ساده و روان برای شنوندگان امروزی می‌پردازد."
          )}
        </p>

        {/* Team */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="border border-amber-900/30 bg-amber-900/10 rounded-xl p-5">
            <p className="text-amber-500/60 text-xs uppercase tracking-widest mb-2">
              {t("Narrator", "گوینده")}
            </p>
            <p className="text-amber-200 font-semibold">ساناز خداوردی</p>
          </div>
          <div className="border border-amber-900/30 bg-amber-900/10 rounded-xl p-5">
            <p className="text-amber-500/60 text-xs uppercase tracking-widest mb-2">
              {t("Editor", "تدوینگر")}
            </p>
            <p className="text-amber-200 font-semibold">رضا معصومی نیارق</p>
          </div>
          <div className="border border-amber-900/30 bg-amber-900/10 rounded-xl p-5">
            <p className="text-amber-500/60 text-xs uppercase tracking-widest mb-2">
              {t("Music", "موسیقی")}
            </p>
            <p className="text-amber-200 font-semibold">محسن نامجو</p>
          </div>
        </div>

        {/* Upcoming */}
        <div className="border border-amber-600/30 bg-amber-600/10 rounded-xl p-6 mb-10">
          <p className="text-amber-400 text-xs uppercase tracking-widest mb-2">
            {t("Coming Soon", "به زودی")}
          </p>
          <p className="text-amber-200 text-lg font-semibold">
            داستان‌های هزار و یک شب در هزار قسمت
          </p>
          <p className="text-amber-100/50 text-sm mt-1">
            {t("One Thousand and One Nights in one thousand episodes", "هزار و یک شب در هزار قسمت")}
          </p>
        </div>

        {/* Contact */}
        <div className="text-amber-100/50 text-sm">
          <p className="mb-1">{t("Contact us", "تماس با ما")}</p>
          <a
            href="mailto:info@goosheno.com"
            className="text-amber-400 hover:text-amber-300 transition-colors"
          >
            info@goosheno.com
          </a>
        </div>
      </div>
    </section>
  );
}