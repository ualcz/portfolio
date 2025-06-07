import { useState } from "react";
import { motion } from "framer-motion";
import { 
  SiNodedotjs, SiPython, SiMysql, SiGit,
  SiReact, SiDocker, SiFastapi, SiTypescript, SiSpringboot, 
  SiMongodb, SiPostgresql, SiDjango, SiLinux,SiVite
} from "react-icons/si"
import { FaJava } from "react-icons/fa";

const allSkills = [
  // Backend
  { name: "Django", icon: SiDjango, category: "Backend" },
  { name: "Fastapi", icon: SiFastapi, category: "Backend" },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend" },
  { name: "Springboot", icon: SiSpringboot, category: "Backend" },

  // Frontend
  { name: "React", icon: SiReact, category: "Frontend" },
  { name: "Vite", icon: SiVite, category: "Frontend" },

  // Linguagens de Programação
  { name: "Python", icon: SiPython, category: "Linguagens" },
  { name: "TypeScript", icon: SiTypescript, category: "Linguagens" },
  { name: "Java", icon: FaJava, category: "Linguagens"},

  // Banco de Dados
  { name: "MongoDB", icon: SiMongodb, category: "Banco de Dados" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Banco de Dados" },
  { name: "SQL", icon: SiMysql, category: "Banco de Dados" },

  // Ferramentas e DevOps
  { name: "Docker", icon: SiDocker, category: "Ferramentas" },
  { name: "Git", icon: SiGit, category: "Ferramentas" },
  { name: "Linux", icon: SiLinux, category: "Ferramentas" },
];



const categories = [ "Backend", "Frontend", "Banco de Dados", "Ferramentas", "Linguagens"];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Backend");

  // Filtra as skills com base na categoria selecionada
  const filteredSkills = allSkills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container px-4 mx-auto text-center py-16">
        <h2 className="text-3xl font-bold mb-6">Skills Técnica</h2>

        {/* Botões de Filtro */}
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category ? "bg-primary text-white" : "bg-card text-muted-foreground hover:bg-primary hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Lista de Skills */}
        <motion.div 
          layout 
          className="flex justify-center gap-6 flex-wrap"
        >
          {filteredSkills.map(skill => {
            const Icon = skill.icon;
            return (
              <motion.div 
                key={skill.name} 
                className="flex flex-col items-center bg-card p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="w-14 h-14 text-primary mb-3" />
                <span className="text-lg font-semibold">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
