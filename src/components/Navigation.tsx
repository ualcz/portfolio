import { FaGithub, FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Home, Code, FolderGit2, Briefcase, Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/ualcz", label: "GitHub" },
  { icon: FaInstagram, href: "https://www.instagram.com/claubx_", label: "Instagram" },
  { icon: FaDiscord, href: "https://discord.com/users/949800493402718279", label: "Discord" },
  { icon: FaEnvelope, href: "mailto:claudeilsonsouzza@gmail.com", label: "Email" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md z-50 border-b border-border/40 shadow-sm"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Botão de menu para mobile */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-accent/10 text-muted-foreground hover:text-primary transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Menu principal - Escondido no mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium hover:bg-accent/10 hover:text-primary transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>


            <button 
              onClick={() => scrollToSection('projects')} 
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium hover:bg-accent/10 hover:text-primary transition-all"
            >
    
              <FolderGit2 className="w-4 h-4" />
              <span>Projetos</span>
            </button>
          </div>

          {/* Redes sociais e botão de tema */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent/10 text-muted-foreground hover:text-primary transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a 
                key={label} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg hover:bg-accent/10 text-muted-foreground hover:text-primary transition-all"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/40"
        >
          <div className="flex flex-col p-4 space-y-3">
            <button 
              onClick={() => scrollToSection('home')} 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-accent/10 hover:text-primary transition-all"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-accent/10 hover:text-primary transition-all"
            >
              <Code className="w-5 h-5" />
              <span>Skills</span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-accent/10 hover:text-primary transition-all"
            >
              <FolderGit2 className="w-5 h-5" />
              <span>Projetos</span>
            </button>
            
            {/* Botão de tema e redes sociais no menu mobile */}
            <div className="flex items-center justify-center gap-4 pt-4 border-t border-border/40">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-accent/10 text-muted-foreground hover:text-primary transition-all"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a 
                  key={label} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-lg hover:bg-accent/10 text-muted-foreground hover:text-primary transition-all"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
