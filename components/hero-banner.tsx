import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroBannerProps {
  title: string
  description: string
  ctaText?: string
  ctaHref?: string
  backgroundImage?: string
}

export function HeroBanner({
  title,
  description,
  ctaText = "Saiba mais",
  ctaHref = "#",
  backgroundImage,
}: HeroBannerProps) {
  return (
    <div
      className="relative min-h-[400px] md:min-h-[500px] w-full flex items-center justify-center overflow-hidden rounded-lg"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(135deg, rgba(0, 61, 130, 0.8) 0%, rgba(0, 61, 130, 0.6) 100%), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {!backgroundImage && <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-accent" />}

      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{title}</h1>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 text-balance">{description}</p>
        {ctaHref && (
          <Link href={ctaHref}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {ctaText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}
