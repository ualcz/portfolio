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
                alt="Perfil"
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
                Sou um Desenvolvedor Full Stack e Técnico em TI apaixonado por tecnologia e inovação. Tenho experiência em IoT, automação e desenvolvimento backend, criando soluções inteligentes e eficientes. Meu foco está na construção de aplicações web escaláveis, bots automatizados e sistemas embarcados, sempre aliando funcionalidade a um design minimalista e intuitivo.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
