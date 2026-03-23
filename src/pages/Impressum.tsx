import { useLanguage } from "@/contexts/LanguageContext";

const Impressum = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-heading font-bold mb-8 text-foreground animate-fade-in">
          {t("impressum.title")}
        </h1>
        
        <div className="space-y-8 text-foreground/80">
          <section className="animate-fade-up" style={{ animationDelay: "100ms" }}>
            <h2 className="text-xl font-bold mb-3">{t("impressum.section1.title")}</h2>
            <p className="whitespace-pre-wrap">{t("impressum.section1.content")}</p>
          </section>

          <section className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-xl font-bold mb-3">{t("impressum.section2.title")}</h2>
            <p className="whitespace-pre-wrap">{t("impressum.section2.content")}</p>
          </section>

          <section className="animate-fade-up" style={{ animationDelay: "300ms" }}>
            <h2 className="text-xl font-bold mb-3">{t("impressum.section3.title")}</h2>
            <p className="whitespace-pre-wrap">{t("impressum.section3.content")}</p>
          </section>

          <section className="animate-fade-up" style={{ animationDelay: "400ms" }}>
            <h2 className="text-xl font-bold mb-3">{t("impressum.section4.title")}</h2>
            <p className="whitespace-pre-wrap">
              {t("impressum.section4.content")}
            </p>
          </section>

          <section className="animate-fade-up" style={{ animationDelay: "500ms" }}>
            <h2 className="text-xl font-bold mb-3">{t("impressum.section5.title")}</h2>
            <p className="whitespace-pre-wrap">{t("impressum.section5.content")}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
