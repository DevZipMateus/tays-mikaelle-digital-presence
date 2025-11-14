import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-1">
            <img src={logo} alt="TeG Gestão Financeira" className="h-48 mb-4" />
            <p className="text-sm text-muted-foreground">
              Transforme dados financeiros em crescimento seguro, organizado e sustentável
            </p>
          </div>

          {/* Links de navegação */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("hero")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("team")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Equipe
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/5511976748621" className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>(11) 97674-8621</span>
                </a>
              </li>
              <li>
                <a href="mailto:financeiro@tegcont.com.br" className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>financeiro@tegcont.com.br</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Rua Barão do Triunfo, 88, conjunto 1303, Brooklin, São Paulo, SP</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Segunda a Sexta: 08h às 17h45</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Redes sociais</h3>
            <a href="https://www.instagram.com/tegcont?igsh=cHhram1zdGVxc3dk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
              <span>@tegcont</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TeG Gestão Financeira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;