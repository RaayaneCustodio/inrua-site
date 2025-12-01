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
import { AlertCircle, Eye, BarChart3, Briefcase, FileText, TrendingUp } from "lucide-react"
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

  // Dados de Parcerias
  const partnerships = [
    {
      id: 1,
      grantingAgency: "Prefeitura Municipal de São Paulo",
      agreementNumber: "TC 2024/001",
      subject: "Programa de Capacitação para Emprego - 2024",
      totalValue: "R$ 250.000,00",
      startDate: "01/01/2024",
      endDate: "31/12/2024",
      status: "Em Execução",
      documents: [
        { title: "Termo de Colaboração Assinado", url: "#" },
        { title: "Plano de Trabalho", url: "#" },
        { title: "Prestação de Contas Parcial (Agosto 2024)", url: "#" },
        { title: "Relatório de Execução Física e Financeira", url: "#" },
      ],
    },
    {
      id: 2,
      grantingAgency: "Secretaria de Estado de Desenvolvimento Social",
      agreementNumber: "SEADS 2023/045",
      subject: "Programa de Educação para Crianças em Situação de Risco Social",
      totalValue: "R$ 180.000,00",
      startDate: "15/03/2023",
      endDate: "14/03/2025",
      status: "Em Execução",
      documents: [
        { title: "Termo de Colaboração Assinado", url: "#" },
        { title: "Plano de Trabalho Revisado", url: "#" },
        { title: "Prestação de Contas Intermediária", url: "#" },
        { title: "Relatório Anual de Execução 2023-2024", url: "#" },
      ],
    },
    {
      id: 3,
      grantingAgency: "Ministério da Cidadania",
      agreementNumber: "MCID 2022/089",
      subject: "Projeto Sustentabilidade e Geração de Renda",
      totalValue: "R$ 320.000,00",
      startDate: "10/08/2022",
      endDate: "09/08/2024",
      status: "Finalizado",
      documents: [
        { title: "Termo de Colaboração Assinado", url: "#" },
        { title: "Plano de Trabalho", url: "#" },
        { title: "Prestação de Contas Final", url: "#" },
        { title: "Relatório Final de Execução", url: "#" },
      ],
    },
  ]

  // Dados Financeiros
  const revenueData = [
    { period: "Jan-Mar", partnership: "Prefeitura", state: "Estado", private: "Doações", donations: "Outras" },
  ]

  const expenseData = [
    { month: "Jan", pessoal: 45, atividades: 35, administrativo: 12, outros: 8 },
    { month: "Fev", pessoal: 45, atividades: 38, administrativo: 12, outros: 5 },
    { month: "Mar", pessoal: 45, atividades: 40, administrativo: 12, outros: 3 },
    { month: "Apr", pessoal: 45, atividades: 42, administrativo: 11, outros: 2 },
    { month: "May", pessoal: 45, atividades: 44, administrativo: 8, outros: 3 },
    { month: "Jun", pessoal: 45, atividades: 43, administrativo: 9, outros: 3 },
  ]

  const revenueBreakdown = [
    { name: "Parcerias Públicas", value: 65, color: "#003d82" },
    { name: "Doações Privadas", value: 20, color: "#FF8C42" },
    { name: "Rendas Próprias", value: 10, color: "#6B5B95" },
    { name: "Outras Fontes", value: 5, color: "#88B0D3" },
  ]

  // Documentos Obrigatórios
  const mandatoryDocs = [
    {
      category: "Financeiro",
      docs: [
        { title: "Balanço Patrimonial 2024", date: "Dezembro 2024", url: "#" },
        { title: "Demonstrativo de Resultado do Exercício 2024", date: "Dezembro 2024", url: "#" },
        { title: "Relatório Anual de Atividades 2024", date: "Janeiro 2025", url: "#" },
        { title: "Balancete Contábil 2024", date: "Dezembro 2024", url: "#" },
      ],
    },
    {
      category: "Estatutário",
      docs: [
        { title: "Estatuto Social", date: "Fevereiro 2024", url: "#" },
        { title: "Atas de Assembleia - 2024", date: "Dezembro 2024", url: "#" },
        { title: "Atas do Conselho Administrativo - 2024", date: "Dezembro 2024", url: "#" },
        { title: "Regimento Interno", date: "Novembro 2023", url: "#" },
      ],
    },
    {
      category: "Fiscal",
      docs: [
        { title: "CND - Certidão Negativa de Débitos Federal", date: "Novembro 2024", url: "#" },
        { title: "CND - Certidão Estadual de Débitos", date: "Novembro 2024", url: "#" },
        { title: "FGTS - Comprovação de Contribuições", date: "Novembro 2024", url: "#" },
        { title: "INSS - Comprovação de Contribuições", date: "Novembro 2024", url: "#" },
      ],
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Banner */}
      <section className="container-max pt-12">
        <HeroBanner
          title="Transparência Pública - Lei 13.019/2014"
          description="Acesso completo a informações sobre parcerias, relatórios financeiros e prestação de contas da organização. Conformidade integral com as exigências da Lei MROSC."
        />
      </section>

      {/* Alert de Conformidade */}
      <section className="container-max pt-12">
        <Alert className="border-primary/30 bg-blue-50 border-l-4 border-l-primary">
          <AlertCircle className="h-4 w-4 text-primary" />
          <AlertDescription className="text-foreground ml-2">
            Esta organização está em total conformidade com a Lei 13.019/2014 (MROSC). Todos os documentos obrigatórios
            e informações de parcerias são disponibilizados publicamente nesta seção. Última atualização: 29 de Novembro
            de 2024.
          </AlertDescription>
        </Alert>
      </section>

      {/* Abas Principais */}
      <section className="container-max section-padding">
        <Tabs defaultValue="partnerships" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="partnerships">Parcerias Públicas</TabsTrigger>
            <TabsTrigger value="documents">Documentos</TabsTrigger>
            <TabsTrigger value="financial">Dados Financeiros</TabsTrigger>
            <TabsTrigger value="purchases">Compras Públicas</TabsTrigger>
          </TabsList>

          {/* TAB 1: PARCERIAS PÚBLICAS */}
          <TabsContent value="partnerships" className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Parcerias com Poder Público</h3>
              <p className="text-muted-foreground mb-6">
                Todas as parcerias formalizadas com órgãos públicos (termos de colaboração e convênios) estão listadas
                abaixo com documentação completa conforme exigido pela Lei 13.019/2014, artigo 11.
              </p>
            </div>

            {/* Seletor de Parcerias */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {partnerships.map((partnership, idx) => (
                <button
                  key={partnership.id}
                  onClick={() => setSelectedPartnership(idx)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    selectedPartnership === idx
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <p className="font-bold text-foreground mb-1 text-sm line-clamp-2">{partnership.grantingAgency}</p>
                  <p className="text-xs text-muted-foreground">Acordo: {partnership.agreementNumber}</p>
                  <Badge className={`mt-2 ${partnership.status === "Em Execução" ? "bg-green-600" : "bg-gray-600"}`}>
                    {partnership.status}
                  </Badge>
                </button>
              ))}
            </div>

            {/* Detalhes da Parceria Selecionada */}
            {partnerships[selectedPartnership] && (
              <Card className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4">Informações da Parceria</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-muted-foreground font-semibold">Órgão Concedente</p>
                        <p className="text-lg text-foreground">{partnerships[selectedPartnership].grantingAgency}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-semibold">Número do Acordo</p>
                        <p className="text-lg text-foreground font-mono">
                          {partnerships[selectedPartnership].agreementNumber}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-semibold">Objeto</p>
                        <p className="text-lg text-foreground">{partnerships[selectedPartnership].subject}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-semibold">Valor Total</p>
                        <p className="text-lg text-primary font-bold">{partnerships[selectedPartnership].totalValue}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-semibold">Período</p>
                        <p className="text-lg text-foreground">
                          {partnerships[selectedPartnership].startDate} a {partnerships[selectedPartnership].endDate}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-semibold">Situação</p>
                        <Badge
                          className={
                            partnerships[selectedPartnership].status === "Em Execução" ? "bg-green-600" : "bg-gray-600"
                          }
                        >
                          {partnerships[selectedPartnership].status}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h5 className="font-bold text-foreground mb-4">Documentação Obrigatória</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {partnerships[selectedPartnership].documents.map((doc, idx) => (
                        <DocumentCard
                          key={idx}
                          title={doc.title}
                          fileUrl={doc.url}
                          fileName={`${partnerships[selectedPartnership].agreementNumber}-${idx}.pdf`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </TabsContent>

          {/* TAB 2: DOCUMENTOS OBRIGATÓRIOS */}
          <TabsContent value="documents" className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Documentos Obrigatórios MROSC</h3>
              <p className="text-muted-foreground mb-6">
                Todos os documentos exigidos pela Lei 13.019/2014 estão disponíveis para download. Organizamos por
                categoria para facilitar o acesso.
              </p>
            </div>

            {mandatoryDocs.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="text-primary" size={24} />
                  {section.category}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {section.docs.map((doc, docIdx) => (
                    <DocumentCard
                      key={docIdx}
                      title={doc.title}
                      fileUrl={doc.url}
                      fileName={doc.title.toLowerCase().replace(/\s+/g, "-") + ".pdf"}
                      date={doc.date}
                    />
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          {/* TAB 3: DADOS FINANCEIROS */}
          <TabsContent value="financial" className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Execução Financeira 2024</h3>
              <p className="text-muted-foreground mb-6">
                Transparência completa sobre receitas, despesas e alocação de recursos. Todos os dados são auditáveis e
                disponibilizados em conformidade com exigências legais.
              </p>
            </div>

            {/* Resumo Financeiro */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="p-6 border-l-4 border-l-primary">
                <p className="text-sm text-muted-foreground font-semibold mb-2">Receita Total 2024</p>
                <p className="text-3xl font-bold text-primary">R$ 750.000</p>
                <p className="text-xs text-muted-foreground mt-2">jan - out 2024</p>
              </Card>
              <Card className="p-6 border-l-4 border-l-green-600">
                <p className="text-sm text-muted-foreground font-semibold mb-2">Despesas Totais</p>
                <p className="text-3xl font-bold text-green-600">R$ 710.000</p>
                <p className="text-xs text-muted-foreground mt-2">Utilização: 94.7%</p>
              </Card>
              <Card className="p-6 border-l-4 border-l-accent">
                <p className="text-sm text-muted-foreground font-semibold mb-2">Atividades (% Orç.)</p>
                <p className="text-3xl font-bold text-accent">73%</p>
                <p className="text-xs text-muted-foreground mt-2">Uso direto em programas</p>
              </Card>
              <Card className="p-6 border-l-4 border-l-muted-foreground">
                <p className="text-sm text-muted-foreground font-semibold mb-2">Administrativo</p>
                <p className="text-3xl font-bold text-muted-foreground">11%</p>
                <p className="text-xs text-muted-foreground mt-2">Custos operacionais</p>
              </Card>
            </div>

            {/* Gráficos */}
            <Card className="p-6">
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <BarChart3 size={20} className="text-primary" />
                Despesas por Categoria
              </h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={expenseData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pessoal" stackId="a" fill="#003d82" name="Pessoal" />
                  <Bar dataKey="atividades" stackId="a" fill="#FF8C42" name="Atividades" />
                  <Bar dataKey="administrativo" stackId="a" fill="#6B5B95" name="Administrativo" />
                  <Bar dataKey="outros" stackId="a" fill="#88B0D3" name="Outros" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-primary" />
                Composição de Receitas 2024
              </h4>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={revenueBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {revenueBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </Card>

            {/* Documentos Financeiros */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">Documentos Financeiros Detalhados</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DocumentCard title="Balanço Patrimonial 2024" fileUrl="#" fileName="balanco-patrimonial-2024.pdf" />
                <DocumentCard title="DRE - Demonstrativo de Resultado" fileUrl="#" fileName="dre-2024.pdf" />
                <DocumentCard title="Nota Fiscal Agregada" fileUrl="#" fileName="notas-fiscais-2024.pdf" />
                <DocumentCard
                  title="Planilha de Acompanhamento Financeiro"
                  fileUrl="#"
                  fileName="acompanhamento-financeiro.xlsx"
                />
              </div>
            </div>
          </TabsContent>

          {/* TAB 4: PROCESSOS DE COMPRA */}
          <TabsContent value="purchases" className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Seleção de Fornecedores e Compras Públicas</h3>
              <p className="text-muted-foreground mb-6">
                Para recursos provenientes de parcerias públicas, aplicamos rigorosos critérios de seleção de
                fornecedores e transparência em processos de compra.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-l-primary">
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Briefcase size={20} className="text-primary" />
                  Processo 2024/01
                </h4>
                <div className="space-y-2 text-sm mb-4">
                  <p>
                    <span className="font-semibold text-foreground">Tipo:</span> Cotação para Equipamentos
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Data:</span> Abril 2024
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Valor:</span> R$ 85.000,00
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Status:</span>{" "}
                    <Badge className="bg-green-600">Concluído</Badge>
                  </p>
                </div>
                <div className="space-y-2">
                  <DocumentCard title="Edital de Cotação" fileUrl="#" fileName="edital-2024-01.pdf" />
                  <DocumentCard title="Resultado da Seleção" fileUrl="#" fileName="resultado-2024-01.pdf" />
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary">
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Briefcase size={20} className="text-primary" />
                  Processo 2024/02
                </h4>
                <div className="space-y-2 text-sm mb-4">
                  <p>
                    <span className="font-semibold text-foreground">Tipo:</span> Contratação de Serviços
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Data:</span> Julho 2024
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Valor:</span> R$ 120.000,00
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Status:</span>{" "}
                    <Badge className="bg-green-600">Concluído</Badge>
                  </p>
                </div>
                <div className="space-y-2">
                  <DocumentCard title="Aviso de Abertura" fileUrl="#" fileName="aviso-2024-02.pdf" />
                  <DocumentCard title="Critérios de Seleção" fileUrl="#" fileName="criterios-2024-02.pdf" />
                </div>
              </Card>
            </div>

            <Alert className="border-primary/30 bg-blue-50">
              <Eye className="h-4 w-4 text-primary" />
              <AlertDescription className="text-foreground ml-2">
                <strong>Compromisso com Transparência:</strong> Todos os processos de seleção de fornecedores seguem
                critérios objetivos, publicados previamente, e estão sujeitos a auditoria interna e externa.
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>
      </section>

      {/* Seção Final - Info Adicional */}
      <section className="container-max section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Acesso e Dúvidas</h3>
          <p className="text-muted-foreground mb-6">
            Esta página fornece acesso às informações exigidas pela Lei 13.019/2014 (MROSC). Para dúvidas, solicitar
            informações adicionais ou reportar irregularidades, entre em contato através de nossos canais de
            comunicação.
          </p>
          <p className="text-sm text-muted-foreground">
            Email: transparencia@inrua.org.br | Telefone: (XX) XXXX-XXXX | Última atualização: 29 de Novembro de 2024
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
