import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/sections/HeroSection"; 
import VenturesGrid from "@/components/sections/VenturesGrid";
import TechStack from "@/components/sections/TechStack"; 
import VisualStream from "@/components/sections/VisualStream";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="bg-white selection:bg-blue-100 selection:text-blue-900">
      
      <Navbar />

      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. TECH STACK (2 Baris Marquee) */}
      <TechStack />

      {/* 3. VENTURES (Horizontal Grid) */}
      <VenturesGrid />

      {/* 4. VISUAL STREAM (Dokumentasi/Snapshot) */}
      <VisualStream />

      {/* 5. CTA / FAQ Replacement (Simple & Clean) */}
      <section id="contact" className="py-16 bg-[#F9F9F7] overflow-hidden border-t border-gray-200">
        {/* Dekorasi Glow Halus */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-50/50 to-purple-50/50 rounded-full blur-[100px] -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
            Let&apos;s Build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Legendary.</span>
          </h2>
          
          <p className="text-xl text-gray-500 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Punya pertanyaan tentang layanan Weatso Service, produk Developer, atau kolaborasi kreatif dengan CO-Labz?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:contact@weatso.com" 
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-gray-900 px-8 font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <span className="mr-2">Mulai Konsultasi</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            
            <a 
              href="#ventures" 
              className="inline-flex h-14 items-center justify-center rounded-full px-8 font-medium text-gray-600 transition-colors hover:text-gray-900 hover:bg-gray-100"
            >
              Lihat Layanan Kami
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1 font-bold text-xl text-gray-900">
            WEATSO<span className="text-blue-600">.</span>
          </div>
          <p className="text-sm text-gray-400 font-light">
            &copy; {new Date().getFullYear()} Weatso Digital Holding. Built with Precision in Indonesia.
          </p>
        </div>
      </footer>
    </main>
  );
}