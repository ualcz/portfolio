import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/ualcz",
    label: "GitHub",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/claubx_",
    label: "Instagram",
  },
  {
    icon: FaDiscord,
    href: "https://discord.com/users/949800493402718279",
    label: "Discord",
  },
  {
    icon: FaEnvelope,
    href: "mailto:claudeilsonsouzza@gmail.com",
    label: "Email",
  },
];


const Footer = () => {
  return (
    <footer className="bg-accent/5">
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
            © {new Date().getFullYear()} Claudeilson Souza. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
