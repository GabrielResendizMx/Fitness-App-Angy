
"use client"

import Link from "next/link"
import { Sparkles } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-full transition-transform duration-500 group-hover:rotate-12">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-headline text-2xl font-bold text-foreground">Aura<span className="text-primary">Fit</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-medium text-muted-foreground">
          <Link href="#about" className="hover:text-primary transition-colors">Sobre mí</Link>
          <Link href="#services" className="hover:text-primary transition-colors">Servicios</Link>
          <Link href="#results" className="hover:text-primary transition-colors">Resultados</Link>
          <Link href="/register" className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all soft-glow">Comenzar</Link>
        </div>
      </div>
    </nav>
  )
}
