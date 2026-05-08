"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import {
  FileText,
  Info,
  MousePointerClick,
  Calendar,
  ShieldCheck,
  Briefcase,
  ArrowRight,
} from "lucide-react"

export default function EditalPage() {
  const editais = [
    {
      id: "ampliacao-coordenacao",
      titulo: "CEDDH/PR - Ampliação - Coordenação",
      subtitulo: "Contratação de Pessoa Jurídica",
      termo: "990353/2025 (5334354)",
      objetivo:
        "Promover a ampliação das atividades do Centro Estadual de Defesa dos Direitos Humanos da População em Situação de Rua no Paraná.",

      vagas: [
        {
          cargo: "Coordenador/a Geral, Técnico e Gestão Financeira",
          nivel: "Nível Superior/Médio",
          atribuicoes: [
            "Coordenação de projetos",
            "Supervisão técnica",
            "Gestão administrativa",
          ],
        },
      ],

      inscricao: {
        prazo: "26/02/2026",
        email: "inruabrasil@gmail.com",
        assunto: "Edital Seleção – Pessoa Jurídica – Coordenador",
      },

      cronograma: {
        inscricao: "Até 26/02/2026",
        entrevistas: "28/02/2026",
        resultado: "02/03/2026",
      },

      pdfUrl: "/docs/edital/edital-ampliacao-coordenacao.pdf",

      color: "from-[#5E5BA6] to-[#4D88C5]",
    },

    {
      id: "ampliacao-equipe",
      titulo: "CEDDH/PR - Ampliação - Equipe",
      subtitulo: "Contratação de Pessoa Jurídica",
      termo: "990353/2025 (5334354)",

      objetivo:
        "Contratação de Advogado, Psicólogo, Assistente Social, Técnico-Administrativo e Mobilizador Social.",

      vagas: [
        {
          cargo: "Equipe Multidisciplinar",
          nivel: "Nível Superior/Médio",
          atribuicoes: [
            "Atendimento direto",
            "Defesa de direitos",
            "Mobilização social",
          ],
        },
      ],

      inscricao: {
        prazo: "26/02/2026",
        email: "inruabrasil@gmail.com",
        assunto: "Edital Seleção – Pessoa Jurídica – Equipe",
      },

      cronograma: {
        inscricao: "Até 26/02/2026",
        entrevistas: "28/02/2026",
        resultado: "02/03/2026",
      },

      pdfUrl: "/docs/edital/edital-ampliacao-equipe.pdf",

      color: "from-[#78B84D] to-[#4D88C5]",
    },

    {
      id: "sede-coordenacao",
      titulo: "CEDDH/PR - Sede - Coordenação",
      subtitulo: "Contratação de Pessoa Jurídica",
      termo: "990651/2025 (5334348)",

      objetivo:
        "Fortalecimento institucional do CEDDH-PR por meio da instalação e funcionamento de sede física.",

      vagas: [
        {
          cargo: "Coordenador Geral e Técnico",
          nivel: "Nível Superior/Médio",
          atribuicoes: [
            "Gestão da sede",
            "Articulação institucional",
          ],
        },
      ],

      inscricao: {
        prazo: "26/02/2026",
        email: "inruabrasil@gmail.com",
        assunto: "Edital Seleção – Sede – Coordenador",
      },

      cronograma: {
        inscricao: "Até 26/02/2026",
        entrevistas: "28/02/2026",
        resultado: "02/03/2026",
      },

      pdfUrl: "/docs/edital/edital-sede-coordenacao.pdf",

      color: "from-[#E98C37] to-[#F2D04B]",
    },

    {
      id: "sede-equipe",
      titulo: "CEDDH/PR - Sede - Equipe",
      subtitulo: "Contratação de Pessoa Jurídica",
      termo: "990651/2025 (5334348)",

      objetivo:
        "Composição de equipe para o funcionamento da sede física do CEDDH/PR.",

      vagas: [
        {
          cargo: "Acolhimento e Administrativo",
          nivel: "Nível Médio",
          atribuicoes: [
            "Recepção presencial",
            "Suporte administrativo",
          ],
        },
      ],

      inscricao: {
        prazo: "26/02/2026",
        email: "inruabrasil@gmail.com",
        assunto: "Edital Seleção – Sede – Equipe",
      },

      cronograma: {
        inscricao: "Até 26/02/2026",
        entrevistas: "28/02/2026",
        resultado: "02/03/2026",
      },

      pdfUrl: "/docs/edital/edital-sede-equipe.pdf",

      color: "from-[#C83E3B] to-[#E98C37]",
    },
  ]

  return (
    <main className="min-h-screen bg-[#0F172A] text-white overflow-hidden">
      {/* FUNDO */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#5E5BA6]/30 rounded-full blur-3xl" />

        <div className="absolute top-[30%] right-[-100px] w-[500px] h-[500px] bg-[#4D88C5]/20 rounded-full blur-3xl" />

        <div className="absolute bottom-[-100px] left-[20%] w-[500px] h-[500px] bg-[#78B84D]/20 rounded-full blur-3xl" />
      </div>

      <Header />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/movimento2.png"
            alt="Editais INRUA"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#020617]/85" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#5E5BA6]/60 via-[#4D88C5]/40 to-[#78B84D]/40" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="max-w-5xl">
            <span className="bg-[#F2D04B] text-black px-5 py-2 rounded-full font-black text-sm">
              EDITAIS • PROCESSO SELETIVO • DIREITOS HUMANOS
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight">
              Editais de Seleção
            </h1>

            <p className="text-xl text-white/80 leading-relaxed mt-8 max-w-3xl">
              O INRUA realiza processos seletivos transparentes
              para fortalecimento institucional e ampliação das
              ações de defesa dos direitos humanos da população
              em situação de rua.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-[#F2D04B] font-bold uppercase tracking-widest">
            Transparência Institucional
          </span>

          <h2 className="text-5xl font-black mt-4">
            Processos Seletivos Abertos
          </h2>

          <p className="text-white/70 text-lg mt-6 leading-relaxed">
            Confira os editais disponíveis, cronogramas,
            requisitos e informações completas sobre as
            contratações vinculadas aos projetos do INRUA.
          </p>
        </div>
      </section>

      {/* ALERTA */}
      <section className="container mx-auto px-6 mb-12">
        <div className="bg-[#F2D04B]/10 border border-[#F2D04B]/20 rounded-3xl p-6 backdrop-blur-xl">
          <div className="flex items-start gap-4">
            <Info className="text-[#F2D04B] mt-1" size={24} />

            <div>
              <h3 className="font-black text-xl text-white">
                Processo Seletivo Ativo
              </h3>

              <p className="text-white/70 mt-2 leading-relaxed">
                Os editais abaixo visam a contratação de
                profissionais comprometidos com os direitos
                humanos, inclusão social e fortalecimento
                das políticas públicas voltadas à população
                em situação de rua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDITAIS */}
      <section className="container mx-auto px-6 pb-28">
        <div className="space-y-12">
          {editais.map((edital) => (
            <div
              key={edital.id}
              className={`bg-gradient-to-br ${edital.color} rounded-[32px] p-[2px] shadow-[0_20px_80px_rgba(0,0,0,0.35)]`}
            >
              <div className="bg-[#111827]/95 backdrop-blur-2xl rounded-[30px] overflow-hidden">
                <div className="p-8 lg:p-10">
                  {/* HEADER */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
                    <div>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="bg-[#78B84D]/15 text-[#78B84D] border border-[#78B84D]/20 px-4 py-2 rounded-full text-sm font-bold">
                          Processo Seletivo
                        </span>

                        <span className="bg-[#4D88C5]/15 text-[#60A5FA] border border-[#60A5FA]/20 px-4 py-2 rounded-full text-sm font-bold">
                          CEDDH/PR
                        </span>
                      </div>

                      <h2 className="text-4xl font-black text-white">
                        {edital.titulo}
                      </h2>

                      <p className="text-white/60 mt-2">
                        {edital.subtitulo}
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 min-w-[260px]">
                      <p className="text-sm text-white/60 uppercase tracking-widest">
                        Resultado Previsto
                      </p>

                      <p className="text-3xl font-black text-[#78B84D] mt-2">
                        {edital.cronograma.resultado}
                      </p>
                    </div>
                  </div>

                  {/* GRID */}
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* ESQUERDA */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* OBJETIVO */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <ShieldCheck
                            className="text-[#F2D04B]"
                            size={24}
                          />

                          <h3 className="text-2xl font-black">
                            Objetivo
                          </h3>
                        </div>

                        <p className="text-white/70 leading-relaxed">
                          {edital.objetivo}
                        </p>
                      </div>

                      {/* VAGAS */}
                      <div>
                        <div className="flex items-center gap-3 mb-5">
                          <Briefcase
                            className="text-[#78B84D]"
                            size={24}
                          />

                          <h3 className="text-2xl font-black">
                            Vagas e Atribuições
                          </h3>
                        </div>

                        <div className="space-y-5">
                          {edital.vagas.map((vaga, idx) => (
                            <div
                              key={idx}
                              className="bg-white/5 border border-white/10 rounded-3xl p-6"
                            >
                              <div className="flex flex-wrap items-center gap-3 mb-4">
                                <h4 className="text-xl font-black">
                                  {vaga.cargo}
                                </h4>

                                <span className="bg-[#F2D04B]/15 text-[#F2D04B] border border-[#F2D04B]/20 px-3 py-1 rounded-full text-xs font-bold">
                                  {vaga.nivel}
                                </span>
                              </div>

                              <div className="grid gap-3">
                                {vaga.atribuicoes.map((attr, i) => (
                                  <div
                                    key={i}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3"
                                  >
                                    <div className="w-3 h-3 rounded-full bg-[#F2D04B]" />

                                    <p className="text-white/75">
                                      {attr}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* DIREITA */}
                    <div className="space-y-6">
                      {/* CRONOGRAMA */}
                      <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <Calendar
                            className="text-[#4D88C5]"
                            size={24}
                          />

                          <h3 className="text-2xl font-black">
                            Cronograma
                          </h3>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                            <p className="text-white/60 text-sm">
                              Inscrições
                            </p>

                            <p className="font-black text-lg mt-1">
                              {edital.cronograma.inscricao}
                            </p>
                          </div>

                          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                            <p className="text-white/60 text-sm">
                              Entrevistas
                            </p>

                            <p className="font-black text-lg mt-1">
                              {edital.cronograma.entrevistas}
                            </p>
                          </div>

                          <div className="bg-[#78B84D]/10 rounded-2xl p-4 border border-[#78B84D]/20">
                            <p className="text-[#78B84D] text-sm font-bold">
                              Resultado Final
                            </p>

                            <p className="font-black text-2xl mt-1 text-[#78B84D]">
                              {edital.cronograma.resultado}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* DOWNLOAD */}
                      <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <FileText
                            className="text-[#F2D04B]"
                            size={24}
                          />

                          <h3 className="text-2xl font-black">
                            Edital
                          </h3>
                        </div>

                        <a
                          href={edital.pdfUrl}
                          target="_blank"
                          className="
                            w-full
                            bg-gradient-to-r
                            from-[#5E5BA6]
                            to-[#4D88C5]
                            hover:scale-[1.02]
                            transition
                            duration-300
                            rounded-2xl
                            p-5
                            flex
                            items-center
                            justify-between
                            shadow-xl
                          "
                        >
                          <div>
                            <p className="font-black text-lg">
                              Baixar PDF
                            </p>

                            <p className="text-white/70 text-sm">
                              Documento completo do edital
                            </p>
                          </div>

                          <ArrowRight size={26} />
                        </a>
                      </div>

                      {/* CONTATO */}
                      <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                        <div className="flex items-center gap-3 mb-5">
                          <MousePointerClick
                            className="text-[#E98C37]"
                            size={24}
                          />

                          <h3 className="text-2xl font-black">
                            Inscrição
                          </h3>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <p className="text-white/60 text-sm">
                              E-mail para envio
                            </p>

                            <p className="text-[#60A5FA] break-all font-medium mt-1">
                              {edital.inscricao.email}
                            </p>
                          </div>

                          <div>
                            <p className="text-white/60 text-sm">
                              Assunto do e-mail
                            </p>

                            <p className="text-white/80 mt-1">
                              {edital.inscricao.assunto}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-white/10">
                            <p className="text-white/60 text-sm">
                              Termo de Fomento
                            </p>

                            <p className="font-bold mt-1">
                              {edital.termo}
                            </p>

                            <p className="text-xs text-white/50 mt-2">
                              Vigência do processo seletivo: 2026
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}