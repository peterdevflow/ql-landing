import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-border bg-white px-6 py-8">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-small text-neutral-medium">
          &copy; {currentYear} QvikLand. {t("copyright")}
        </p>
        <LanguageSwitcher />
      </div>
    </footer>
  );
}
