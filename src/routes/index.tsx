import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/language";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Episodes } from "@/components/Episodes";
import { ListenOn } from "@/components/ListenOn";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Goosheno — Persian Literary Podcast | پادکست ادبی گوشنو" },
      {
        name: "description",
        content:
          "Goosheno is a Persian literary podcast retelling classic Persian treasures like Layla and Majnun in simple, accessible language.",
      },
      { property: "og:title", content: "Goosheno — Persian Literary Podcast" },
      {
        property: "og:description",
        content: "Retelling Persian literary classics — Layla and Majnun, Shahnameh, and more.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600&family=Vazirmatn:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Episodes />
          <ListenOn />
          <About />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
