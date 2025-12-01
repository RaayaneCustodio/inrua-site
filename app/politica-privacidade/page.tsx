import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { Card } from "@/components/ui/card"

export default function PoliticaPrivacidadePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="container-max pt-12">
        <HeroBanner
          title="Política de Privacidade"
          description="Saiba como protegemos e tratamos seus dados de acordo com a Lei Geral de Proteção de Dados (LGPD)"
        />
      </section>

      <section className="container-max section-padding">
        <div className="max-w-3xl mx-auto prose prose-sm">
          <Card className="p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Responsável pelo Tratamento</h2>
              <p className="text-muted-foreground">
                A [Nome da OSC] é responsável pelo tratamento de dados pessoais coletados através deste site, em
                conformidade com a Lei 13.709/2018 (Lei Geral de Proteção de Dados - LGPD).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Dados Coletados</h2>
              <p className="text-muted-foreground mb-3">Coletamos os seguintes dados pessoais:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Nome completo</li>
                <li>Email</li>
                <li>Telefone</li>
                <li>Endereço (quando necessário)</li>
                <li>Informações sobre interesse em programas ou voluntariado</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Finalidade do Tratamento</h2>
              <p className="text-muted-foreground mb-3">Seus dados são utilizados para:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Responder solicitações de contato</li>
                <li>Enviar informações sobre programas e projetos</li>
                <li>Processar inscrições em programas</li>
                <li>Comunicações administrativas</li>
                <li>Melhorar nossos serviços</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartilhamento de Dados</h2>
              <p className="text-muted-foreground">
                Seus dados não serão compartilhados com terceiros sem seu consentimento prévio, exceto quando exigido
                por lei ou para execução de parcerias públicas autorizadas.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Seus Direitos</h2>
              <p className="text-muted-foreground mb-3">Você tem direito de:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Acessar seus dados</li>
                <li>Corrigir informações imprecisas</li>
                <li>Solicitar a exclusão (quando não há obrigação legal de manter)</li>
                <li>Opor-se a tratamentos específicos</li>
                <li>Solicitar portabilidade dos dados</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Segurança de Dados</h2>
              <p className="text-muted-foreground">
                Implementamos medidas técnicas e administrativas adequadas para proteger seus dados contra acesso não
                autorizado, alteração ou destruição.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Contato e Dúvidas</h2>
              <p className="text-muted-foreground">
                Para exercer seus direitos ou tirar dúvidas sobre privacidade de dados, entre em contato:{" "}
                <strong>privacidade@osc.org.br</strong>
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
