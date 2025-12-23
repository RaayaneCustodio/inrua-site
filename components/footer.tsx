import Link from "next/link"
import { Mail, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Sobre o INRUA</h3>
            <p className="text-sm text-muted-foreground">
              Instituto Nacional de Direitos Humanos da População de Rua. Defendemos a dignidade e os direitos
              fundamentais desde 2016.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/acoes" className="text-muted-foreground hover:text-primary transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/transparencia" className="text-muted-foreground hover:text-primary transition-colors">
                  Transparência
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Documentos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Estatuto Social
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidade" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termo-uso" className="text-muted-foreground hover:text-primary transition-colors">
                  Termo de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  LGPD
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Contato INRUA</h3>

            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5" />
                <p className="text-muted-foreground">Curitiba, Brasil</p>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a
                  href="mailto:inruabrasil@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  inruabrasil@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links - EXTERNOS */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.facebook.com/inruabr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/inruabrasil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} INRUA - Instituto Nacional de Direitos Humanos da População de Rua. Todos os direitos
            reservados.
          </p>
          <p className="text-xs">Em conformidade com a Lei 13.019/2014 (MROSC)</p>
        </div>
      </div>
    </footer>
  )
}
