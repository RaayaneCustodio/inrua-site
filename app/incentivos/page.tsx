import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Incentivos e Apoiadores | INRUA",
  description:
    "Conheça as organizações e empresas que apoiam a missão do Instituto Nacional de Direitos Humanos da População de Rua através de incentivos e parcerias.",
}

const sponsors = [
  {
    id: "1",
    name: "Fundação Brasil Solidário",
    logo: "/foundation-logo-blue.jpg",
    description: "Apoiador estratégico dos programas de direitos humanos e políticas públicas.",
    website: "#",
  },
  {
    id: "2",
    name: "Programa Nacional de Direitos",
    logo: "/national-program-logo.jpg",
    description: "Parceiro na implementação de políticas de defesa de direitos da população de rua.",
    website: "#",
  },
  {
    id: "3",
    name: "Cooperativa Social Brasil",
    logo: "/cooperative-logo.jpg",
    description: "Apoiador do Programa Moradia Primeiro e outras iniciativas de inclusão social.",
    website: "#",
  },
  {
    id: "4",
    name: "Instituto de Políticas Públicas",
    logo: "/public-policy-institute.jpg",
    description: "Parceiro em pesquisa e desenvolvimento de políticas públicas inovadoras.",
    website: "#",
  },
  {
    id: "5",
    name: "Associação de Direitos Humanos",
    logo: "/human-rights-association.jpg",
    description: "Apoiador das campanhas e ações de advocacy do INRUA.",
    website: "#",
  },
  {
    id: "6",
    name: "Fundo de Desenvolvimento Social",
    logo: "/social-development-fund.jpg",
    description: "Financiador de programas de capacitação e eventos nacionais.",
    website: "#",
  },
]

export default function IncentivesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="container-max pt-12">
        <HeroBanner
          title="Nossos Incentivos"
          description="As organizações e empresas que apoiam nossa missão de defender os direitos humanos da população em situação de rua"
          ctaText="Seja um Incentivador"
          ctaHref="/contato"
        />
      </section>

      {/* Incentives Grid */}
      <section className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsors.map((sponsor) => (
            <Card key={sponsor.id} className="p-8 flex flex-col">
              <div className="h-24 flex items-center justify-center mb-6 bg-muted rounded-lg">
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  className="max-h-20 max-w-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{sponsor.name}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{sponsor.description}</p>
              <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full bg-transparent">
                  Visitar Website
                </Button>
              </a>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container-max section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Seja um Incentivador</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sua organização pode fazer parte dessa transformação. Entre em contato conosco para conhecer as
            oportunidades de incentivos e apoio à nossa missão.
          </p>
          <a href="/contato">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Entre em Contato
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
