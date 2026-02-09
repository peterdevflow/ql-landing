import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} AppName. {t("copyright")}
        </p>
        <LanguageSwitcher />
      </div>
    </footer>
  );
}
