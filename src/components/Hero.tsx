
import { motion } from "framer-motion";
import TechBackground from "./TechBackground";
const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
      <TechBackground />
      
      {/* Full-width Banner */}
      <div className="absolute top-0 left-0 right-0 h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80"
          alt="Banner"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </div>
      
      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <div className="flex flex-col items-center py-16 mb-8">
            {/* Tech Icons */}
           

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
  Desenvolvedor Full Stack com experiência prática em React, Vite e TypeScript, focado na construção de interfaces web responsivas, acessíveis e com boa usabilidade. Atuação em projetos front-end, back-end e mobile, utilizando React Native para desenvolvimento multiplataforma.<br /><br />
  Experiência com Java (Spring Boot) e Python (FastAPI e Django) no desenvolvimento de APIs RESTful robustas e escaláveis. Conhecimento em arquitetura de microsserviços, autenticação JWT, PostgreSQL e integração entre sistemas.<br /><br />
  Familiaridade com Docker, boas práticas de CI/CD, versionamento com Git e colaboração em ambientes ágeis.
</p>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
