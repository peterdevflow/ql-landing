import { useTranslations } from "next-intl";
import { Button } from "../../components/ui/button";
import { siteConfig } from "@/lib/config";
import { AnimatedSection } from "./animated-section";
import { WaitlistForm } from "./waitlist-form";

export function CtaSection() {
  const t = useTranslations("cta");
  const isWaitlist = siteConfig.mode === "waitlist";

  return (
    <section className="py-16 md:py-24 bg-brand-moss text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
        <AnimatedSection>
          <h2 className="font-heading text-[32px] md:text-section mb-4">
            {t("headline")}
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-body opacity-90 mb-8 max-w-2xl mx-auto">
            {isWaitlist ? t("waitlistDescription") : t("description")}
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isWaitlist ? (
              <WaitlistForm variant="dark" />
            ) : (
              <>
                <Button
                  size="lg"
                  className="bg-white text-brand-moss hover:bg-brand-cream"
                >
                  {t("button")}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  {t("secondaryButton")}
                </Button>
              </>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
