import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(11) 97674-8621",
      link: "tel:+5511976748621",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "financeiro@tegcont.com.br",
      link: "mailto:financeiro@tegcont.com.br",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Rua Barão do Triunfo, 88, conjunto 1303, Brooklin, São Paulo, SP, CEP 04602-000",
      link: "https://maps.google.com/?q=Rua+Barão+do+Triunfo,+88,+conjunto+1303,+Brooklin,+São+Paulo,+SP",
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Segunda a Sexta: 08h às 17h45",
      link: null,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@tegcont",
      link: "https://www.instagram.com/tegcont",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em contato
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para transformar a gestão financeira da sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <Card
                  key={index}
                  className="border-border hover:border-primary/50 transition-all hover:shadow-lg bg-card h-full"
                >
                  <CardContent className="p-6 space-y-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      {info.label}
                    </h3>
                    <p className="text-foreground font-medium leading-relaxed">
                      {info.value}
                    </p>
                  </CardContent>
                </Card>
              );

              if (info.link) {
                return (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block h-full"
                  >
                    {content}
                  </a>
                );
              }

              return content;
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://wa.me/5511976748621"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Fale conosco pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
