import { createContext, useContext, useState, ReactNode } from "react";

type Language = "de" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  de: {
    // Nav
    "nav.home": "Home",
    "nav.services": "Was wir tun",
    "nav.about": "Wer bin ich",
    "nav.contact": "Kontakt",

    // Hero
    "hero.title": "Experten-gestützte Digitalisierung",
    "hero.subtitle": "Gemeinsam Zukunft gestalten",
    "hero.tagline": "Wachstum. Resilienz. Nachhaltigkeit.",
    "hero.cta": "Unser Beratungsansatz",
    "hero.cta2": "Kontakt aufnehmen",

    // Discover
    "discover.tag": "#Discover Cloudentis",
    "discover.headline": "Leidenschaft trifft Expertise",
    "discover.text": "Wir vernetzen Ihre Geschäftsprozesse mit cleveren IT-Lösungen, stärken Kundenbeziehungen durch optimiertes CRM und unterstützen mit praxisnahem Consulting. Unser Ziel: Einfache, wirkungsvolle Digitalisierung für Ihr Unternehmen.",

    // Services
    "services.crm.title": "CRM & Dynamics 365",
    "services.crm.desc": "Microsoft Dynamics 365 und Power Platform Expertise – Profitieren Sie von erfolgreichen Beratungs- und Implementierungsprojekten.",
    "services.power.title": "Microsoft Power Platform",
    "services.power.desc": "Prozessbeschleuniger durch Low Code – Automatisieren Sie Ihre Geschäftsprozesse effizient und schnell.",
    "services.data.title": "Daten & Intelligenz",
    "services.data.desc": "Spannende Erkenntnisse mit Business Intelligence und KI – Datengetriebene Entscheidungen für Ihren Erfolg.",
    "services.consulting.title": "IT-Consulting",
    "services.consulting.desc": "Maßgeschneiderte Best-Practice-Lösungen und strategische Beratung für den Mittelstand.",
    "services.cloud.title": "Cloud-Lösungen",
    "services.cloud.desc": "Sichere und skalierbare Cloud-Infrastrukturen für moderne Unternehmen.",
    "services.iot.title": "IoT & Vernetzung",
    "services.iot.desc": "Vernetzte Lösungen für die gesamte IoT-Wertschöpfungskette – vom Sensor bis zur Analyse.",

    // CTA
    "cta.headline": "Ihre Digitalisierungsinitiative sucht uns!",
    "cta.button": "Sprechen Sie mit uns",

    // About
    "about.title": "Über mich",
    "about.subtitle": "Der Mensch hinter Cloudentis",
    "about.intro": "Cloudentis steht für High-End-Digitalisierung zu fairen Konditionen. Als IT-Student mit dem Fokus auf Business Technology kombiniere ich aktuelles Expertenwissen mit über drei Jahren praktischer Erfahrung in der Microsoft-Welt (Dynamics 365 & Power Platform).Ich baue keine Standard-Software, sondern passgenaue Lösungen für Ihre individuellen Anforderungen.Durch meine schlanke Arbeitsweise als Solo-Spezialist biete ich Ihnen maximale Qualität bei minimalem Overhead. Das Ergebnis: Effiziente IT-Projekte, die Ihr Budget respektieren und Ihre Prozesse zukunftssicher machen.",
    "about.experience.title": "Erfahrung",
    "about.experience.text": "Über 3 Jahre Erfahrung in der IT-Branche mit Fokus auf Microsoft Dynamics 365, Power Platform und Cloud-Technologien.",
    "about.approach.title": "Mein Ansatz",
    "about.approach.text": "Partnerschaftlich, praxisnah und ergebnisorientiert. Ich glaube an nachhaltige Lösungen, die wirklich funktionieren.",
    "about.values.title": "Werte",
    "about.values.text": "Transparenz, Qualität und Zuverlässigkeit bilden das Fundament meiner Arbeit. Jedes Projekt wird mit vollem Engagement umgesetzt.",

    // Services Page
    "servicesPage.title": "Was wir tun",
    "servicesPage.subtitle": "Unsere Dienstleistungen im Überblick",
    "servicesPage.intro": "Von der strategischen Beratung bis zur technischen Implementierung – wir begleiten Sie auf dem gesamten Weg der Digitalisierung.",

    // Footer
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.einzelunternehmen": "Einzelunternehmen",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.services": "What We Do",
    "nav.about": "Who Am I",
    "nav.contact": "Contact",
    // Hero
    "hero.title": "Expert-Led Digitalization",
    "hero.subtitle": "Shaping the future together",
    "hero.tagline": "Growth. Resilience. Sustainability.",
    "hero.cta": "Our Consulting Approach",
    "hero.cta2": "Get in Touch",
    // Discover
    "discover.tag": "#Discover Cloudentis",
    "discover.headline": "Passion meets Expertise",
    "discover.text": "We connect your business processes with smart IT solutions, strengthen customer relationships through optimized CRM and support with practical consulting. Our goal: Simple, impactful digitalization for your business.",
    // Services
    "services.crm.title": "CRM & Dynamics 365",
    "services.crm.desc": "Microsoft Dynamics 365 and Power Platform expertise – Benefit from successful consulting and implementation projects.",
    "services.power.title": "Microsoft Power Platform",
    "services.power.desc": "Process accelerator through Low Code – Automate your business processes efficiently and quickly.",
    "services.data.title": "Data & Intelligence",
    "services.data.desc": "Exciting insights with Business Intelligence and AI – Data-driven decisions for your success.",
    "services.consulting.title": "IT Consulting",
    "services.consulting.desc": "Tailored best-practice solutions and strategic consulting for SMEs.",
    "services.cloud.title": "Cloud Solutions",
    "services.cloud.desc": "Secure and scalable cloud infrastructures for modern businesses.",
    "services.iot.title": "IoT & Connectivity",
    "services.iot.desc": "Connected solutions for the entire IoT value chain – from sensor to analytics.",
    // CTA
    "cta.headline": "Your digitalization initiative is looking for us!",
    "cta.button": "Talk to us",
    // About
    "about.title": "About Me",
    "about.subtitle": "The Person Behind Cloudentis",
    "about.intro": "I founded Cloudentis to bridge the gap between high-end digital transformation and sustainable budgets. As a dedicated IT student specializing in the intersection of Technology and Business, I bring the latest 2026 industry standards directly to your projects. With over 3 years of hands-on experience in the Microsoft ecosystem—specifically Dynamics 365 CRM and the Power Platform—I don't just build software; I build solutions that respect your bottom line. My approach is Lean, Agile, and Transparent. By operating as a solo specialist, I eliminate the overhead costs of large agencies, passing those savings directly to you without compromising on quality or security.",
    "about.experience.title": "Experience",
    "about.experience.text": "Over 3 years of experience in the IT industry with a focus on Microsoft Dynamics 365, Power Platform and cloud technologies.",
    "about.approach.title": "My Approach",
    "about.approach.text": "Partnership-oriented, practical and results-driven. I believe in sustainable solutions that truly work.",
    "about.values.title": "Values",
    "about.values.text": "Transparency, quality and reliability form the foundation of my work. Every project is executed with full commitment.",
    // Services Page
    "servicesPage.title": "What We Do",
    "servicesPage.subtitle": "Our Services at a Glance",
    "servicesPage.intro": "From strategic consulting to technical implementation – we accompany you on the entire path of digitalization.",
    // Footer
    "footer.rights": "All rights reserved.",
    "footer.einzelunternehmen": "Sole Proprietorship",
    "footer.imprint": "Imprint",
    "footer.privacy": "Privacy Policy",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("de");

  const t = (key: string) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
