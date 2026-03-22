import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";
import { Monitor, Zap, BarChart3, Users, Cloud, Cpu } from "lucide-react";

const serviceIcons = [Monitor, Zap, BarChart3, Users, Cloud, Cpu];

const Index = () => {
  const { t } = useLanguage();

  const services = [
    { title: t("services.crm.title"), desc: t("services.crm.desc") },
    { title: t("services.power.title"), desc: t("services.power.desc") },
    { title: t("services.data.title"), desc: t("services.data.desc") },
    { title: t("services.consulting.title"), desc: t("services.consulting.desc") },
    { title: t("services.cloud.title"), desc: t("services.cloud.desc") },
    { title: t("services.iot.title"), desc: t("services.iot.desc") },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 animate-fade-up">
            Cloudentis
          </p>
          <h1
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[0.95] tracking-tight text-balance animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            {t("hero.title")}
          </h1>
          <p
            className="mt-6 text-primary-foreground/70 text-lg md:text-xl animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            {t("hero.subtitle")}
          </p>
          <p
            className="mt-2 text-primary font-medium text-lg animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            {t("hero.tagline")}
          </p>
          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <Link
              to="/services"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium text-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200"
            >
              {t("hero.cta")}
            </Link>
            <a
              href="mailto:info@cloudentis.de"
              className="inline-block border border-primary-foreground/20 text-primary-foreground px-8 py-3 rounded-md font-medium text-sm hover:bg-primary-foreground/5 active:scale-[0.97] transition-all duration-200"
            >
              {t("hero.cta2")}
            </a>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <ScrollReveal>
            <p className="text-primary font-medium text-sm tracking-wide">{t("discover.tag")}</p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
              {t("discover.headline")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed text-pretty max-w-2xl mx-auto">
              {t("discover.text")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-hero-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <ScrollReveal key={i} delay={i * 80} animation="fade-up">
                  <div className="group bg-service-card rounded-lg p-8 h-full hover:bg-service-card-hover transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 active:scale-[0.98]">
                    <Icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                    <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-primary-foreground/60 text-sm leading-relaxed text-pretty">
                      {service.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight text-balance">
              {t("cta.headline")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <a
              href="mailto:info@cloudentis.de"
              className="inline-block mt-8 bg-primary text-primary-foreground px-10 py-3.5 rounded-md font-medium text-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200"
            >
              {t("cta.button")}
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
