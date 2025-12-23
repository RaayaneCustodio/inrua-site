"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { StatsCard } from "@/components/stats-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Users, Heart, Target, Eye, ArrowRight } from "lucide-react"
import { SponsorsCarousel } from "@/components/sponsors-carousel"

export default function Home() {
  const highlights = [
    {
      icon: <Users size={32} />,
      label: "Pessoas Impactadas",
      value: "8.5K+",
      description: "População em situação de rua atendida desde 2016",
    },
    {
      icon: <Heart size={32} />,
      label: "Anos de Atuação",
      value: "8+",
      description: "Comprometidos com direitos humanos desde 2016",
    },
    {
      icon: <Target size={32} />,
      label: "Estados Atendidos",
      value: "15+",
      description: "Presença nacional em defesa de direitos",
    },
    {
      icon: <Eye size={32} />,
      label: "Transparência",
      value: "100%",
      description: "Conformidade com Lei 13.019/2014 (MROSC)",
    },
  ]

  const features = [
    {
      title: "Sobre Nós",
      description: "Conheça nossa história, missão e compromisso com a população em situação de rua.",
      href: "/sobre",
      icon: "📋",
    },
    {
      title: "Ações & Projetos",
      description: "Explore nossos programas de direitos, moradia e políticas públicas.",
      href: "/acoes",
      icon: "🏠",
    },
    {
      title: "Como Ajudar",
      description: "Saiba como você pode contribuir para nossa missão de garantir dignidade.",
      href: "/contato",
      icon: "🤝",
    },
    {
      title: "Transparência",
      description: "Acesse parcerias, relatórios financeiros e documentação completa conforme a lei.",
      href: "/transparencia",
      icon: "🔍",
    },
  ]

  const galleryItems = [
    {
      
      title: "Moradia Primeiro", 
      category: "Habitação",
      image: "/moradia-primeiro1.png", 
    },
    {
      title: "Movimento de Rua",
      category: "Habitação",
      image: "/movimento2.png", 
    },
    {
      title: "Moradia Primeiro",
      category: "Habitação",
      image: "/moradia-primeiro2.png", 
    },
    {
      title: "Movimento de Rua",
      category: "Habitação",
      image: "/movimento.png", 
    },
    {
      title: "Cozinha Solidária",
      category: "Alimentação",
      image: "/cozinha-solidaria.png", 
    },
    {
      title: "Cozinha Solidária",
      category: "Alimentação",
      image: "/cozinha-solidaria2.png", 
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="container-max pt-12">
        <HeroBanner
          title="Instituto Nacional de Direitos Humanos da População de Rua"
          description="Desde 2016, defendemos a dignidade e os direitos fundamentais da população em situação de rua através de políticas públicas, pesquisa e ações concretas."
          ctaText="Acessar Transparência"
          ctaHref="/transparencia"
        />
      </section>

      {/* Quick Stats */}
      <section className="container-max section-padding">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nosso Impacto em Números</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde 2016, trabalhamos pela garantia de direitos e dignidade da população em situação de rua em todo o
            Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <StatsCard key={idx} {...item} />
          ))}
        </div>
      </section>

      {/* Features Grid - CORRIGIDO (Fundo Cinza Total) */}
      <section className="w-full bg-muted/30 section-padding">
        <div className="container-max px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Navegue por Nossas Seções</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça nossas ações, documentos e dados sobre defesa de direitos da população de rua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Link key={feature.href} href={feature.href}>
                <Card className="h-full p-6 cursor-pointer hover:shadow-lg hover:border-primary/50 transition-all group bg-white/50 backdrop-blur-sm">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    Acessar
                    <ArrowRight size={16} />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container-max section-padding">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Galeria de Ações</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça visualmente o trabalho que desenvolvemos em defesa dos direitos da população em situação de rua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="group cursor-pointer overflow-hidden rounded-lg">
              <div className="relative overflow-hidden h-64 bg-muted">
                {/* Verifica se a imagem existe, senão usa placeholder */}
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback se a imagem não carregar
                    //Grande Teste
                    (e.target as HTMLImageElement).src = "https://placehold.co/600x400?text=Sem+Imagem"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/acoes">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Ver Todos os Programas
            </Button>
          </Link>
        </div>
      </section>

      {/* Patrocinadores - CORRIGIDO (Fundo Cinza Total e Centralizado) */}
      <section className="w-full bg-muted/30 section-padding">
        <div className="container-max px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos Incentivadores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Incentivos que fortalecem nossa missão de defender os direitos da população em situação de rua.
            </p>
          </div>

          <div className="flex justify-center w-full items-center">
            <SponsorsCarousel />
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/incentivos">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Ver Todos os Incentivadores
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-max section-padding">
        <div className="gradient-accent rounded-lg p-12 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparência</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Acesse todos os dados,incentivos e documentos financeiros em nossa área de transparência.
          </p>
          <Link href="/transparencia">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Acessar Transparência Completa
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}