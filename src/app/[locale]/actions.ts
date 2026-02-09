"use server";

type ActionResult =
  | { success: true }
  | { success: false; error: string };

export async function joinWaitlist(
  _prev: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  const email = formData.get("email");

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return { success: false, error: "invalid-email" };
  }

  // TODO: Replace with your actual implementation:
  // - Save to database
  // - Send to email service (Resend, Mailchimp, etc.)
  // - Call an external API
  console.log("[waitlist] New signup:", email);

  return { success: true };
}

export async function submitSurvey(
  _prev: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  const challenge = formData.get("challenge");
  const challengeOther = formData.get("challengeOther");
  const budget = formData.get("budget");
  const budgetOther = formData.get("budgetOther");
  const currentSolution = formData.get("currentSolution");

  // TODO: Replace with your actual implementation:
  // - Save to database alongside the waitlist email
  // - Send to analytics
  console.log("[waitlist-survey]", {
    challenge: challenge === "other" ? challengeOther : challenge,
    budget: budget === "other" ? budgetOther : budget,
    currentSolution,
  });

  return { success: true };
}
