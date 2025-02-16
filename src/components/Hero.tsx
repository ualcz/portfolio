
import { motion } from "framer-motion";
import { Github, Instagram, MessageSquare } from "lucide-react";

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

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-accent/5">
      {/* Social Links Bar */}
      <div className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-end gap-6">
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
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex flex-col items-center mb-8">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-primary/10"
            >
              <img
                src="/photo-1581091226825-a6a2a5aee158"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-center"
            >
              <h2 className="text-2xl font-semibold mb-4">Seu Nome</h2>
              <p className="text-muted-foreground mb-6">
                Com mais de 5 anos de experiência em desenvolvimento backend, 
                especializado em arquitetar soluções escaláveis e de alta performance. 
                Proficiente em Node.js, Python e tecnologias cloud, com forte 
                experiência em microsserviços e sistemas distribuídos.
              </p>
            </motion.div>
          </div>

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
