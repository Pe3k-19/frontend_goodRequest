"use client";

import styled from "styled-components";
import { NavButton } from "./NavButton";

type FormNavigationProps = {
  onBack?: () => void;
  onContinue?: () => void;
  backDisabled?: boolean;
  continueDisabled?: boolean;
};

export function FormNavigation({
  onBack,
  onContinue,
  backDisabled = false,
  continueDisabled = false,
}: FormNavigationProps) {
  return (
    <NavigationRoot>
      <NavButton
        variant="secondary"
        label="Späť"
        disabled={backDisabled}
        isBackButton={true}
        onClick={onBack}
      />
      <NavButton
        variant="primary"
        label="Pokračovať"
        disabled={continueDisabled}
        onClick={onContinue}
      />
    </NavigationRoot>
  );
}

const NavigationRoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing(6)};
`;
