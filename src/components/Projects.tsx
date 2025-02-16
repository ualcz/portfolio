
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Sistema de Microserviços",
    description: "Arquitetura distribuída com Node.js e Docker",
    tech: ["Node.js", "Docker", "RabbitMQ", "MongoDB"],
    details: "Sistema escalável processando milhões de requisições por dia"
  },
  {
    title: "API REST de E-commerce",
    description: "Backend completo para plataforma de e-commerce",
    tech: ["Python", "Django", "PostgreSQL", "Redis"],
    details: "Integração com gateway de pagamento e sistema de recomendação"
  },
  {
    title: "Pipeline de ETL",
    description: "Processamento de dados em tempo real",
    tech: ["Apache Kafka", "Python", "AWS", "Elasticsearch"],
    details: "Processamento de 1TB de dados diários com latência < 100ms"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-accent/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Projetos
          </span>
          <h2 className="text-3xl font-bold mb-4">Principais Trabalhos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projetos backend que demonstram minhas habilidades em desenvolvimento de sistemas escaláveis
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{project.details}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
