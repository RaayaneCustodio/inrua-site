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
    {
      id: 4,
      name: "Conferência Livre de Mulheres em Situação de Rua",
      category: "Direitos e Participação Social",
      status: "Realizado",
      image: "/mulheres.jpeg",
      description:
        "Encontro histórico realizado em Curitiba para dar voz e protagonismo às mulheres em situação de rua. O evento debateu moradia, saúde, segurança e trabalho, visando a construção de políticas públicas interseccionais.",
      publicTarget: "Mulheres em situação de rua, ativistas e pesquisadoras",
      objectives:
        "Documentar demandas urgentes, combater a invisibilidade e a violência contra a mulher em situação de rua e eleger delegadas para a etapa nacional da 5ª Conferência de Políticas para Mulheres.",
      activities: [
        "Grupos temáticos de discussão (Saúde, Trabalho, Moradia e Segurança)",
        "Relatos de trajetórias de vida e superação",
        "Formulação de propostas para protocolos de segurança e moradia popular",
        "Eleição de delegadas titulares e suplentes",
      ],
      results: "Elaboração de relatoria técnica enviada ao Governo Federal e fortalecimento da rede de proteção às mulheres em Curitiba.",
      startDate: "Agosto 2025",
      endDate: "Concluído",
      reports: [
        { title: "Relatoria Final da Conferência", url: "/docs/transparencia/RelatorioMulheres.pdf" },
      ],
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Banner */}
      <section className="container-max pt-12 px-4">
        <HeroBanner
          title="Programas e Ações do INRUA"
          description="Confira todos os programas que desenvolvemos para garantir direitos e dignidade da população em situação de rua"
        />
      </section>

      {/* Introdução */}
      <section className="container-max section-padding px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {projects.length} Ações de Impacto
          </h2>
          <p className="text-lg text-muted-foreground">
            Atuamos em diversas frentes para garantir direitos fundamentais, 
            promovendo autonomia, segurança alimentar e incidência política.
          </p>
        </div>
      </section>

      {/* Grid de Projetos */}
      <section className="container-max section-padding px-4">
        <div className="space-y-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                {/* Imagem */}
                <div className="md:col-span-1">
                  <div className="h-64 md:h-full min-h-[200px] bg-muted rounded-lg overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="md:col-span-2 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
                      <Badge variant="outline" className={project.status === "Em Execução" ? "border-green-500 text-green-700 bg-green-50" : "border-blue-500 text-blue-700 bg-blue-50"}>
                        {project.status}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.name}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    {/* Informações principais */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-start gap-2">
                        <Users size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Público-Alvo</p>
                          <p className="text-muted-foreground">{project.publicTarget}</p>
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
                          <p className="font-semibold text-foreground">Abrangência</p>
                          <p className="text-muted-foreground">Brasil / Paraná</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <TrendingUp size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Status Atual</p>
                          <p className="text-muted-foreground">{project.status}</p>
                        </div>
                      </div>
                    </div>

                    {/* Objetivos e Atividades (expandible) */}
                    <details className="cursor-pointer group mb-4 border border-border rounded-md p-3">
                      <summary className="font-semibold text-foreground hover:text-primary transition-colors list-none flex justify-between items-center">
                        Ver detalhes e objetivos
                        <span className="text-xs text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
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
                    {project.reports.length > 0 && (
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
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="container-max section-padding px-4">
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Conheça Nosso Trabalho de Perto</h2>
          <p className="text-lg mb-8 text-slate-300 max-w-2xl mx-auto">
            Acesse nossa seção de transparência para dados financeiros, parcerias públicas detalhadas e os relatórios anuais de gestão.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}