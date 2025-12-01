import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react"

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
                <Link
                  href="/politica-privacidade"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
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
                <p className="text-muted-foreground">Brasília, DF - Brasil</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <p className="text-muted-foreground">+55 (61) 3333-4444</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <p className="text-muted-foreground">contato@inrua.org.br</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
              </Link>
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
