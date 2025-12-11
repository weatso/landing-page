"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, HeartHandshake, Cuboid, Monitor } from "lucide-react"; // PERBAIKAN: MonitorWt diganti Monitor

const ventures = [
  {
    id: "weatso-service",
    name: "Weatso Service",
    category: "IT Consultant",
    desc: "Mitra strategis transformasi digital. Kami membangun Software, Web App, dan Sistem Informasi Manajemen (SIM/SIA) yang presisi sesuai kebutuhan bisnis Anda.",
    icon: Code2,
    color: "blue"
  },
  {
    id: "weatso-developer",
    name: "Weatso Developer",
    category: "SaaS & Products",
    desc: "Menciptakan produk digital berskala masal (B2B). Kami menjual lisensi dan layanan berlangganan (subscription) untuk solusi teknologi siap pakai.",
    icon: Monitor, // PERBAIKAN: Menggunakan icon Monitor
    color: "purple"
  },
  {
    id: "co-labz",
    name: "CO-Labz",
    category: "Virtual Studio",
    desc: "Studio kreatif digital yang berfokus pada pengembangan aset game (Roblox), virtual maps, dan aksesoris 3D untuk dunia metaverse.",
    icon: Cuboid,
    color: "pink"
  },
  {
    id: "invitin",
    name: "Invitin",
    category: "Lifestyle Platform",
    desc: "Platform undangan pernikahan digital yang elegan. Menggabungkan estetika desain dengan kemudahan manajemen acara.",
    icon: HeartHandshake,
    color: "rose"
  }
];

const VenturesGrid = () => {
  return (
    <section id="ventures" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Pillars</h2>
          <div className="w-20 h-1 bg-gradient-weatso rounded-full"/>
        </div>

        {/* HORIZONTAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-full bg-gray-50 rounded-[2rem] p-8 flex flex-col border border-gray-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 border-gradient-hover cursor-default"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm text-gray-700 group-hover:text-blue-600">
                  {/* Render Icon */}
                  <venture.icon size={24} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {venture.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">{venture.name}</h3>
              </div>

              {/* Body */}
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {venture.desc}
              </p>

              {/* Footer / Decor */}
              <div className="mt-auto border-t border-gray-200 pt-4 opacity-50 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-medium text-gray-400 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                  Learn More <span className="text-lg">→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VenturesGrid;