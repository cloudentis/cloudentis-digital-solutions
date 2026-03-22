import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/services", label: t("nav.services") },
    { to: "/about", label: t("nav.about") },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero-dark/95 backdrop-blur-sm border-b border-primary/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-heading text-xl font-bold tracking-tight text-primary-foreground">
          CLOUD<span className="text-primary">ENTIS</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive(link.to)
                  ? "text-primary"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-1 ml-4 rounded-md bg-primary/10 p-0.5">
            <button
              onClick={() => setLang("de")}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-all duration-200 ${
                lang === "de"
                  ? "bg-primary text-primary-foreground"
                  : "text-primary-foreground/60 hover:text-primary-foreground"
              }`}
            >
              DE
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-all duration-200 ${
                lang === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-primary-foreground/60 hover:text-primary-foreground"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-hero-dark border-t border-primary/10 px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium ${
                isActive(link.to) ? "text-primary" : "text-primary-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-3">
            <button
              onClick={() => { setLang("de"); setMobileOpen(false); }}
              className={`px-3 py-1.5 text-xs rounded ${lang === "de" ? "bg-primary text-primary-foreground" : "text-primary-foreground/60 bg-primary/10"}`}
            >
              DE
            </button>
            <button
              onClick={() => { setLang("en"); setMobileOpen(false); }}
              className={`px-3 py-1.5 text-xs rounded ${lang === "en" ? "bg-primary text-primary-foreground" : "text-primary-foreground/60 bg-primary/10"}`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
