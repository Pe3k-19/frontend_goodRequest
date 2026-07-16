import { z } from "zod";

export type ContributionFormValues = z.infer<typeof contributionSchema>;

export const STEP1_FIELDS = [
  "helpType",
  "shelterId",
  "amount",
] as const satisfies (keyof ContributionFormValues)[];

export const STEP2_FIELDS = [
  "firstName",
  "lastName",
  "email",
  "phone",
] as const satisfies (keyof ContributionFormValues)[];

const step1Base = z.object({
  helpType: z.enum(["shelter", "foundation"]),
  shelterId: z.number().nullable(),
  amount: z
    .number({ error: "Zadajte sumu, ktorou chcete prispieť" })
    .gt(0, { message: "Suma musí byť väčšia ako 0" }),
});

const step2Base = z.object({
  firstName: z
    .string()
    .trim()
    .refine((value) => value.length === 0 || value.length >= 2, {
      message: "Meno musí mať aspoň 2 znaky",
    })
    .refine((value) => value.length <= 20, {
      message: "Meno môže mať najviac 20 znakov",
    }),
  lastName: z
    .string()
    .trim()
    .min(2, { message: "Priezvisko musí mať aspoň 2 znaky" })
    .max(30, { message: "Priezvisko môže mať najviac 30 znakov" }),
  email: z.email({ message: "Zadajte platnú e-mailovú adresu" }),
  phone: z
    .string()
    .refine((value) => /^\+42[01]\d{9}$/.test(value.replace(/\s+/g, "")), {
      message: "Zadajte platné číslo v tvare",
    }),
});

export const contributionSchema = step1Base
  .extend(step2Base.shape)
  .refine((data) => data.helpType !== "shelter" || data.shelterId !== null, {
    path: ["shelterId"],
    message: "Vyberte útulok zo zoznamu",
  });
