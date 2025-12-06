"use client"; // <-- TAMBAHKAN INI DI BARIS PERTAMA
import React from "react";
import { motion, Transition } from "framer-motion";

// 1. DEFINE TYPES
// Kita definisikan kontrak data agar kodingan tidak rapuh
interface RevealTextProps {
  children: React.ReactNode;
  delay?: number; // Optional, default 0
  className?: string; // Optional
}

// 2. KONFIGURASI ANIMASI
const LUXURY_TRANSITION: Transition = {
  type: "spring", // Gunakan mesin fisika Framer Motion
  stiffness: 70, // Kontrol seberapa 'kaku' (semakin rendah, semakin lambat)
  damping: 30,  // Kontrol seberapa cepat ia berhenti memantul
  mass: 1,      // Berat objek
  // Hapus properti 'ease'
};

// 3. COMPONENT DENGAN TYPE
const RevealText: React.FC<RevealTextProps> = ({ children, delay = 0, className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ ...LUXURY_TRANSITION, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center bg-[#F9F9F7] text-gray-900 px-4 overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-rose-300 blur-3xl mix-blend-multiply filter" />
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-stone-300 blur-3xl mix-blend-multiply filter" />
      </div>

      <div className="z-10 text-center max-w-4xl space-y-6">
        
        {/* HEADLINE */}
        <div className="flex flex-col items-center">
          <RevealText delay={0.1} className="mb-[-10px]">
            <h1 className="text-6xl md:text-8xl font-serif tracking-tight">
              Reimagine
            </h1>
          </RevealText>
          
          <RevealText delay={0.2}>
            <h1 className="text-6xl md:text-8xl font-serif tracking-tight italic text-stone-600">
              Your Celebration
            </h1>
          </RevealText>
        </div>

        {/* SUBHEADLINE */}
        <RevealText delay={0.4}>
          <p className="text-lg md:text-xl font-light text-gray-600 max-w-lg mx-auto leading-relaxed mt-4">
            Platform undangan digital dan manajemen acara untuk pernikahan modern. 
            Elegan, tanpa kertas, dan tak terlupakan.
          </p>
        </RevealText>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...LUXURY_TRANSITION, delay: 0.8 }}
          className="pt-8"
        >
          <button className="group relative px-8 py-4 bg-gray-900 text-white rounded-full overflow-hidden">
            <span className="relative z-10 font-medium tracking-wide text-sm uppercase">
              Buat Undangan
            </span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-stone-700/50" />
          </button>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
        <div className="w-[1px] h-12 bg-gray-300 overflow-hidden">
            <motion.div 
                className="w-full h-full bg-gray-800"
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;