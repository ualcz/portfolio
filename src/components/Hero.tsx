
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-accent/5">
      <div className="container px-4 py-16 mx-auto">
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
