import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Home, Code, FolderGit2, Briefcase, Menu, X } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/ualcz", label: "GitHub" },
  { icon: FaInstagram, href: "https://www.instagram.com/claubx_", label: "Instagram" },
  { icon: FaDiscord, href: "https://discord.com/users/949800493402718279", label: "Discord" },
  { icon: FaEnvelope, href: "mailto:claudeilsonsouzza@gmail.com", label: "Email" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b border-border"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-bold text-xl">
            Portfólio
          </Link>

          {/* Botão de menu para mobile */}
          <button 
            className="md:hidden p-3 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>

          {/* Menu principal - Escondido no mobile */}
          <div className="hidden md:flex items-center gap-10">
            <Link to="/" className="flex items-center gap-3 text-base font-medium hover:text-primary transition-colors">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link to="/skills" className="flex items-center gap-3 text-base font-medium hover:text-primary transition-colors">
              <Code className="w-5 h-5" />
              <span>Skills</span>
            </Link>
            <Link to="/projects" className="flex items-center gap-3 text-base font-medium hover:text-primary transition-colors">
              <FolderGit2 className="w-5 h-5" />
              <span>Projetos</span>
            </Link>
            <Link to="/experience" className="flex items-center gap-3 text-base font-medium hover:text-primary transition-colors">
              <Briefcase className="w-5 h-5" />
              <span>Experiência</span>
            </Link>
          </div>

          {/* Redes sociais (visíveis em todos os tamanhos) */}
          <div className="hidden md:flex justify-end gap-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col items-center gap-6 py-6">
            <Link to="/" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              <Home className="w-6 h-6" />
              <span>Home</span>
            </Link>
            <Link to="/skills" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              <Code className="w-6 h-6" />
              <span>Skills</span>
            </Link>
            <Link to="/projects" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              <FolderGit2 className="w-6 h-6" />
              <span>Projetos</span>
            </Link>
            <Link to="/experience" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              <Briefcase className="w-6 h-6" />
              <span>Experiência</span>
            </Link>
            
            {/* Redes sociais no menu mobile */}
            <div className="flex gap-8 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navigation;
