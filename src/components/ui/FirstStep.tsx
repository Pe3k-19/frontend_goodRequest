import { FormHeading } from "@/styles/componnets";
import type { HelpType } from "@/types/contributions";
import { ToggleButtons } from "./ToggleButtons";
import { AmountSection } from "./AmountSection";
import { FormNavigation } from "./FormNavigation";
import { ShelterSection } from "./ShelterSection";

type FirstStepProps = {
  helpType: HelpType;
  onHelpTypeChange: (value: HelpType) => void;
  shelterId: number | null;
  onShelterChange: (value: number | null) => void;
  isShelterRequired: boolean;
  amount: number;
  onAmountChange: (value: number) => void;
  canContinue: boolean;
  onContinue: () => void;
};

export function FirstStep({
  helpType,
  onHelpTypeChange,
  shelterId,
  onShelterChange,
  isShelterRequired,
  amount,
  onAmountChange,
  canContinue,
  onContinue,
}: FirstStepProps) {
  return (
    <>
      <FormHeading>Vyberte si možnosť, ako chcete pomôcť</FormHeading>
      <ToggleButtons value={helpType} onChange={onHelpTypeChange} />

      <ShelterSection
        value={shelterId}
        onChange={onShelterChange}
        required={isShelterRequired}
      />

      <AmountSection value={amount} onChange={onAmountChange} />

      <FormNavigation
        backDisabled
        continueDisabled={!canContinue}
        onContinue={onContinue}
      />
    </>
  );
}
