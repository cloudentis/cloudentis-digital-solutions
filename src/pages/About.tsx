import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

import { Briefcase, Compass, Heart } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: Briefcase, title: t("about.experience.title"), text: t("about.experience.text") },
    { icon: Compass, title: t("about.approach.title"), text: t("about.approach.text") },
    { icon: Heart, title: t("about.values.title"), text: t("about.values.text") },
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
            {t("about.title")}
          </h1>
          <p
            className="mt-4 text-primary-foreground/60 text-lg animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      {/* About content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <ScrollReveal animation="slide-left" className="lg:w-2/5 flex-shrink-0">
              <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-foreground/10">
                <div className="w-full aspect-[4/5] bg-muted flex items-center justify-center text-muted-foreground">
                  <span className="text-sm border border-dashed border-muted-foreground/30 px-4 py-8 rounded-md italic">
                    Image removed
                  </span>
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 rounded-lg" />
              </div>
            </ScrollReveal>
            <ScrollReveal animation="slide-right" className="lg:w-3/5">
              <h2 className="text-3xl font-bold font-heading mb-6 text-foreground">Vaishnavi Onkar Magdum</h2>
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                {t("about.intro")}
              </p>
            </ScrollReveal>
          </div>

          {/* Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-card rounded-lg p-8 shadow-lg shadow-foreground/5 h-full hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-300">
                  <card.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{card.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
