import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FaPython, FaCuttlefish, FaDatabase, FaMicrochip, FaCodeBranch, FaRocket, FaGithub, FaReact, FaNodeJs, FaJava} from "react-icons/fa";
import { SiPostgresql, SiArduino, SiMysql, SiFlask , SiFastapi} from "react-icons/si";

const projects = [
  {
    title: "CodLab",
    description: "Plataforma educacional.",
    tech: [FaDatabase, FaReact, FaNodeJs],
    details: "Plataforma educacional para ensinar programação em bloco.",
    link: "https://codelab-adventure.vercel.app",
    github: "#",
    image: "img/lab.png"	
  },
  {
    title: "CertifyAPI",
    description: "CertifyAPI é uma API RESTful para gerenciamento de certificados digitais, construída com FastAPI e PostgreSQL.",
    tech: [FaPython, SiFastapi, FaDatabase, SiPostgresql],
    details: "Permite criar, validar e gerenciar certificados digitais, oferecendo endpoints para emissão, revogação e consulta de certificados, além de autenticação JWT para segurança.",
    link: "#",
    github: "https://github.com/ualcz/certifyapi",
    image: "img/cert.png"
  },
  {
    title: "FloraFolio",
    description: "Api para gerenciar floricuta feita em Spring Boot.",
    tech: [FaJava, FaDatabase, SiMysql],
    details: "Gerencia o estoque de flores, processa pedidos e fornece análises de vendas para otimizar a operação da floricultura.",
    link: "#",
    github: "https://github.com/ualcz/florafolio",
    image: "img/flor.png"
  },
  {
    title: "Bot Quem é Você?",
    description: "Bot discor para jogar o clássico jogo 'Quem é Você?'",
    tech: [FaPython, SiFlask],
    details: "Implementação do jogo 'Quem é Você?' em Python usando a api do discord.",
    link: "#",
    github: "https://github.com/ualcz/QuemSou",
    image: "img/bot.png"
  },
  {
    title: "BioChapada API",
    description: "Api com infomação sobre plantas nativas da Chapada.",
    tech: [FaPython, SiFlask,FaDatabase,SiPostgresql],
    details: "Fornece informações detalhadas sobre diversas espécies nativas da Chapada diamantina, A API permite a busca, catalogação, identificação e contribuições colaborativas de espécies nativas, além de explorar o uso de dados reais e integração com bases científicas.",
    link: "#",
    github: "https://github.com/ualcz/BioChapada-Api",
    image: "img/plant.png"
  },
  {
    title: "Gênios com Arduino",
    description: "Sistema embarcado baseado no clássico jogo Genius.",
    tech: [FaCuttlefish, SiArduino, FaMicrochip, FaCodeBranch],
    details: "Gera sequências aleatórias de cores e sons, registrando a interação do jogador para validação e aumento progressivo da dificuldade.",
    link: "#",
    github: "https://github.com/ualcz/Memoria_Arduino",
    image: "https://raw.githubusercontent.com/ualcz/Memoria_Arduino/refs/heads/main/Imagem/jogo.png"
  },
  {
    title:'Portfólio Pessoal',
   description:'Meu portfólio pessoal desenvolvido com React, Vite e TypeScript.',
   tech: [FaReact, FaNodeJs],
   details:'Apresenta meus projetos, habilidades e experiência profissional, destacando minha jornada como desenvolvedor full stack.',
   link: "https://claubx.vercel.app/",
   github: "https://github.com/ualcz/portfolio",
   image: "img/port.png"
  },
  
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 bg-accent/5">
      <div className="container px-4 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-lg" />
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
                  <div className="flex gap-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 text-white rounded-lg transition ${project.link !== "#" ? "bg-primary hover:bg-primary-dark" : "bg-gray-400 cursor-not-allowed"}`}
                    >
                      <FaRocket /> Deploy
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 text-white rounded-lg transition ${project.github !== "#" ? "bg-gray-800 hover:bg-gray-900" : "bg-gray-400 cursor-not-allowed"}`}
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
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
