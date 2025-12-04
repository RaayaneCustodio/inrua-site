"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Send, CheckCircle, Facebook, Linkedin, Twitter, Instagram } from "lucide-react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulação de envio para feedback visual
    // Para funcionar realmente sem backend, a melhor opção gratuita é usar Formspree.io
    // Ou enviar via WhatsApp como feito abaixo
    
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      
      // Opcional: Abrir WhatsApp com a mensagem (Descomente se quiser usar)
      // const text = `Olá, meu nome é ${formData.name}. Assunto: ${formData.subject}. Mensagem: ${formData.message}`;
      // const encodedText = encodeURIComponent(text);
      // window.open(`https://wa.me/554130146708?text=${encodedText}`, '_blank');

      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  const contactChannels = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Voluntários da Pátria, 233, Conj 52\nCentro, Curitiba - PR\nCEP: 80.020-000",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "Telefone: (41) 3014-6708\n(Atendimento em horário comercial)",
    },
    {
      icon: Mail,
      title: "Email",
      content: "inruabrasil@gmail.com\ncontato@inrua.org.br",
    },
  ]

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/inruabrasil/" }, // Exemplo
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Banner */}
      <section className="container-max pt-12">
        <HeroBanner
          title="Entre em Contato"
          description="Tire dúvidas sobre nossos programas, parcerias, ou saiba como fazer parte da defesa de direitos da população em situação de rua"
        />
      </section>

      {/* Canais de Contato */}
      <section className="container-max section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Nossos Canais de Comunicação
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactChannels.map((channel, idx) => {
            const Icon = channel.icon
            return (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/10">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{channel.title}</h3>
                <p className="text-muted-foreground whitespace-pre-line text-sm leading-relaxed">{channel.content}</p>
              </Card>
            )
          })}
        </div>

        {/* Horário de Atendimento */}
        <Card className="p-8 bg-secondary/30 border-l-4 border-l-primary mb-12">
          <h3 className="text-xl font-bold text-foreground mb-4">Horário de Atendimento</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground mb-2">
                <span className="font-semibold text-foreground">Segunda a Sexta:</span> 9h às 18h
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Fim de semana:</span> Fechado (exceto ações programadas)
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>Resposta em até 48 horas</strong> (dias úteis) para emails de contato.
              </p>
              <p>
                Para questões urgentes ou denúncias, recomendamos contactar os órgãos públicos competentes (156 em Curitiba).
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Formulário de Contato */}
      <section className="container-max section-padding">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Fale Conosco</h2>
          <p className="text-muted-foreground text-center mb-8">
            Preencha o formulário abaixo para dúvidas, sugestões ou interesse em voluntariado.
          </p>

          {submitted && (
            <Card className="p-4 mb-8 border-green-500 bg-green-50 flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-semibold text-green-900">Mensagem enviada com sucesso!</p>
                <p className="text-sm text-green-800">Obrigado por entrar em contato. Responderemos em breve.</p>
              </div>
            </Card>
          )}

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    required
                    className="border-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                    className="border-border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(XX) XXXXX-XXXX"
                    className="border-border"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-border rounded-md text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="programas">Informações sobre programas</option>
                    <option value="parcerias">Interesse em parcerias</option>
                    <option value="voluntariado">Voluntariado</option>
                    <option value="doacao">Doação</option>
                    <option value="transparencia">Informações de transparência</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Digite sua mensagem aqui..."
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-border rounded-md text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <div className="bg-muted/50 p-4 rounded-md text-xs text-muted-foreground">
                <p className="mb-2">
                  <strong>Proteção de dados:</strong> Seus dados são protegidos conforme a Lei Geral de Proteção de
                  Dados (LGPD). Não compartilharemos suas informações com terceiros sem consentimento.
                </p>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-11"
              >
                {loading ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="container-max section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Siga Nossas Redes Sociais</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Acompanhe nossas ações, notícias e atualizações nas principais redes sociais.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon
            return (
              <a
                key={idx}
                href={social.href}
                className="p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all"
                title={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="text-muted-foreground hover:text-primary transition-colors" size={28} />
              </a>
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  )
}