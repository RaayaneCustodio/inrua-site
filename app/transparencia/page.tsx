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
import { AlertCircle, Eye, BarChart3, Briefcase, FileText, TrendingUp, CheckCircle } from "lucide-react"
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

  // 1. PARCERIAS PÚBLICAS (DADOS REAIS DO PLANO DE TRABALHO)
  const partnerships = [
    {
      id: 1,
      grantingAgency: "Prefeitura Municipal de Curitiba - SMATI",
      agreementNumber: "Edital 01/2025",
      subject: "Projeto Cidadania PopRua - PAR e CAIS",
      totalValue: "R$ 1.350.000,00", // Valor do Plano de Trabalho
      startDate: "Dez/2025",
      endDate: "Dez/2026",
      status: "Em Formalização",
      description: "Execução de equipamento público (Ponto de Apoio e Centro de Acesso a Direitos) para atendimento à população em situação de rua, oferecendo higiene, alimentação, documentação e suporte técnico.",
      documents: [
        { 
          title: "Plano de Trabalho Detalhado", 
          url: "/docs/transparencia/Plano-de-Trabalho-Cidadania.pdf" // Seu arquivo renomeado
        },
        // Adicione aqui o Termo quando assinar
        { title: "Termo de Colaboração (Aguardando Assinatura)", url: "#" },
      ],
    },
    // Você pode adicionar outras parcerias antigas aqui se tiver os dados completos
  ]

  // 2. RELATÓRIOS DE ATIVIDADES (DADOS REAIS DOS SEUS PDFs)
  const activityReports = [
    {
      title: "Relatório de Atividades 2021-2022",
      date: "Biênio 2021/22",
      description: "Ações do Observatório ODH Pop Rua, Natal Solidário e articulações políticas.",
      url: "/docs/transparencia/INRua-relatorio-2021-2022.pdf" // Seu arquivo
    },
    {
      title: "Relatório de Atividades 2019-2020",
      date: "Biênio 2019/20",
      description: "Implementação do Housing First, Seminário Nacional e ações na pandemia COVID-19.",
      url: "/docs/transparencia/INRua-relatorio-2019-2020.pdf" // Seu arquivo
    },
  ]

  // DADOS FINANCEIROS (Simulação baseada no Plano de Trabalho para o gráfico)
  // Nota: Isso é uma projeção baseada no orçamento do Plano de Trabalho que você enviou.
  // Quando tiver o Balanço real, substitua os valores.
  const expenseData = [
    { category: "RH e Pessoal", value: 850000, fill: "#003d82" }, // Estimativa baseada na equipe do plano
    { category: "Estrutura/Aluguel", value: 150000, fill: "#FF8C42" },
    { category: "Atividades/Insumos", value: 350000, fill: "#00C49F" },
  ]

  const revenueData = [
    { name: "Parcerias Públicas", value: 90, color: "#003d82" },
    { name: "Doações", value: 10, color: "#FF8C42" },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="container-max pt-12">
        <HeroBanner
          title="Transparência Pública - Lei 13.019/2014"
          description="Acesso completo a informações sobre parcerias, relatórios de atividades e prestação de contas da organização."
        />
      </section>

      <section className="container-max pt-8">
        <Alert className="border-blue-200 bg-blue-50 text-blue-800">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="ml-2">
            <strong>Compromisso Público:</strong> Abaixo você encontra os documentos oficiais de nossas parcerias, incluindo o Plano de Trabalho do <strong>Cidadania PopRua</strong> e nossos Relatórios de Atividades anuais.
          </AlertDescription>
        </Alert>
      </section>

      <section className="container-max section-padding">
        <Tabs defaultValue="partnerships" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="partnerships">Parcerias e Projetos</TabsTrigger>
            <TabsTrigger value="reports">Relatórios de Atividades</TabsTrigger>
            <TabsTrigger value="financial">Prestação de Contas</TabsTrigger>
          </TabsList>

          {/* ABA 1: PARCERIAS E PROJETOS */}
          <TabsContent value="partnerships" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Lista Lateral */}
              <div className="lg:col-span-1 space-y-4">
                <h3 className="font-bold text-lg text-foreground mb-4 px-2">Contratos Vigentes</h3>
                {partnerships.map((partnership, idx) => (
                  <button
                    key={partnership.id}
                    onClick={() => setSelectedPartnership(idx)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      selectedPartnership === idx
                        ? "border-primary bg-primary/5 shadow-sm"
                        : "border-border hover:border-primary/50 bg-card"
                    }`}
                  >
                    <p className="font-bold text-foreground text-sm">{partnership.subject}</p>
                    <p className="text-xs text-muted-foreground mt-1">{partnership.grantingAgency}</p>
                    <Badge className={`mt-2 ${partnership.status === "Em Execução" ? "bg-green-600" : "bg-blue-600"}`}>
                      {partnership.status}
                    </Badge>
                  </button>
                ))}
              </div>

              {/* Detalhes */}
              <div className="lg:col-span-2">
                {partnerships[selectedPartnership] && (
                  <Card className="p-6 h-full">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {partnerships[selectedPartnership].subject}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      {partnerships[selectedPartnership].description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 bg-muted/30 p-4 rounded-lg text-sm">
                      <div>
                        <p className="font-semibold text-foreground">Órgão Concedente</p>
                        <p className="text-muted-foreground">{partnerships[selectedPartnership].grantingAgency}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Instrumento</p>
                        <p className="text-muted-foreground">{partnerships[selectedPartnership].agreementNumber}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Valor Global</p>
                        <p className="text-primary font-bold">{partnerships[selectedPartnership].totalValue}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Vigência</p>
                        <p className="text-muted-foreground">
                          {partnerships[selectedPartnership].startDate} a {partnerships[selectedPartnership].endDate}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                        <FileText size={18} className="text-primary" />
                        Documentação do Projeto
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {partnerships[selectedPartnership].documents.map((doc, idx) => (
                          <DocumentCard 
                            key={idx} 
                            title={doc.title} 
                            fileUrl={doc.url} 
                            fileName={`doc-${idx}.pdf`} 
                          />
                        ))}
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          {/* ABA 2: RELATÓRIOS DE ATIVIDADES (SEUS PDFs) */}
          <TabsContent value="reports" className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">Relatórios de Gestão e Impacto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activityReports.map((report, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="text-primary" size={24} />
                    </div>
                    <Badge variant="outline">{report.date}</Badge>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{report.title}</h4>
                  <p className="text-sm text-muted-foreground mb-6 h-12">{report.description}</p>
                  <DocumentCard 
                    title="Baixar Relatório Completo" 
                    fileUrl={report.url} 
                    fileName={report.title + ".pdf"} 
                  />
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* ABA 3: FINANCEIRO (GRÁFICOS) */}
          <TabsContent value="financial" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <Card className="p-6">
                  <h4 className="font-bold text-foreground mb-4">Previsão de Execução Financeira (Plano de Trabalho)</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={expenseData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" hide />
                      <YAxis dataKey="category" type="category" width={100} />
                      <Tooltip formatter={(value) => `R$ ${value}`} />
                      <Legend />
                      <Bar dataKey="value" fill="#003d82" name="Valor Previsto (R$)" radius={[0, 4, 4, 0]}>
                        {expenseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
               </Card>
               <Card className="p-6">
                  <h4 className="font-bold text-foreground mb-4">Fontes de Recurso</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={revenueData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {revenueData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
               </Card>
            </div>
             <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                   Os dados acima referem-se à previsão orçamentária do Plano de Trabalho. Para detalhes contábeis auditados, consulte os Balanços Patrimoniais disponíveis sob demanda ou na aba "Documentos".
                </AlertDescription>
             </Alert>
          </TabsContent>
        </Tabs>
      </section>

      <Footer />
    </main>
  )
}