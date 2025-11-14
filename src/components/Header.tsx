import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
    setIsMobileMenuOpen(false);
  };
  const menuItems = [{
    label: "Início",
    id: "hero"
  }, {
    label: "Sobre",
    id: "about"
  }, {
    label: "Serviços",
    id: "services"
  }, {
    label: "Contato",
    id: "contact"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-primary/95 backdrop-blur-md shadow-md" : "bg-primary"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection("hero")} className="flex items-center space-x-3 hover:opacity-80 transition-opacity" aria-label="Ir para início">
            <img src={logo} alt="TeG Gestão Financeira" className="h-48 w-auto" />
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium">
                {item.label}
              </button>)}
            <Button onClick={() => scrollToSection("contact")} className="bg-background text-foreground hover:bg-background/90">
              Fale conosco
            </Button>
          </nav>

          <button className="md:hidden text-primary-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && <nav className="md:hidden py-4 border-t border-primary-foreground/20">
            {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left py-3 text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium">
                {item.label}
              </button>)}
            <Button onClick={() => scrollToSection("contact")} className="w-full mt-3 bg-background text-foreground hover:bg-background/90">
              Fale conosco
            </Button>
          </nav>}
      </div>
    </header>;
};
export default Header;