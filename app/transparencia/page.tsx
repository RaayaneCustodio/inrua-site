"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import {
  FileText,
  Info,
  AlertCircle,
  TrendingUp,
  ShieldCheck,
  Landmark,
  PieChart as PieChartIcon,
  MousePointerClick,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { DocumentCard } from "@/components/document-card"

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function TransparenciaPage() {
  const [selectedPartnership, setSelectedPartnership] = useState(0)

  const partnerships = [
    {
      id: 1,
      grantingAgency: "Prefeitura Municipal de Curitiba - SMATI",
      agreementNumber: "Edital 01/2025 (Em Processo)",

      // AJUSTADO
      subject: "Projeto Cidadania PopRua – Direitos e Inclusão Social",

      totalValue: "R$ 1.350.000,00",
      startDate: "A definir",
      endDate: "A definir",
      status: "Em Seleção",

      // AJUSTADO
      description:
        "Proposta submetida ao Chamamento Público para fortalecimento de ações de cidadania, atendimento social, acolhimento e garantia de direitos da população em situação de rua.",

      documents: [
        {
          title: "Plano de Trabalho Submetido",
          url: "/docs/transparencia/Plano-de-Trabalho-Cidadania.pdf",
        },
      ],
    },

    {
      id: 2,
      grantingAgency: "Fundação Banco do Brasil",
      agreementNumber: "Convênio 21.916",
      subject: "Apoio a Cozinha Solidária",
      totalValue: "R$ 336.848,72",
      startDate: "Jun/2025",
      endDate: "Jun/2027",
      status: "Em Execução",
      description:
        "Melhoria na estrutura das Cozinhas Solidárias para beneficiamento da produção de alimentos destinados à população em vulnerabilidade social.",
      documents: [
        {
          title: "Termo de Convênio e Plano de Trabalho",
          url: "/docs/transparencia/ConvenioBdB.pdf",
        },
      ],
    },
  ]

  const activityReports = [
    {
      title: "Relatoria Conferência de Mulheres 2025",
      date: "Ago/2025",
      description:
        "Documentação e propostas da Conferência Livre de Mulheres em Situação de Rua e suas Diversidades.",
      url: "/docs/transparencia/RelatorioMulheres.pdf",
    },

    {
      title: "Relatório de Atividades 2021-2022",
      date: "Biênio 2021/22",
      description:
        "Ações do Observatório ODH Pop Rua, Natal Solidário e articulações políticas.",
      url: "/docs/transparencia/INRua-relatorio-2021-2022.pdf",
    },

    {
      title: "Relatório de Atividades 2019-2020",
      date: "Biênio 2019/20",
      description:
        "Implementação do Housing First, Seminário Nacional e ações durante a pandemia.",
      url: "/docs/transparencia/INRua-relatorio-2019-2020.pdf",
    },
  ]

  const expenseData = [
    { category: "RH e Pessoal", value: 850000, fill: "#5E5BA6" },
    { category: "Estrutura", value: 150000, fill: "#E98C37" },
    { category: "Atividades", value: 350000, fill: "#78B84D" },
  ]

  const revenueData = [
    { name: "Convênios", value: 90, color: "#4D88C5" },
    { name: "Doações", value: 10, color: "#F2D04B" },
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
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/movimento2.png"
            alt="Transparência INRUA"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#020617]/85" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#5E5BA6]/60 via-[#4D88C5]/40 to-[#78B84D]/40" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-28">
          <div className="max-w-5xl">
            <span className="bg-[#F2D04B] text-black px-5 py-2 rounded-full font-black text-sm">
              TRANSPARÊNCIA • LEI 13.019/2014 • PRESTAÇÃO DE CONTAS
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight">
              Transparência Pública
            </h1>

            <p className="text-xl text-white/80 leading-relaxed mt-8 max-w-3xl">
              Acompanhe informações institucionais, convênios,
              relatórios de atividades, prestação de contas e
              documentos públicos do INRUA.
            </p>
          </div>
        </div>
      </section>

      {/* ALERTA */}
      <section className="container mx-auto px-6 pt-12">
        <Alert className="border-[#F2D04B]/20 bg-[#F2D04B]/10 text-white rounded-2xl backdrop-blur-xl">
          <Info className="h-4 w-4 text-[#F2D04B]" />

          <AlertDescription className="ml-2 text-white/80">
            <strong className="text-white">Transparência Ativa:</strong>{" "}
            O projeto <strong>Projeto Cidadania PopRua</strong> encontra-se
            em fase de proposta, reafirmando nosso compromisso
            com clareza de dados e prestação pública de contas.
          </AlertDescription>
        </Alert>
      </section>

      {/* TABS */}
      <section className="container mx-auto px-6 py-20">
        <Tabs defaultValue="partnerships" className="w-full">

          {/* MENU */}
          <div className="w-full space-y-3 mb-10">
            <div className="flex items-center gap-2 text-white/60 md:justify-center">
              <MousePointerClick
                size={14}
                className="animate-pulse"
              />

              <p className="text-[10px] uppercase tracking-widest font-bold">
                Navegue pelas informações públicas
              </p>
            </div>

            <div className="overflow-x-auto pb-3 scrollbar-hide">
              <TabsList className="flex inline-flex min-w-full md:grid md:grid-cols-3 h-auto bg-transparent gap-3 p-1">

                <TabsTrigger
                  value="partnerships"
                  className="
                    flex-shrink-0
                    w-[240px]
                    md:w-full
                    min-h-[80px]
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    data-[state=active]:bg-[#5E5BA6]/20
                    data-[state=active]:border-[#5E5BA6]
                    data-[state=active]:text-white
                    text-white/70
                    font-bold
                    transition-all
                  "
                >
                  Parcerias e Projetos
                </TabsTrigger>

                <TabsTrigger
                  value="reports"
                  className="
                    flex-shrink-0
                    w-[240px]
                    md:w-full
                    min-h-[80px]
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    data-[state=active]:bg-[#4D88C5]/20
                    data-[state=active]:border-[#4D88C5]
                    data-[state=active]:text-white
                    text-white/70
                    font-bold
                    transition-all
                  "
                >
                  Relatórios
                </TabsTrigger>

                <TabsTrigger
                  value="financial"
                  className="
                    flex-shrink-0
                    w-[240px]
                    md:w-full
                    min-h-[80px]
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    data-[state=active]:bg-[#78B84D]/20
                    data-[state=active]:border-[#78B84D]
                    data-[state=active]:text-white
                    text-white/70
                    font-bold
                    transition-all
                  "
                >
                  Prestação de Contas
                </TabsTrigger>

              </TabsList>
            </div>
          </div>

          {/* PARCERIAS */}
          <TabsContent value="partnerships">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* MENU LATERAL */}
              <div className="space-y-4">
                {partnerships.map((partnership, idx) => (
                  <button
                    key={partnership.id}
                    onClick={() => setSelectedPartnership(idx)}
                    className={`
                      w-full
                      text-left
                      rounded-3xl
                      p-5
                      border
                      transition-all
                      backdrop-blur-xl

                      ${selectedPartnership === idx
                        ? "bg-[#5E5BA6]/20 border-[#5E5BA6]"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                      }
                    `}
                  >
                    <p className="font-black text-lg">
                      {partnership.subject}
                    </p>

                    <p className="text-sm text-white/60 mt-2">
                      {partnership.grantingAgency}
                    </p>

                    <Badge
                      className={`mt-4 ${partnership.status === "Em Seleção"
                        ? "bg-[#E98C37]"
                        : "bg-[#78B84D]"
                        }`}
                    >
                      {partnership.status}
                    </Badge>
                  </button>
                ))}
              </div>

              {/* CONTEÚDO */}
              <div className="lg:col-span-2">
                <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-2xl">

                  <div className="flex items-center gap-3 mb-6">
                    <Landmark className="text-[#F2D04B]" />

                    <h2 className="text-3xl font-black">
                      {
                        partnerships[selectedPartnership].subject
                      }
                    </h2>
                  </div>

                  <p className="text-white/70 leading-relaxed mb-8">
                    {
                      partnerships[selectedPartnership]
                        .description
                    }
                  </p>

                  {/* INFO */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                      <p className="text-sm text-white/50">
                        Órgão Parceiro
                      </p>

                      <p className="font-bold mt-2">
                        {
                          partnerships[selectedPartnership]
                            .grantingAgency
                        }
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                      <p className="text-sm text-white/50">
                        Instrumento
                      </p>

                      <p className="font-bold mt-2">
                        {
                          partnerships[selectedPartnership]
                            .agreementNumber
                        }
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                      <p className="text-sm text-white/50">
                        Valor Global
                      </p>

                      <p className="font-black text-[#F2D04B] mt-2">
                        {
                          partnerships[selectedPartnership]
                            .totalValue
                        }
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                      <p className="text-sm text-white/50">
                        Vigência
                      </p>

                      <p className="font-bold mt-2">
                        {
                          partnerships[selectedPartnership]
                            .startDate
                        }{" "}
                        a{" "}
                        {
                          partnerships[selectedPartnership]
                            .endDate
                        }
                      </p>
                    </div>

                  </div>

                  {/* DOCUMENTOS */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <FileText className="text-[#4D88C5]" />

                      <h3 className="text-2xl font-black">
                        Documentação
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {partnerships[
                        selectedPartnership
                      ].documents.map((doc, idx) => (
                        <DocumentCard
                          key={idx}
                          title={doc.title}
                          fileUrl={doc.url}
                          fileName={doc.title + ".pdf"}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </TabsContent>

          {/* RELATÓRIOS */}
          <TabsContent value="reports">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {activityReports.map((report, idx) => (
                <div
                  key={idx}
                  className="
          bg-white/5
          border
          border-white/10
          rounded-[32px]
          p-8
          backdrop-blur-2xl
          hover:bg-white/10
          transition-all
          duration-300
        "
                >
                  {/* HEADER */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-[#5E5BA6]/20">
                      <FileText
                        className="text-[#F2D04B]"
                        size={26}
                      />
                    </div>

                    <Badge className="bg-[#4D88C5] text-white border-0">
                      {report.date}
                    </Badge>
                  </div>

                  {/* TÍTULO */}
                  <h3 className="text-2xl font-black mb-4 text-white leading-tight">
                    {report.title}
                  </h3>

                  {/* DESCRIÇÃO */}
                  <p className="text-white/70 leading-relaxed mb-8">
                    {report.description}
                  </p>

                  {/* BOTÃO VISUALIZAR PDF */}
                  <a
                    href={report.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            flex items-center justify-between
            w-full
            rounded-2xl
            border border-white/10
            bg-[#111827]
            hover:bg-[#1E293B]
            transition-all
            duration-300
            p-5
            group
          "
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-[#4D88C5]/20">
                        <FileText
                          className="text-[#4D88C5]"
                          size={22}
                        />
                      </div>

                      <div>
                        <p className="font-bold text-white">
                          Visualizar Documento
                        </p>

                        <p className="text-sm text-white/60">
                          Abrir relatório em PDF
                        </p>
                      </div>
                    </div>

                    <div
                      className="
                      px-4 py-2
                      rounded-xl
                      bg-[#5E5BA6]/20
                      text-[#F2D04B]
                      font-bold
                      text-sm
                      group-hover:scale-105
                      transition-transform
                    "
                    >
                      Abrir
                    </div>
                  </a>
                </div>
              ))}

            </div>
          </TabsContent>

          {/* FINANCEIRO */}
          <TabsContent value="financial">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* BARRAS */}
              <Card className="bg-white/5 border-white/10 rounded-[32px] p-8 backdrop-blur-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <TrendingUp className="text-[#78B84D]" />

                  <h3 className="text-2xl font-black text-white">
                    Execução Financeira
                  </h3>
                </div>

                <div className="h-[320px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={expenseData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

                      <XAxis type="number" hide />

                      <YAxis
                        dataKey="category"
                        type="category"
                        tick={{ fill: "#fff" }}
                        width={100}
                      />

                      <Tooltip />

                      <Bar
                        dataKey="value"
                        radius={[0, 8, 8, 0]}
                      >
                        {expenseData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={entry.fill}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* PIE */}
              <Card className="bg-white/5 border-white/10 rounded-[32px] p-8 backdrop-blur-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <PieChartIcon className="text-[#F2D04B]" />

                  <h3 className="text-2xl font-black text-white">
                    Fontes de Recursos
                  </h3>
                </div>

                <div className="h-[320px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={revenueData}
                        cx="50%"
                        cy="50%"
                        innerRadius={65}
                        outerRadius={95}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {revenueData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={entry.color}
                          />
                        ))}
                      </Pie>

                      <Tooltip />

                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card>

            </div>

            {/* ALERTA */}
            <div className="mt-10 bg-[#F2D04B]/10 border border-[#F2D04B]/20 rounded-[32px] p-6 flex items-start gap-4">
              <AlertCircle className="text-[#F2D04B] mt-1" />

              <div>
                <h4 className="font-black text-lg">
                  Prestação de Contas Pública
                </h4>

                <p className="text-white/70 mt-2 leading-relaxed">
                  Os dados apresentados possuem caráter
                  demonstrativo e institucional, garantindo
                  transparência sobre a execução das ações e
                  utilização de recursos vinculados às atividades
                  sociais do INRUA.
                </p>
              </div>
            </div>

          </TabsContent>
        </Tabs>
      </section>

      <Footer />
    </main>
  )
}