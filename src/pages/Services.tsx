import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";
import { Monitor, Zap, BarChart3, Users, Cloud, Cpu } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { title: t("services.crm.title"), desc: t("services.crm.desc"), Icon: Monitor },
    { title: t("services.power.title"), desc: t("services.power.desc"), Icon: Zap },
    { title: t("services.data.title"), desc: t("services.data.desc"), Icon: BarChart3 },
    { title: t("services.consulting.title"), desc: t("services.consulting.desc"), Icon: Users },
    { title: t("services.cloud.title"), desc: t("services.cloud.desc"), Icon: Cloud },
    { title: t("services.iot.title"), desc: t("services.iot.desc"), Icon: Cpu },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-hero-dark py-24 lg:py-32">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4 animate-fade-up">
            Cloudentis
          </p>
          <h1
            className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight text-balance animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            {t("servicesPage.title")}
          </h1>
          <p
            className="mt-6 text-primary-foreground/60 text-lg animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            {t("servicesPage.intro")}
          </p>
        </div>
      </section>

      {/* Detailed services */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">
          {services.map((service, i) => (
            <ScrollReveal key={i} animation={i % 2 === 0 ? "slide-left" : "slide-right"} delay={0}>
              <div className={`flex flex-col md:flex-row items-start gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <service.Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-3">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{service.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-dark text-center">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground tracking-tight mb-8 text-balance">
            {t("cta.headline")}
          </h2>
          <a
            href="mailto:sales@cloudentis.de"
            className="inline-block bg-primary text-primary-foreground px-10 py-3.5 rounded-md font-medium text-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200"
          >
            {t("cta.button")}
          </a>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Services;
