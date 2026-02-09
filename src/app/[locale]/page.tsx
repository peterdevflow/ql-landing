import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "../../components/landing/hero-section";
import { ProblemSection } from "../../components/landing/problem-section";
import { BenefitsSection } from "../../components/landing/benefits-section";
import { CtaSection } from "../../components/landing/cta-section";
import { Footer } from "../../components/landing/footer";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <BenefitsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
