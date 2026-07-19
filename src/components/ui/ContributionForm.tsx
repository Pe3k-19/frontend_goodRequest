"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { Stepper } from "@/components/ui/Stepper";
import { FormRoot } from "@/styles/componnets";
import {
  createContributionSchema,
  STEP1_FIELDS,
  STEP2_FIELDS,
  STEP3_FIELDS,
  type ContributionFormValues,
} from "@/lib/validation/contribution";
import { ApiError } from "@/lib/api/http";
import { useContribute } from "@/lib/hooks/contribute";
import type { ApiMessage } from "@/lib/api/contribute";
import { useSuccessToast } from "@/lib/hooks/successToast";
import { PHONE_COUNTRY_CONFIG } from "@/constants/phone";
import type { ContributionStep } from "@/types/contributions";
import { FirstStep } from "./FirstStep";
import { ThirdStep } from "./ThirdStep";
import { SecondStep } from "./SecondStep";

const defaultValues: ContributionFormValues = {
  helpType: "foundation",
  shelterId: null,
  amount: 0,
  firstName: "",
  lastName: "",
  email: "",
  phoneCountry: "SK",
  phone: `${PHONE_COUNTRY_CONFIG.SK.dialCode} `,
  consent: false,
};

function getSubmitErrorMessage(
  error: unknown,
  fallback: string,
): string {
  if (!(error instanceof ApiError)) return fallback;

  const messages = (error.data as { messages?: ApiMessage[] } | undefined)
    ?.messages;
  const firstError = messages?.find((message) => message.type === "ERROR");
  return firstError?.message ?? fallback;
}

export function ContributionForm() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState<ContributionStep>(1);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const methods = useForm<ContributionFormValues>({
    resolver: (values, context, options) =>
      zodResolver(createContributionSchema(t))(values, context, options),
    mode: "onTouched",
    defaultValues,
  });

  const { trigger, handleSubmit, reset } = methods;
  const { mutateAsync: contribute, isPending } = useContribute();
  const { showSuccessToast } = useSuccessToast();

  const goToStep2 = async () => {
    const isStepValid = await trigger(STEP1_FIELDS);
    if (isStepValid) setCurrentStep(2);
  };

  const goToStep3 = async () => {
    const isStepValid = await trigger(STEP2_FIELDS);
    if (isStepValid) setCurrentStep(3);
  };

  const submitForm = handleSubmit(async (values) => {
    setSubmitError(null);
    const isStepValid = await trigger(STEP3_FIELDS);
    if (isStepValid) {
      try {
        await contribute({
          value: values.amount,
          shelterID: values.shelterId,
          contributors: [
            {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              phone: values.phone,
            },
          ],
        });

        showSuccessToast(values.helpType);
        reset(defaultValues);
        setCurrentStep(1);
      } catch (error) {
        setSubmitError(getSubmitErrorMessage(error, t("form.submitError")));
      }
    }
  });

  return (
    <FormProvider {...methods}>
      <FormRoot as="form" noValidate>
        <Stepper currentStep={currentStep} />
        {currentStep === 1 && <FirstStep onContinue={goToStep2} />}
        {currentStep === 2 && (
          <SecondStep onBack={() => setCurrentStep(1)} onContinue={goToStep3} />
        )}
        {currentStep === 3 && (
          <ThirdStep
            onBack={() => {
              setSubmitError(null);
              setCurrentStep(2);
            }}
            onSubmit={submitForm}
            isSubmitting={isPending}
            error={submitError}
          />
        )}
      </FormRoot>
    </FormProvider>
  );
}
