import {
  FileText,
  Calendar,
  Receipt,
  DollarSign,
  TrendingUp,
  BarChart3,
  Wallet,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Gestão de contas a pagar e receber",
      description:
        "Controle total sobre o fluxo de caixa com organização e acompanhamento detalhado de todas as movimentações financeiras. Saiba exatamente o que entra e o que sai.",
    },
    {
      icon: Calendar,
      title: "Agendamento de pagamentos",
      description:
        "Automatização e programação inteligente de pagamentos. Otimize seu caixa sem precisar lembrar de cada vencimento.",
    },
    {
      icon: Receipt,
      title: "Emissão de notas e boletos",
      description:
        "Geração automatizada de documentos fiscais e instrumentos de cobrança. Tudo em conformidade, sem burocracia.",
    },
    {
      icon: DollarSign,
      title: "Custos e precificação",
      description:
        "Análise detalhada de custos e estruturação estratégica de preços. Lucre com inteligência, não por tentativa e erro.",
    },
    {
      icon: TrendingUp,
      title: "Consultoria financeira",
      description:
        "Orientação especializada para tomada de decisões. Quando crescer, quando investir, quando reorganizar—você decide com clareza.",
    },
    {
      icon: BarChart3,
      title: "Análise de viabilidade financeira",
      description:
        "Estudos completos de viabilidade para novos projetos. Valide ideias antes de investir tempo e dinheiro.",
    },
    {
      icon: Wallet,
      title: "Finanças pessoais",
      description:
        "Gestão e planejamento financeiro personalizado para executivos e empresários. Separe estrategicamente o seu do da empresa.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para sua gestão financeira empresarial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-primary/50 transition-all hover:shadow-lg bg-card"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
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

export default Services;
