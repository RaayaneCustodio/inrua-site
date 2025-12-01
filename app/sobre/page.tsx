import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { DocumentCard } from "@/components/document-card"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { TeamCard } from "@/components/team-card" // Import the new TeamCard component

export default function SobrePage() {
  const values = [
    {
      title: "Dignidade Humana",
      description:
        "Reconhecimento da dignidade e direitos fundamentais de toda pessoa, especialmente a população em situação de rua",
    },
    {
      title: "Justiça Social",
      description: "Combate às desigualdades e garantia de acesso a políticas públicas para todos",
    },
    {
      title: "Transparência",
      description: "Compromisso inabalável com a prestação de contas e divulgação de informações",
    },
    {
      title: "Integridade",
      description: "Ética e integridade em todas as operações e relacionamentos institucionais",
    },
    {
      title: "Sustentabilidade",
      description: "Impacto duradouro que contribui para desenvolvimento social e ambiental sustentável",
    },
    {
      title: "Colaboração",
      description: "Parcerias estratégicas com governos, entidades e organizações para ampliar alcance",
    },
  ]

  const documents = [
    {
      title: "Estatuto Social",
      description: "Documento oficial que define os objetivos e governança da organização",
      fileUrl: "#",
      fileName: "estatuto-social.pdf",
      date: "Fevereiro 2024",
    },
    {
      title: "Atas de Assembleia",
      description: "Registros das assembleias gerais e decisões tomadas",
      fileUrl: "#",
      fileName: "atas-assembleia.pdf",
      date: "Dezembro 2024",
    },
    {
      title: "Certificado de Registro de Pessoa Jurídica",
      description: "Documento comprobatório do registro legal da organização",
      fileUrl: "#",
      fileName: "registro-pj.pdf",
      date: "Dezembro 2023",
    },
    {
      title: "CND - Certidão Negativa de Débitos",
      description: "Comprovação de situação fiscal regular junto à Receita Federal",
      fileUrl: "#",
      fileName: "cnd.pdf",
      date: "Novembro 2024",
    },
    {
      title: "FGTS - Contribuição",
      description: "Comprovação de contribuições ao Fundo de Garantia do Tempo de Serviço",
      fileUrl: "#",
      fileName: "fgts.pdf",
      date: "Novembro 2024",
    },
    {
      title: "INSS - Contribuições",
      description: "Comprovação de contribuições ao Instituto Nacional de Seguridade Social",
      fileUrl: "#",
      fileName: "inss.pdf",
      date: "Novembro 2024",
    },
  ]

  const team = [
    { name: "Dr. João Silva", role: "Presidente/Diretor Executivo", area: "Estratégia e Gestão" },
    { name: "Profa. Maria Santos", role: "Diretora de Programas", area: "Programas Sociais" },
    { name: "Eng. Carlos Oliveira", role: "Diretor Administrativo-Financeiro", area: "Administração e Finanças" },
    { name: "Coordenador Técnico", role: "Coordenador de Projetos", area: "Execução e Monitoramento" },
    { name: "Especialista Social", role: "Gestor de Impacto", area: "Mensuração e Avaliação" },
    { name: "Assistente Administrativo", role: "Apoio Administrativo", area: "Suporte Operacional" },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Banner */}
      <section className="container-max pt-12">
        <HeroBanner
          title="Quem Somos"
          description="Instituto Nacional de Direitos Humanos da População de Rua (INRUA) - Defendendo direitos fundamentais desde 2016"
        />
      </section>

      {/* História */}
      <section className="container-max section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Nossa História</h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              O Instituto Nacional de Direitos Humanos da População de Rua (INRUA) é uma organização sem fins lucrativos
              que, desde 2016, dedica-se ao apoio às pessoas em situação de rua em todo o Brasil. O instituto oferece
              assistência em questões fundamentais, como alimentação, cidadania, moradia e acesso às políticas públicas,
              atuando para garantir dignidade e direitos básicos a essa população.
            </p>
            <p className="text-lg leading-relaxed">
              A criação do INRUA surgiu da demanda direta das pessoas em situação de rua que participaram da construção
              do projeto durante o 3º Congresso Nacional de População de Rua, realizado em Belo Horizonte, em 2016. O
              instituto contou com o apoio do Movimento Nacional de População de Rua (MNPR) e de diversas entidades
              governamentais e não governamentais, consolidando-se como uma organização comprometida com a defesa de
              direitos.
            </p>
            <p className="text-lg leading-relaxed">
              Desde sua fundação, o INRUA atua com base no Decreto nº 7.503, de 23 de dezembro de 2009, que instituiu a
              Política Nacional para a População em Situação de Rua. Suas ações também se alinham aos princípios
              fundamentais da Constituição Federal de 1988, especialmente no que diz respeito à dignidade da pessoa
              humana e à inclusão social.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="container-max section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Missão, Visão e Valores</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Promover defesa, assistência e apoio aos direitos humanos da população em situação de rua, garantindo
              acesso a alimentação, cidadania, moradia e políticas públicas com total transparência e comprometimento
              com resultados mensuráveis.
            </p>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência nacional na defesa e promoção dos direitos humanos da população em situação de rua,
              construindo uma sociedade mais justa, inclusiva e humana, onde toda pessoa tenha acesso garantido a
              direitos fundamentais e oportunidades de vida digna.
            </p>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Valores Fundamentais</h3>
            <p className="text-muted-foreground leading-relaxed">
              Dignidade humana, justiça social, transparência, integridade, sustentabilidade e colaboração em rede com
              movimentos sociais, governos e organizações parceiras para amplificar impacto.
            </p>
          </Card>
        </div>
      </section>

      {/* Valores Detalhados */}
      <section className="container-max section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Nossos Valores em Ação</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, idx) => (
            <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Check className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="container-max section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Nossas Áreas de Atuação</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          O INRUA atua em diversas frentes para garantir direitos e dignidade à população em situação de rua
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-6">
            <h3 className="font-bold text-lg text-primary mb-3">Eventos e Projetos</h3>
            <p className="text-muted-foreground">
              Criação e execução de eventos, projetos e atividades de orientação sobre direitos humanos e políticas
              públicas destinadas à população de rua.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold text-lg text-primary mb-3">Capacitação Profissional</h3>
            <p className="text-muted-foreground">
              Capacitação de profissionais, consultorias especializadas e formação para potencializar a atuação de
              agentes públicos e organizações.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold text-lg text-primary mb-3">Políticas Públicas</h3>
            <p className="text-muted-foreground">
              Participação direta na elaboração e implementação de políticas públicas em parceria com governos
              municipais, estaduais e federal.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold text-lg text-primary mb-3">Programa Moradia Primeiro</h3>
            <p className="text-muted-foreground">
              Execução do Programa Housing First, promovendo acesso imediato à moradia de forma segura, individual e
              integrada à comunidade.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold text-lg text-primary mb-3">Pesquisa e Estudos</h3>
            <p className="text-muted-foreground">
              Realização de estudos e pesquisas sobre políticas públicas voltadas à população de rua para informar ações
              estratégicas.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-bold text-lg text-primary mb-3">Campanhas Inovadoras</h3>
            <p className="text-muted-foreground">
              Execução de campanhas e projetos-piloto inovadores para testar novas abordagens e ampliar o acesso a
              direitos.
            </p>
          </Card>
        </div>
      </section>

      {/* Estrutura Organizacional */}
      <section className="container-max section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Estrutura Organizacional</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Nossa equipe é composta por profissionais dedicados em diferentes áreas de expertise
        </p>

        <div className="max-w-7xl mx-auto">
          {/* Organograma Simplificado */}
          <div className="mb-16">
            <div className="text-center mb-6">
              <div className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold">
                Assembleia Geral
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="w-0.5 h-8 bg-border mx-auto"></div>
              <div className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold">
                Conselho Administrativo
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="w-0.5 h-8 bg-border mx-auto"></div>
              <div className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold">
                Diretoria Executiva
              </div>
            </div>

            <div className="text-center">
              <div className="w-0.5 h-8 bg-border mx-auto"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-semibold">
                  Dir. de Programas
                </div>
                <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-semibold">
                  Dir. Administrativo
                </div>
                <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-semibold">
                  Dir. Financeiro
                </div>
              </div>
            </div>
          </div>

          {/* Equipe Técnica */}
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Equipe Técnica</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <TeamCard key={idx} name={member.name} role={member.role} area={member.area} />
            ))}
          </div>
        </div>
      </section>

      {/* Documentos Institucionais */}
      <section className="container-max section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Documentos Institucionais</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Acesse os documentos legais e institucionais que definem nossa organização e garantem conformidade regulatória
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, idx) => (
            <DocumentCard key={idx} {...doc} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
