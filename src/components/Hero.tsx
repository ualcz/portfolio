
import { motion } from "framer-motion";
import TechBackground from "./TechBackground";
import { Terminal, Code2, Cpu, Database } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
      <TechBackground />
      
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <div className="flex flex-col items-center mb-8">
            {/* Banner Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 rounded-2xl overflow-hidden -translate-y-24">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80"
                alt="Banner"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
            </div>

            {/* Tech Icons */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 flex gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="p-3 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50"
              >
                <Terminal className="w-6 h-6 text-primary" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="p-3 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50"
              >
                <Code2 className="w-6 h-6 text-primary" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="p-3 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50"
              >
                <Cpu className="w-6 h-6 text-primary" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="p-3 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50"
              >
                <Database className="w-6 h-6 text-primary" />
              </motion.div>
            </div>

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-primary/10 relative"
            >
              {/* Tech Border */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-2 border-2 border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              <img
                src="logo.png"
                alt="Perfil"
                className="w-full h-full object-cover relative z-10"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-center relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur" />
              <h2 className="text-2xl font-semibold mb-4 relative">Seu Nome</h2>
              <p className="text-muted-foreground mb-6 relative">
                Sou um Desenvolvedor Full Stack e Técnico em TI apaixonado por tecnologia e inovação. 
                Tenho experiência em IoT, automação e desenvolvimento backend, criando soluções inteligentes 
                e eficientes. Meu foco está na construção de aplicações web escaláveis, bots automatizados 
                e sistemas embarcados, sempre aliando funcionalidade a um design minimalista e intuitivo.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
