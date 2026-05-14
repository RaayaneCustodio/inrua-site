"use client"

import type React from "react"
import { useState } from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Facebook,
  Linkedin,
  Instagram,
  Loader2,
  AlertCircle,
  MousePointerClick,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function ContatoPage() {
  const FORMSPREE_ID = "xbdrwqbp"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
      color: "#5E5BA6",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 41 98451-0999\nLeonildo • Institucional",
      color: "#4D88C5",
    },
    {
      icon: Mail,
      title: "Email Direto",
      content: "inruabrasil@gmail.com",
      color: "#78B84D",
    },
  ]

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/inruabrasil" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/inrua/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/inruabrasil/" },
  ]

  return (
    <main className="min-h-screen bg-white text-[#111827] overflow-hidden">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/movimento2.png"
            alt="Contato INRUA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5E5BA6]/15 via-[#4D88C5]/10 to-[#78B84D]/10" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-28">
          <div className="max-w-5xl">
            <span className="bg-[#F2D04B] text-black px-5 py-2 rounded-full font-black text-sm shadow-md">
              CONTATO • PARCERIAS • VOLUNTARIADO
            </span>
            <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight text-[#111827]">
              Fale com o INRUA
            </h1>
            <p className="text-xl text-[#374151] leading-relaxed mt-8 max-w-3xl">
              Estamos disponíveis para parcerias, imprensa, voluntariado e dúvidas sobre nossos projetos sociais e ações de direitos humanos.
            </p>
          </div>
        </div>
      </section>

      {/* CANAIS */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex items-center gap-2 text-[#6B7280] justify-center mb-12">
          <MousePointerClick size={14} className="animate-pulse" />
          <p className="text-[10px] uppercase tracking-widest font-bold">Canais de comunicação</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactChannels.map((channel, idx) => {
            const Icon = channel.icon
            return (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[32px] p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div
                  className="w-fit p-4 rounded-2xl mb-6 shadow-inner"
                  style={{ backgroundColor: `${channel.color}15` }}
                >
                  <Icon size={30} style={{ color: channel.color }} />
                </div>
                <h3 className="text-2xl font-black mb-4 text-[#111827]">{channel.title}</h3>
                <p className="text-[#4B5563] whitespace-pre-line leading-relaxed font-medium">
                  {channel.content}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="container mx-auto px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          {status === "success" && (
            <div className="mb-8 bg-[#78B84D]/10 border border-[#78B84D]/30 rounded-[32px] p-6 flex items-start gap-4 animate-in fade-in slide-in-from-top-4">
              <CheckCircle className="text-[#78B84D] mt-1" size={24} />
              <div>
                <h3 className="font-black text-xl text-[#111827]">Mensagem enviada!</h3>
                <p className="text-[#4B5563] mt-2">Obrigado pelo contato. Responderemos em breve.</p>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="mb-8 bg-red-50/50 border border-red-200 rounded-[32px] p-6 flex items-start gap-4">
              <AlertCircle className="text-red-500 mt-1" size={24} />
              <div>
                <h3 className="font-black text-xl text-[#111827]">Erro no envio</h3>
                <p className="text-[#4B5563] mt-2">Tente novamente ou envie para <strong>inruabrasil@gmail.com</strong></p>
              </div>
            </div>
          )}

          <div className="bg-white border border-[#E5E7EB] rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="mb-12 text-center">
              <Badge className="bg-[#5E5BA6]/10 text-[#5E5BA6] border border-[#5E5BA6]/20 px-5 py-2 rounded-full font-bold">
                Atendimento Institucional
              </Badge>
              <h2 className="text-4xl font-black mt-6 text-[#111827]">Envie uma mensagem</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#374151] ml-1">Nome Completo *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Seu nome"
                    className="h-14 rounded-2xl bg-[#F8FAFC] border-[#E5E7EB] focus-visible:ring-[#5E5BA6]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#374151] ml-1">E-mail *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="seu@email.com"
                    className="h-14 rounded-2xl bg-[#F8FAFC] border-[#E5E7EB] focus-visible:ring-[#4D88C5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#374151] ml-1">Telefone</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(00) 00000-0000"
                    className="h-14 rounded-2xl bg-[#F8FAFC] border-[#E5E7EB] focus-visible:ring-[#78B84D]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#374151] ml-1">Assunto *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full h-14 px-4 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827] outline-none focus:ring-2 focus:ring-[#5E5BA6] transition-all"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="voluntariado">Quero ser voluntário</option>
                    <option value="doacao">Informações sobre doação</option>
                    <option value="parceria">Proposta de parceria</option>
                    <option value="outro">Outros assuntos</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#374151] ml-1">Sua mensagem *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Como podemos ajudar?"
                  className="w-full px-5 py-4 rounded-3xl bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827] focus:ring-2 focus:ring-[#4D88C5] outline-none transition-all resize-none"
                />
              </div>

              <div className="bg-[#F3F4F6] rounded-2xl p-4 flex items-center gap-3">
                <AlertCircle size={18} className="text-[#4D88C5]" />
                <p className="text-xs text-[#6B7280]">
                  Seus dados serão usados apenas para retorno institucional (LGPD).
                </p>
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full h-16 rounded-2xl bg-[#111827] hover:bg-[#1f2937] text-white font-black text-lg transition-all shadow-xl"
              >
                {status === "loading" ? (
                  <Loader2 className="animate-spin mr-2" />
                ) : (
                  <><Send size={20} className="mr-2" /> Enviar Mensagem</>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* REDES */}
      <section className="container mx-auto px-6 pb-24 text-center">
        <h3 className="text-2xl font-black mb-8 text-[#111827]">Siga o INRUA nas redes sociais</h3>
        <div className="flex justify-center gap-6">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-2xl bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center text-[#111827] hover:bg-[#5E5BA6] hover:text-white hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <Icon size={28} />
              </a>
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  )
}