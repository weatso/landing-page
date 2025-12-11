"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, HeartHandshake, Cuboid, Monitor, ArrowUpRight } from "lucide-react";

const ventures = [
  {
    id: "weatso-service",
    name: "Weatso Service",
    category: "IT Consultant",
    desc: "Software, Web App, & Sistem Informasi Manajemen (SIM/SIA) presisi.",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-400",
    logoColor: "text-blue-600"
  },
  {
    id: "weatso-developer",
    name: "Weatso Developer",
    category: "SaaS & Products",
    desc: "Produk digital B2B berskala masal & layanan subscription.",
    icon: Monitor,
    gradient: "from-purple-600 to-indigo-500",
    logoColor: "text-purple-600"
  },
  {
    id: "co-labz",
    name: "CO-Labz",
    category: "Virtual Studio",
    desc: "Aset game (Roblox), virtual maps, dan aksesoris 3D metaverse.",
    icon: Cuboid,
    gradient: "from-pink-500 to-rose-400",
    logoColor: "text-pink-600"
  },
  {
    id: "invitin",
    name: "Invitin",
    category: "Lifestyle Platform",
    desc: "Platform undangan pernikahan digital yang elegan.",
    icon: HeartHandshake,
    gradient: "from-orange-400 to-amber-300",
    logoColor: "text-orange-600"
  }
];

const VenturesGrid = () => {
  return (
    <section id="ventures" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">Our Ventures</h2>
            <p className="text-gray-500 max-w-lg text-lg">Pilar-pilar inovasi yang menopang ekosistem digital Weatso.</p>
          </div>
          <div className="hidden md:block w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 cursor-pointer"
            >
              {/* IMAGE AREA (Top 50%) */}
              <div className={`h-64 w-full bg-gradient-to-br ${venture.gradient} relative overflow-hidden`}>
                {/* Overlay Noise/Texture biar mewah */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                
                {/* Hover Effect pada Gambar */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                
                {/* LOGO DI KIRI BAWAH GAMBAR */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <venture.icon size={28} className={venture.logoColor} />
                </div>

                {/* Arrow Icon di Kanan Atas */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* TEXT AREA (Bottom) */}
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  {venture.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {venture.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {venture.desc}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <span className="text-xs font-semibold text-gray-900 flex items-center gap-2 group-hover:gap-3 transition-all">
                    Visit Website <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VenturesGrid;