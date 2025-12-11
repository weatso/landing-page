"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center bg-white px-4 pt-20">
      
      {/* Background Decor (Sangat halus/Subtle) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-100 rounded-full blur-[100px] opacity-40" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="z-10 text-center max-w-5xl space-y-8">
        
        {/* Badge Kecil */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4"
        >
          Est. 2025 • Weatso Ecosystem
        </motion.div>

        {/* HEADLINE BESAR */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-gray-900 leading-[1.1]">
          Orchestrating <br/>
          <span className="text-gradient-weatso">Digital Innovation.</span>
        </h1>

        {/* SUBHEADLINE */}
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
          Sebuah induk perusahaan yang menaungi inovasi di berbagai spektrum digital. 
          Mulai dari solusi korporasi, produk SaaS, gaya hidup, hingga dunia virtual.
        </p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="pt-8 flex flex-col md:flex-row gap-4 justify-center"
        >
          <a href="#ventures" className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:scale-105 transition-transform duration-300">
            Jelajahi Ekosistem
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;