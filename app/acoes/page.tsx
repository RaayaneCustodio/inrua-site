"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import {
  Users,
  TrendingUp,
  Calendar,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react"

export default function AcoesPage() {
  const projects = [
    {
      id: 1,
      name: "Programa Moradia Primeiro (Housing First)",
      category: "Habitação",
      status: "Em Execução",
      description:
        "Programa inovador que promove o acesso imediato à moradia segura e integrada à comunidade.",
      publicTarget: "500+ pessoas em situação de rua",
      objectives:
        "Garantir acesso imediato à moradia e inclusão social.",
      activities: [
        "Mapeamento de moradias",
        "Acompanhamento psicossocial",
        "Integração com serviços públicos",
        "Mediação habitacional",
      ],
      results:
        "Pessoas atendidas com estabilidade habitacional.",
      startDate: "2018",
      endDate: "Contínuo",
      image: "/moradia-primeiro.png",
      color: "from-[#5E5BA6] to-[#4D88C5]",
    },

    {
      id: 2,
      name: "Dia Nacional de Luta e Luto",
      category: "Mobilização",
      status: "Realizado",
      image: "/Luta-Luto.png",
      description:
        "Evento em memória à resistência da população em situação de rua.",
      publicTarget: "População em situação de rua",
      objectives:
        "Fortalecer a luta por direitos e promover cidadania.",
      activities: [
        "Atendimentos jurídicos",
        "Regularização documental",
        "Ações culturais",
        "Serviços de saúde",
      ],
      results:
        "Centenas de atendimentos e mobilização social.",
      startDate: "2023",
      endDate: "Concluído",
      color: "from-[#E98C37] to-[#F2D04B]",
    },

    {
      id: 3,
      name: "Cozinha Solidária",
      category: "Segurança Alimentar",
      status: "Em Execução",
      image: "/cozinha-solidaria.png",
      description:
        "Distribuição de refeições e ações de combate à fome.",
      publicTarget:
        "Pessoas em vulnerabilidade social",
      objectives:
        "Garantir segurança alimentar e acolhimento.",
      activities: [
        "Distribuição de marmitas",
        "Arrecadação de alimentos",
        "Ações solidárias",
        "Parcerias comunitárias",
      ],
      results:
        "Milhares de refeições distribuídas mensalmente.",
      startDate: "Contínuo",
      endDate: "Em atividade",
      color: "from-[#78B84D] to-[#4D88C5]",
    },

    {
      id: 4,
      name: "Conferência Livre de Mulheres",
      category: "Direitos Humanos",
      status: "Realizado",
      image: "/mulheres.jpeg",
      description:
        "Evento voltado ao protagonismo feminino e construção de políticas públicas.",
      publicTarget:
        "Mulheres em situação de rua",
      objectives:
        "Combater invisibilidade e violência.",
      activities: [
        "Debates temáticos",
        "Relatos de vida",
        "Formulação de propostas",
        "Participação social",
      ],
      results:
        "Conhecimento adquirido.",
      startDate: "2025",
      endDate: "Concluído",
      color: "from-[#C83E3B] to-[#E98C37]",
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
            alt="Projetos INRUA"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-white/85" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#5E5BA6]/15 via-[#4D88C5]/10 to-[#78B84D]/10" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-28">
          <div className="max-w-5xl">
            <span className="bg-[#F2D04B] text-black px-5 py-2 rounded-full font-black text-sm shadow-md">
              PROJETOS • DIREITOS HUMANOS • INCLUSÃO SOCIAL
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight text-[#111827]">
              Projetos e Ações do INRUA
            </h1>

            <p className="text-xl text-[#374151] leading-relaxed mt-8 max-w-3xl">
              Conheça nossas iniciativas voltadas à dignidade,
              inclusão social, segurança alimentar, moradia e
              fortalecimento de políticas públicas para a população
              em situação de rua.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-[#5E5BA6] font-bold uppercase tracking-widest">
            Atuação Social
          </span>

          <h2 className="text-5xl font-black mt-4 text-[#111827]">
            {projects.length} Projetos de Impacto Social
          </h2>

          <p className="text-[#6B7280] text-lg mt-6 leading-relaxed">
            O INRUA atua em diversas frentes sociais e institucionais
            para garantir direitos fundamentais, acolhimento,
            inclusão e cidadania.
          </p>
        </div>
      </section>

      {/* LISTA DE PROJETOS */}
      <section className="container mx-auto px-6 pb-28">
        <div className="space-y-14">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`
                bg-gradient-to-br
                ${project.color}
                rounded-[40px]
                p-[2px]
                shadow-xl
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all
                duration-300
              `}
            >
              <div className="bg-white rounded-[38px] overflow-hidden">
                <div className="grid lg:grid-cols-5 items-stretch">

                  {/* IMAGEM */}
                  <div className="lg:col-span-2 relative min-h-[280px] md:min-h-[400px]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />

                    <div className="absolute top-8 left-8">
                      <span className="bg-[#F2D04B] text-black px-4 py-2 rounded-full text-xs font-black shadow-lg uppercase">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* CONTEÚDO */}
                  <div className="lg:col-span-3 p-8 lg:p-12 space-y-10">

                    {/* HEADER */}
                    <div>
                      <h2 className="text-3xl font-black text-[#111827] leading-tight mb-4">
                        {project.name}
                      </h2>

                      <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-[#78B84D]/10 text-[#78B84D] border border-[#78B84D]/20 px-4 py-1.5 rounded-full text-xs font-bold">
                          {project.status}
                        </span>

                        <span className="bg-[#5E5BA6]/10 text-[#5E5BA6] border border-[#5E5BA6]/20 px-4 py-1.5 rounded-full text-xs font-bold">
                          Iniciativa Institucional
                        </span>
                      </div>

                      <div className="bg-gradient-to-br from-[#F8FAFC] to-[#F3F4F6] border border-[#E5E7EB] rounded-3xl p-6">
                        <p className="text-[#4B5563] text-lg leading-relaxed font-medium">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* GRID INFO */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                      <div className="flex items-center gap-4 p-5 bg-[#F3F4F6] rounded-2xl border border-[#E5E7EB]">
                        <div className="bg-white p-2.5 rounded-xl shadow-sm">
                          <Users size={20} className="text-[#F2D04B]" />
                        </div>

                        <div>
                          <p className="text-[10px] uppercase font-black text-[#9CA3AF]">
                            Público-Alvo
                          </p>

                          <p className="text-sm font-bold text-[#111827]">
                            {project.publicTarget}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-5 bg-[#F3F4F6] rounded-2xl border border-[#E5E7EB]">
                        <div className="bg-white p-2.5 rounded-xl shadow-sm">
                          <Calendar size={20} className="text-[#78B84D]" />
                        </div>

                        <div>
                          <p className="text-[10px] uppercase font-black text-[#9CA3AF]">
                            Vigência
                          </p>

                          <p className="text-sm font-bold text-[#111827]">
                            {project.startDate} • {project.endDate}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* OBJETIVOS + ATIVIDADES */}
                    <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-[#E5E7EB]">

                      {/* OBJETIVOS */}
                      <div>
                        <h3 className="text-lg font-black text-[#111827] flex items-center gap-2 mb-4">
                          <ShieldCheck
                            size={20}
                            className="text-[#5E5BA6]"
                          />

                          Objetivos
                        </h3>

                        <p className="text-sm text-[#6B7280] leading-relaxed">
                          {project.objectives}
                        </p>
                      </div>

                      {/* ATIVIDADES */}
                      <div>
                        <h3 className="text-lg font-black text-[#111827] flex items-center gap-2 mb-4">
                          <HeartHandshake
                            size={20}
                            className="text-[#78B84D]"
                          />

                          Atividades
                        </h3>

                        <ul className="space-y-2">
                          {project.activities.map((act, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm text-[#6B7280]"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F2D04B]" />

                              {act}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* RESULTADO */}
                    <div className="bg-[#F8FAFC] border border-[#D1D5DB] rounded-3xl p-6 flex items-center justify-between shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-4">
                        <div className="bg-[#78B84D]/10 p-3 rounded-2xl">
                          <TrendingUp
                            className="text-[#78B84D]"
                            size={24}
                          />
                        </div>

                        <div>
                          <p className="text-[#9CA3AF] text-[10px] font-black uppercase tracking-widest">
                            Impacto Alcançado
                          </p>

                          <p className="text-[#111827] font-bold text-base leading-relaxed">
                            {project.results}
                          </p>
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