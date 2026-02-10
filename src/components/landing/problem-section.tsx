import { useTranslations } from "next-intl";
import { AnimatedSection } from "./animated-section";

export function ProblemSection() {
  const t = useTranslations("problem");

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl text-center">
        <AnimatedSection>
          <h2 className="font-heading text-[32px] md:text-section text-neutral-midnight mb-4">
            {t("headline")}
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-body text-neutral-dark leading-relaxed">
            {t("description")}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
