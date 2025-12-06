import Navbar from "@/components/layout/navbar";
// WAJIB: Import komponen Luxury baru Anda
import HeroSection from "@/components/sections/HeroSection"; 
import FeaturesSection from "@/components/sections/FeaturesSection"; 
import React from "react";
// Pastikan file HeroSection.tsx dan FeaturesSection.tsx ada di folder sections/

export default function Home() {
  return (
    // Menggunakan background krem (#F9F9F7) dari skema Luxury agar Hero Section menyatu
    <main className="relative bg-[#F9F9F7] selection:bg-purple-500 selection:text-white overflow-hidden">
      
      <Navbar />

      {/* ========================================================== */}
      {/* 1. HERO SECTION (LUXURY: MASKED REVEAL & SERIF) */}
      {/* Ini menggantikan seluruh section lama id="home" Anda. */}
      {/* Ini adalah branding untuk produk Wedding Platform Anda. */}
      <HeroSection />

      {/* 2. FEATURES SECTION (LUXURY: BENTO GRID & ICONS) */}
      <FeaturesSection />
      {/* ========================================================== */}

      
      {/* --- SOLUSI: Cards dengan Gaya Tech/Startup --- */}
      {/* Sisa konten perusahaan holding Anda tetap dipertahankan, menciptakan kontras yang kuat. */}
      <section id="solutions" className="py-32 bg-weatso-subtle">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Apa yang kami kerjakan? <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Everything Digital.</span>
            </h2>
            <div className="h-2 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Venture */}
            <div className="group p-10 bg-white rounded-[2rem] border border-blue-100 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
              <h3 className="text-3xl font-bold mb-4 text-blue-900 relative z-10">Venture Building</h3>
              <p className="text-gray-500 relative z-10">Dari konsep di kertas tisu sampai IPO. Kami membangun bisnis digital dari nol.</p>
            </div>

            {/* Card 2 - Dev */}
            <div className="group p-10 bg-blue-600 rounded-[2rem] border border-blue-600 shadow-xl shadow-blue-600/30 transform md:-translate-y-4 hover:scale-105 transition-all duration-500 text-white">
              <h3 className="text-3xl font-bold mb-4">Custom Tech</h3>
              <p className="text-blue-100">
                Aplikasi rumit? Sistem holding? Integrasi API? <span className="font-bold text-white">Easy.</span> Kami suka tantangan yang developer lain hindari.
              </p>
              <div className="mt-8 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white animate-bounce"></div>
                <div className="w-3 h-3 rounded-full bg-white animate-bounce [animation-delay:0.1s]"></div>
                <div className="w-3 h-3 rounded-full bg-white animate-bounce [animation-delay:0.2s]"></div>
              </div>
            </div>

            {/* Card 3 - Luxury */}
            <div className="group p-10 bg-white rounded-[2rem] border border-purple-100 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
              <h3 className="text-3xl font-bold mb-4 text-purple-900 relative z-10">Digital Luxury</h3>
              <p className="text-gray-500 relative z-10">Estetika prioritas utama. Produk kami memanjakan mata, bukan cuma sekadar jalan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- VENTURES: Dark & Neon --- */}
      <section id="ventures" className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
        {/* Vivid Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-800 to-purple-800 rounded-full blur-[150px] opacity-40" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-20 text-center">
            Weatso <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Ventures</span>
          </h2>

          {/* Featured Project */}
          <div className="bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:border-purple-500/50 transition-colors duration-500">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-6 border border-purple-500/30">
                  Flagship Product
                </div>
                <h3 className="text-4xl font-bold mb-6">The Wedding Platform</h3>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  Platform undangan dan manajemen pernikahan digital. 
                  Contoh nyata bagaimana kami menggabungkan *utility* dengan *beauty*. 
                  Dibangun dengan Next.js 16.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-white font-semibold hover:text-purple-400 transition-colors">
                  Visit Platform 
                  <span className="text-xl">→</span>
                </a>
              </div>
              
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-black rounded-2xl overflow-hidden relative shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 group-hover:opacity-100 opacity-50 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 font-mono text-sm">Preview Image Area</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT: The "Boom" Ending --- */}
      <section id="contact" className="py-32 relative overflow-hidden">
        {/* Full Gradient Background */}
        <div className="absolute inset-0 bg-weatso-gradient"></div>
        
        {/* Pattern Overlay (Opsional) */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-6 text-center max-w-5xl relative z-10 text-white">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 drop-shadow-lg">
            Masalah Digital? <br/>
            Consider it done.
          </h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-2xl mx-auto font-light">
            Kami solusi, bukan sekadar vendor. <br/>
            Ceritakan visinya, kami bangun realitanya.
          </p>
          <a 
            href="mailto:contact@weatso.com" 
            className="inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-blue-600 bg-white rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-300"
          >
            Hubungi Weatso
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-gray-900 text-center text-gray-500 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Weatso Digital Holding. Built with Pride & Precision.</p>
      </footer>
    </main>
  );
}