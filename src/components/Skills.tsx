import { SiNodedotjs, SiPython, SiCplusplus, SiMysql, SiGit, SiPhp, SiReact, SiArduino,SiFlask } from "react-icons/si";

const skills = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "C++", icon: SiCplusplus },
  { name: "SQL", icon: SiMysql },
  { name: "Git", icon: SiGit },
  { name: "PHP", icon: SiPhp },
  { name: "React", icon: SiReact },
  { name: "Arduino", icon: SiArduino },
  { name: "Flask", icon: SiFlask },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Expertise Técnica</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Conjunto de tecnologias e ferramentas que utilizo para criar soluções backend robustas e escaláveis
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="flex flex-col items-center bg-card p-4 rounded-lg shadow-md">
                <Icon className="w-12 h-12 text-primary mb-2" />
                <span className="text-lg font-semibold">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;