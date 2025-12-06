'use client'

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  // Hook dari Framer Motion untuk detect scroll position
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })
  

  return (
    <motion.nav
      // Animasi transisi background
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6",
        isScrolled 
          ? "bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm py-3" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="font-bold text-xl tracking-tighter">
          WEATSO<span className="text-blue-600">.</span>
        </Link>

        {/* DESKTOP MENU (Sementara) */}
        <div className="hidden md:flex gap-8 items-center font-medium text-sm">
          <Link href="#services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link href="#work" className="hover:text-blue-600 transition-colors">Work</Link>
          <Link href="#about" className="hover:text-blue-600 transition-colors">About</Link>
          
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-all text-sm">
            Start Project
          </button>
        </div>
      </div>
    </motion.nav>
  )
}