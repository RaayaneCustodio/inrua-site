"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Sponsor {
  id: string
  name: string
  logo: string
  website?: string
}

const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "Fundação Oswaldo Cruz (Fiocruz)",
    logo: "/fiocruz.jpg",
    website: "https://www.fiocruz.br",
  },
  {
    id: "2",
    name: "Fundação Banco do Brasil",
    logo: "/Fundacao.png",
    website: "https://fbb.org.br",
  },
]

export function SponsorsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = sponsors.length

  // Função para avançar (estratégia useCallback para estabilidade)
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  // Efeito de Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 5000) // 5 segundos

    return () => clearInterval(interval)
  }, [goToNext]) // Sempre que avançar, o timer reinicia

  const currentSponsor = sponsors[currentIndex]

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      <div className="flex items-center justify-center gap-2 md:gap-8">
        {/* Seta Esquerda */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={goToPrevious} 
          className="h-12 w-12 rounded-full hover:bg-primary/10 text-muted-foreground"
        >
          <ChevronLeft size={32} />
        </Button>

        {/* Container do Slide */}
        <div className="flex-1 overflow-hidden">
          <div 
            key={currentIndex} // A KEY AQUI É O SEGREDO: Força o componente a remontar e disparar a animação
            className="animate-in fade-in zoom-in duration-500 flex flex-col items-center"
          >
            <a
              href={currentSponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative
                flex
                items-center
                justify-center
                w-full
                h-48 md:h-64
                rounded-2xl
                bg-white
                shadow-sm
                border
                border-border
                hover:shadow-md
                transition-all
                p-8
              "
            >
              <img
                src={currentSponsor.logo}
                alt={currentSponsor.name}
                className="max-w-full max-h-full object-contain"
              />
            </a>

            <p className="text-center mt-6 font-semibold text-lg text-foreground/80">
              {currentSponsor.name}
            </p>
          </div>
        </div>

        {/* Seta Direita */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={goToNext} 
          className="h-12 w-12 rounded-full hover:bg-primary/10 text-muted-foreground"
        >
          <ChevronRight size={32} />
        </Button>
      </div>

      {/* Indicadores (Dots) */}
      <div className="flex justify-center gap-3 mt-8">
        {sponsors.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 transition-all duration-300 rounded-full ${
              idx === currentIndex 
                ? "bg-primary w-10" 
                : "bg-muted-foreground/20 w-2 hover:bg-muted-foreground/40"
            }`}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}