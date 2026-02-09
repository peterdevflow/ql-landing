"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/src/i18n/navigation";

const localeLabels: Record<string, string> = {
  hu: "Magyar",
  en: "English",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const otherLocale = locale === "hu" ? "en" : "hu";

  function handleSwitch() {
    router.replace(pathname, { locale: otherLocale });
  }

  return (
    <button
      onClick={handleSwitch}
      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      aria-label={`Switch to ${localeLabels[otherLocale]}`}
    >
      {localeLabels[otherLocale]}
    </button>
  );
}
