import { Helmet } from "react-helmet-async";
import { useLang } from "../lib/LanguageContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


const sections = [
  {
    id: "context",
    titleEn: "1. Historical Context",
    titleFa: "۱. بسترشناسی منظومه",
    contentEn: `Nezami Ganjavi, the celebrated 12th-century Persian poet, is regarded as a pioneer of lyrical literature — a form in which emotional experience takes precedence over imagination. Unlike many court poets of his era, Nezami was financially independent and did not rely on royal patronage. This freedom allowed him to compose poetry according to his personal vision. His personal life was marked by tragedy; he married three times, and each of his wives passed away at a young age. The poem was composed at the request of Akhsatan Shirvanshah. Initially, Nezami hesitated to adapt the story because of its harsh desert setting and Arabic origins. Encouraged by his son Mohammad, he completed the epic in only four months.`,
    contentFa: `نظامی گنجوی، سخن‌سرای قرن ششم هجری، پیشرو ادبیات غنایی است؛ گونه‌ای از ادب که در آن «حس» بر «تخیل» پیشی می‌گیرد. نظامی برخلاف بسیاری از شاعران مدیحه‌سرا، فردی متمول بود و نیازی به صله‌بگیری نداشت. این استقلال مالی به او اجازه داد تا هر چه خود دوست داشت بسراید. زندگی شخصی او با تراژدی عجین بود؛ وی سه بار ازدواج کرد که هر سه همسرش در جوانی دار فانی را وداع گفتند. این منظومه به درخواست اخستان شروان‌شاه سروده شد. نظامی در ابتدا به دلیل فضای خشک و بیابانی داستان برای پذیرش آن تردید داشت، اما با ترغیب فرزندش محمد، این اثر را در مدت کوتاه چهار ماه به نظم درآورد.`,
  },
  {
    id: "beginning",
    titleEn: "2. Love in the Schoolhouse & the Madness of Qays",
    titleFa: "۲. عشق در مکتب‌خانه و جنون قیس",
    contentEn: `The narrative begins with the birth of Qays, a boy whose beauty was compared to the full moon. At school, he met Layla, and instead of learning language and scholarship, the two learned the language of love. Nezami relocated this first meeting to a schoolhouse — unlike earlier Arabic versions set in a pasture — giving the narrative a more refined Persian courtly atmosphere. When their relationship became public and families intervened, Qays retreated into the wilderness, tearing his clothes and earning the title "Majnun" (the madman). When Majnun's father took him to the Kaaba to pray for healing, Majnun instead prayed that his love for Layla would increase every moment — a scene in which Nezami employs the literary device of Enat through the repeated word "ring," reflecting the lover's voluntary suffering.`,
    contentFa: `داستان با تولد قیس، پسری چنان زیبا که او را به ماه شب چهارده تشبیه می‌کردند، آغاز می‌شود. او در مکتب‌خانه با لیلی آشنا شد؛ دیداری که در آن به جای لغت، درس عشق آموختند. نظامی برخلاف روایت اصلی که دیدار اولیه را در چراگاه نقل کرده، صحنه را به مکتب‌خانه منتقل کرد تا به اثر شکوه و رنگ‌وبوی درباری و ایرانی ببخشد. با رسوا شدن این عشق و ممانعت خانواده‌ها، قیس سر به بیابان نهاد و لباس بر تن درید تا «مجنون» نامیده شود. هنگامی که پدر مجنون او را به کعبه برد تا برای شفایش دعا کند، مجنون به جای طلب شفا، حلقه‌ی کعبه را گرفت و دعا کرد که لحظه‌به‌لحظه میلش به لیلی افزوده شود. نظامی در این بخش از آرایه اعنات با تکرار واژه حلقه استفاده کرده تا رنج خودخواسته‌ی عاشق را در فرم شعر بازتاب دهد.`,
  },
  {
    id: "nawfal",
    titleEn: "3. Failed Attempts & the Warrior Nawfal",
    titleFa: "۳. تلاش‌های نافرجام و نوفل جنگجو",
    contentEn: `After the failure at the Kaaba, Majnun withdrew into the wilderness of Najd. The character Nawfal then enters the story — a courageous warrior and eloquent companion who engages in spontaneous poetry with Majnun. When Nawfal battles Layla's tribe on Majnun's behalf, Majnun paradoxically prays for the opposing side to win, unable to bear the suffering of those connected to Layla. Although Nawfal achieved military success, Layla's father swore he would rather kill his daughter than marry her to a madman. Witnessing such extreme fanaticism, Nawfal preferred peace over victory. In another episode, Majnun sacrifices his horse to free captured gazelles, because their dark eyes remind him of Layla's eyes.`,
    contentFa: `پس از ناکامی در کعبه، مجنون به انزوای کامل در نجد پناه برد. در این میان شخصیت نوفل پدیدار گشت؛ جنگجویی شجاع و حریفی خوش‌برآمد که با مجنون به بدیهه‌سرایی می‌پرداخت. در حین نبرد نوفل با قبیله‌ی لیلی، مجنون در رفتاری متناقض برای سپاه دشمن دعا می‌کرد، چرا که تاب دیدن رنج عزیزانِ معشوق را نداشت. با وجود پیروزی نظامی نوفل، پدر لیلی سوگند یاد کرد که سر دخترش را ببرد اما او را به دیوانه‌ای نسپارد. نوفل با دیدن این تعصب، صلح را بر پیروزی ترجیح داد. در صحنه‌ای دیگر، مجنون اسب خود را فدا کرد تا آهوانی را که صیادی به بند کشیده بود آزاد کند؛ چرا که چشمان سیاهِ آهو برای او یادگار چشمکِ لیلی بود.`,
  },
  {
    id: "marriage",
    titleEn: "4. Layla's Forced Marriage to Ibn Salam",
    titleFa: "۴. ازدواج اجباری لیلی با ابن‌سلام",
    contentEn: `During the separation, Ibn Salam — a wealthy and devout man from the Bani Asad tribe — seeks Layla's hand. Layla is forced into the marriage by her family. On the wedding night, she strikes Ibn Salam and rejects him completely. Ibn Salam, who truly loves her, respects her emotional boundaries and remains content with admiring her from afar. Nezami describes this unusual situation as "a morsel without flies" — an untouched opportunity. When a traveler informs Majnun of the marriage with the intention of mocking him, Majnun initially faints in despair but later finds peace upon learning that Layla has remained spiritually faithful.`,
    contentFa: `در دوران فراق، ابن‌سلام از قبیله‌ی بنی‌اسد، که مردی ثروتمند و مؤمن بود، به خواستگاری لیلی آمد. لیلی به اجبار خانواده به عقد او درآمد. در شب زفاف، لیلی چنان تپانچه‌ای به گوش ابن‌سلام زد که او را از خود راند. ابن‌سلام که عاشق واقعی بود، به دلیل حرمت عشق، به نظاره از دور قانع شد و بدین ترتیب پاکدامنی لیلی حفظ گشت. نظامی این وضعیت را «نواله بی‌مگس» توصیف کرده است. شترسواری با نیت ملامت، خبر ازدواج را به مجنون داد. مجنون ابتدا از هوش رفت اما با آگاهی از پایداری عفیفانه‌ی لیلی، به آرامش رسید.`,
  },
  {
    id: "isolation",
    titleEn: "5. Isolation, Letters & Spiritual Transformation",
    titleFa: "۵. انزوا، مکاتبات و تحول روحی",
    contentEn: `In the wilderness, Majnun gathers an army of wild creatures around him. Foxes clean his resting place while lions and leopards guard his camp. Zayd — a young man who himself experienced failure in love — becomes the trusted messenger between the two lovers. In their letters, Layla encourages Majnun to remain patient, using metaphors of sowing seeds and awaiting harvest. Majnun, in response, reaches a mystical state of unity and declares: "You are my eyes… in our faith there is no duality." This exchange marks the peak of their spiritual bond — love no longer tied to physical presence but to complete existential unity.`,
    contentFa: `مجنون در بیابان لشکری از حیوانات وحشی گرد آورد. روباه رفتگرِ خوابگاه او بود و شیر و پلنگ پاسبانی می‌دادند. زید، جوانی که خود طعم شکست در عشق را چشیده بود، قاصد امین میان آن دو شد. لیلی در نامه‌هایش مجنون را به صبوری فرا می‌خواند: «دهقان منگر که دانه ریزد / آن بین که ز دانه دانه خیزد». مجنون نیز در پاسخ به اوج یگانگی رسید و گفت: «تو چشم منی... در مذهب ما دویی نباشد». این مکاتبات اوج پیوند روحانی آن‌هاست؛ عشقی که دیگر به حضور جسمانی وابسته نیست بلکه در وحدت وجودی ریشه دارد.`,
  },
  {
    id: "reunion",
    titleEn: "6. Reunion in the Shadow of Separation",
    titleFa: "۶. وصال در سایه فراق",
    contentEn: `Ibn Salam dies from illness — described through the traditional Persian medical concept of imbalance among the four humors. Arab custom requires Layla to remain secluded for two years, but she uses this period to mourn for Majnun under the pretext of mourning her husband. In their final meeting, Layla refuses physical closeness out of fear that earthly desire might contaminate their transcendent love. Majnun has reached such a mystical stage that merely sensing her presence is enough. He declares that the fragrance of wine is sufficient without touching the cup. Instead of seeking physical union, he dissolves into spiritual unity and returns to the wilderness.`,
    contentFa: `ابن‌سلام بر اثر بیماری و از میان رفتن قرابه اعتدال درگذشت. رسم عرب مانع دیدار فوری گشت، اما لیلی از این فرصت برای عزاداری واقعی — گریه برای مجنون به بهانه شوهر — بهره برد. در دیدار نهایی، لیلی از بیم آلوده شدن عشق افلاطونی از چند قدمی جلوتر نیامد. مجنون به مرحله‌ای از عرفان رسیده بود که بوی معشوق برای او کافی بود. او می‌سرود: «بوی می هست، می را نتوان گرفت بر دست». به جای وصال جسمانی، در وحدت وجود غرق شد و دوباره به دشت بازگشت.`,
  },
  {
    id: "death",
    titleEn: "7. Death and Eternal Union",
    titleFa: "۷. مرگ و وصال ابدی",
    contentEn: `Layla falls ill during a season Nezami describes as "the autumn of the garden." She grows thin like a reed and dies with Majnun's name on her lips, asking that her burial shroud be stained with blood as she considers herself a martyr of love. Upon hearing the news, Majnun collapses onto Layla's grave and dies whispering "O beloved friend." Wild animals protect his body for an entire year before both lovers are finally buried side by side. Their grave becomes a sacred destination — a place of pilgrimage for future generations seeking the blessing of pure love.`,
    contentFa: `لیلی در فصلی که نظامی آن را خزان گلستان توصیف می‌کند، بیمار گشت. او مانند نال ضعیف شد و با این وصیت به مادر که «خون کن کفنم که من شهیدم»، با یاد مجنون درگذشت. مجنون با شنیدن خبر، بر مزار لیلی پیچید و با گفتن «ای دوست» جان سپرد. جسد او به مدت یک سال در حمایت درندگان باقی ماند تا اینکه قبیله، استخوان‌های او را در کنار لیلی دفن کردند و مزارشان حاجت‌گه خلق شد.`,
  },
  {
    id: "analysis",
    titleEn: "8. Final Analysis & Literary Legacy",
    titleFa: "۸. تحلیل نهایی و میراث ادبی",
    contentEn: `Nezami masterfully demonstrates that true love is not driven by possession or physical desire. Majnun transcends bodily longing and reaches a divine form of love — "love is not self-serving." In the final sections, Nezami enters the narrative directly with reflections such as "Today we heard their lament," revealing an advanced awareness of the narrator's role — a proto-modern narrative technique. The continuing relevance of this tragedy is seen in modern Persian poetry, particularly in the works of Hossein Monzavi, whose verse "Layla once again became Ibn Salam's destiny" reflects the story's enduring emotional resonance in Iranian collective memory.`,
    contentFa: `نظامی با ظرافتی بی‌نظیر تبیین می‌کند که عشق غرض‌پرست نیست. مجنون با عبور از نیاز جسمانی، به عشقی دست یافت که آینه‌ی بلند نور است. ورود نویسنده به متن در اپیزودهای پایانی — «امروز که ناله‌شان شنیدیم» — نشان‌دهنده ساختار پیشرو و آگاهی نظامی از نقش راوی است؛ تکنیکی که در ادبیات مدرن رایج شد. پیوند این منظومه با رنج‌های معاصر در شعر حسین منزوی — «لیلا دوباره قسمت ابن‌سلام شد» — نشان‌دهنده تداوم این تراژدی در حافظه جمعی ایرانیان است.`,
  },
];

const glossary = [
  {
    termEn: "Enat",
    termFa: "اعنات",
    defEn: "A self-imposed poetic difficulty where the poet intentionally follows restrictive formal patterns.",
    defFa: "رنج خودخواسته‌ی شاعر در التزام به قواعد دشوار (مانند تکرار کلمه حلقه).",
  },
  {
    termEn: "A Morsel Without Flies",
    termFa: "نواله بی‌مگس",
    defEn: "A metaphor for an uncontested opportunity or untouched possession.",
    defFa: "کنایه از رزق یا فرصت بی‌مزاحم و بی‌رقیب.",
  },
  {
    termEn: "Bottle of Equilibrium",
    termFa: "قرابه اعتدال",
    defEn: "A metaphor in traditional medicine referring to the balance of the four bodily humors.",
    defFa: "ظرف بلورین تعادل مزاج در طب قدیم (تعادل صفرا، سودا، خون و بلغم).",
  },
  {
    termEn: "Nal (Reed)",
    termFa: "نال",
    defEn: "A thin reed used metaphorically for Layla's fragile body during illness.",
    defFa: "نی باریک و ظریف؛ استعاره از اندام نحیف لیلی در بستر بیماری.",
  },
  {
    termEn: "Nil (Blue/Dark Hue)",
    termFa: "نیل",
    defEn: "A symbolic color associated with grief, sorrow, and deprivation.",
    defFa: "رنگ کبود که کنایه از سوگ و محرومیت است.",
  },
];

export default function LaylaPage() {
  const { lang, t } = useLang();
  const navigate = useNavigate();
  const isRtl = lang === "fa";

  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://goosheno.com/layla-majnun";
  const shareTitle = t("Layla and Majnun – Goosheno Podcast Analysis", "لیلی و مجنون – تحلیل پادکست گوشنو");

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, url: shareUrl });
      } catch (_) {}
    } else {
      await navigator.clipboard.writeText(shareUrl);
      alert(t("Link copied to clipboard!", "لینک کپی شد!"));
    }
  };

  return (
    <>
      <Helmet>
        <html lang={lang === "fa" ? "fa" : "en"} dir={isRtl ? "rtl" : "ltr"} />
        <title>{t("Layla and Majnun – Full Analysis | Goosheno Persian Podcast", "لیلی و مجنون – تحلیل کامل | پادکست گوشنو")}</title>
        <meta
          name="description"
          content={t(
            "Comprehensive literary analysis of Nezami Ganjavi's Layla and Majnun based on the Goosheno Persian podcast. Explore themes of mystical love, spiritual transformation, and classical Persian poetry.",
            "تحلیل جامع ادبی منظومه لیلی و مجنون نظامی گنجوی بر اساس پادکست گوشنو. بررسی مضامین عشق عرفانی، تحول روحی و ادبیات کلاسیک فارسی."
          )}
        />
        <meta name="keywords" content="Layla and Majnun, Nezami Ganjavi, Persian literature, Goosheno podcast, لیلی و مجنون, نظامی گنجوی, پادکست گوشنو, ادبیات فارسی, عشق عرفانی" />
        <meta property="og:title" content={t("Layla and Majnun – Full Analysis | Goosheno", "لیلی و مجنون – تحلیل کامل | گوشنو")} />
        <meta
          property="og:description"
          content={t(
            "A deep dive into Nezami's timeless epic through the lens of Goosheno podcast.",
            "واکاوی عمیق منظومه لیلی و مجنون نظامی از دریچه پادکست گوشنو."
          )}
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://goosheno.com/layla-majnun" />
        <link rel="canonical" href="https://goosheno.com/layla-majnun" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Layla and Majnun – Full Literary Analysis",
          "description": "Comprehensive analysis of Nezami Ganjavi's Layla and Majnun based on Goosheno Podcast",
          "author": { "@type": "Organization", "name": "Goosheno" },
          "publisher": { "@type": "Organization", "name": "Goosheno", "url": "https://goosheno.com" },
          "inLanguage": ["fa", "en"],
          "url": "https://goosheno.com/layla-majnun"
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-[#0a0a0f]" dir={isRtl ? "rtl" : "ltr"}>
        <Navbar />  
        {/* ── Hero ── */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-transparent to-[#0a0a0f]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(180,83,9,0.15)_0%,_transparent_70%)]" />

          <div className="relative max-w-4xl mx-auto px-4 pt-28 pb-16 text-center">
            <p className="text-amber-500/70 text-xs tracking-[0.3em] uppercase mb-4">
              {t("Goosheno · Persian Literary Podcast", "پادکست ادبی فارسی · گوشنو")}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-400 mb-3 leading-tight">
              {t("Layla & Majnun", "لیلی و مجنون")}
            </h1>
            <p className="text-amber-200/50 text-lg mb-2">
              {t("لیلی و مجنون", "Layla & Majnun")}
            </p>
            <p className="text-amber-100/60 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              {t(
                "A comprehensive literary analysis of Nezami Ganjavi's timeless epic — exploring mystical love, spiritual transformation, and the soul of classical Persian poetry.",
                "تحلیل جامع ادبی منظومه جاودان نظامی گنجوی — واکاوی عشق عرفانی، تحول روحی و روح شعر کلاسیک فارسی."
              )}
            </p>

            {/* Back + Share */}
            <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-800/50 text-amber-400/80 hover:text-amber-400 hover:border-amber-600/60 hover:bg-amber-900/20 transition-all text-sm"
              >
                <span>{isRtl ? "→" : "←"}</span>
                {t("Back to Home", "بازگشت به خانه")}
              </button>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-600/20 border border-amber-600/50 text-amber-400 hover:bg-amber-600/30 transition-all text-sm"
              >
                <span>↗</span>
                {t("Share", "اشتراک‌گذاری")}
              </button>
            </div>
          </div>
        </div>

        {/* ── Table of Contents ── */}
        <div className="max-w-4xl mx-auto px-4 mb-12">
          <div className="border border-amber-900/30 bg-amber-900/10 rounded-2xl p-6">
            <p className="text-amber-500/70 text-xs uppercase tracking-widest mb-4">
              {t("Table of Contents", "فهرست مطالب")}
            </p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-amber-100/60 hover:text-amber-400 text-sm transition-colors leading-relaxed block py-0.5"
                  >
                    {t(s.titleEn, s.titleFa)}
                  </a>
                </li>
              ))}
              <li>
                <a href="#glossary" className="text-amber-100/60 hover:text-amber-400 text-sm transition-colors leading-relaxed block py-0.5">
                  {t("Glossary", "واژه‌نامه")}
                </a>
              </li>
            </ol>
          </div>
        </div>

        {/* ── Sections ── */}
        <div className="max-w-4xl mx-auto px-4 space-y-10 pb-16">
          {sections.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-24 border border-amber-900/30 bg-gradient-to-b from-amber-900/10 to-transparent rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="shrink-0 text-amber-700/50 font-mono text-xs mt-1">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="text-xl sm:text-2xl font-bold text-amber-400 leading-snug">
                  {t(s.titleEn, s.titleFa)}
                </h2>
              </div>
              <div className="w-10 h-px bg-amber-700/30 mb-5 mx-0" />
              <p className="text-amber-100/70 text-base leading-relaxed sm:leading-loose">
                {t(s.contentEn, s.contentFa)}
              </p>
            </article>
          ))}

          {/* ── Glossary ── */}
          <section id="glossary" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-amber-400 mb-6">
              {t("Glossary", "واژه‌نامه تخصصی")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {glossary.map((g) => (
                <div
                  key={g.termEn}
                  className="border border-amber-900/30 bg-amber-900/10 rounded-xl p-5"
                >
                  <p className="text-amber-400 font-semibold text-sm mb-1">
                    {t(g.termEn, g.termFa)}
                  </p>
                  <p className="text-amber-100/60 text-sm leading-relaxed">
                    {t(g.defEn, g.defFa)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Bottom CTA ── */}
          <div className="border border-amber-600/30 bg-amber-600/10 rounded-2xl p-8 text-center">
            <p className="text-amber-400 text-xs uppercase tracking-widest mb-3">
              {t("Listen to the Podcast", "پادکست را بشنو")}
            </p>
            <p className="text-amber-200 text-lg font-semibold mb-2">
              {t("Goosheno – Persian Literary Podcast", "گوشنو – پادکست ادبی فارسی")}
            </p>
            <p className="text-amber-100/50 text-sm mb-6">
              {t(
                "Hear the full story of Layla and Majnun retold in simple, accessible Persian.",
                "داستان کامل لیلی و مجنون را به زبانی ساده و روان بشنوید."
              )}
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <button
                onClick={() => navigate("/")}
                className="px-6 py-2.5 rounded-full border border-amber-600/50 text-amber-400 hover:bg-amber-600/20 transition-colors text-sm"
              >
                {t("Browse Episodes", "مشاهده قسمت‌ها")}
              </button>
              <button
                onClick={handleShare}
                className="px-6 py-2.5 rounded-full bg-amber-600/20 border border-amber-600/50 text-amber-400 hover:bg-amber-600/30 transition-colors text-sm"
              >
                {t("Share This Page", "اشتراک‌گذاری این صفحه")}
              </button>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <footer className="bg-[#080808] border-t border-amber-900/30 py-8 text-center text-amber-100/30 text-sm">
          © 2024 Goosheno · گوشنو
        </footer>
      </div>
    </>
  );
}