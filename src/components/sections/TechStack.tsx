"use client";
import { motion } from "framer-motion";
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFramer, 
  SiRoblox, SiBlender, SiNodedotjs, SiPython, SiAmazon, 
  SiVercel, SiLua, SiSupabase, SiLaravel, SiMongodb, SiPostgresql,
  SiHtml5, SiCss3, SiJavascript, SiDocker, SiGooglecloud, SiFirebase,
  SiVite, SiMysql, SiOpenai, SiTensorflow
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc"; // Solusi untuk Azure Icon

// --- DATA TECH STACK ---
const row1 = [
  { name: "Next.js 16", icon: <SiNextdotjs className="text-gray-200" /> }, // Next.js putih/abu
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-gray-200" /> }, // Framer putih
  { name: "Roblox Studio", icon: <SiRoblox className="text-[#00A2FF]" /> }, // Roblox Biru/Putih
  { name: "Blender", icon: <SiBlender className="text-[#EA7600]" /> },
  { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
];

const row2 = [
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
  { name: "AWS", icon: <SiAmazon className="text-[#FF9900]" /> },
  { name: "Azure", icon: <VscAzure className="text-[#0078D4]" /> }, // Menggunakan VscAzure yang pasti ada
  { name: "Google Cloud", icon: <SiGooglecloud className="text-[#4285F4]" /> },
  { name: "Vercel", icon: <SiVercel className="text-gray-200" /> },
  { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
  { name: "Lua", icon: <SiLua className="text-[#000080]" /> }, // Lua biru tua
  { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
  { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" /> },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-20 bg-white border-y border-gray-100 overflow-hidden flex flex-col gap-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
          Tech Arsenal
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Built with Modern Technologies
        </h2>
      </div>

      {/* Row 1 (Gerak Kiri) */}
      <div className="flex w-full overflow-hidden mask-gradient-sides">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="flex flex-nowrap gap-16 whitespace-nowrap items-center"
        >
          {/* Loop 3x agar mulus */}
          {[...row1, ...row1, ...row1].map((tech, index) => (
            <div key={`r1-${index}`} className="flex items-center gap-3 group cursor-default">
              <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 opacity-70 group-hover:opacity-100">
                {tech.icon}
              </span>
              <span className="text-2xl font-bold text-gray-300 group-hover:text-gray-900 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 (Gerak Kanan) */}
      <div className="flex w-full overflow-hidden mask-gradient-sides">
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: 0 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
          className="flex flex-nowrap gap-16 whitespace-nowrap items-center"
        >
          {[...row2, ...row2, ...row2].map((tech, index) => (
            <div key={`r2-${index}`} className="flex items-center gap-3 group cursor-default">
              <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 opacity-70 group-hover:opacity-100">
                {tech.icon}
              </span>
              <span className="text-2xl font-bold text-gray-300 group-hover:text-gray-900 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;