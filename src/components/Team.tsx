import teamTays from "@/assets/team-tays.jpg";
import teamGustavo from "@/assets/team-gustavo.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Tays",
      role: "CEO Fundadora",
      image: teamTays,
    },
    {
      name: "Gustavo",
      role: "Gestor Financeiro",
      image: teamGustavo,
    },
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa equipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais especializados em gestão financeira, prontos para transformar os dados da sua empresa em resultados concretos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
