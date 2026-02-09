import { useTranslations } from "next-intl";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../components/ui/card";
import { Zap, Sparkles, Shield } from "lucide-react";
import { AnimatedSection } from "./animated-section";

const benefitKeys = ["fast", "simple", "secure"] as const;

const icons = {
  fast: Zap,
  simple: Sparkles,
  secure: Shield,
} as const;

export function BenefitsSection() {
  const t = useTranslations("benefits");

  return (
    <section className="bg-background px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("headline")}
          </h2>
        </AnimatedSection>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefitKeys.map((key, i) => {
            const Icon = icons[key];
            return (
              <AnimatedSection key={key} delay={i * 0.1}>
                <Card className="h-full">
                  <CardHeader>
                    <Icon className="size-10 text-primary" aria-hidden="true" />
                    <CardTitle className="mt-4 text-xl">
                      {t(`items.${key}.title`)}
                    </CardTitle>
                    <CardDescription className="mt-2 text-base">
                      {t(`items.${key}.description`)}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
