"use client";
import { motion } from "framer-motion";

// Baris 1: Core Web, Frontend & UI (Design & Interactivity)
const techRow1 = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", 
  "GSAP", "Astro", "Vue.js", "Angular", "Shadcn/UI", 
  "Chakra UI", "Daisy UI", "Bootstrap", "Vite", "Turbopack"
];

// Baris 2: Backend, Infra, AI & Game Dev (Power & Logic)
const techRow2 = [
  "Node.js", "Python", "PHP", "Laravel", "NestJS", "Django", "FastAPI",
  "Docker", "AWS", "Google Cloud", "Azure", "Supabase", "Firebase",
  "PostgreSQL", "MySQL", "OpenAI API", "TensorFlow.js", "Roblox Studio", "Lua", "Blender"
];

const TechStack = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden flex flex-col gap-8">
      
      {/* Label Kecil */}
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
          Powered by Modern Technology
        </p>
      </div>

      {/* Row 1 - Gerak ke Kiri */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="flex flex-nowrap gap-12 whitespace-nowrap"
        >
          {[...techRow1, ...techRow1].map((tech, index) => (
            <span key={`row1-${index}`} className="text-xl md:text-3xl font-bold text-gray-300 hover:text-blue-600 transition-colors cursor-default select-none">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Row 2 - Gerak ke Kanan (Durasi beda dikit biar dinamis) */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: 0 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
          className="flex flex-nowrap gap-12 whitespace-nowrap"
        >
          {[...techRow2, ...techRow2].map((tech, index) => (
            <span key={`row2-${index}`} className="text-xl md:text-3xl font-bold text-gray-300 hover:text-purple-600 transition-colors cursor-default select-none">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default TechStack;