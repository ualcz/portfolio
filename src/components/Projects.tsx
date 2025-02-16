
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const projects = [
    {
      title: "Sistema de Monitoramento de Plantas Inteligente",
      description: "Backend para um sistema IoT de jardinagem automatizada",
      tech: ["Python","C++", "FastAPI", "SQL", "ESP32"],
      details: "Coleta dados de sensores de umidade, temperatura e luminosidade, controlando automaticamente a irrigação com base nas condições ambientais. Comunicação entre ESP32 e o backend via MQTT."
    },
    {
      title: "API de QR Code para Doação",
      description: "Sistema para gerar QR Codes personalizados para doações",
      tech: ["Python", "Flask", "Pillow"],
      details: "Gera QR Codes para facilitar transações financeiras em projetos sociais. Permite parametrização de valores e destinatários, garantindo segurança e usabilidade."
    },
    {
      title: "Sistema Backend para Dispositivo Vestível Assistivo",
      description: "Backend para um wearable de auxílio a surdos",
      tech: ["C++","ESP32"],
      details: "Processa sinais de som detectados, identifica alertas e envia notificações vibratórias personalizadas ao dispositivo."
    },
    {
      title: "Jogo Educacional Gênios com Arduino",
      description: "Desenvolvimento de um sistema embarcado baseado no clássico jogo Genius, utilizando Arduino para estimular o aprendizado e a lógica dos jogadores.",
      tech: ["C++", "Arduino", "ESP32", "LEDs RGB", "Buzzer"],
      details: "Gera sequências aleatórias de cores e sons, registrando a interação do jogador para validação e aumento progressivo da dificuldade."
    },
    {
      title: "Bot de Discord Personalizado para Comunidade",
      description: "Desenvolvimento de bot para automação e segurança em servidores Discord",
      tech: ["Python", "discord.py", "MySQL"],
      details: "Bot para moderação e notificações, incluindo sistema de banimento global, alertas sobre usuários reincidentes e comandos personalizados para administração."
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
