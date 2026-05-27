import { LanguageProvider } from "./lib/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Episodes from "./components/Episodes";
import About from "./components/About";
import ListenOn from "./components/ListenOn";
import Comments from "./components/Comments";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0a0a0f]">
        <Navbar />
        <Hero />
        <Episodes />
        <Comments />
        <About />
        <ListenOn />
        <footer className="bg-[#080808] border-t border-amber-900/30 py-8 text-center text-amber-100/30 text-sm">
          © 2024 Goosheno · گوشنو
        </footer>
      </div>
    </LanguageProvider>
  );
}