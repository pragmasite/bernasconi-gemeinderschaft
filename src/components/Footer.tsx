import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const { t, otherLangPath } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-col gap-2 mb-4">
              <img src="/images/logo.png" alt="Bernasconi" className="h-8 w-auto brightness-0 invert" />
              <span className="text-xs tracking-widest font-medium text-primary-foreground/70">
                {t.nav.profession}
              </span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/people/Bernasconi/100092465294507/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/bernasconi_ch/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-lg mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about-us" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t.about.label}
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t.services.label}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t.gallery.label}
                </a>
              </li>
              <li>
                <a href="#hours" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t.hours.label}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {t.contact.label}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Language */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-lg mb-4">{t.contact.label}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70 mb-6">
              <li>
                <a href="tel:+41627878844" className="hover:text-accent transition-colors">
                  +41 62 787 88 44
                </a>
              </li>
              <li>
                <a href="mailto:info@bernasconi.ch" className="hover:text-accent transition-colors">
                  info@bernasconi.ch
                </a>
              </li>
              <li>Feldhofweg 1, 4663 Aarburg, CH</li>
            </ul>
            <Link
              to={otherLangPath}
              className="inline-block text-sm px-3 py-1 rounded bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            >
              Deutsch / English
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/70"
      >
        <p>
          © 2024 Bernasconi Gemeinderschaft. {t.footer.copyright}
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
