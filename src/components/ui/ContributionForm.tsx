"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stepper } from "@/components/ui/Stepper";
import { FormRoot } from "@/styles/componnets";
import {
  contributionSchema,
  STEP1_FIELDS,
  type ContributionFormValues,
} from "@/lib/validation/contribution";
import type { ContributionStep } from "@/types/contributions";
import { FirstStep } from "./FirstStep";

const defaultValues: ContributionFormValues = {
  helpType: "foundation",
  shelterId: null,
  amount: 0,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

export function ContributionForm() {
  const [currentStep, setCurrentStep] = useState<ContributionStep>(1);
  const methods = useForm<ContributionFormValues>({
    resolver: zodResolver(contributionSchema),
    mode: "onTouched",
    defaultValues,
  });

  const { trigger, handleSubmit } = methods;

  const goToStep2 = async () => {
    const isStepValid = await trigger(STEP1_FIELDS);
    if (isStepValid) setCurrentStep(2);
  };

  const submitStep2 = handleSubmit(() => {
    setCurrentStep(3);
  });

  return (
    <FormProvider {...methods}>
      <FormRoot as="form" noValidate onSubmit={submitStep2}>
        <Stepper currentStep={currentStep} />
        {currentStep === 1 && <FirstStep onContinue={goToStep2} />}
      </FormRoot>
    </FormProvider>
  );
}
