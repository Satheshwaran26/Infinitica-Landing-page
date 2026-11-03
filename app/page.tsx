import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="bg-black text-white flex flex-col font-sans antialiased selection:bg-violet-500/30 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
      </main>
      
      {/* Premium Footer */}
      <footer className="w-full bg-black py-12 border-t border-zinc-900 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Infinitica. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-400">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

