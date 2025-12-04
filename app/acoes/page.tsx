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
      name: "Educação em Direitos e Cidadania",
      category: "Direitos Humanos",
      status: "Em Execução",
      description:
        "Programa de capacitação sobre direitos fundamentais, acesso a políticas públicas, saúde, segurança, emprego e participação política destinado à população em situação de rua.",
      publicTarget: "1.200+ pessoas anualmente",
      objectives:
        "Ampliar conhecimento de direitos e estimular participação ativa na defesa de direitos da população de rua.",
      activities: [
        "Oficinas temáticas sobre direitos trabalhistas e previdenciários",
        "Atendimento jurídico básico e encaminhamentos",
        "Palestras sobre acesso a documentação e políticas públicas",
        "Advocacy e mobilização comunitária",
      ],
      results: "Até 2024: 1.150 pessoas capacitadas, 650 encaminhamentos para políticas públicas",
      startDate: "2016",
      endDate: "Contínuo",
      image: "/placeholder.svg?key=p8x9m",
      reports: [
        { title: "Relatório de Educação em Direitos 2024", url: "#" },
        { title: "Análise de Impacto - Acesso a Direitos", url: "#" },
      ],
    },
    {
      id: 3,
      name: "Pesquisa e Diagnóstico sobre Políticas Públicas",
      category: "Pesquisa",
      status: "Em Execução",
      description:
        "Estudos e pesquisas sobre políticas públicas voltadas à população de rua, avaliação de impacto de programas, mapeamento de gaps de políticas e proposição de novas iniciativas.",
      publicTarget: "Gestores públicos, formuladores de políticas, academia",
      objectives:
        "Produzir conhecimento científico para fundamentar políticas públicas efetivas para a população em situação de rua.",
      activities: [
        "Pesquisas qualitativas e quantitativas com população de rua",
        "Publicação de relatórios temáticos",
        "Parcerias com universidades e institutos de pesquisa",
        "Disseminação de evidências para tomadores de decisão",
      ],
      results: "Até 2024: 8 estudos publicados, influência em 12+ políticas públicas municipais",
      startDate: "2017",
      endDate: "Contínuo",
      image: "/placeholder.svg?key=q4r7s",
      reports: [
        { title: "Relatório de Pesquisas Publicadas 2024", url: "#" },
        { title: "Impacto em Políticas Públicas 2016-2024", url: "#" },
      ],
    },
    {
      id: 4,
      name: "Capacitação de Profissionais e Gestores",
      category: "Capacitação",
      status: "Em Execução",
      description:
        "Programa de capacitação para profissionais da assistência social, saúde, segurança pública e gestores governamentais sobre abordagem com população em situação de rua com perspectiva de direitos humanos.",
      publicTarget: "800+ profissionais por ano",
      objectives:
        "Formar profissionais e gestores com competências para atendimento humanizado e baseado em direitos da população de rua.",
      activities: [
        "Cursos presenciais e online sobre população de rua",
        "Workshops em cidades parceiras",
        "Certificação de profissionais",
        "Consultoria especializada para municípios",
      ],
      results: "Até 2024: 4.200 profissionais capacitados, 35 municípios atendidos",
      startDate: "2018",
      endDate: "Contínuo",
      image: "/placeholder.svg?key=t1u2v",
      reports: [
        { title: "Relatório de Capacitações 2024", url: "#" },
        { title: "Análise de Aprendizado e Impacto", url: "#" },
      ],
    },
    {
      id: 5,
      name: "Participação em Congressos Nacionais",
      category: "Mobilização",
      status: "Em Execução",
      description:
        "Organização e participação em congressos nacionais de população de rua, encontros de movimentos sociais e espaços de debate e mobilização política para fortalecimento de reivindicações.",
      publicTarget: "População de rua, movimentos sociais, governos",
      objectives:
        "Ampliar espaços de participação democrática e voz da população de rua em debates sobre políticas públicas nacionais.",
      activities: [
        "Organização do Congresso Nacional de População de Rua",
        "Participação em seminários e fóruns de debate",
        "Construção de agendas coletivas",
        "Comunicação e mobilização em redes",
      ],
      results: "Até 2024: 3 congressos nacionais realizados, 2.500+ participantes mobilizados",
      startDate: "2016",
      endDate: "Contínuo",
      image: "/placeholder.svg?key=w3x4y",
      reports: [
        { title: "Relatório de Congressos 2024", url: "#" },
        { title: "Análise de Reivindicações Coletivas", url: "#" },
      ],
    },
    {
      id: 6,
      name: "Consultoria e Assessoria em Políticas Públicas",
      category: "Políticas Públicas",
      status: "Em Execução",
      description:
        "Assessoria técnica e especializada para órgãos públicos municipais, estaduais e federais na formulação, implementação e avaliação de políticas públicas para população em situação de rua.",
      publicTarget: "Governos municipais e estaduais, órgãos federais",
      objectives:
        "Contribuir para criação e fortalecimento de políticas públicas efetivas baseadas em direitos humanos e evidências científicas.",
      activities: [
        "Consultoria técnica para formulação de políticas",
        "Assessoria em implementação de programas",
        "Avaliação de programas públicos",
        "Recomendações de melhoria",
      ],
      results: "Até 2024: Assessoria a 28 municípios, 15+ políticas públicas implementadas com participação do INRUA",
      startDate: "2016",
      endDate: "Contínuo",
      image: "/placeholder.svg?key=z5a6b",
      reports: [
        { title: "Relatório de Assessorias 2024", url: "#" },
        { title: "Políticas Públicas Implementadas com INRUA", url: "#" },
      ],
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
