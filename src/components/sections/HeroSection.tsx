"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { Code2, Monitor, Cuboid, HeartHandshake } from "lucide-react";

// --- KOMPONEN ORBIT ITEM ---
const OrbitItem = ({ 
  icon: Icon, 
  color, 
  label, 
  progress, 
  offset, 
  radiusX = 260, // Lebar orbit (Kiri-Kanan)
  radiusY = 70   // Tinggi orbit (Atas-Bawah) -> Semakin kecil semakin gepeng (Eclipse)
}: { 
  icon: any, color: string, label: string, progress: MotionValue<number>, offset: number, radiusX?: number, radiusY?: number 
}) => {
  
  // Konversi progress scroll ke sudut (radian)
  const angle = useTransform(progress, (val) => (val + offset) * (Math.PI / 180));
  
  // Posisi X dan Y (Matematika Lingkaran)
  const x = useTransform(angle, (a) => Math.cos(a) * radiusX);
  const y = useTransform(angle, (a) => Math.sin(a) * radiusY);
  
  // Scale: Membesar saat di depan (Y positif), mengecil saat di belakang (Y negatif)
  const scale = useTransform(y, [-radiusY, radiusY], [0.75, 1.25]);
  
  // --- KUNCI EFEK 3D (OCCLUSION) ---
  // Kita mapping posisi Y ke Z-Index.
  // Weatso Logo nanti kita set di z-index: 20.
  // Jadi range z-index item harus melewati angka 20 (misal: 10 s/d 30).
  const zIndex = useTransform(y, [-radiusY, radiusY], [10, 30]);
  
  // Opacity biar makin dramatis (belakang agak pudar)
  const opacity = useTransform(y, [-radiusY, radiusY], [0.5, 1]);

  return (
    <motion.div
      style={{ x, y, scale, zIndex, opacity }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
    >
      <div className="relative group">
        {/* Icon Circle */}
        <div className={`w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center transition-all hover:border-blue-300 group-hover:scale-110`}>
          <Icon className={color} size={32} strokeWidth={1.5} />
        </div>
        
        {/* Label (Tooltip) */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-[10px] px-3 py-1 rounded-full whitespace-nowrap shadow-xl pointer-events-none">
          {label}
        </div>
      </div>
    </motion.div>
  );
};

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Kontrol Rotasi: 0px scroll = 0 derajat, 1200px scroll = 360 derajat
  const rawAngle = useTransform(scrollY, [0, 1200], [0, 360]);
  const smoothAngle = useSpring(rawAngle, { stiffness: 30, damping: 20 });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-[90vh] flex flex-col md:flex-row items-start justify-center bg-white px-6 md:px-12 pt-20 md:pt-18 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-100/50 rounded-full blur-[120px]" />
      </div>

      {/* Teks Kiri */}
      <div className="z-40 w-full md:w-5/12 flex flex-col items-start space-y-8 md:pr-10 sticky top-32">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50/50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Scroll to Explore Ecosystem
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
            Weatso <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient bg-[length:200%_auto]">
              Holding.
            </span>
          </h1>

          <p className="text-lg text-gray-500 max-w-lg leading-relaxed font-light">
            Sinergi teknologi, produk, dan kreativitas dalam satu poros orbit yang presisi.
          </p>

          <div className="pt-8">
            <a href="#ventures" className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300">
              Lihat Ventures
            </a>
          </div>
        </motion.div>
      </div>

      {/* AREA ORBIT 3D */}
      <div className="w-full md:w-7/12 h-[350px] md:h-[500px] flex items-center justify-center relative mt-4 md:mt-0 md:-mr-20 scale-[0.55] sm:scale-75 md:scale-100 origin-center transition-transform duration-500">
        
        {/* --- PUSAT ORBIT (WEATSO LOGO) --- */}
        {/* Layer diset ke z-20. Jadi item orbit akan berada di z-10 (belakang) atau z-30 (depan) */}
        <motion.div 
          className="absolute w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-[0_0_60px_-10px_rgba(37,99,235,0.25)] border border-gray-100 flex items-center justify-center z-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
           <div className="text-center">
             <span className="font-bold text-2xl tracking-tighter text-gray-900">WEATSO</span>
             <span className="text-blue-600 text-3xl leading-none">.</span>
           </div>
        </motion.div>

        {/* Garis Lintasan (Visual Only) */}
        {/* Diputar sedikit (-6 deg) agar terlihat dinamis diagonal */}
        <div className="absolute w-[520px] h-[140px] border border-dashed border-gray-300/60 rounded-[100%] transform -rotate-6 pointer-events-none z-0" />

        {/* Container Item Orbit */}
        {/* Transform rotate disamakan dengan garis lintasan agar icon mengikuti garis */}
        <div className="absolute w-[520px] h-[140px] transform -rotate-6 z-30 pointer-events-none">
    <OrbitItem icon={Code2} color="text-blue-600" label="Weatso Service" progress={smoothAngle} offset={90} />
    <OrbitItem icon={Monitor} color="text-purple-600" label="Weatso Developer" progress={smoothAngle} offset={180} />
    <OrbitItem icon={Cuboid} color="text-pink-600" label="CO-Labz" progress={smoothAngle} offset={270} />
    <OrbitItem icon={HeartHandshake} color="text-rose-600" label="Invitin" progress={smoothAngle} offset={0} />
  </div>
      </div>
    </section>
  );
};

export default HeroSection;