import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-footer-bg text-primary-foreground/60 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-lg font-bold text-primary-foreground">
              CLOUD<span className="text-primary">ENTIS</span>
            </p>
            <p className="text-xs mt-1">{t("footer.einzelunternehmen")}</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-primary transition-colors">{t("footer.imprint")}</a>
            <a href="#" className="hover:text-primary transition-colors">{t("footer.privacy")}</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center text-xs">
          © {new Date().getFullYear()} Cloudentis. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
