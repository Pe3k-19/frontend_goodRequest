"use client";

import { Controller, useFormContext } from "react-hook-form";
import { FormHeading } from "@/styles/componnets";
import type { ContributionFormValues } from "@/lib/validation/contribution";
import { ToggleButtons } from "./ToggleButtons";
import { AmountSection } from "./AmountSection";
import { FormNavigation } from "./FormNavigation";
import { ShelterSection } from "./ShelterSection";

type FirstStepProps = {
  onContinue: () => void;
};

export function FirstStep({ onContinue }: FirstStepProps) {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<ContributionFormValues>();

  const isShelterRequired = watch("helpType") === "shelter";

  return (
    <>
      <FormHeading>Vyberte si možnosť, ako chcete pomôcť</FormHeading>

      <Controller
        control={control}
        name="helpType"
        render={({ field }) => (
          <ToggleButtons
            value={field.value}
            onChange={(next) => {
              field.onChange(next);
              if (next === "foundation") {
                setValue("shelterId", null, { shouldValidate: false });
              }
            }}
          />
        )}
      />

      <Controller
        control={control}
        name="shelterId"
        render={({ field }) => (
          <ShelterSection
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            required={isShelterRequired}
            error={errors.shelterId?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="amount"
        render={({ field }) => (
          <AmountSection
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            error={errors.amount?.message}
          />
        )}
      />

      <FormNavigation backDisabled onContinue={onContinue} />
    </>
  );
}
