
import { motion } from "framer-motion";
import { Github, Instagram, MessageSquare } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  Server, 
  Binary, 
  Coffee, 
  Database, 
  Container, 
  Cloud, 
  Git, 
  Network 
} from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/seu-usuario",
    label: "GitHub",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/seu-usuario",
    label: "Instagram",
  },
  {
    icon: MessageSquare,
    href: "https://discord.gg/seu-servidor",
    label: "Discord",
  },
];

const technologies = [
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Binary },
  { name: "Java", icon: Coffee },
  { name: "MongoDB", icon: Database },
  { name: "Docker", icon: Container },
  { name: "AWS", icon: Cloud },
  { name: "Git", icon: Git },
  { name: "API REST", icon: Network },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-accent/5">
      <div className="container px-4 py-16 mx-auto">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Desenvolvedor Backend
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Transformando Ideias em
            <span className="text-primary"> Sistemas Robustos</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Especializado em arquitetar e desenvolver soluções backend escaláveis,
            seguras e de alta performance
          </p>

          {/* Technology Carousel */}
          <div className="max-w-2xl mx-auto mb-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {technologies.map((tech, index) => (
                  <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/4">
                    <div className="p-4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        className="flex flex-col items-center gap-2"
                      >
                        <div className="p-4 bg-accent/10 rounded-full">
                          <tech.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{tech.name}</span>
                      </motion.div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-11 px-8 shadow hover:bg-primary/90"
            >
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background h-11 px-8 shadow-sm hover:bg-accent hover:text-accent-foreground"
            >
              Contato
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
