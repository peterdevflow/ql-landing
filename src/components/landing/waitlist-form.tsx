"use client";

import { useActionState, useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { joinWaitlist, submitSurvey } from "@/src/app/[locale]/actions";

const challengeKeys = ["tooComplex", "tooExpensive", "noGoodFit", "manual"] as const;
const budgetKeys = ["free", "low", "mid", "high"] as const;

export function WaitlistForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const t = useTranslations("waitlist");
  const [emailState, emailAction, isEmailPending] = useActionState(
    joinWaitlist,
    null,
  );
  const [surveyState, surveyAction, isSurveyPending] = useActionState(
    submitSurvey,
    null,
  );
  const [skipped, setSkipped] = useState(false);
  const [challengeValue, setChallengeValue] = useState("");
  const [budgetValue, setBudgetValue] = useState("");

  const isDark = variant === "dark";

  // Step 3: final thank you
  if (surveyState?.success || skipped) {
    return (
      <p className={`text-small font-medium ${isDark ? "text-white" : "text-brand-moss"}`}>
        {t("surveyThankYou")}
      </p>
    );
  }

  // Step 2: follow-up survey
  if (emailState?.success) {
    return (
      <div className="flex w-full max-w-sm flex-col gap-4 text-left">
        <p className={`text-small font-medium ${isDark ? "text-white" : "text-brand-moss"}`}>
          {t("success")}
        </p>

        <form action={surveyAction} className="flex flex-col gap-4">
          {/* Challenge question */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="survey-challenge" className={isDark ? "text-white" : undefined}>
              {t("challenge.label")}
            </Label>
            <Select
              name="challenge"
              value={challengeValue}
              onValueChange={setChallengeValue}
            >
              <SelectTrigger id="survey-challenge" className="w-full">
                <SelectValue placeholder={t("challenge.placeholder")} />
              </SelectTrigger>
              <SelectContent>
                {challengeKeys.map((key) => (
                  <SelectItem key={key} value={key}>
                    {t(`challenge.${key}`)}
                  </SelectItem>
                ))}
                <SelectItem value="other">{t("challenge.other")}</SelectItem>
              </SelectContent>
            </Select>
            {challengeValue === "other" && (
              <Input
                name="challengeOther"
                placeholder={t("challenge.otherPlaceholder")}
              />
            )}
          </div>

          {/* Current solution question */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="survey-current-solution" className={isDark ? "text-white" : undefined}>
              {t("currentSolution.label")}
            </Label>
            <Input
              id="survey-current-solution"
              name="currentSolution"
              placeholder={t("currentSolution.placeholder")}
            />
          </div>

          {/* Budget question */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="survey-budget" className={isDark ? "text-white" : undefined}>
              {t("budget.label")}
            </Label>
            <Select
              name="budget"
              value={budgetValue}
              onValueChange={setBudgetValue}
            >
              <SelectTrigger id="survey-budget" className="w-full">
                <SelectValue placeholder={t("budget.placeholder")} />
              </SelectTrigger>
              <SelectContent>
                {budgetKeys.map((key) => (
                  <SelectItem key={key} value={key}>
                    {t(`budget.${key}`)}
                  </SelectItem>
                ))}
                <SelectItem value="other">{t("budget.other")}</SelectItem>
              </SelectContent>
            </Select>
            {budgetValue === "other" && (
              <Input
                name="budgetOther"
                placeholder={t("budget.otherPlaceholder")}
              />
            )}
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className={isDark ? "text-white hover:bg-white/10" : undefined}
              onClick={() => setSkipped(true)}
            >
              {t("surveySkip")}
            </Button>
            <Button
              type="submit"
              size="sm"
              disabled={isSurveyPending}
              className={isDark ? "bg-white text-brand-moss hover:bg-brand-cream" : "bg-brand-terracotta hover:bg-brand-terracotta-dark text-white"}
            >
              {isSurveyPending ? t("surveySubmitting") : t("surveySubmit")}
            </Button>
          </div>
        </form>
      </div>
    );
  }

  // Step 1: email capture
  return (
    <form
      action={emailAction}
      className="flex w-full max-w-sm flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="waitlist-email" className="sr-only">
        {t("emailLabel")}
      </label>
      <Input
        id="waitlist-email"
        name="email"
        type="email"
        required
        placeholder={t("placeholder")}
        className={`h-10 flex-1 ${isDark ? "bg-white/10 border-white/30 text-white placeholder:text-white/60" : "border-neutral-border focus:ring-brand-moss focus:border-brand-moss"}`}
        aria-describedby={
          emailState?.success === false ? "waitlist-error" : undefined
        }
      />
      <Button
        type="submit"
        size="lg"
        disabled={isEmailPending}
        className={isDark ? "bg-white text-brand-moss hover:bg-brand-cream" : "bg-brand-terracotta hover:bg-brand-terracotta-dark text-white"}
      >
        {isEmailPending ? t("submitting") : t("button")}
      </Button>
      {emailState?.success === false && (
        <p
          id="waitlist-error"
          className={`text-small sm:col-span-2 ${isDark ? "text-red-300" : "text-destructive"}`}
        >
          {t("error")}
        </p>
      )}
    </form>
  );
}
