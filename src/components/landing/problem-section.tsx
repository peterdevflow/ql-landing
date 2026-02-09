import { useTranslations } from "next-intl";
import { AnimatedSection } from "./animated-section";

export function ProblemSection() {
  const t = useTranslations("problem");

  return (
    <section className="bg-muted px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("headline")}
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="mt-6 text-lg text-muted-foreground">
            {t("description")}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
