import { useTranslations } from "next-intl";
import { Button } from "../../components/ui/button";
import { siteConfig } from "@/lib/config";
import { AnimatedSection } from "./animated-section";
import { WaitlistForm } from "./waitlist-form";

export function HeroSection() {
  const t = useTranslations("hero");
  const isWaitlist = siteConfig.mode === "waitlist";

  return (
    <section className="bg-brand-cream py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <AnimatedSection>
              <h1 className="font-heading text-[44px] md:text-hero text-neutral-midnight leading-tight">
                {t("headline")}
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-body text-neutral-dark max-w-xl">
                {t("subheadline")}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                {isWaitlist ? (
                  <div className="flex flex-col gap-3">
                    <p className="text-small text-neutral-medium">
                      {t("waitlistCta")}
                    </p>
                    <WaitlistForm />
                  </div>
                ) : (
                  <>
                    <Button
                      size="lg"
                      className="bg-brand-terracotta hover:bg-brand-terracotta-dark text-white shadow-medium"
                    >
                      {t("cta")}
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-brand-moss text-brand-moss hover:bg-brand-moss hover:text-white"
                    >
                      {t("secondaryCta")}
                    </Button>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3}>
            <div className="relative hidden lg:block">
              <div className="aspect-4/3 rounded-2xl bg-brand-sage-light/50 flex items-center justify-center shadow-high">
                <p className="text-neutral-medium text-small">
                  {t("mockupPlaceholder")}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
