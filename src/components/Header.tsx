import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { t, otherLang, otherLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Bernasconi" className="h-8 w-auto" />
          </div>
          <span
            className={`text-xs tracking-widest font-medium ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            {t.nav.profession}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about-us" className={`text-sm transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>
            {t.about.label}
          </a>
          <a href="#services" className={`text-sm transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>
            {t.services.label}
          </a>
          <a href="#gallery" className={`text-sm transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>
            {t.gallery.label}
          </a>
          <a href="#hours" className={`text-sm transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>
            {t.hours.label}
          </a>
          <a href="#contact" className={`text-sm transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"}`}>
            {t.contact.label}
          </a>

          {/* Language Switcher */}
          <Link
            to={otherLangPath}
            className={`flex items-center gap-1.5 text-sm transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"
            }`}
          >
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          {/* Call Button */}
          <Button asChild className="bg-accent hover:bg-accent/90">
            <a href="tel:+41627878844">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Link to={otherLangPath} className="text-white hover:text-accent">
            <Globe className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <a href="#about-us" onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-foreground hover:text-primary">
              {t.about.label}
            </a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-foreground hover:text-primary">
              {t.services.label}
            </a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-foreground hover:text-primary">
              {t.gallery.label}
            </a>
            <a href="#hours" onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-foreground hover:text-primary">
              {t.hours.label}
            </a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-foreground hover:text-primary">
              {t.contact.label}
            </a>
            <Button asChild className="w-full bg-accent hover:bg-accent/90">
              <a href="tel:+41627878844">
                <Phone className="h-4 w-4 mr-2" />
                {t.nav.call}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
