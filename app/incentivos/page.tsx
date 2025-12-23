import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Incentivos e Apoiadores | INRUA",
  description:
    "Conheça as instituições incentivadoras que apoiam a missão do Instituto Nacional de Direitos Humanos da População de Rua.",
}

export default function IncentivesPage() {
  const incentivadores = [
    {
      id: 1,
      nome: "Fundação Oswaldo Cruz (Fiocruz)",
      logo: "/fiocruz.jpg",
      descricao: "A Fiocruz é a instituição incentivadora do INRUA, contribuindo para ações de saúde pública, promoção dos direitos humanos e desenvolvimento de políticas públicas voltadas à população em situação de rua.",
      site: "https://www.fiocruz.br"
    },
    {
      id: 2,
      nome: "Fundação Banco do Brasil",
      logo: "/Fundacao.png",
      descricao: "A Fundação BB apoia o INRUA no projeto de Cozinhas Solidárias, investindo na infraestrutura e segurança alimentar para brasileiros em situação de vulnerabilidade em diversos estados.",
      site: "https://fbb.org.br"
    }
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="container-max pt-12 px-4">
        <HeroBanner
          title="Nossos Incentivos"
          description="Instituições que fortalecem e apoiam a missão do INRUA na defesa dos direitos humanos da população em situação de rua."
          ctaText="Seja um Incentivador"
          ctaHref="/contato"
        />
      </section>

      {/* Grid de Incentivadores */}
      <section className="container-max section-padding px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {incentivadores.map((item) => (
            <Card key={item.id} className="w-full overflow-hidden flex flex-col border-border hover:shadow-lg transition-all duration-300">
              
              {/* BLOCO DA LOGO (Estilo idêntico ao anterior) */}
              <div className="h-48 w-full bg-white flex items-center justify-center p-6 border-b">
                <img
                  src={item.logo}
                  alt={item.nome}
                  className="h-full max-w-full object-contain"
                />
              </div>

              {/* CONTEÚDO (Estilo idêntico ao anterior) */}
              <div className="p-10 flex flex-col flex-grow text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {item.nome}
                </h3>

                <p className="text-muted-foreground mb-8 flex-grow">
                  {item.descricao}
                </p>

                <a
                  href={item.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <Button variant="outline" size="lg" className="w-full bg-transparent hover:bg-primary hover:text-white transition-colors">
                    Visitar Website
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="container-max section-padding px-4 mb-12">
        <div className="max-w-2xl mx-auto text-center bg-muted/30 p-12 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Seja um Incentivador
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Sua organização pode fazer parte dessa transformação social. Entre em contato conosco para conhecer
            as oportunidades de incentivo e apoio à nossa missão.
          </p>

          <a href="/contato">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 h-14 text-lg">
              Entre em Contato
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}