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
    "services.ai.title": "Agentic AI & KI-Beratung",
    "services.ai.desc": "Intelligente Automatisierung durch modernste KI-Agenten und strategische KI-Beratung für Ihr Unternehmen.",

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

    // Impressum
    "impressum.title": "Impressum",
    "impressum.section1.title": "Angaben gemäß § 5 DDG",
    "impressum.section1.content": "Vaishnavi Onkar Magdum\nCloudentis\nParadiesstraße 34\n73230 Kirchheim unter Teck",
    "impressum.section2.title": "Kontakt",
    "impressum.section2.content": "Telefon: +49 155 65359460\nE-Mail: info@cloudentis.de",
    "impressum.section3.title": "Umsatzsteuer-Identifikationsnummer",
    "impressum.section3.content": "Nicht vorhanden (gemäß § 19 UStG wird keine Umsatzsteuer erhoben).",
    "impressum.section4.title": "EU-Streitschlichtung",
    "impressum.section4.content": "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/.\nUnsere E-Mail-Adresse finden Sie oben im Impressum.",
    "impressum.section5.title": "Verbraucherstreitbeilegung/Universalschlichtungsstelle",
    "impressum.section5.content": "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",

    // Privacy
    "privacy.title": "Datenschutzerklärung",
    "privacy.section1.title": "1. Datenschutz auf einen Blick",
    "privacy.section1.content": "Allgemeine Hinweise\nDie folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.\n\nDatenerfassung auf dieser Website\nDie Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.",
    "privacy.section2.title": "2. Hosting durch GitHub Pages",
    "privacy.section2.content": "Wir hosten unsere Website bei GitHub Pages. Anbieter ist die GitHub Inc., 88 Colin P. Kelly Jr. St, San Francisco, CA 94107, USA (nachfolgend „GitHub“).\n\nWenn Sie unsere Website besuchen, erfasst GitHub Log-Dateien, einschließlich Ihrer IP-Adresse, um die Sicherheit und den Betrieb des Dienstes zu gewährleisten. Die Verwendung von GitHub Pages erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.\n\nDatenübertragung in die USA\nDie Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: GitHub Privacy Statement.",
    "privacy.section3.title": "3. Allgemeine Hinweise und Pflichtinformationen",
    "privacy.section3.content": "Widerruf Ihrer Einwilligung zur Datenverarbeitung\nViele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.\n\nBeschwerderecht bei der zuständigen Aufsichtsbehörde\nIm Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu.\n\nRecht auf Auskunft, Löschung und Korrektur\nSie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung oder Löschung dieser Daten.",
    "privacy.section4.title": "4. Datenerfassung auf dieser Website",
    "privacy.section4.content": "Server-Log-Dateien\nDer Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:\n\n• Browsertyp und Browserversion\n• Verwendetes Betriebssystem\n• Referrer URL\n• Hostname des zugreifenden Rechners\n• Uhrzeit der Serveranfrage\n• IP-Adresse\n\nEine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO.",
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
    "services.ai.title": "Agentic AI & AI Consulting",
    "services.ai.desc": "Intelligent automation through cutting-edge AI agents and strategic AI consulting for your business.",
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
    
    // Impressum
    "impressum.title": "Legal Notice / Imprint",
    "impressum.section1.title": "Information pursuant to § 5 DDG",
    "impressum.section1.content": "Vaishnavi Onkar Magdum\nCloudentis\nParadiesstraße 34\n73230 Kirchheim unter Teck",
    "impressum.section2.title": "Contact",
    "impressum.section2.content": "Phone: +49 155 65359460\nEmail: info@cloudentis.de",
    "impressum.section3.title": "VAT ID",
    "impressum.section3.content": "Not applicable (no VAT is charged pursuant to § 19 UStG).",
    "impressum.section4.title": "EU Dispute Resolution",
    "impressum.section4.content": "The European Commission provides a platform for online dispute resolution (OS): https://ec.europa.eu/consumers/odr/.\nOur email address can be found above in the legal notice.",
    "impressum.section5.title": "Consumer Dispute Resolution",
    "impressum.section5.content": "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.",

    // Privacy
    "privacy.title": "Privacy Policy",
    "privacy.section1.title": "1. Privacy at a Glance",
    "privacy.section1.content": "General Information\nThe following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you could be personally identified.\n\nData collection on this website\nData processing on this website is carried out by the website operator. You can find their contact details in the imprint of this website.",
    "privacy.section2.title": "2. Hosting via GitHub Pages",
    "privacy.section2.content": "We host our website on GitHub Pages. The provider is GitHub Inc., 88 Colin P. Kelly Jr. St, San Francisco, CA 94107, USA (hereinafter referred to as \"GitHub\").\n\nWhen you visit our website, GitHub collects log files, including your IP address, to ensure the security and operation of the service. GitHub Pages is used on the basis of Art. 6 Para. 1 lit. f GDPR. We have a legitimate interest in the most reliable presentation of our website.\n\nData transfer to the USA\nData transfer to the US is based on the standard contractual clauses of the EU Commission. Details can be found here: GitHub Privacy Statement.",
    "privacy.section3.title": "3. General Information and Mandatory Information",
    "privacy.section3.content": "Revocation of your consent to data processing\nMany data processing operations are only possible with your express consent. You can revoke your consent at any time. The legality of the data processing carried out until the revocation remains unaffected by the revocation.\n\nRight to complain to the competent supervisory authority\nIn the event of violations of the GDPR, those affected have the right to lodge a complaint with a supervisory authority.\n\nRight to information, deletion and correction\nWithin the framework of the applicable legal provisions, you have the right to free information about your stored personal data at any time, as well as the right to have this data corrected or deleted.",
    "privacy.section4.title": "4. Data collection on this website",
    "privacy.section4.content": "Server log files\nThe provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are:\n\n• Browser type and browser version\n• Operating system used\n• Referrer URL\n• Host name of the accessing computer\n• Time of the server request\n• IP address\n\nThis data is not merged with other data sources. The basis for data processing is Art. 6 (1) lit. f GDPR.",
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
