"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

import {
  FileText,
  Info,
  MousePointerClick,
  Calendar,
  ShieldCheck,
  Briefcase,
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
    <main className="min-h-screen bg-white text-[#111827] overflow-hidden">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/movimento2.png"
            alt="Editais INRUA"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-white/85" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#5E5BA6]/15 via-[#4D88C5]/10 to-[#78B84D]/10" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="max-w-5xl">
            <span className="bg-[#F2D04B] text-black px-5 py-2 rounded-full font-black text-sm shadow-md">
              EDITAIS • PROCESSO SELETIVO
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight text-[#111827]">
              Editais de Seleção
            </h1>

            <p className="text-xl text-[#374151] leading-relaxed mt-8 max-w-3xl">
              O INRUA realiza processos seletivos transparentes
              para fortalecimento institucional e ampliação das
              ações de defesa dos direitos humanos.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-[#5E5BA6] font-bold uppercase tracking-widest">
            Transparência Institucional
          </span>

          <h2 className="text-5xl font-black mt-4 text-[#111827]">
            Processos Seletivos Abertos
          </h2>

          <p className="text-[#6B7280] text-lg mt-6 leading-relaxed">
            Confira os editais disponíveis, cronogramas,
            requisitos e informações completas sobre as
            contratações vinculadas aos projetos do INRUA.
          </p>
        </div>
      </section>

      {/* ALERTA */}
      <section className="container mx-auto px-6 mb-12">
        <div className="bg-[#F8FAFC] border border-[#D1D5DB] rounded-[32px] p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-[#F2D04B]/15 p-4 rounded-2xl">
              <Info className="text-[#F2D04B]" size={24} />
            </div>

            <div>
              <h3 className="font-black text-xl text-[#111827]">
                Processo Seletivo Ativo
              </h3>

              <p className="text-[#6B7280] mt-2 leading-relaxed">
                Os editais abaixo visam a contratação de profissionais
                comprometidos com os direitos humanos e fortalecimento
                das políticas públicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDITAIS */}
      <section className="container mx-auto px-6 pb-28">
        <div className="space-y-16">
          {editais.map((edital) => (
            <div
              key={edital.id}
              className={`bg-gradient-to-br ${edital.color} rounded-[34px] p-[2px] shadow-xl`}
            >
              <div className="bg-white rounded-[32px] overflow-hidden">
                <div className="p-8 lg:p-12">

                  {/* HEADER */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
                    <div>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="bg-[#78B84D]/10 text-[#78B84D] border border-[#78B84D]/20 px-4 py-1 rounded-full text-sm font-bold">
                          Processo Seletivo
                        </span>

                        <span className="bg-[#5E5BA6]/10 text-[#5E5BA6] border border-[#5E5BA6]/20 px-4 py-1 rounded-full text-sm font-bold">
                          CEDDH/PR
                        </span>
                      </div>

                      <h2 className="text-4xl font-black text-[#111827]">
                        {edital.titulo}
                      </h2>

                      <p className="text-[#6B7280] mt-2 font-medium">
                        {edital.subtitulo}
                      </p>
                    </div>

                    <div className="bg-[#F8FAFC] border border-[#D1D5DB] rounded-2xl p-6 min-w-[260px] text-center">
                      <p className="text-xs text-[#6B7280] uppercase tracking-widest font-bold">
                        Resultado Previsto
                      </p>

                      <p className="text-3xl font-black text-[#78B84D] mt-2">
                        {edital.cronograma.resultado}
                      </p>
                    </div>
                  </div>

                  {/* GRID */}
                  <div className="grid lg:grid-cols-3 gap-10">

                    {/* ESQUERDA */}
                    <div className="lg:col-span-2 space-y-10">

                      {/* OBJETIVO */}
                      <div className="bg-[#F8FAFC] border border-[#D1D5DB] rounded-3xl p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <ShieldCheck
                            className="text-[#5E5BA6]"
                            size={24}
                          />

                          <h3 className="text-2xl font-black text-[#111827]">
                            Objetivo
                          </h3>
                        </div>

                        <p className="text-[#4B5563] leading-relaxed text-lg">
                          {edital.objetivo}
                        </p>
                      </div>

                      {/* VAGAS */}
                      <div className="bg-[#F8FAFC] border border-[#D1D5DB] rounded-3xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <Briefcase
                            className="text-[#78B84D]"
                            size={24}
                          />

                          <h3 className="text-2xl font-black text-[#111827]">
                            Vagas e Atribuições
                          </h3>
                        </div>

                        <div className="space-y-4">
                          {edital.vagas.map((vaga, idx) => (
                            <Card
                              key={idx}
                              className="bg-[#F3F4F6] border border-[#E5E7EB] rounded-2xl p-6 shadow-none"
                            >
                              <div className="flex flex-wrap items-center gap-3 mb-4">
                                <h4 className="text-xl font-black text-[#111827]">
                                  {vaga.cargo}
                                </h4>

                                <span className="bg-[#F2D04B] text-black px-3 py-1 rounded-full text-xs font-black">
                                  {vaga.nivel}
                                </span>
                              </div>

                              <div className="grid gap-2">
                                {vaga.atribuicoes.map((attr, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center gap-3 text-[#4B5563]"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-[#5E5BA6]" />

                                    <p>{attr}</p>
                                  </div>
                                ))}
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* DIREITA */}
                    <div className="space-y-6">

                      {/* CRONOGRAMA */}
                      <div className="bg-[#F8FAFC] border border-[#D1D5DB] rounded-3xl p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <Calendar
                            className="text-[#4D88C5]"
                            size={24}
                          />

                          <h3 className="text-xl font-black text-[#111827]">
                            Cronograma
                          </h3>
                        </div>

                        <div className="space-y-4">
                          <div className="border-l-4 border-[#D1D5DB] pl-4">
                            <p className="text-[#6B7280] text-xs font-bold uppercase">
                              Inscrições
                            </p>

                            <p className="font-black text-[#111827]">
                              {edital.cronograma.inscricao}
                            </p>
                          </div>

                          <div className="border-l-4 border-[#D1D5DB] pl-4">
                            <p className="text-[#6B7280] text-xs font-bold uppercase">
                              Entrevistas
                            </p>

                            <p className="font-black text-[#111827]">
                              {edital.cronograma.entrevistas}
                            </p>
                          </div>

                          <div className="bg-[#78B84D]/10 rounded-xl p-4 border border-[#78B84D]/20">
                            <p className="text-[#78B84D] text-xs font-bold uppercase">
                              Resultado Final
                            </p>

                            <p className="font-black text-xl text-[#78B84D]">
                              {edital.cronograma.resultado}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* EDITAL */}
                      <a
                        href={edital.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <div
                          className="
                            bg-[#F3F4F6]
                            border border-[#D1D5DB]
                            rounded-[32px]
                            p-8
                            shadow-md
                            hover:shadow-xl
                            hover:scale-[1.02]
                            transition-all
                            duration-300
                          "
                        >
                          <div className="flex items-start justify-between mb-6">
                            <div className="bg-[#5E5BA6]/10 p-4 rounded-2xl">
                              <FileText
                                className="text-[#5E5BA6]"
                                size={28}
                              />
                            </div>

                            <span className="bg-[#78B84D]/15 text-[#78B84D] border border-[#78B84D]/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                              Disponível em PDF
                            </span>
                          </div>

                          <h3 className="text-2xl font-black text-[#111827] mb-4 group-hover:text-[#5E5BA6] transition-colors">
                            Visualizar Edital
                          </h3>

                          <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                            Clique para visualizar ou baixar o documento
                            institucional completo deste processo.
                          </p>

                          <div className="flex items-center text-[#5E5BA6] font-bold">
                            Visualizar Documento →
                          </div>
                        </div>
                      </a>

                      {/* INSCRIÇÃO */}
                      <div className="bg-[#F3F4F6] border border-[#D1D5DB] rounded-3xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <MousePointerClick
                            className="text-[#E98C37]"
                            size={22}
                          />

                          <h3 className="text-lg font-black text-[#111827]">
                            Inscrição
                          </h3>
                        </div>

                        <div className="space-y-3">
                          <p className="text-xs text-[#6B7280] font-bold uppercase">
                            Enviar currículo para:
                          </p>

                          <p className="text-[#4D88C5] font-bold break-all text-sm">
                            {edital.inscricao.email}
                          </p>

                          <div className="pt-3 border-t border-[#D1D5DB]">
                            <p className="text-[10px] text-[#9CA3AF] uppercase font-bold">
                              Assunto do e-mail:
                            </p>

                            <p className="text-[#111827] text-xs font-medium mt-1">
                              {edital.inscricao.assunto}
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