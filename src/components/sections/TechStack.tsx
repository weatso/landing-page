"use client";
import { motion } from "framer-motion";

// SVG Components Sederhana untuk Logo (Ringan)
const NextJsIcon = () => (
  <svg viewBox="0 0 180 180" fill="none" className="w-6 h-6 mr-2"><mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"><circle cx="90" cy="90" r="90" fill="#fff"/></mask><g mask="url(#a)"><circle cx="90" cy="90" r="90" fill="#000"/><path fill="url(#b)" d="M149.508 157.52L69.142 54H54v71.97h12.274V64.638l80.116 103.664c1.082-.608 2.136-1.254 3.118-1.782zm-12.026-80.136V54h-12.274v71.97h12.274V77.384z"/><defs><linearGradient id="b" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient></defs></g></svg>
);

const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6 mr-2 fill-[#149ECA]"><circle r="2.05"/><g fill="none" stroke="#149ECA"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
);

const RobloxIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2 fill-current"><path d="M5.424 19.334l.793-13.937 13.938.793-.794 13.938z"/><path d="M9.867 15.605l2.695-.873.873 2.695-2.695.873z" fill="#fff"/></svg>
);

// Data Tech Stack dengan Icon (Hybrid: Ada logo, ada teks)
const techRow1 = [
  { name: "Next.js 16", icon: <NextJsIcon /> },
  { name: "React", icon: <ReactIcon /> },
  { name: "TypeScript", icon: null }, // Null berarti teks saja
  { name: "Tailwind CSS", icon: null },
  { name: "Framer Motion", icon: null },
  { name: "Roblox Studio", icon: <RobloxIcon /> },
  { name: "Blender", icon: null },
];

const techRow2 = [
  { name: "Node.js", icon: null },
  { name: "Python", icon: null },
  { name: "Laravel", icon: null },
  { name: "Lua", icon: null },
  { name: "Supabase", icon: null },
  { name: "AWS", icon: null },
  { name: "Vercel", icon: null },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-20 bg-white border-y border-gray-100 overflow-hidden flex flex-col gap-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
          Engineering Powerhouse
        </p>
      </div>

      {/* Row 1 */}
      <div className="flex w-full overflow-hidden mask-gradient-sides">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex flex-nowrap gap-16 whitespace-nowrap items-center"
        >
          {[...techRow1, ...techRow1, ...techRow1].map((tech, index) => (
            <div key={`r1-${index}`} className="flex items-center group cursor-default">
              {tech.icon && <div className="grayscale group-hover:grayscale-0 transition-all duration-300 opacity-50 group-hover:opacity-100">{tech.icon}</div>}
              <span className="text-2xl md:text-4xl font-bold text-gray-200 group-hover:text-gray-900 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 */}
      <div className="flex w-full overflow-hidden mask-gradient-sides">
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: 0 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          className="flex flex-nowrap gap-16 whitespace-nowrap items-center"
        >
          {[...techRow2, ...techRow2, ...techRow2].map((tech, index) => (
            <div key={`r2-${index}`} className="flex items-center group cursor-default">
              <span className="text-2xl md:text-4xl font-bold text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-colors">
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