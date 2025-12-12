'use client'

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
// Import Lenis instance jika menggunakan context, atau gunakan pendekatan native selector
// Karena kita pakai Lenis global, kita bisa trigger scroll manual lewat window

export default function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20)
  })

  // Helper untuk smooth scroll dengan Lenis
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      // @ts-ignore - window.lenis biasanya di-inject jika setup global, 
      // tapi cara paling aman adalah native scrollIntoView dengan behavior auto (karena Lenis akan intercept)
      // atau custom event dispatch. 
      // Cara paling reliable untuk Lenis di Next.js:
      target.scrollIntoView({ behavior: 'smooth' }); 
    }
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Tech Stack", href: "#tech" },
    { name: "Our Ventures", href: "#ventures" },
    { name: "Showcase", href: "#showcase" },
  ];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled 
          ? "bg-white/60 backdrop-blur-xl border-b border-gray-100 shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="font-bold text-2xl tracking-tighter text-gray-900 group relative z-50">
          WEATSO
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 group-hover:scale-150 inline-block transition-transform duration-300">.</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="hover:text-blue-600 transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <a 
            href="mailto:contact@weatso.com"
            className="px-6 py-2.5 rounded-full bg-gray-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-0.5"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  )
}