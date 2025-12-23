import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Incentivos e Apoiadores | INRUA",
  description:
    "Conheça a instituição incentivadora que apoia a missão do Instituto Nacional de Direitos Humanos da População de Rua.",
}

export default function IncentivesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="container-max pt-12">
        <HeroBanner
          title="Nossos Incentivos"
          description="Instituição que fortalece e apoia a missão do INRUA na defesa dos direitos humanos da população em situação de rua."
          ctaText="Seja um Incentivador"
          ctaHref="/contato"
        />
      </section>

      {/* Incentivador - Centralizado */}
      <section className="container-max section-padding">
        <div className="flex justify-center">
          <Card className="max-w-xl w-full overflow-hidden text-center">

            {/* BLOCO DA LOGO — SOLUÇÃO 1 */}
            <div className="h-48 w-full bg-white flex items-center justify-center">
              <img
                src="/fiocruz.jpg"
                alt="Fundação Oswaldo Cruz (Fiocruz)"
                className="h-full max-w-full object-contain px-6"
              />
            </div>

            {/* CONTEÚDO */}
            <div className="p-10">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Fundação Oswaldo Cruz (Fiocruz)
              </h3>

              <p className="text-muted-foreground mb-8">
                A Fiocruz é a instituição incentivadora do INRUA, contribuindo para ações de saúde pública,
                promoção dos direitos humanos e desenvolvimento de políticas públicas voltadas à população
                em situação de rua.
              </p>

              <a
                href="https://www.fiocruz.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="w-full bg-transparent">
                  Visitar Website
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container-max section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Seja um Incentivador
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Sua organização pode fazer parte dessa transformação. Entre em contato conosco para conhecer
            as oportunidades de incentivo e apoio à nossa missão.
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
