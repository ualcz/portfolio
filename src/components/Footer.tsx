
import { Github, Instagram, MessageSquare } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/seu-usuario",
    label: "GitHub",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/seu-usuario",
    label: "Instagram",
  },
  {
    icon: MessageSquare,
    href: "https://discord.gg/seu-servidor",
    label: "Discord",
  },
];

const Footer = () => {
  return (
    <footer className="py-16 bg-accent/5">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
