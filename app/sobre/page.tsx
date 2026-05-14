import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

import {
  Check,
  ShieldCheck,
  Users,
  Landmark,
  HeartHandshake,
  FileText,
} from "lucide-react"

export default function SobrePage() {
  const values = [
    {
      title: "Dignidade Humana",
      description:
        "Reconhecimento da dignidade e dos direitos fundamentais da população em situação de rua.",
    },
    {
      title: "Justiça Social",
      description:
        "Combate às desigualdades sociais e promoção de inclusão e cidadania.",
    },
    {
      title: "Transparência",
      description:
        "Compromisso institucional com prestação de contas e acesso público às informações.",
    },
    {
      title: "Integridade",
      description:
        "Atuação ética, responsável e comprometida com direitos humanos.",
    },
    {
      title: "Sustentabilidade",
      description:
        "Projetos com impacto social contínuo e desenvolvimento sustentável.",
    },
    {
      title: "Colaboração",
      description:
        "Construção coletiva com movimentos sociais, organizações e governos.",
    },
  ]

  const areas = [
    {
      title: "Direitos Humanos",
      description:
        "Defesa e promoção dos direitos fundamentais da população em situação de rua.",
      icon: <ShieldCheck size={26} />,
      color: "from-[#5E5BA6] to-[#4D88C5]",
    },
    {
      title: "Políticas Públicas",
      description:
        "Participação na construção e fortalecimento de políticas públicas inclusivas.",
      icon: <Landmark size={26} />,
      color: "from-[#78B84D] to-[#4D88C5]",
    },
    {
      title: "Projetos Sociais",
      description:
        "Execução de ações sociais voltadas à alimentação, moradia e cidadania.",
      icon: <HeartHandshake size={26} />,
      color: "from-[#E98C37] to-[#F2D04B]",
    },
    {
      title: "Transparência",
      description:
        "Publicação de documentos, relatórios e prestação de contas institucionais.",
      icon: <FileText size={26} />,
      color: "from-[#C83E3B] to-[#E98C37]",
    },
  ]

  const team = [
    {
      name: "Thamyres Barbosa",
      role: "Presidente",
    },
    {
      name: "Andre Barbosa",
      role: "Vice-Presidente",
    },
    {
      name: "Leonildo",
      role: "Tesoureiro",
    },
    {
      name: "Raissa Melo",
      role: "Secretária",
    },
  ]

  const documents = [
    {
      title: "Estatuto Social",
      file: "/docs/sobre/estatuto-inrua.pdf",
      status: "Documento Oficial",
    },
    {
      title: "Ata de Eleição",
      file: "/docs/sobre/ata-diretoria.pdf",
      status: "Mandato Vigente",
    },
    {
      title: "Cartão CNPJ",
      file: "/docs/sobre/cnpj-inrua.pdf",
      status: "Regular",
    },
    {
      title: "CND Federal",
      file: "/docs/sobre/cnd-federal.pdf",
      status: "Válida",
    },
    {
      title: "CND Estadual",
      file: "/docs/sobre/cnd-estadual.pdf",
      status: "Válida",
    },
    {
      title: "CND Municipal",
      file: "/docs/sobre/cnd-municipal.pdf",
      status: "Válida",
    },
    {
      title: "CRF FGTS",
      file: "/docs/sobre/crf-fgts.pdf",
      status: "Regular",
    },
    {
      title: "CNDT Trabalhista",
      file: "/docs/sobre/cndt-trabalhista.pdf",
      status: "Regular",
    },
  ]

  return (
    <main className="min-h-screen bg-white text-[#111827] overflow-hidden">

      <Header />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/movimento2.png"
            alt="INRUA"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-white/75" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#5E5BA6]/15 via-[#4D88C5]/10 to-[#78B84D]/10" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-28">
          <div className="max-w-4xl">
            <span className="bg-[#F2D04B] text-black px-5 py-2 rounded-full font-black text-sm shadow-md">
              SOBRE O INRUA
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight text-[#111827]">
              Quem Somos
            </h1>

            <p className="text-xl text-[#374151] leading-relaxed mt-8 max-w-3xl">
              O Instituto Nacional de Direitos Humanos da População de Rua
              atua desde 2016 na promoção da dignidade humana,
              inclusão social e garantia de direitos fundamentais para
              pessoas em situação de rua em todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="container mx-auto px-6 py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#5E5BA6] font-bold uppercase tracking-widest">
              Nossa História
            </span>

            <h2 className="text-5xl font-black mt-4 text-[#111827]">
              Compromisso com Direitos Humanos
            </h2>
          </div>

          <div className="bg-[#E5E7EB] rounded-[32px] border border-[#D1D5DB] p-10 md:p-14 shadow-xl">
            <div className="space-y-8 text-lg text-[#374151] leading-relaxed">
              <p>
                O Instituto Nacional de Direitos Humanos da População de Rua
                (INRUA) é uma organização sem fins lucrativos que atua na
                defesa, promoção e garantia de direitos da população em
                situação de rua.
              </p>

              <p>
                Fundado em 2016, o instituto nasceu a partir da construção
                coletiva realizada durante o 3º Congresso Nacional da
                População em Situação de Rua, consolidando-se como uma
                organização voltada à inclusão social, cidadania e acesso
                às políticas públicas.
              </p>

              <p>
                O INRUA desenvolve ações sociais, projetos de moradia,
                capacitação, assistência e fortalecimento de políticas
                públicas, sempre pautado pelos princípios constitucionais
                da dignidade humana, justiça social e transparência
                institucional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO VISÃO VALORES */}
      <section className="py-28 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#78B84D] font-bold uppercase tracking-widest">
              Identidade Institucional
            </span>

            <h2 className="text-5xl font-black mt-4 text-[#111827]">
              Missão, Visão e Valores
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Missão",
                text: "Promover direitos humanos, inclusão social e dignidade para pessoas em situação de rua através de ações concretas e políticas públicas.",
                color: "from-[#5E5BA6] to-[#4D88C5]",
              },
              {
                title: "Visão",
                text: "Ser referência nacional em direitos humanos e inclusão social da população em situação de rua.",
                color: "from-[#78B84D] to-[#4D88C5]",
              },
              {
                title: "Valores",
                text: "Ética, dignidade humana, justiça social, transparência institucional e responsabilidade social.",
                color: "from-[#E98C37] to-[#F2D04B]",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${item.color} rounded-3xl p-[2px] shadow-lg`}
              >
                <div className="bg-white rounded-3xl p-10 h-full">
                  <h3 className="text-3xl font-black mb-6 text-[#111827]">
                    {item.title}
                  </h3>

                  <p className="text-[#6B7280] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="container mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <span className="text-[#5E5BA6] font-bold uppercase tracking-widest">
            Nossos Valores
          </span>

          <h2 className="text-5xl font-black mt-4 text-[#111827]">
            Valores em Ação
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <Card
              key={idx}
              className="bg-[#E5E7EB] border border-[#D1D5DB] rounded-3xl p-8 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#F2D04B]/20 p-3 rounded-2xl">
                  <Check className="text-[#F2D04B]" size={24} />
                </div>

                <div>
                  <h3 className="font-black text-xl mb-3 text-[#111827]">
                    {value.title}
                  </h3>

                  <p className="text-[#6B7280] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ÁREAS */}
      <section className="py-28 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#78B84D] font-bold uppercase tracking-widest">
              Atuação Institucional
            </span>

            <h2 className="text-5xl font-black mt-4 text-[#111827]">
              Áreas de Atuação
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${area.color} rounded-3xl p-[2px] shadow-lg`}
              >
                <div className="bg-white rounded-3xl p-8 h-full">
                  <div className="mb-6 text-[#111827]">
                    {area.icon}
                  </div>

                  <h3 className="text-2xl font-black mb-4 text-[#111827]">
                    {area.title}
                  </h3>

                  <p className="text-[#6B7280] leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRETORIA */}
      <section className="container mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <span className="text-[#5E5BA6] font-bold uppercase tracking-widest">
            Gestão Institucional
          </span>

          <h2 className="text-5xl font-black mt-4 text-[#111827]">
            Diretoria
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <Card
              key={idx}
              className="bg-[#E5E7EB] border border-[#D1D5DB] rounded-3xl p-8 text-center shadow-lg"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#5E5BA6] to-[#4D88C5] mx-auto mb-6 flex items-center justify-center text-white">
                <Users size={30} />
              </div>

              <h3 className="text-xl font-black text-[#111827]">
                {member.name}
              </h3>

              <p className="text-[#5E5BA6] font-bold mt-2">
                {member.role}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* DOCUMENTOS */}
      <section className="py-28 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#5E5BA6] font-bold uppercase tracking-widest">
              Transparência Institucional
            </span>

            <h2 className="text-5xl font-black mt-4 text-[#111827]">
              Documentos Institucionais
            </h2>

            <p className="text-[#6B7280] max-w-3xl mx-auto mt-6 text-lg">
              Em conformidade com a Lei 13.019/2014 (MROSC),
              disponibilizamos documentos institucionais e certidões
              públicas para acesso da sociedade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc, idx) => (
              <a
                key={idx}
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div
                  className="
                    bg-[#E5E7EB]
                    border border-[#D1D5DB]
                    rounded-3xl
                    p-8
                    shadow-lg
                    hover:shadow-2xl
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                    h-full
                  "
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-[#5E5BA6]/10 p-4 rounded-2xl">
                      <FileText
                        className="text-[#5E5BA6]"
                        size={28}
                      />
                    </div>

                    <span
                      className="
                        bg-[#78B84D]/15
                        text-[#78B84D]
                        border border-[#78B84D]/20
                        px-3 py-1
                        rounded-full
                        text-xs
                        font-bold
                      "
                    >
                      {doc.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-[#111827] mb-4 group-hover:text-[#5E5BA6] transition-colors">
                    {doc.title}
                  </h3>

                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    Clique para visualizar ou baixar o documento institucional.
                  </p>

                  <div className="mt-6 flex items-center text-[#5E5BA6] font-bold">
                    Visualizar Documento →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}