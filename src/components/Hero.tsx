import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground pt-20"
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            TeG Gestão Financeira
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light opacity-95">
            Transforme dados financeiros em crescimento seguro, organizado e sustentável
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Seu dinheiro, trabalhando inteligente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              onClick={() => scrollToSection("services")}
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 shadow-lg"
            >
              Conheça nossos serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Entre em contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
