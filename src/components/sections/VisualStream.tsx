"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VisualStream = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Parallax Effect: Menggeser konten secara horizontal saat user scroll ke bawah
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-45%"]);

  return (
    <section ref={targetRef} className="py-32 bg-[#F9F9F7] overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Visual Craftsmanship</h2>
          <p className="text-gray-500 max-w-md">
            Melihat lebih dekat detail estetika dari proyek web, aplikasi, dan dunia virtual yang kami bangun.
          </p>
        </div>
        <div className="text-sm font-medium text-blue-600">
          Geser untuk melihat →
        </div>
      </div>

      {/* Horizontal Stream */}
      <div className="relative w-full">
        <motion.div style={{ x }} className="flex gap-8 pl-6 w-max">
          {/* Nanti ganti 'bg-gray-200' dengan <Image src="..." /> */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i}
              className="relative w-[300px] md:w-[500px] aspect-[16/9] rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
            >
              {/* Placeholder Gambar (Ganti bg-color dengan gambar asli Anda) */}
              <div className={`w-full h-full bg-gradient-to-br ${
                i % 2 === 0 ? "from-gray-200 to-gray-300" : "from-gray-800 to-gray-900"
              } transition-transform duration-700 group-hover:scale-110`} />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white font-medium text-lg">Project Documentation {i}</span>
                <span className="text-white/70 text-sm">UI/UX • Development</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VisualStream;