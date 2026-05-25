import { useLang } from "@/lib/language";

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl text-gold mb-8 ornament inline-block">{t("about.title")}</h2>
        <p className="text-lg text-cream/90 leading-relaxed mb-6" style={{ fontFamily: "var(--font-serif)" }}>
          {t("about.p1")}
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">{t("about.p2")}</p>
      </div>
    </section>
  );
}
