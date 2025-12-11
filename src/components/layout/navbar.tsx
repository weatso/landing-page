'use client'

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20)
  })

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 px-6 md:px-12",
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg border-b border-gray-100 py-4 shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO: Teks Hitam, Titik Gradasi */}
        <Link href="/" className="font-bold text-2xl tracking-tighter text-gray-900 group">
          WEATSO
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 group-hover:scale-125 inline-block transition-transform">.</span>
        </Link>

        {/* Menu Sederhana */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-600">
          <Link href="#ventures" className="hover:text-blue-600 transition-colors">Our Ventures</Link>
          <Link href="#about" className="hover:text-purple-600 transition-colors">About</Link>
          <Link href="#contact" className="px-5 py-2.5 rounded-full bg-gray-900 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}