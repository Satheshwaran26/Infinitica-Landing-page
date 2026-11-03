import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white flex flex-col font-sans antialiased selection:bg-violet-500/30 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

