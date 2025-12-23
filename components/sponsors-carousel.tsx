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
    name: "Fundação Oswaldo Cruz (Fiocruz)",
    logo: "/fiocruz.jpg",
    website: "https://www.fiocruz.br",
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
      <div className="flex items-center justify-center gap-4">
        <Button variant="ghost" size="icon" onClick={goToPrevious} className="h-12 w-12">
          <ChevronLeft size={24} />
        </Button>

        <div className="flex-1 max-w-2xl">
          <a
            href={currentSponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative
              flex
              items-center
              justify-center
              h-64
              rounded-lg
              bg-white/50
              backdrop-blur-md
              border
              border-white/40
              hover:bg-white/70
              transition-all
              overflow-hidden
            "
          >
            <img
              src={currentSponsor.logo}
              alt={currentSponsor.name}
              title={currentSponsor.name}
              className="w-full h-full object-contain p-6"
            />
          </a>

          <p className="text-center mt-4 font-medium text-foreground">
            {currentSponsor.name}
          </p>
        </div>

        <Button variant="ghost" size="icon" onClick={goToNext} className="h-12 w-12">
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
          />
        ))}
      </div>
    </div>
  )
}
