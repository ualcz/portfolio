import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FaPython, FaCuttlefish, FaDatabase, FaMicrochip, FaCodeBranch, FaDiscord } from "react-icons/fa";
import { SiFastapi, SiCplusplus, SiArduino, SiMysql, SiFlask } from "react-icons/si";

const projects = [
  {
    title: "Sistema de Monitoramento de Plantas Inteligente",
    description: "Backend para um sistema IoT de jardinagem automatizada",
    tech: [FaPython, SiCplusplus, SiFastapi, FaDatabase, FaMicrochip],
    details: "Coleta dados de sensores de umidade, temperatura e luminosidade, controlando automaticamente a irrigação com base nas condições ambientais. Comunicação entre ESP32 e o backend via MQTT.",
    link: "#"
  },
  {
    title: "API de QR Code para Doação",
    description: "Sistema para gerar QR Codes personalizados para doações",
    tech: [FaPython, SiFlask],
    details: "Gera QR Codes para facilitar transações financeiras em projetos sociais. Permite parametrização de valores e destinatários, garantindo segurança e usabilidade.",
    link: "#"
  },
  {
    title: "Jogo Educacional Gênios com Arduino",
    description: "Desenvolvimento de um sistema embarcado baseado no clássico jogo Genius, utilizando Arduino para estimular o aprendizado e a lógica dos jogadores.",
    tech: [FaCuttlefish, SiArduino, FaMicrochip, FaCodeBranch],
    details: "Gera sequências aleatórias de cores e sons, registrando a interação do jogador para validação e aumento progressivo da dificuldade.",
    link: "https://github.com/ualcz/Memoria_Arduino"
  },
  {
    title: "Bot de Discord Personalizado para Comunidade",
    description: "Desenvolvimento de bot para automação e segurança em servidores Discord",
    tech: [FaPython, FaDiscord, SiMysql],
    details: "Bot para moderação e notificações, incluindo sistema de banimento global, alertas sobre usuários reincidentes e comandos personalizados para administração.",
    link: "#"
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 bg-accent/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Principais Trabalhos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((Icon, idx) => (
                      <span key={idx} className="text-primary text-lg">
                        <Icon />
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="text-primary underline text-sm">Ver mais</a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {!showAll && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
            >
              Exibir mais
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
