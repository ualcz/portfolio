import { useState } from "react";
import { motion } from "framer-motion";
import { SiNodedotjs, SiPython, SiCplusplus, SiMysql, SiGit, SiPhp, SiReact, SiArduino, SiFlask } from "react-icons/si";

const allSkills = [
  { name: "Node.js", icon: SiNodedotjs, category: "Backend" },
  { name: "Python", icon: SiPython, category: "Linguagens" },
  { name: "C++", icon: SiCplusplus, category: "Linguagens" },
  { name: "SQL", icon: SiMysql, category: "Banco de Dados" },
  { name: "Git", icon: SiGit, category: "Ferramentas" },
  { name: "PHP", icon: SiPhp, category: "Backend" },
  { name: "React", icon: SiReact, category: "Frontend" },
  { name: "Arduino", icon: SiArduino, category: "Linguagens" },
  { name: "Flask", icon: SiFlask, category: "Backend" },
];

const categories = ["Todos", "Backend", "Frontend", "Banco de Dados", "Ferramentas", "Linguagens"];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Filtra as skills com base na categoria selecionada
  const filteredSkills = selectedCategory === "Todos" ? allSkills : allSkills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Expertise Técnica</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Escolha uma categoria para ver as tecnologias que utilizo no desenvolvimento.
        </p>

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
