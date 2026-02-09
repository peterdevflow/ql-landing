import { useTranslations } from "next-intl";
import { Button } from "../../components/ui/button";
import { siteConfig } from "@/lib/config";
import { AnimatedSection } from "./animated-section";
import { WaitlistForm } from "./waitlist-form";

export function CtaSection() {
  const t = useTranslations("cta");
  const isWaitlist = siteConfig.mode === "waitlist";

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
            {isWaitlist ? t("waitlistDescription") : t("description")}
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="mt-10 flex justify-center">
            {isWaitlist ? (
              <WaitlistForm />
            ) : (
              <Button size="lg" className="text-base px-8 py-6">
                {t("button")}
              </Button>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
