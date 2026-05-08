import Link from "next/link"
import {
  Mail,
  MapPin,
  Facebook,
  Instagram,
  ShieldCheck,
  FileText,
} from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020617] text-white">
      {/* EFEITOS DE FUNDO */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#5E5BA6]/20 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#4D88C5]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* TOPO */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* SOBRE */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-20inrua-20transparente.png"
                alt="INRUA"
                className="h-14 w-14 object-contain"
              />

              <div>
                <h3 className="font-black text-xl text-white">
                  INRUA
                </h3>

                <p className="text-xs text-white/60">
                  Direitos Humanos
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-white/70">
              Instituto Nacional de Direitos Humanos da População de Rua.
              Defendemos dignidade, inclusão social e direitos fundamentais
              desde 2016.
            </p>

            <div className="inline-flex items-center gap-2 bg-[#F2D04B]/10 border border-[#F2D04B]/20 text-[#F2D04B] px-4 py-2 rounded-2xl text-xs font-bold">
              <ShieldCheck size={14} />
              Conformidade com o MROSC
            </div>
          </div>

          {/* LINKS */}
          <div className="space-y-5">
            <h3 className="font-black text-white text-lg">
              Navegação
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Sobre Nós", href: "/sobre" },
                { label: "Projetos", href: "/acoes" },
                { label: "Notícias", href: "/noticias" },
                { label: "Transparência", href: "/transparencia" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-[#F2D04B] transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DOCUMENTOS */}
          <div className="space-y-5">
            <h3 className="font-black text-white text-lg">
              Transparência
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                "Estatuto Social",
                "Prestação de Contas",
                "Relatórios",
                "Documentos Oficiais",
                "LGPD",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/transparencia"
                    className="flex items-center gap-2 text-white/70 hover:text-[#78B84D] transition-all duration-300"
                  >
                    <FileText size={14} />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTATO */}
          <div className="space-y-5">
            <h3 className="font-black text-white text-lg">
              Contato INRUA
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[#4D88C5] mt-0.5"
                />

                <p className="text-white/70">
                  Curitiba, Paraná — Brasil
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#78B84D]" />

                <a
                  href="mailto:inruabrasil@gmail.com"
                  className="text-white/70 hover:text-[#F2D04B] transition-all"
                >
                  inruabrasil@gmail.com
                </a>
              </div>
            </div>

            {/* REDES */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.facebook.com/inruabr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#4D88C5] transition-all p-3 rounded-2xl backdrop-blur-xl"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/inruabrasil/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#E98C37] transition-all p-3 rounded-2xl backdrop-blur-xl"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* DIVISÃO */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-white/50 text-center lg:text-left">
              &copy; {currentYear} INRUA — Instituto Nacional de Direitos
              Humanos da População de Rua. Todos os direitos reservados.
            </p>

            <div className="bg-[#F2D04B]/10 border border-[#F2D04B]/20 px-4 py-2 rounded-2xl">
              <p className="text-[#F2D04B] text-xs font-bold">
                Em conformidade com a Lei 13.019/2014 (MROSC)
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}