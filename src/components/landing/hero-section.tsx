import { useTranslations } from "next-intl";
import { Button } from "../../components/ui/button";
import { siteConfig } from "@/lib/config";
import { AnimatedSection } from "./animated-section";
import { WaitlistForm } from "./waitlist-form";

export function HeroSection() {
  const t = useTranslations("hero");
  const isWaitlist = siteConfig.mode === "waitlist";

  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-background px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <AnimatedSection>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {t("headline")}
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl md:text-2xl">
            {t("subheadline")}
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-4">
            {isWaitlist ? (
              <>
                <p className="text-sm text-muted-foreground">
                  {t("waitlistCta")}
                </p>
                <WaitlistForm />
              </>
            ) : (
              <Button size="lg" className="text-base px-8 py-6">
                {t("cta")}
              </Button>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
