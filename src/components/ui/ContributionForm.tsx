"use client";

import { useState } from "react";
import { Stepper } from "@/components/ui/Stepper";
import { FormRoot } from "@/styles/componnets";
import type { HelpType } from "@/types/contributions";
import { FirstStep } from "./FirstStep";

type ContributionStep = 1 | 2 | 3;

export function ContributionForm() {
  const [currentStep, setCurrentStep] = useState<ContributionStep>(1);
  const [helpType, setHelpType] = useState<HelpType>("foundation");
  const [shelterId, setShelterId] = useState<number | null>(null);
  const [amount, setAmount] = useState<number>(0);

  const isShelterRequired = helpType === "shelter";
  const canContinueStep1 =
    amount > 0 && (!isShelterRequired || shelterId !== null);

  const handleHelpTypeChange = (next: HelpType) => {
    setHelpType(next);
    if (next === "foundation") {
      setShelterId(null);
    }
  };

  return (
    <FormRoot>
      <Stepper currentStep={currentStep} />
      {currentStep === 1 && (
        <FirstStep
          helpType={helpType}
          onHelpTypeChange={handleHelpTypeChange}
          shelterId={shelterId}
          onShelterChange={setShelterId}
          isShelterRequired={isShelterRequired}
          amount={amount}
          onAmountChange={setAmount}
          canContinue={canContinueStep1}
          onContinue={() => setCurrentStep(2)}
        />
      )}
    </FormRoot>
  );
}
