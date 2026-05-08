import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import {
  Users,
  TrendingUp,
  MapPin,
  Calendar,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
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
    <main className="min-h-screen bg-[#0F172A] text-white overflow-hidden">
      {/* FUNDO */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#5E5BA6]/30 rounded-full blur-3xl" />

        <div className="absolute top-[30%] right-[-100px] w-[500px] h-[500px] bg-[#4D88C5]/20 rounded-full blur-3xl" />

        <div className="absolute bottom-[-100px] left-[20%] w-[500px] h-[500px] bg-[#78B84D]/20 rounded-full blur-3xl" />
      </div>

      <Header />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/movimento2.png"
            alt="Projetos INRUA"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#020617]/85" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#5E5BA6]/60 via-[#4D88C5]/40 to-[#78B84D]/40" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-28">
          <div className="max-w-5xl">
            <span className="bg-[#F2D04B] text-black px-5 py-2 rounded-full font-black text-sm">
              PROJETOS • DIREITOS HUMANOS • INCLUSÃO SOCIAL
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight">
              Projetos e Ações do INRUA
            </h1>

            <p className="text-xl text-white/80 leading-relaxed mt-8 max-w-3xl">
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
          <span className="text-[#F2D04B] font-bold uppercase tracking-widest">
            Atuação Social
          </span>

          <h2 className="text-5xl font-black mt-4">
            {projects.length} Projetos de Impacto Social
          </h2>

          <p className="text-white/70 text-lg mt-6 leading-relaxed">
            O INRUA atua em diversas frentes sociais e institucionais
            para garantir direitos fundamentais, acolhimento,
            inclusão e cidadania.
          </p>
        </div>
      </section>

      {/* PROJETOS */}

      <section className="container mx-auto px-6 pb-28">
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-gradient-to-br ${project.color} rounded-[32px] p-[2px] shadow-[0_20px_80px_rgba(0,0,0,0.35)]`}
            >
              <div className="bg-[#111827]/95 backdrop-blur-2xl rounded-[30px] overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0 items-stretch">

                  {/* IMAGEM */}
                  <div className="relative overflow-hidden group h-[260px] md:h-[320px] lg:h-full">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="
                      w-full
                      h-full
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-110
                    "
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    {/* Categoria + Título */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                      <span className="bg-[#F2D04B] text-black px-4 py-2 rounded-full text-xs md:text-sm font-black shadow-lg">
                        {project.category}
                      </span>

                      <h2 className="text-2xl md:text-3xl font-black text-white mt-4 leading-tight">
                        {project.name}
                      </h2>
                    </div>
                  </div>

                  {/* CONTEÚDO */}
                  <div className="p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      {/* BADGES */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-[#78B84D]/15 text-[#78B84D] border border-[#78B84D]/20 px-4 py-2 rounded-full text-sm font-bold">
                          {project.status}
                        </span>

                        <span className="bg-[#4D88C5]/15 text-[#60A5FA] border border-[#60A5FA]/20 px-4 py-2 rounded-full text-sm font-bold">
                          Projeto Institucional
                        </span>
                      </div>

                      {/* DESCRIÇÃO */}
                      <p className="text-white/75 text-lg leading-relaxed mb-8">
                        {project.description}
                      </p>

                      {/* INFO */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition">
                          <div className="flex items-start gap-3">
                            <Users
                              size={22}
                              className="text-[#F2D04B] mt-1"
                            />

                            <div>
                              <p className="font-black text-white">
                                Público-Alvo
                              </p>

                              <p className="text-white/70 text-sm mt-1">
                                {project.publicTarget}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition">
                          <div className="flex items-start gap-3">
                            <Calendar
                              size={22}
                              className="text-[#78B84D] mt-1"
                            />

                            <div>
                              <p className="font-black text-white">
                                Período
                              </p>

                              <p className="text-white/70 text-sm mt-1">
                                {project.startDate} • {project.endDate}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition">
                          <div className="flex items-start gap-3">
                            <MapPin
                              size={22}
                              className="text-[#E98C37] mt-1"
                            />

                            <div>
                              <p className="font-black text-white">
                                Abrangência
                              </p>

                              <p className="text-white/70 text-sm mt-1">
                                Curitiba • Paraná • Brasil
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition">
                          <div className="flex items-start gap-3">
                            <TrendingUp
                              size={22}
                              className="text-[#C83E3B] mt-1"
                            />

                            <div>
                              <p className="font-black text-white">
                                Resultados
                              </p>

                              <p className="text-white/70 text-sm mt-1">
                                Impacto social contínuo
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* OBJETIVOS */}
                      <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                          <ShieldCheck
                            className="text-[#F2D04B]"
                            size={24}
                          />

                          <h3 className="text-2xl font-black">
                            Objetivos
                          </h3>
                        </div>

                        <p className="text-white/70 leading-relaxed">
                          {project.objectives}
                        </p>
                      </div>

                      {/* ATIVIDADES */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <HeartHandshake
                            className="text-[#78B84D]"
                            size={24}
                          />

                          <h3 className="text-2xl font-black">
                            Principais Atividades
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                          {project.activities.map((activity, idx) => (
                            <div
                              key={idx}
                              className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3 hover:bg-white/10 transition"
                            >
                              <div className="w-3 h-3 rounded-full bg-[#F2D04B]" />

                              <p className="text-white/75">
                                {activity}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* RESULTADO */}
                    <div className="mt-10 bg-gradient-to-r from-[#5E5BA6]/20 to-[#4D88C5]/20 border border-white/10 rounded-3xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <ArrowRight
                          className="text-[#F2D04B]"
                          size={24}
                        />

                        <h3 className="text-xl font-black">
                          Resultados Alcançados
                        </h3>
                      </div>

                      <p className="text-white/75 leading-relaxed">
                        {project.results}
                      </p>
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