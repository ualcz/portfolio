
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Code, FolderGit2, Briefcase } from "lucide-react";

const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-lg">
            Portfólio
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link 
              to="/skills" 
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Code className="w-4 h-4" />
              <span>Skills</span>
            </Link>
            <Link 
              to="/projects" 
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Projetos</span>
            </Link>
            <Link 
              to="/experience" 
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Briefcase className="w-4 h-4" />
              <span>Experiência</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
