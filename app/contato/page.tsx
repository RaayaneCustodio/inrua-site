"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Send, CheckCircle, Facebook, Linkedin, Instagram, Loader2, AlertCircle } from "lucide-react"

export default function ContatoPage() {
  // ID DO SEU FORMSPREE CONFIGURADO
  const FORMSPREE_ID = "xbdrwqbp" 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
        // Volta ao estado normal após 8 segundos
        setTimeout(() => setStatus("idle"), 8000)
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  const contactChannels = [
    {
      icon: MapPin,
      title: "Sede Curitiba",
      content: "Rua Voluntários da Pátria, 233, Conj 52\nCentro, Curitiba - PR\nCEP: 80.020-000",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(41) 3014-6708\nAtendimento: 09h às 18h",
    },
    {
      icon: Mail,
      title: "Email Direto",
      content: "inruabrasil@gmail.com",
    },
  ]

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/inruabrasil" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/inrua/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/inruabrasil/" },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="container-max pt-12 px-4">
        <HeroBanner
          title="Fale com o Instituto InRua"
          description="Estamos à disposição para parcerias, voluntariado e dúvidas sobre nossos projetos de direitos humanos."
        />
      </section>

      {/* Canais de Comunicação */}
      <section className="container-max section-padding px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactChannels.map((channel, idx) => {
            const Icon = channel.icon
            return (
              <Card key={idx} className="p-8 border-border hover:border-primary/50 transition-all">
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/10 text-primary">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{channel.title}</h3>
                <p className="text-muted-foreground whitespace-pre-line text-sm leading-relaxed">{channel.content}</p>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Formulário Real */}
      <section className="container-max section-padding px-4 bg-muted/30 rounded-3xl mb-12">
        <div className="max-w-3xl mx-auto py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Envie uma Mensagem</h2>
            <p className="text-muted-foreground">Preencha os campos abaixo e nossa equipe retornará o contato em breve.</p>
          </div>
          
          {status === "success" && (
            <Card className="p-6 mb-8 border-green-500 bg-green-50 flex items-start gap-4 animate-in fade-in slide-in-from-top-4">
              <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
              <div>
                <p className="font-bold text-green-900 text-lg">Mensagem enviada com sucesso!</p>
                <p className="text-green-800">Obrigado pelo contato. Verifique sua caixa de entrada nos próximos dias.</p>
              </div>
            </Card>
          )}

          {status === "error" && (
            <Card className="p-6 mb-8 border-red-500 bg-red-50 flex items-start gap-4">
              <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
              <div>
                <p className="font-bold text-red-900">Ocorreu um erro ao enviar.</p>
                <p className="text-red-800 text-sm">Não foi possível processar o envio agora. Por favor, tente enviar um e-mail direto para <strong>inruabrasil@gmail.com</strong>.</p>
              </div>
            </Card>
          )}

          <Card className="p-6 md:p-10 shadow-xl border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Nome Completo *</label>
                  <Input 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                    placeholder="Como podemos lhe chamar?" 
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">E-mail de Contato *</label>
                  <Input 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                    placeholder="seu@email.com" 
                    className="h-11"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Telefone / WhatsApp</label>
                  <Input 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    placeholder="(41) 99999-9999" 
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Assunto *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full h-11 px-3 py-2 border rounded-md bg-background border-input focus:ring-2 focus:ring-primary outline-none transition-all"
                  >
                    <option value="">Selecione um motivo...</option>
                    <option value="voluntariado">Quero ser Voluntário</option>
                    <option value="doacao">Como doar</option>
                    <option value="parceria">Proposta de Parceria</option>
                    <option value="imprensa">Imprensa / Comunicação</option>
                    <option value="outro">Outros Assuntos</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Sua Mensagem *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-3 py-3 border rounded-md bg-background border-input focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Escreva aqui detalhadamente como podemos ajudar..."
                />
              </div>

              <div className="bg-muted p-4 rounded-lg flex items-start gap-3">
                <AlertCircle size={18} className="text-muted-foreground mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Privacidade:</strong> Ao enviar este formulário, você concorda com o tratamento dos seus dados para fins de resposta institucional, seguindo os termos da LGPD.
                </p>
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full font-bold h-12 text-lg shadow-md"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    Enviando Mensagem...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Enviar agora
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Rodapé de Redes Sociais */}
      <section className="container-max section-padding text-center">
        <h3 className="text-2xl font-bold mb-8">Acompanhe nossas ações</h3>
        <div className="flex justify-center gap-4">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-border hover:bg-primary hover:text-white transition-all text-muted-foreground"
                title={social.label}
              >
                <Icon size={24} />
              </a>
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  )
}