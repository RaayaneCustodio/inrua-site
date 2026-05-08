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

import { Card } from "@/components/ui/card"
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

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setStatus("loading")

    try {
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )

      if (response.ok) {
        setStatus("success")

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })

        setTimeout(() => {
          setStatus("idle")
        }, 8000)
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
      content:
        "Rua Voluntários da Pátria, 233, Conj 52\nCentro, Curitiba - PR\nCEP: 80.020-000",
      color: "#5E5BA6",
    },

    {
      icon: Phone,
      title: "Telefone",
      content:
        "+55 41 98451-0999\nLeonildo • Atendimento institucional",
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
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/inruabrasil",
    },

    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/inrua/",
    },

    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/inruabrasil/",
    },
  ]

  return (
    <main className="min-h-screen bg-[#0F172A] text-white overflow-hidden">
      {/* FUNDO */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-[#5E5BA6]/30 rounded-full blur-3xl" />

        <div className="absolute top-[25%] right-[-100px] w-[500px] h-[500px] bg-[#4D88C5]/20 rounded-full blur-3xl" />

        <div className="absolute bottom-[-100px] left-[20%] w-[500px] h-[500px] bg-[#78B84D]/20 rounded-full blur-3xl" />
      </div>

      <Header />

      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/movimento2.png"
            alt="Contato INRUA"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#020617]/85" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#5E5BA6]/60 via-[#4D88C5]/40 to-[#78B84D]/40" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-28">
          <div className="max-w-5xl">
            <span className="bg-[#F2D04B] text-black px-5 py-2 rounded-full font-black text-sm">
              CONTATO • PARCERIAS • VOLUNTARIADO
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight">
              Fale com o Instituto INRUA
            </h1>

            <p className="text-xl text-white/80 leading-relaxed mt-8 max-w-3xl">
              Estamos disponíveis para atendimento institucional,
              parcerias, imprensa, voluntariado e dúvidas sobre
              nossos projetos sociais e ações de direitos humanos.
            </p>
          </div>
        </div>
      </section>

      {/* CANAIS */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex items-center gap-2 text-white/60 justify-center mb-10">
          <MousePointerClick
            size={14}
            className="animate-pulse"
          />

          <p className="text-[10px] uppercase tracking-widest font-bold">
            Canais de comunicação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactChannels.map((channel, idx) => {
            const Icon = channel.icon

            return (
              <div
                key={idx}
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-[32px]
                  p-8
                  backdrop-blur-2xl
                  hover:bg-white/10
                  transition-all
                "
              >
                <div
                  className="w-fit p-4 rounded-2xl mb-6"
                  style={{
                    backgroundColor: `${channel.color}20`,
                  }}
                >
                  <Icon
                    size={30}
                    style={{
                      color: channel.color,
                    }}
                  />
                </div>

                <h3 className="text-2xl font-black mb-4">
                  {channel.title}
                </h3>

                <p className="text-white/70 whitespace-pre-line leading-relaxed">
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

          {/* ALERTAS */}
          {status === "success" && (
            <div className="mb-8 bg-[#78B84D]/10 border border-[#78B84D]/30 rounded-[32px] p-6 flex items-start gap-4 animate-in fade-in slide-in-from-top-4">
              <CheckCircle
                className="text-[#78B84D] mt-1"
                size={24}
              />

              <div>
                <h3 className="font-black text-xl">
                  Mensagem enviada com sucesso!
                </h3>

                <p className="text-white/70 mt-2">
                  Obrigado pelo contato. Nossa equipe
                  responderá em breve.
                </p>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="mb-8 bg-red-500/10 border border-red-500/30 rounded-[32px] p-6 flex items-start gap-4">
              <AlertCircle
                className="text-red-400 mt-1"
                size={24}
              />

              <div>
                <h3 className="font-black text-xl">
                  Não foi possível enviar
                </h3>

                <p className="text-white/70 mt-2">
                  Ocorreu um erro ao processar sua mensagem.
                  Tente novamente ou envie diretamente para{" "}
                  <strong className="text-white">
                    inruabrasil@gmail.com
                  </strong>
                </p>
              </div>
            </div>
          )}

          {/* CARD */}
          <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-2xl">

            <div className="mb-10 text-center">
              <Badge className="bg-[#5E5BA6]/20 text-white border border-[#5E5BA6]/40 px-5 py-2 rounded-full">
                Atendimento Institucional
              </Badge>

              <h2 className="text-4xl font-black mt-6">
                Envie uma mensagem
              </h2>

              <p className="text-white/70 mt-4 max-w-2xl mx-auto leading-relaxed">
                Preencha os campos abaixo para entrar em
                contato com nossa equipe.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* LINHA 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/90">
                    Nome Completo *
                  </label>

                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Digite seu nome"
                    className="
                      h-14
                      rounded-2xl
                      bg-white/5
                      border-white/10
                      text-white
                      placeholder:text-white/40
                      focus-visible:ring-[#5E5BA6]
                    "
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/90">
                    E-mail *
                  </label>

                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="seuemail@email.com"
                    className="
                      h-14
                      rounded-2xl
                      bg-white/5
                      border-white/10
                      text-white
                      placeholder:text-white/40
                      focus-visible:ring-[#4D88C5]
                    "
                  />
                </div>
              </div>

              {/* LINHA 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/90">
                    Telefone / WhatsApp
                  </label>

                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(41) 99999-9999"
                    className="
                      h-14
                      rounded-2xl
                      bg-white/5
                      border-white/10
                      text-white
                      placeholder:text-white/40
                      focus-visible:ring-[#78B84D]
                    "
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/90">
                    Assunto *
                  </label>

                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="
                      w-full
                      h-14
                      px-4
                      rounded-2xl
                      bg-[#111827]
                      border
                      border-white/10
                      text-white
                      outline-none
                      focus:ring-2
                      focus:ring-[#5E5BA6]
                    "
                  >
                    <option value="">
                      Selecione um assunto
                    </option>

                    <option value="voluntariado">
                      Quero ser voluntário
                    </option>

                    <option value="doacao">
                      Informações sobre doação
                    </option>

                    <option value="parceria">
                      Proposta de parceria
                    </option>

                    <option value="imprensa">
                      Imprensa / Comunicação
                    </option>

                    <option value="outro">
                      Outros assuntos
                    </option>
                  </select>
                </div>
              </div>

              {/* MENSAGEM */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-white/90">
                  Sua mensagem *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Escreva sua mensagem..."
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-3xl
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    placeholder:text-white/40
                    resize-none
                    outline-none
                    focus:ring-2
                    focus:ring-[#4D88C5]
                  "
                />
              </div>

              {/* LGPD */}
              <div className="bg-[#F2D04B]/10 border border-[#F2D04B]/20 rounded-3xl p-5 flex items-start gap-4">
                <AlertCircle
                  size={20}
                  className="text-[#F2D04B] mt-1"
                />

                <p className="text-sm text-white/70 leading-relaxed">
                  <strong className="text-white">
                    Privacidade:
                  </strong>{" "}
                  As informações enviadas serão utilizadas
                  exclusivamente para retorno institucional,
                  seguindo as diretrizes da LGPD.
                </p>
              </div>

              {/* BOTÃO */}
              <Button
                type="submit"
                disabled={status === "loading"}
                className="
                  w-full
                  h-16
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#5E5BA6]
                  via-[#4D88C5]
                  to-[#78B84D]
                  hover:opacity-90
                  text-white
                  font-black
                  text-lg
                  shadow-2xl
                  border-0
                "
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin mr-3" />
                    Enviando mensagem...
                  </>
                ) : (
                  <>
                    <Send size={22} className="mr-3" />
                    Enviar mensagem
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* REDES */}
      <section className="container mx-auto px-6 pb-24 text-center">
        <h3 className="text-3xl font-black mb-4">
          Acompanhe nossas ações
        </h3>

        <p className="text-white/60 mb-10">
          Siga o INRUA nas redes sociais
        </p>

        <div className="flex justify-center gap-5 flex-wrap">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon

            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-[#5E5BA6]/20
                  hover:border-[#5E5BA6]
                  hover:scale-105
                  transition-all
                "
              >
                <Icon size={26} />
              </a>
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  )
}