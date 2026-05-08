"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Sobre nós", href: "/sobre" },
    { label: "Notícias", href: "/noticias" },
    { label: "Projetos", href: "/acoes" },
    { label: "Transparência", href: "/transparencia" },
    { label: "Contato", href: "/contato" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#020617]/90 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-4">
            <div className="relative">
              <img
                src="/images/logo-20inrua-20transparente.png"
                alt="INRUA Logo"
                className="h-14 w-14 object-contain drop-shadow-xl"
              />
            </div>

            <div className="hidden sm:block">
              <p className="font-black text-white text-lg leading-none">
                INRUA
              </p>

              <span className="text-xs text-white/60">
                Direitos Humanos
              </span>
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-white/75 hover:text-[#F2D04B] transition-all duration-300 relative group"
              >
                {item.label}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#F2D04B] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* BOTÃO TRANSPARÊNCIA */}
          <Link href="/transparencia" className="hidden sm:block">
            <Button className="bg-[#F2D04B] hover:bg-[#E98C37] text-black font-black rounded-2xl px-6 shadow-[0_10px_30px_rgba(242,208,75,0.35)] transition-all hover:scale-105">
              Transparência
            </Button>
          </Link>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <nav className="md:hidden border-t border-white/10 py-6 space-y-3 bg-[#0F172A]/95 backdrop-blur-2xl rounded-b-3xl">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-[#F2D04B] rounded-xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="px-4 pt-2">
              <Link href="/transparencia">
                <Button className="w-full bg-[#F2D04B] hover:bg-[#E98C37] text-black font-black rounded-xl">
                  Área de Transparência
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}