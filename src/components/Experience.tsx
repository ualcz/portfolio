
import { motion } from "framer-motion";

const experiences = [
  {
    period: "2021 - Presente",
    role: "Desenvolvedor Backend Sênior",
    company: "Tech Solutions Inc.",
    description: "Liderança técnica em projetos de microserviços e APIs de alta performance"
  },
  {
    period: "2019 - 2021",
    role: "Desenvolvedor Backend Pleno",
    company: "DataTech Systems",
    description: "Desenvolvimento de sistemas distribuídos e pipelines de processamento de dados"
  },
  {
    period: "2017 - 2019",
    role: "Desenvolvedor Backend Júnior",
    company: "Startup Innovation",
    description: "Implementação de APIs REST e integrações com serviços de terceiros"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Experiência
          </span>
          <h2 className="text-3xl font-bold mb-4">Trajetória Profissional</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minha jornada como desenvolvedor backend e as empresas onde contribuí
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
