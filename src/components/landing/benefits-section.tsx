import { useTranslations } from "next-intl";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
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
    <section className="py-16 md:py-24 bg-neutral-bg">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-heading text-[32px] md:text-section text-neutral-midnight mb-4">
              {t("headline")}
            </h2>
            <p className="text-body text-neutral-medium max-w-2xl mx-auto">
              {t("subheadline")}
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitKeys.map((key, i) => {
            const Icon = icons[key];
            return (
              <AnimatedSection key={key} delay={i * 0.1}>
                <Card className="h-full border-neutral-border shadow-low hover:shadow-medium transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-brand-sage-light flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-brand-moss" aria-hidden="true" />
                    </div>
                    <CardTitle className="font-heading text-h4 text-neutral-midnight">
                      {t(`items.${key}.title`)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body text-neutral-dark leading-relaxed">
                      {t(`items.${key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
