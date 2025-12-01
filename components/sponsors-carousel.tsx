"use client"

import { useState, useEffect } from "react"
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
    name: "Fundação Brasil Solidário",
    logo: "/foundation-logo-blue.jpg",
    website: "#",
  },
  {
    id: "2",
    name: "Programa Nacional de Direitos",
    logo: "/national-program-logo.jpg",
    website: "#",
  },
  {
    id: "3",
    name: "Cooperativa Social Brasil",
    logo: "/cooperative-logo.jpg",
    website: "#",
  },
  {
    id: "4",
    name: "Instituto de Políticas Públicas",
    logo: "/public-policy-institute.jpg",
    website: "#",
  },
  {
    id: "5",
    name: "Associação de Direitos Humanos",
    logo: "/human-rights-association.jpg",
    website: "#",
  },
  {
    id: "6",
    name: "Fundo de Desenvolvimento Social",
    logo: "/social-development-fund.jpg",
    website: "#",
  },
]

export function SponsorsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const totalSlides = sponsors.length

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, totalSlides])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
    setIsAutoPlay(false)
  }

  const currentSponsor = sponsors[currentIndex]

  return (
    <div className="relative w-full">
      {/* Carousel Container - Single item display */}
      <div className="flex items-center justify-center gap-4">
        <Button variant="ghost" size="icon" onClick={goToPrevious} className="h-12 w-12" aria-label="Anterior">
          <ChevronLeft size={24} />
        </Button>

        <div className="flex-1 max-w-2xl">
          <a
            href={currentSponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-64 px-8 py-6 bg-muted/50 rounded-lg hover:bg-muted transition-colors border border-border hover:border-primary/50"
          >
            <img
              src={currentSponsor.logo || "/placeholder.svg"}
              alt={currentSponsor.name}
              title={currentSponsor.name}
              className="h-48 w-auto object-contain"
            />
          </a>
          <p className="text-center mt-4 font-medium text-foreground">{currentSponsor.name}</p>
        </div>

        <Button variant="ghost" size="icon" onClick={goToNext} className="h-12 w-12" aria-label="Próximo">
          <ChevronRight size={24} />
        </Button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {sponsors.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx)
              setIsAutoPlay(false)
            }}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 w-2"
            }`}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
