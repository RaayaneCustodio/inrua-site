import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { DocumentCard } from "@/components/document-card"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, MapPin, Calendar } from "lucide-react"

export default function AcoesPage() {
  const projects = [
    {
      id: 1,
      name: "Programa Moradia Primeiro (Housing First)",
      category: "Habitação",
      status: "Em Execução",
      description:
        "Programa inovador que promove o acesso imediato à moradia de forma segura, individual, integrada à comunidade e localizada no próprio município. Reconhecido internacionalmente como melhor prática.",
      publicTarget: "500+ pessoas em situação de rua",
      objectives:
        "Garantir acesso imediato à moradia segura como direito fundamental e porta de entrada para inclusão social e acesso a direitos.",
      activities: [
        "Mapeamento de moradia disponível em parceria com prefeituras",
        "Acompanhamento psicossocial individualizado",
        "Mediação com proprietários e acesso a subsídios",
        "Integração a serviços de saúde e assistência social",
      ],
      results: "Até 2024: 320+ pessoas alojadas com 78% de permanência em moradia",
      startDate: "2018",
      endDate: "Contínuo",
      image: "/moradia-primeiro.png",
      reports: [
        { title: "Moradia Primeiro: Da Teoria à Prática", url: "/docs/projetos/MoradiaPrimeiro.pdf" },
      ],
    },
{
      id: 2,
      name: "Dia Nacional de Luta e Luto",
      category: "Mobilização e Direitos",
      status: "Realizado",
      image: "/Luta-Luto.png", 
      description:
        "Evento alusivo ao Dia Nacional de Luta da População em Situação de Rua, em memória à resistência e organização coletiva desde o 'Massacre da Sé' (2004). Três dias de serviços públicos, eventos culturais e acolhimento na Praça General Osório.",
      publicTarget: "População em situação de rua de Curitiba",
      objectives:
        "Ofertar serviços civis essenciais (documentação, justiça), promover a cultura e dignidade através de ações de cuidado (corte de cabelo, alimentação) e fortalecer a luta política.",
      activities: [
        "Mutirão do Sistema de Justiça (TJPR, DPE-PR e MPPR) para regularização documental",
        "Emissão de certidões, RG e regularização eleitoral/militar",
        "Ações culturais: Roda de samba e almoço comunitário (Feijoada)",
        "Serviços de cuidado: Corte de cabelo, varal solidário e consultas médicas/veterinárias",
      ],
      results: "Mobilização massiva com atendimentos jurídicos e de saúde gratuitos, além de integração comunitária.",
      startDate: "Agosto 2023",
      endDate: "Concluído",
      reports: [
        { title: "Dia de Luta e Luto", url: "/docs/projetos/MoradiaPrimeiro.pdf" },
      ],
    },
    {
      id: 3,
      name: "Cozinha Solidária MNPR e INRua",
      category: "Segurança Alimentar",
      status: "Em Execução",
      image: "/cozinha-solidaria.png", 
      description:
        "Parceria estratégica entre o Movimento Nacional da População de Rua (MNPR) e o INRua para combater a fome em Curitiba. Prepara e distribui refeições nutritivas diariamente, garantindo segurança alimentar para a população vulnerável.",
      publicTarget: "Pessoas em situação de rua e vulnerabilidade social",
      objectives:
        "Combater a fome e a insegurança alimentar de forma imediata, além de promover a dignidade e os direitos humanos através do acolhimento e da alimentação de qualidade.",
      activities: [
        "Gestão e arrecadação de alimentos e recursos",
        "Preparação diária de refeições por voluntários e equipe",
        "Distribuição organizada de marmitas em pontos estratégicos",
        "Articulação política para inclusão no Programa de Aquisição de Alimentos (PAA)",
      ],
      results: "Milhares de refeições distribuídas mensalmente, garantindo o direito humano à alimentação adequada.",
      startDate: "Contínuo",
      endDate: "Em atividade",
      reports: [],
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Banner */}
      <section className="container-max pt-12">
        <HeroBanner
          title="Programas e Ações do INRUA"
          description="Confira todos os programas que desenvolvemos para garantir direitos e dignidade da população em situação de rua"
        />
      </section>

      {/* Introdução */}
      <section className="container-max section-padding">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {projects.length} Programas Estratégicos
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada programa foi desenvolvido com base no Decreto nº 7.503/2009 e na Política Nacional para População em
            Situação de Rua. Confira detalhes de execução, resultados e documentação.
          </p>
        </div>
      </section>

      {/* Grid de Projetos */}
      <section className="container-max section-padding">
        <div className="space-y-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                {/* Imagem */}
                <div className="md:col-span-1">
                  <div className="h-64 md:h-full min-h-48 bg-muted rounded-lg overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="md:col-span-2 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
                      <Badge variant="outline" className="border-green-500 text-green-700 bg-green-50">
                        {project.status}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.name}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    {/* Informações principais */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-start gap-2">
                        <Users size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Público</p>
                          <p className="text-muted-foreground">{project.publicTarget}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <TrendingUp size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Status</p>
                          <p className="text-muted-foreground">{project.status}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Período</p>
                          <p className="text-muted-foreground">
                            {project.startDate} {project.endDate !== "Contínuo" && `a ${project.endDate}`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Escala</p>
                          <p className="text-muted-foreground">Toda Brasil</p>
                        </div>
                      </div>
                    </div>

                    {/* Objetivos e Atividades (expandible) */}
                    <details className="cursor-pointer group mb-4">
                      <summary className="font-semibold text-foreground hover:text-primary transition-colors">
                        Detalhes do Programa
                      </summary>
                      <div className="mt-4 space-y-4 pt-4 border-t border-border">
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">Objetivos</h5>
                          <p className="text-sm text-muted-foreground">{project.objectives}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">Atividades Principais</h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {project.activities.map((activity, idx) => (
                              <li key={idx}>• {activity}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">Resultados Alcançados</h5>
                          <p className="text-sm text-muted-foreground">{project.results}</p>
                        </div>
                      </div>
                    </details>

                    {/* Relatórios */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <h5 className="font-semibold text-foreground mb-3">Relatórios e Documentação</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.reports.map((report, idx) => (
                          <DocumentCard
                            key={idx}
                            title={report.title}
                            fileUrl={report.url}
                            fileName={`${project.name.toLowerCase().replace(/\s+/g, "-")}-${idx}.pdf`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="container-max section-padding">
        <div className="gradient-accent rounded-lg p-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">Conheça Nosso Trabalho</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Acesse nossa seção de transparência para dados completos, parcerias públicas, financiamento e documentação
            de todos os programas.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
