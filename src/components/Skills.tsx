
import { motion } from "framer-motion";
import { Server, Database, Container, Cloud, Git, Code } from "lucide-react";

const skills = [
  { name: "Node.js", level: 90, icon: Server },
  { name: "Python", level: 85, icon: Code },
  { name: "Java", level: 80, icon: Code },
  { name: "SQL", level: 95, icon: Database },
  { name: "MongoDB", level: 85, icon: Database },
  { name: "Docker", level: 80, icon: Container },
  { name: "AWS", level: 75, icon: Cloud },
  { name: "CI/CD", level: 85, icon: Git },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Habilidades
          </span>
          <h2 className="text-3xl font-bold mb-4">Expertise Técnica</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conjunto de tecnologias e ferramentas que utilizo para criar soluções
            backend robustas e escaláveis
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <skill.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{skill.name}</span>
                </div>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-accent rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
