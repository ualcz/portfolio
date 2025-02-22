import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

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

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-accent/5">
      {/* Social Links Bar */}
      <div className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-end gap-6">
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
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container px-4 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex flex-col items-center mb-8">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-primary/10"
            >
              <img
                src="https://lh3.googleusercontent.com/fife/ALs6j_H_l59inUWV8Am556UMLkVawlEcUqN8BuxjFjN46dt0BWNnal0Xy5SOtqX2nJLpZ88FZZh9wXUyCZKdNRAzWOs17lJ66kH-WpeEhDmhYA2hvM84elgM67ZeeYzRTtJQeyR7ZYxXwyrf6aqfzWXsOl6LsD4TMTwVnaaWNfynut5xx8f8O9atPH22DzJbKfD8-PGMqXvcad01tKX6-NltxauyFH_ouuMEFoKSktMWurbw5pwL69-yQcpQx8wxIjm10QZvvmyt_M-x8BVzh4cErWgxUe3I3auL84zm8NuO9gKyMNBZU7Dr2X1Niq9-h9lNtrFNTRvieZ6L343TWrmnwpaHt4ZgMvrsRT4MAnuIKOdqmvMpzN6evwATbRNMNplXLKN5lGkSK6pKrk3hTko3jAVEhx7TUtDY0H2IkQAebKosMd-1Rh3ott6v8sOyUIzvofpC6xedLF5x7bkyxDx_-wsb_3KhuoDRjN4tLSXrb_hei6cCHZFowqwaiFa6Afyi4upo2s_O0TuxfVPkxv4mgd0szsDdM51nweiZmLpbKvSrV1VAhn8VZ-2Fp5WB3wEMSfgIOg2tQZzzDMXTtLflD2Lo7a9qjWoGNXun0N7myYkkmvEJOflj2fl4_L85RiV82QRkbo2_Zu05ec3fWXLsDptXdafQHzy90OFnbYsDoQ59PdE3cK-PmbK_oBJNUgzV4M_L7-2BvzKD5WU2I7ZWVYs4mOaJfcwqUsTuNYhZeq2NCW1UI-O3_2lQILpz822A_1m2LHkJLBteBYz_vkHmUSDR88PvI09Xs0jofBra5V_hSejHHSuhllPrq33E5yRAlZ8zbdhOCYM8lshqB2drLULjoAKVWFmT7mLq4kOAzsgHq3Gv6956VPTQ-ENGyzWCrOqlw-QOivUDfMVI0RG4LPm3mG-bknKSkXH3WrSp_sud_xUfpV4IwaQIGsmmqGap_B31swXvpv5AOWJOvQYOdHnEhcAkBKsO5WUtwE_3iZXDOW--UusgqhEw-j5Ltdg9N1qp72tVhqGDLWIMJR-h020Sr-RcqzWp-i2S3GbUrtb2z4-vAjL3UAIsxan-REVVmAs1y9Wv5c3X3QejyX_3U0_I2frIUYBsBRdgZ-_sKHwHkVudmZfjORb5EwPoBRjU-CcS2LXP4rLp8RM_sm8l4ebSrfeehqIOZzY9wywMBTy67ZAQS13Dj-IUOiPtKHCaO8RBDu07I9km9jT_k_bcdPBKCW0ULFsTHLcjd0qlq33U6TKhw357d8nFHmPhzz_RJAd0PLjUGBfs7lVazFeKckUxP-H4o0f7upG68dw3dStXvBM7LJe5YbImChQFCvTmFloywTfmEUObr4mA1AeYxvfFdXFei4_jxRdmC8Ck-i8E0oy-o5-TfHSR_t-3o3JV9Z3repKa0YZ8WZ4iQ5b_hqFwqYH6fs3R0wAMP_Endt9u=s512"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-center"
            >
              <h2 className="text-2xl font-semibold mb-4">Claudeilson Souza</h2>
              <p className="text-muted-foreground mb-6">
                Desenvolvedor Full Stack e Técnico em TI com experiência em IoT, automação e desenvolvimento backend. 
                Especializado na criação de soluções inovadoras, como bots inteligentes, sistemas embarcados e aplicações web escaláveis.
              </p>
            </motion.div>
          </div>

          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Desenvolvedor Backend
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Transformando Ideias em
            <span className="text-primary"> Sistemas Robustos</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Especializado em arquitetar e desenvolver soluções backend escaláveis,
            seguras e de alta performance
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-11 px-8 shadow hover:bg-primary/90"
            >
              Ver Projetos
            </Link>
            <Link
              to="/skills"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background h-11 px-8 shadow-sm hover:bg-accent hover:text-accent-foreground"
            >
              Minhas Skills
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
