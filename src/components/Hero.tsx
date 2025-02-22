
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-accent/5 py-16 bg-background">

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
                src="logo.png"
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
              Desenvolvedor Full Stack e Técnico em TI com experiência em IoT, automação e desenvolvimento backend. 
              Especializado na criação de soluções inovadoras, como bots inteligentes, sistemas embarcados e aplicações web escaláveis
              aliando funcionalidade a um design minimalista e atraente para o usuário.
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
