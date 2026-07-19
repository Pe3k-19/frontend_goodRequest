import { z } from "zod";
import type { TFunction } from "i18next";
import { hasValidEmailDomain } from "@/functions/validation";

export function createContributionSchema(t: TFunction) {
  return z
    .object({
      helpType: z.enum(["shelter", "foundation"]),
      shelterId: z.number().nullable(),
      amount: z
        .number({ error: t("validation.amountRequired") })
        .gt(0, { message: t("validation.amountPositive") }),
      firstName: z
        .string()
        .trim()
        .refine((value) => value.length === 0 || value.length >= 2, {
          message: t("validation.firstNameMin"),
        })
        .refine((value) => value.length <= 20, {
          message: t("validation.firstNameMax"),
        }),
      lastName: z
        .string()
        .trim()
        .min(2, { message: t("validation.lastNameMin") })
        .max(30, { message: t("validation.lastNameMax") }),
      email: z
        .email({ message: t("validation.emailInvalid") })
        .refine(hasValidEmailDomain, {
          message: t("validation.emailDomain"),
        }),
      phoneCountry: z.enum(["SK", "CZ"]),
      phone: z
        .string()
        .refine((value) => /^\+42[01]\d{9}$/.test(value.replace(/\s+/g, "")), {
          message: t("validation.phoneInvalid"),
        }),
      consent: z.boolean().refine((value) => value === true, {
        message: t("validation.consentRequired"),
      }),
    })
    .refine((data) => data.helpType !== "shelter" || data.shelterId !== null, {
      path: ["shelterId"],
      message: t("validation.shelterRequired"),
    });
}

export type ContributionFormValues = z.infer<
  ReturnType<typeof createContributionSchema>
>;

export const STEP1_FIELDS = [
  "helpType",
  "shelterId",
  "amount",
] as const satisfies (keyof ContributionFormValues)[];

export const STEP2_FIELDS = [
  "firstName",
  "lastName",
  "email",
  "phoneCountry",
  "phone",
] as const satisfies (keyof ContributionFormValues)[];

export const STEP3_FIELDS = [
  "consent",
] as const satisfies (keyof ContributionFormValues)[];
