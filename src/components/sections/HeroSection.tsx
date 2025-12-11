"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Monitor, Cuboid, HeartHandshake } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-6 md:px-12 pt-20 overflow-hidden">
      
      {/* Background Decor: Mesh Gradient Halus */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-100/50 rounded-full blur-[120px]" />
      </div>

      {/* KONTEN KIRI: Teks Utama */}
      <div className="z-10 w-full md:w-1/2 flex flex-col items-start space-y-8 md:pr-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50/50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            The Future of Digital Ecosystem
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
            Weatso <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto] animate-gradient">
              Holding Company.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed font-light">
            Menyatukan inovasi teknologi, skalabilitas produk, dan estetika kreatif dalam satu ekosistem terpadu.
          </p>

          <div className="pt-8 flex gap-4">
            <a href="#ventures" className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:scale-105 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300">
              Explore Ventures
            </a>
            <a href="#contact" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-all duration-300">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* KONTEN KANAN: Animasi Orbit 4 Anak Usaha */}
      <div className="w-full md:w-1/2 h-[500px] md:h-screen flex items-center justify-center relative">
        {/* Core Circle (Weatso Induk) */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white shadow-[0_0_60px_-15px_rgba(37,99,235,0.3)] border border-gray-100 flex items-center justify-center z-20 relative"
        >
          <div className="text-center">
            <span className="font-bold text-2xl md:text-3xl tracking-tighter">WEATSO</span>
            <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 mt-1 rounded-full"></div>
          </div>
        </motion.div>

        {/* Orbit Path 1 (Dashed Line) */}
        <div className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full border border-dashed border-gray-200" />
        
        {/* Orbit Container (Berputar) */}
        <div className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] orbit-container z-10">
          
          {/* Planet 1: Service (Top) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 orbit-item">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-xl border border-blue-50 flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer group">
              <Code2 className="text-blue-600" size={32} />
              <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">Weatso Service</div>
            </div>
          </div>

          {/* Planet 2: Developer (Right) */}
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 orbit-item">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-xl border border-purple-50 flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer group">
              <Monitor className="text-purple-600" size={32} />
              <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">Weatso Developer</div>
            </div>
          </div>

          {/* Planet 3: CO-Labz (Bottom) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 orbit-item">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-xl border border-pink-50 flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer group">
              <Cuboid className="text-pink-600" size={32} />
              <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">CO-Labz</div>
            </div>
          </div>

          {/* Planet 4: Invitin (Left) */}
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 orbit-item">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-xl border border-rose-50 flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer group">
              <HeartHandshake className="text-rose-600" size={32} />
              <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">Invitin</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;