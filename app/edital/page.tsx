"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { DocumentCard } from "@/components/document-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FileText, Info, MousePointerClick } from "lucide-react"

export default function EditalPage() {
  const editais = [
    {
      id: "ampliacao-coordenacao",
      titulo: "CEDDH/PR - Ampliação - Coordenação",
      subtitulo: "Contratação de Pessoa Jurídica",
      termo: "990353/2025 (5334354)",
      objetivo: "Promover a ampliação das atividades do Centro Estadual de Defesa dos Direitos Humanos da População em Situação de Rua no Paraná.",
      vagas: [
        {
          cargo: "Coordenador/a Geral, Técnico e Gestão Financeira",
          nivel: "Nível Superior/Médio",
          atribuicoes: ["Coordenação de projetos", "Supervisão técnica", "Gestão administrativa"]
        }
      ],
      inscricao: { prazo: "20/03/2026", email: "inruabrasil@gmail.com", assunto: "Edital Seleção – Pessoa Jurídica – Coordenador" },
      cronograma: { inscricao: "Até 20/03/2026", entrevistas: "22/03/2026", resultado: "25/03/2026" },
      pdfUrl: "/docs/edital/edital-ampliacao-coordenacao.pdf"
    },
    {
      id: "ampliacao-equipe",
      titulo: "CEDDH/PR - Ampliação - Equipe",
      subtitulo: "Contratação de Pessoa Jurídica",
      termo: "990353/2025 (5334354)",
      objetivo: "Contratação de Advogado, Psicólogo, Assistente Social, Técnico-Administrativo e Mobilizador Social.",
      vagas: [
        {
          cargo: "Equipe Multidisciplinar",
          nivel: "Nível Superior/Médio",
          atribuicoes: ["Atendimento direto", "Defesa de direitos", "Mobilização social"]
        }
      ],
      inscricao: { prazo: "20/03/2026", email: "inruabrasil@gmail.com", assunto: "Edital Seleção – Pessoa Jurídica – Equipe" },
      cronograma: { inscricao: "Até 20/03/2026", entrevistas: "22/03/2026", resultado: "25/03/2026" },
      pdfUrl: "/docs/edital/edital-ampliacao-equipe.pdf"
    },
    {
      id: "sede-coordenacao",
      titulo: "CEDDH/PR - Sede - Coordenação",
      subtitulo: "Contratação de Pessoa Jurídica",
      termo: "990651/2025 (5334348)",
      objetivo: "Fortalecimento institucional do CEDDH-PR por meio da instalação e funcionamento de sede física.",
      vagas: [
        {
          cargo: "Coordenador Geral e Técnico",
          nivel: "Nível Superior/Médio",
          atribuicoes: ["Gestão da sede", "Articulação institucional"]
        }
      ],
      inscricao: { prazo: "20/03/2026", email: "inruabrasil@gmail.com", assunto: "Edital Seleção – Sede – Coordenador" },
      cronograma: { inscricao: "Até 20/03/2026", entrevistas: "22/03/2026", resultado: "25/03/2026" },
      pdfUrl: "/docs/edital/edital-sede-coordenacao.pdf"
    },
    {
      id: "sede-equipe",
      titulo: "CEDDH/PR - Sede - Equipe",
      subtitulo: "Contratação de Pessoa Jurídica",
      termo: "990651/2025 (5334348)",
      objetivo: "Composição de equipe para o funcionamento da sede física do CEDDH/PR.",
      vagas: [
        {
          cargo: "Acolhimento e Administrativo",
          nivel: "Nível Médio",
          atribuicoes: ["Recepção presencial", "Suporte administrativo"]
        }
      ],
      inscricao: { prazo: "20/03/2026", email: "inruabrasil@gmail.com", assunto: "Edital Seleção – Sede – Equipe" },
      cronograma: { inscricao: "Até 20/03/2026", entrevistas: "22/03/2026", resultado: "25/03/2026" },
      pdfUrl: "/docs/edital/edital-sede-equipe.pdf"
    }
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="container-max pt-12 px-4">
        <HeroBanner
          title="Edital de Seleção e Contratação"
          subtitle="Oportunidades para profissionais comprometidos com os direitos humanos da população em situação de rua"
        />
      </section>

      <section className="container-max pt-8 px-4">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            CEDDH/POPRUA - Centro Estadual de Defesa de Direitos Humanos
          </h2>
          <p className="text-muted-foreground text-sm">
            O INRUA está selecionando profissionais com experiência comprovada para viabilização dos Planos de trabalho do CEDDH/PR.
          </p>
        </div>

        <Alert className="border-amber-200 bg-amber-50 text-amber-900 max-w-4xl mx-auto mb-10">
          <Info className="h-4 w-4" />
          <AlertDescription className="ml-2">
            <strong>Processo Seletivo Ativo:</strong> Os editais abaixo visam a contratação de profissionais para fortalecer a defesa dos direitos da população de rua, reafirmando nosso compromisso com a clareza e transparência em todas as etapas de seleção.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="ampliacao-coordenacao" className="w-full">
          {/* MENU DE SELEÇÃO DINÂMICO E VISUAL */}
          <div className="w-full space-y-3 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground md:justify-center">
              <MousePointerClick size={14} className="animate-pulse" />
              <p className="text-[10px] uppercase tracking-widest font-bold">
                Selecione um edital para ver os detalhes
              </p>
            </div>
            
            <div className="relative group">
              {/* Container com scroll lateral suave */}
              <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
                <TabsList className="flex inline-flex min-w-full md:grid md:grid-cols-4 h-auto bg-transparent gap-3 p-1">
                  {editais.map((edital) => (
                    <TabsTrigger 
                      key={edital.id} 
                      value={edital.id} 
                      className="
                        flex-shrink-0 
                        w-[240px] md:w-full 
                        min-h-[80px] 
                        whitespace-normal 
                        text-center 
                        text-xs 
                        font-bold 
                        border-2 
                        border-muted 
                        data-[state=active]:border-primary 
                        data-[state=active]:bg-primary/5 
                        data-[state=active]:text-primary 
                        data-[state=active]:shadow-md
                        hover:bg-muted/50 
                        transition-all 
                        rounded-xl 
                        p-3
                        shadow-sm
                      "
                    >
                      {edital.titulo}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {/* Degradê indicativo de scroll no mobile */}
              <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none md:hidden" />
            </div>
          </div>

          {editais.map((edital) => (
            <TabsContent key={edital.id} value={edital.id} className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                <div className="lg:col-span-2 space-y-6">
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-primary/5 border-b">
                      <CardTitle className="text-xl text-primary">{edital.titulo}</CardTitle>
                      <CardDescription>{edital.subtitulo}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                      <div className="bg-muted/30 p-4 rounded-lg text-sm">
                        <p className="font-semibold text-primary">Termo de Fomento</p>
                        <p>{edital.termo}</p>
                        <p className="font-semibold text-primary mt-3">Objetivo</p>
                        <p className="text-muted-foreground">{edital.objetivo}</p>
                      </div>
                      
                      <h3 className="font-bold flex items-center gap-2 mt-6">
                        <FileText size={18} className="text-primary" /> Vagas e Atribuições
                      </h3>
                      {edital.vagas.map((vaga, idx) => (
                        <div key={idx} className="border-l-2 border-primary/20 pl-4 py-2">
                          <p className="font-bold text-sm">{vaga.cargo}</p>
                          <Badge variant="secondary" className="my-1">{vaga.nivel}</Badge>
                          <ul className="text-xs text-muted-foreground space-y-1 mt-2">
                            {vaga.atribuicoes.map((attr, i) => (
                              <li key={i}>• {attr}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="p-6 border-primary/20 shadow-md">
                    <h3 className="font-bold mb-4 flex items-center gap-2 text-primary">
                      <FileText size={20} /> Edital Completo
                    </h3>
                    <DocumentCard 
                      title="Baixar Edital PDF" 
                      fileUrl={edital.pdfUrl} 
                      fileName={edital.titulo + ".pdf"} 
                    />
                  </Card>

                  <Card className="p-6">
                    <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Inscrição</h3>
                    <div className="space-y-4 text-sm">
                      <div className="p-3 bg-red-50 rounded-md border border-red-100">
                        <p className="text-xs text-red-800 font-semibold uppercase">Prazo Final</p>
                        <p className="text-red-600 font-bold text-lg">{edital.cronograma.inscricao}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-muted-foreground">Enviar para:</p>
                        <p className="text-primary font-medium break-all">{edital.inscricao.email}</p>
                      </div>
                      <div className="pt-4 border-t">
                        <p className="font-semibold text-muted-foreground">Resultado Previsto:</p>
                        <p className="font-bold text-green-600">{edital.cronograma.resultado}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <Footer />
    </main>
  )
}