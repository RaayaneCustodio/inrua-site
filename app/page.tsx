"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

import {
  Users,
  Heart,
  Target,
  Eye,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  const highlights = [
    {
      icon: <Users size={34} />,
      label: "Pessoas Impactadas",
      value: "8.5K+",
      description:
        "Atendimento e acolhimento em diversas regiões do Brasil.",
      color: "from-[#78B84D] to-[#4D88C5]",
    },
    {
      icon: <Heart size={34} />,
      label: "Anos de Atuação",
      value: "8+",
      description: "Defendendo direitos humanos desde 2016.",
      color: "from-[#E98C37] to-[#F2D04B]",
    },
    {
      icon: <Target size={34} />,
      label: "Estados Atendidos",
      value: "15+",
      description: "Atuação nacional em políticas públicas.",
      color: "from-[#5E5BA6] to-[#4D88C5]",
    },
    {
      icon: <Eye size={34} />,
      label: "Conformidade MROSC",
      value: "100%",
      description: "Compromisso com transparência institucional.",
      color: "from-[#C83E3B] to-[#E98C37]",
    },
  ]

  const projects = [
    {
      title: "Moradia Primeiro",
      category: "Habitação",
      image: "/moradia-primeiro1.png",
    },
    {
      title: "Movimento de Rua",
      category: "Direitos Humanos",
      image: "/movimento.png",
    },
    {
      title: "Cozinha Solidária",
      category: "Alimentação",
      image: "/cozinha-solidaria.png",
    },
  ]

  return (
    <main className="min-h-screen bg-[#0F172A] text-white overflow-hidden">
      {/* EFEITOS DE FUNDO */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#5E5BA6]/30 rounded-full blur-3xl" />

        <div className="absolute top-[30%] right-[-100px] w-[500px] h-[500px] bg-[#4D88C5]/20 rounded-full blur-3xl" />

        <div className="absolute bottom-[-100px] left-[20%] w-[500px] h-[500px] bg-[#78B84D]/20 rounded-full blur-3xl" />
      </div>

      <Header />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/movimento2.png"
            alt="INRUA"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#020617]/85" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#5E5BA6]/70 via-[#4D88C5]/40 to-[#78B84D]/40" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 bg-[#F2D04B] text-black px-5 py-2 rounded-full font-bold shadow-2xl">
              Transparência • Direitos Humanos • Inclusão Social
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mt-8 text-white">
              Instituto Nacional de Direitos Humanos da População de Rua
            </h1>

            <p className="text-xl text-white/80 mt-8 leading-relaxed max-w-3xl">
              Desde 2016 promovendo dignidade, inclusão social e defesa dos
              direitos da população em situação de rua através de ações
              concretas, projetos sociais e políticas públicas.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/transparencia">
                <Button className="bg-[#F2D04B] hover:bg-[#E98C37] text-black font-black px-8 py-6 text-lg rounded-2xl shadow-[0_20px_60px_rgba(242,208,75,0.35)]">
                  Área de Transparência
                </Button>
              </Link>

              <Link href="/acoes">
                <Button
                  variant="outline"
                  className="border-white/30 bg-white/10 backdrop-blur-xl text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-2xl"
                >
                  Conheça Nossos Projetos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className="container mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <span className="text-[#F2D04B] font-bold uppercase tracking-widest">
            Impacto Social
          </span>

          <h2 className="text-5xl font-black mt-4">
            Nosso Impacto em Números
          </h2>

          <p className="text-lg text-white/70 max-w-3xl mx-auto mt-6">
            Trabalhamos diariamente para garantir direitos fundamentais,
            inclusão social e dignidade humana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${item.color} rounded-3xl p-[2px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:scale-[1.03] transition-all duration-300`}
            >
              <div className="bg-[#111827] rounded-3xl p-8 h-full min-h-[320px] flex flex-col">
                <div className="mb-6 text-white">
                  {item.icon}
                </div>

                <h3 className="text-5xl font-black mb-3 text-white">
                  {item.value}
                </h3>

                <p className="font-bold text-lg mb-4 text-white">
                  {item.label}
                </p>

                <p className="text-white/70 text-sm leading-relaxed mt-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJETOS */}
      <section className="py-28 bg-gradient-to-b from-[#111827] to-[#172554]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#78B84D] font-bold uppercase tracking-widest">
              Projetos Sociais
            </span>

            <h2 className="text-5xl font-black mt-4">
              Projetos e Ações
            </h2>

            <p className="text-lg text-white/70 max-w-3xl mx-auto mt-6">
              Conheça nossas iniciativas voltadas à garantia de direitos e
              inclusão da população em situação de rua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  <div className="absolute bottom-0 p-6 text-white">
                    <span className="bg-[#F2D04B] text-black px-3 py-1 rounded-full text-xs font-black">
                      {project.category}
                    </span>

                    <h3 className="text-3xl font-black mt-4">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-14">
            <Link href="/acoes">
              <Button className="bg-[#5E5BA6] hover:bg-[#4D88C5] text-white px-8 py-6 rounded-2xl text-lg font-black shadow-[0_20px_60px_rgba(94,91,166,0.45)]">
                Ver Todos os Projetos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TRANSPARÊNCIA */}
      <section className="py-28 bg-gradient-to-r from-[#5E5BA6] via-[#4D88C5] to-[#78B84D] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-[#111827]/50 backdrop-blur-2xl rounded-[32px] p-12 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="bg-[#F2D04B] text-black px-4 py-2 rounded-full font-black text-sm">
                  LEI 13.019/2014 • MROSC
                </span>

                <h2 className="text-5xl font-black text-white mt-6 mb-6">
                  Transparência Institucional
                </h2>

                <p className="text-white/80 text-lg leading-relaxed">
                  Disponibilizamos publicamente relatórios financeiros,
                  documentos institucionais, editais e informações de
                  prestação de contas conforme as exigências do MROSC.
                </p>

                <Link href="/transparencia">
                  <Button className="mt-8 bg-[#F2D04B] hover:bg-[#E98C37] text-black font-black px-8 py-6 rounded-2xl text-lg shadow-[0_20px_60px_rgba(242,208,75,0.35)]">
                    Acessar Portal de Transparência
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {[
                  "Prestação de Contas",
                  "Relatórios",
                  "Estatuto",
                  "Documentos Oficiais",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-7 text-white font-bold text-center shadow-xl hover:bg-white/20 transition-all"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}