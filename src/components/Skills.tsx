
import { motion } from "framer-motion";

const skills = [
  { name: "Node.js", level: 90 },
  { name: "Python", level: 85 },
  { name: "Java", level: 80 },
  { name: "SQL", level: 95 },
  { name: "MongoDB", level: 85 },
  { name: "Docker", level: 80 },
  { name: "AWS", level: 75 },
  { name: "CI/CD", level: 85 },
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
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
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
