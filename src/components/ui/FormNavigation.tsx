"use client";

import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { NavButton } from "./NavButton";

type FormNavigationProps = {
  onBack?: () => void;
  onContinue?: () => void;
  backDisabled?: boolean;
  continueDisabled?: boolean;
  continueLabel?: string;
  continueShowIcon?: boolean;
};

export function FormNavigation({
  onBack,
  onContinue,
  backDisabled = false,
  continueDisabled = false,
  continueLabel,
  continueShowIcon = true,
}: FormNavigationProps) {
  const { t } = useTranslation();

  return (
    <NavigationRoot>
      <NavButton
        variant="secondary"
        label={t("common.back")}
        disabled={backDisabled}
        isBackButton={true}
        onClick={onBack}
      />
      <NavButton
        variant="primary"
        label={continueLabel ?? t("common.continue")}
        disabled={continueDisabled}
        showIcon={continueShowIcon}
        onClick={onContinue}
      />
    </NavigationRoot>
  );
}

const NavigationRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing(6)};
`;
