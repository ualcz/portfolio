
import { motion } from "framer-motion";

const experiences = [
  {
    period: "2024 - Presente",
    role: "Freelance",
    company: "Projetos Independentes",
    description: "Desenvolvimento de soluções personalizadas, incluindo bots para gerenciamento de comunidades e automação de processos."
  },
  {
    period: "2024 - Presente",
    role: "Desenvolvedor de Api",
    company: "Projeto Independente",
    description: "Pesquisa e desenvolvimento de um api para catalogar plantas medicinal."
  },
  {
    period: "2022 - 2024",
    role: "Líder do Clube de Robótica",
    company: "The Armengers - IFBA",
    description: "Coordenação de projetos educacionais em robótica, desenvolvimento de dispositivos assistivos para surdos, participação e premiação na Mostra Nacional de Robótica."
  },
  {
    period: "2022 - 2024",
    role: "Pesquisador e Desenvolvedor em IoT e Sustentabilidade",
    company: "IFBA - Campus Seabra",
    description: "Desenvolvimento de projetos científicos envolvendo IoT para automação e sustentabilidade, incluindo um jardim inteligente controlado por IA e sensores ambientais."
  }
];



const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-background py-16">
      <div className="container px-4 mx-auto  py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trajetória Profissional</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minha jornada como desenvolvedor Fullstack
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-px h-full bg-border">
                <div className="absolute left-0 top-0 w-2 h-2 -ml-1 rounded-full bg-primary" />
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                  {exp.period}
                </span>
                <h3 className="text-lg font-semibold mb-1">{exp.role}</h3>
                <p className="text-muted-foreground mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
