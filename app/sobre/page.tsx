import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { DocumentCard } from "@/components/document-card"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { TeamCard } from "@/components/team-card"

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

  // DOCUMENTOS - Configurados para a pasta public/docs/sobre
  const documents = [
    {
      title: "Estatuto Social",
      description: "Documento oficial que define os objetivos, governança e finalidade da organização.",
      fileUrl: "/docs/sobre/estatuto-inrua.pdf",
      fileName: "Estatuto Social.pdf",
      date: "Vigente",
    },
    {
      title: "Ata de Eleição da Diretoria",
      description: "Ata da Assembleia Geral Ordinária que elegeu a atual diretoria (Mandato 2023-2026).",
      fileUrl: "/docs/sobre/ata-diretoria.pdf",
      fileName: "Ata Diretoria 2023-2026.pdf",
      date: "Março 2023",
    },
    {
      title: "Cartão CNPJ",
      description: "Comprovante de Inscrição e Situação Cadastral Ativa na Receita Federal.",
      fileUrl: "/docs/sobre/cnpj-inrua.pdf", // Usei a versão com traço que vi na tua imagem
      fileName: "Cartão CNPJ.pdf",
      date: "Ativo",
    },
    {
      title: "CND - Federal",
      description: "Certidão Negativa de Débitos Relativos aos Tributos Federais e à Dívida Ativa da União.",
      fileUrl: "/docs/sobre/cnd-federal.pdf",
      fileName: "CND Federal.pdf",
      date: "Válida",
    },
    {
      title: "CND - Estadual (PR)",
      description: "Certidão Negativa de Débitos Tributários e de Dívida Ativa Estadual do Paraná.",
      fileUrl: "/docs/sobre/cnd-estadual.pdf",
      fileName: "CND Estadual.pdf",
      date: "Válida",
    },
    {
      title: "CND - Municipal (Curitiba)",
      description: "Certidão Negativa de Débitos de Tributos Municipais.",
      fileUrl: "/docs/sobre/cnd-municipal.pdf",
      fileName: "CND Municipal.pdf",
      date: "Válida",
    },
    {
      title: "CRF - Regularidade FGTS",
      description: "Certificado de Regularidade do Fundo de Garantia do Tempo de Serviço - Caixa Econômica.",
      fileUrl: "/docs/sobre/crf-fgts.pdf",
      fileName: "CRF - FGTS.pdf",
      date: "Válida",
    },
    {
      title: "CNDT - Trabalhista",
      description: "Certidão Negativa de Débitos Trabalhistas emitida pela Justiça do Trabalho.",
      fileUrl: "/docs/sobre/cndt-trabalhista.pdf",
      fileName: "CNDT Trabalhista.pdf",
      date: "Válida",
    },
  ]

  const team = [
    { name: "Leonildo Jose Monteiro Filho", role: "Presidente", area: "Diretoria Executiva" },
    { name: "Roselaine Mendes Ferreira", role: "Vice-Presidente", area: "Diretoria Executiva" },
    { name: "Marcel Jeronymo Lima Oliveira", role: "Tesoureiro", area: "Diretoria Financeira" },
    { name: "Ana Paula Monteiro de Oliveira", role: "Secretária", area: "Diretoria Administrativa" },
    { name: "Equipe Técnica", role: "Corpo Técnico", area: "Serviço Social e Psicologia" },
    { name: "Voluntários", role: "Apoio Operacional", area: "Ações de Rua" },
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
      <section className="container-max section-padding bg-muted/30">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Missão, Visão e Valores</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto px-4">
          <Card className="p-8 h-full">
            <h3 className="text-2xl font-bold text-primary mb-4">Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Promover defesa, assistência e apoio aos direitos humanos da população em situação de rua, garantindo
              acesso a alimentação, cidadania, moradia e políticas públicas com total transparência e comprometimento
              com resultados mensuráveis.
            </p>
          </Card>

          <Card className="p-8 h-full">
            <h3 className="text-2xl font-bold text-primary mb-4">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência nacional na defesa e promoção dos direitos humanos da população em situação de rua,
              construindo uma sociedade mais justa, inclusiva e humana, onde toda pessoa tenha acesso garantido a
              direitos fundamentais e oportunidades de vida digna.
            </p>
          </Card>

          <Card className="p-8 h-full">
            <h3 className="text-2xl font-bold text-primary mb-4">Valores</h3>
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
      <section className="container-max section-padding bg-muted/30">
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
          Gestão democrática e transparente, eleita em assembleia para o mandato 2023-2026.
        </p>

        <div className="max-w-7xl mx-auto">
          {/* Organograma Visual Simplificado */}
          <div className="mb-16 hidden md:block">
             <div className="flex flex-col items-center gap-4">
                 <div className="border-2 border-primary/20 bg-primary/5 px-6 py-2 rounded-lg font-bold text-primary">Assembleia Geral</div>
                 <div className="h-6 w-0.5 bg-border"></div>
                 <div className="border-2 border-primary/20 bg-primary/5 px-6 py-2 rounded-lg font-bold text-primary">Diretoria Executiva</div>
                 <div className="h-6 w-0.5 bg-border"></div>
                 <div className="flex gap-4">
                    <div className="border border-border bg-muted/50 px-4 py-2 rounded text-sm">Conselho Fiscal</div>
                    <div className="border border-border bg-muted/50 px-4 py-2 rounded text-sm">Coord. Projetos</div>
                    <div className="border border-border bg-muted/50 px-4 py-2 rounded text-sm">Apoio Técnico</div>
                 </div>
             </div>
          </div>

          {/* Equipe Técnica */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <TeamCard key={idx} name={member.name} role={member.role} area={member.area} />
            ))}
          </div>
        </div>
      </section>

      {/* Documentos Institucionais */}
      <section className="container-max section-padding bg-muted/30">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Documentos Institucionais</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Transparência Ativa: Acesse os documentos que comprovam nossa regularidade jurídica e fiscal.
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