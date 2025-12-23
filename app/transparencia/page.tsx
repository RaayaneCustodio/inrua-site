"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { DocumentCard } from "@/components/document-card"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, FileText, Info } from "lucide-react"
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

  // 1. PARCERIAS PÚBLICAS E PROPOSTAS
  const partnerships = [
    {
      id: 1,
      grantingAgency: "Prefeitura Municipal de Curitiba - SMATI",
      agreementNumber: "Edital 01/2025 (Em Processo)",
      subject: "Projeto Cidadania PopRua - PAR e CAIS",
      totalValue: "R$ 1.350.000,00",
      startDate: "A definir",
      endDate: "A definir",
      status: "Em Seleção", 
      description: "Proposta submetida ao Chamamento Público para execução de equipamento de higiene, alimentação e suporte técnico. Em fase de habilitação técnica.",
      documents: [
        { 
          title: "Plano de Trabalho Submetido", 
          url: "/docs/transparencia/Plano-de-Trabalho-Cidadania.pdf" 
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
      description: "Melhoria na estrutura de Cozinhas Solidárias para beneficiamento da produção de alimentos para população em vulnerabilidade social.",
      documents: [
        { 
          title: "Termo de Convênio e Plano de Trabalho", 
          url: "/docs/transparencia/ConvenioBdB.pdf" 
        },
      ],
    },
  ]

  // 2. RELATÓRIOS DE ATIVIDADES (INCLUINDO O DAS MULHERES)
  const activityReports = [
    {
      title: "Relatoria Conferência de Mulheres 2025",
      date: "Ago/2025",
      description: "Documentação e propostas da Conferência Livre de Mulheres em Situação de Rua e suas Diversidades - Paraná.",
      url: "/docs/transparencia/RelatorioMulheres.pdf"
    },
    {
      title: "Relatório de Atividades 2021-2022",
      date: "Biênio 2021/22",
      description: "Ações do Observatório ODH Pop Rua, Natal Solidário e articulações políticas.",
      url: "/docs/transparencia/INRua-relatorio-2021-2022.pdf"
    },
    {
      title: "Relatório de Atividades 2019-2020",
      date: "Biênio 2019/20",
      description: "Implementação do Housing First, Seminário Nacional e ações na pandemia.",
      url: "/docs/transparencia/INRua-relatorio-2019-2020.pdf"
    },
  ]

  const expenseData = [
    { category: "RH e Pessoal", value: 850000, fill: "#003d82" },
    { category: "Estrutura/Aluguel", value: 150000, fill: "#FF8C42" },
    { category: "Atividades/Insumos", value: 350000, fill: "#00C49F" },
  ]

  const revenueData = [
    { name: "Recursos Propostos/Convênios", value: 90, color: "#003d82" },
    { name: "Doações", value: 10, color: "#FF8C42" },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="container-max pt-12 px-4">
        <HeroBanner
          title="Transparência Pública - Lei 13.019/2014"
          description="Acesso completo a informações sobre parcerias, relatórios de atividades e prestação de contas da organização."
        />
      </section>

      <section className="container-max pt-8 px-4">
        <Alert className="border-amber-200 bg-amber-50 text-amber-900">
          <Info className="h-4 w-4" />
          <AlertDescription className="ml-2">
            <strong>Transparência Ativa:</strong> O projeto <strong>Cidadania PopRua</strong> encontra-se em fase de proposta, reafirmando nosso compromisso com a clareza de dados antes e durante as parcerias.
          </AlertDescription>
        </Alert>
      </section>

      <section className="container-max section-padding px-4">
        <Tabs defaultValue="partnerships" className="w-full">
          {/* AJUSTE MOBILE: Menu scrollable */}
          <div className="w-full overflow-x-auto pb-2 mb-8">
            <TabsList className="flex w-full min-w-[450px] sm:min-w-0 sm:grid sm:grid-cols-3">
              <TabsTrigger value="partnerships" className="flex-1">Parcerias e Projetos</TabsTrigger>
              <TabsTrigger value="reports" className="flex-1">Relatórios de Atividades</TabsTrigger>
              <TabsTrigger value="financial" className="flex-1">Prestação de Contas</TabsTrigger>
            </TabsList>
          </div>

          {/* ABA 1: PARCERIAS */}
          <TabsContent value="partnerships" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 space-y-4">
                <h3 className="font-bold text-lg px-2">Histórico e Propostas</h3>
                <div className="flex flex-col gap-3">
                  {partnerships.map((partnership, idx) => (
                    <button
                      key={partnership.id}
                      onClick={() => setSelectedPartnership(idx)}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        selectedPartnership === idx
                          ? "border-primary bg-primary/5 shadow-sm ring-1 ring-primary/20"
                          : "border-border hover:border-primary/50 bg-card"
                      }`}
                    >
                      <p className="font-bold text-sm break-words">{partnership.subject}</p>
                      <p className="text-xs text-muted-foreground mt-1">{partnership.grantingAgency}</p>
                      <Badge className={`mt-2 ${partnership.status === "Em Seleção" ? "bg-amber-500" : "bg-green-600"}`}>
                        {partnership.status}
                      </Badge>
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2">
                {partnerships[selectedPartnership] && (
                  <Card className="p-4 sm:p-6">
                    <h3 className="text-xl font-bold mb-2">{partnerships[selectedPartnership].subject}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{partnerships[selectedPartnership].description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 bg-muted/30 p-4 rounded-lg text-sm">
                      <div><p className="font-semibold">Órgão Parceiro</p><p>{partnerships[selectedPartnership].grantingAgency}</p></div>
                      <div><p className="font-semibold">Instrumento</p><p>{partnerships[selectedPartnership].agreementNumber}</p></div>
                      <div><p className="font-semibold">Valor Global</p><p className="text-primary font-bold">{partnerships[selectedPartnership].totalValue}</p></div>
                      <div><p className="font-semibold">Vigência</p><p>{partnerships[selectedPartnership].startDate} a {partnerships[selectedPartnership].endDate}</p></div>
                    </div>
                    <h4 className="font-bold mb-4 flex items-center gap-2"><FileText size={18} className="text-primary" /> Documentação do Projeto</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {partnerships[selectedPartnership].documents.map((doc, idx) => (
                        <DocumentCard key={idx} title={doc.title} fileUrl={doc.url} fileName={doc.title + ".pdf"} />
                      ))}
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          {/* ABA 2: RELATÓRIOS (COM O DAS MULHERES) */}
          <TabsContent value="reports" className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 px-2">Relatórios de Gestão e Impacto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
              {activityReports.map((report, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg"><FileText className="text-primary" size={24} /></div>
                    <Badge variant="secondary">{report.date}</Badge>
                  </div>
                  <h4 className="text-lg font-bold mb-2">{report.title}</h4>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3">{report.description}</p>
                  <DocumentCard title="Baixar PDF" fileUrl={report.url} fileName={report.title + ".pdf"} />
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* ABA 3: FINANCEIRO */}
          <TabsContent value="financial" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <Card className="p-6">
                  <h4 className="font-bold mb-4">Previsão de Execução Financeira</h4>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={expenseData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" hide />
                        <YAxis dataKey="category" type="category" width={100} fontSize={12} />
                        <Tooltip formatter={(value) => `R$ ${value}`} />
                        <Bar dataKey="value" fill="#003d82" radius={[0, 4, 4, 0]}>
                          {expenseData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
               </Card>
               <Card className="p-6">
                  <h4 className="font-bold mb-4">Fontes de Recurso</h4>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={revenueData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                          {revenueData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
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