import { Target, Compass, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import financialGrowth from "@/assets/financial-growth.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Visão",
      description:
        "Ser a ferramenta estratégica que transforma dados financeiros em crescimento seguro, organizado e sustentável para PMEs ambiciosas.",
    },
    {
      icon: Compass,
      title: "Missão",
      description:
        "Desburocratizar a gestão financeira, traduzindo complexidade em clareza e tornando cada empresa capaz de fazer seu dinheiro trabalhar a seu favor.",
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Nossa base é transparência na comunicação, parceria na tomada de decisão e resultados que realmente importam para o crescimento da sua empresa.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quem somos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Especialistas em transformar a gestão financeira de PMEs em vantagem competitiva
            </p>
          </div>

          <div className="mb-12 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <img 
              src={financialGrowth} 
              alt="Crescimento financeiro representado por plantas crescendo sobre moedas"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card"
                >
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
