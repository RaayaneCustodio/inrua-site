import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { Card } from "@/components/ui/card"

export default function TermoUsoPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="container-max pt-12">
        <HeroBanner title="Termo de Uso" description="Condições para acesso e utilização do site da organização" />
      </section>

      <section className="container-max section-padding">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground">
                Ao acessar este site, você concorda com os termos e condições aqui estabelecidos. Se não concorda,
                pedimos que não utilize este site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Uso Permitido</h2>
              <p className="text-muted-foreground mb-3">Este site é destinado a:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Fornecer informações sobre a organização, projetos e programas</li>
                <li>Permitir contato com a OSC</li>
                <li>Compartilhar documentos e relatórios de transparência</li>
                <li>Fins educacionais e informativos</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso Proibido</h2>
              <p className="text-muted-foreground mb-3">É proibido usar este site para:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Atividades ilegais ou enganosas</li>
                <li>Transmissão de vírus ou código malicioso</li>
                <li>Acesso não autorizado a sistemas</li>
                <li>Coleta massiva de dados sem permissão</li>
                <li>Assédio ou conteúdo discriminatório</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Propriedade Intelectual</h2>
              <p className="text-muted-foreground">
                Todo conteúdo deste site (textos, imagens, documentos) é propriedade da organização ou de seus
                fornecedores. Você pode usar para fins pessoais e não comerciais, respeitando os direitos autorais.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Isenção de Responsabilidade</h2>
              <p className="text-muted-foreground">
                A organização não é responsável por danos indiretos, incidentais ou consequentes resultantes do uso
                deste site. O site é fornecido "como está".
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Links Externos</h2>
              <p className="text-muted-foreground">
                Este site pode conter links para sites externos. Não somos responsáveis pelo conteúdo, precisão ou
                segurança de sites terceiros.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Modificações</h2>
              <p className="text-muted-foreground">
                Reservamos o direito de modificar este site e seus termos a qualquer momento. Mudanças serão comunicadas
                através deste site.
              </p>
            </div>

            <p className="text-xs text-muted-foreground border-t border-border pt-4">
              Última atualização: Novembro de 2024
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
