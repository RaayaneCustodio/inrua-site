"use client"

import { useState } from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import {
  FileText,
  TrendingUp,
  Landmark,
  PieChart as PieChartIcon,
  MousePointerClick,
  ArrowRight,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

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
      agreementNumber: "Termo de Colaboração 01/2025",
      subject: "Projeto Cidadania PopRua – Direitos e Inclusão Social",
      totalValue: "R$ 1.350.000,00",
      status: "Em Execução",
      description:
        "Projeto voltado para o fortalecimento de ações de cidadania, atendimento social, acolhimento e garantia de direitos da população em situação de rua.",
      documents: [],
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

  const selected = partnerships[selectedPartnership]

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
    <main className="min-h-screen bg-white text-[#111827] overflow-hidden">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/movimento2.png"
            alt="Transparência INRUA"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-white/85" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#5E5BA6]/15 via-[#4D88C5]/10 to-[#78B84D]/10" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-24 md:py-28">
          <div className="max-w-5xl">
            <span className="bg-[#F2D04B] text-black px-5 py-2 rounded-full font-black text-sm shadow-md uppercase">
              Transparência • Prestação de Contas
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight text-[#111827]">
              Transparência Pública
            </h1>

            <p className="text-lg md:text-xl text-[#374151] leading-relaxed mt-8 max-w-3xl">
              Acompanhe informações institucionais, convênios,
              relatórios de atividades e a aplicação de recursos
              do INRUA.
            </p>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="container mx-auto px-4 md:px-6 py-20">
        <Tabs defaultValue="partnerships" className="w-full">
          <div className="w-full space-y-4 mb-12">
            <div className="flex items-center gap-2 text-[#6B7280] justify-center">
              <MousePointerClick
                size={14}
                className="animate-pulse"
              />

              <p className="text-[10px] uppercase tracking-widest font-bold italic">
                Navegue pelos dados públicos
              </p>
            </div>

            <div className="overflow-x-auto">
              <TabsList className="w-full md:w-fit mx-auto flex bg-[#F3F4F6] p-1 rounded-2xl border border-[#E5E7EB]">
                <TabsTrigger
                  value="partnerships"
                  className="flex-1 md:flex-none rounded-xl px-5 md:px-8 py-3 font-bold data-[state=active]:bg-white data-[state=active]:text-[#5E5BA6] data-[state=active]:shadow-sm transition-all"
                >
                  Parcerias
                </TabsTrigger>

                <TabsTrigger
                  value="reports"
                  className="flex-1 md:flex-none rounded-xl px-5 md:px-8 py-3 font-bold data-[state=active]:bg-white data-[state=active]:text-[#4D88C5] data-[state=active]:shadow-sm transition-all"
                >
                  Relatórios
                </TabsTrigger>

                <TabsTrigger
                  value="financial"
                  className="flex-1 md:flex-none rounded-xl px-5 md:px-8 py-3 font-bold data-[state=active]:bg-white data-[state=active]:text-[#78B84D] data-[state=active]:shadow-sm transition-all"
                >
                  Financeiro
                </TabsTrigger>
              </TabsList>
            </div>
          </div>

          {/* PARCERIAS */}
          <TabsContent value="partnerships">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* MENU */}
              <div className="space-y-4">
                {partnerships.map((partnership, idx) => (
                  <button
                    key={partnership.id}
                    onClick={() => setSelectedPartnership(idx)}
                    className={`
                      w-full
                      text-left
                      rounded-3xl
                      p-6
                      border
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      ${
                        selectedPartnership === idx
                          ? "bg-white border-[#5E5BA6] shadow-xl"
                          : "bg-[#F8FAFC] border-[#E5E7EB] hover:bg-white hover:border-[#D1D5DB]"
                      }
                    `}
                  >
                    <p
                      className={`font-black text-lg ${
                        selectedPartnership === idx
                          ? "text-[#5E5BA6]"
                          : "text-[#111827]"
                      }`}
                    >
                      {partnership.subject}
                    </p>

                    <Badge className="mt-4 bg-[#78B84D]">
                      {partnership.status}
                    </Badge>
                  </button>
                ))}
              </div>

              {/* DETALHES */}
              <div className="lg:col-span-2">
                <Card className="bg-white border-[#E5E7EB] rounded-[32px] p-6 md:p-10 lg:p-12 shadow-sm">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="bg-[#F2D04B]/10 p-3 rounded-2xl">
                      <Landmark
                        className="text-[#F2D04B]"
                        size={28}
                      />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-black text-[#111827]">
                      {selected.subject}
                    </h2>
                  </div>

                  <p className="text-[#4B5563] text-lg leading-relaxed mb-10">
                    {selected.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {selected.grantingAgency && (
                      <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-6">
                        <p className="text-[10px] uppercase font-black text-[#9CA3AF] mb-2 tracking-widest">
                          Órgão Parceiro
                        </p>

                        <p className="font-bold text-[#111827]">
                          {selected.grantingAgency}
                        </p>
                      </div>
                    )}

                    <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-6">
                      <p className="text-[10px] uppercase font-black text-[#9CA3AF] mb-2 tracking-widest">
                        Instrumento
                      </p>

                      <p className="font-bold text-[#111827]">
                        {selected.agreementNumber}
                      </p>
                    </div>

                    <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-6">
                      <p className="text-[10px] uppercase font-black text-[#9CA3AF] mb-2 tracking-widest">
                        Valor Global
                      </p>

                      <p className="font-black text-[#5E5BA6] text-xl">
                        {selected.totalValue}
                      </p>
                    </div>

                    {selected.startDate && (
                      <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-6">
                        <p className="text-[10px] uppercase font-black text-[#9CA3AF] mb-2 tracking-widest">
                          Vigência
                        </p>

                        <p className="font-bold text-[#111827]">
                          {selected.startDate} a {selected.endDate}
                        </p>
                      </div>
                    )}
                  </div>

                  {selected.documents?.length > 0 && (
                    <div className="pt-8 border-t border-[#E5E7EB]">
                      <div className="flex items-center gap-3 mb-6">
                        <FileText className="text-[#4D88C5]" />

                        <h3 className="text-2xl font-black text-[#111827]">
                          Documentação
                        </h3>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {selected.documents.map((doc, idx) => (
                          <DocumentCard
                            key={idx}
                            title={doc.title}
                            fileUrl={doc.url}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* RELATÓRIOS */}
          <TabsContent value="reports">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activityReports.map((report, idx) => (
                <Card
                  key={idx}
                  className="bg-[#F8FAFC] border-[#E5E7EB] p-8 rounded-[32px] hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-white p-4 rounded-2xl shadow-sm">
                      <FileText className="text-[#F2D04B]" />
                    </div>

                    <Badge
                      variant="outline"
                      className="border-[#D1D5DB] text-[#6B7280]"
                    >
                      {report.date}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-black text-[#111827] mb-4">
                    {report.title}
                  </h3>

                  <p className="text-[#6B7280] mb-8">
                    {report.description}
                  </p>

                  <a
                    href={report.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-4 bg-white border border-[#E5E7EB] rounded-2xl font-bold text-[#5E5BA6] hover:bg-[#F3F4F6] transition-colors"
                  >
                    Visualizar Relatório
                    <ArrowRight size={18} />
                  </a>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* FINANCEIRO */}
          <TabsContent value="financial">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6 md:p-8 rounded-[32px] border-[#E5E7EB] bg-white shadow-sm">
                <h3 className="text-2xl font-black text-[#111827] mb-8 flex items-center gap-3">
                  <TrendingUp className="text-[#78B84D]" />
                  Execução Financeira
                </h3>

                <div className="h-[320px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={expenseData} layout="vertical">
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#E5E7EB"
                      />

                      <XAxis type="number" hide />

                      <YAxis
                        dataKey="category"
                        type="category"
                        width={110}
                        tick={{
                          fill: "#4B5563",
                          fontWeight: "bold",
                        }}
                      />

                      <Tooltip />

                      <Bar
                        dataKey="value"
                        radius={[0, 8, 8, 0]}
                        fill="#5E5BA6"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card className="p-6 md:p-8 rounded-[32px] border-[#E5E7EB] bg-white shadow-sm">
                <h3 className="text-2xl font-black text-[#111827] mb-8 flex items-center gap-3">
                  <PieChartIcon className="text-[#F2D04B]" />
                  Fontes de Recursos
                </h3>

                <div className="h-[320px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={revenueData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={95}
                        dataKey="value"
                      >
                        {revenueData.map((entry, index) => (
                          <Cell
                            key={index}
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
          </TabsContent>
        </Tabs>
      </section>

      <Footer />
    </main>
  )
}