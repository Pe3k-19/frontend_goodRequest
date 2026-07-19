"use client";

import { Steps } from "antd";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import type { ContributionStep } from "@/types/contributions";

type ContributionStepperProps = {
  currentStep: ContributionStep;
};

export const Stepper = ({ currentStep }: ContributionStepperProps) => {
  const { t } = useTranslation();

  const items = [
    { title: t("steps.shelter") },
    { title: t("steps.personal") },
    { title: t("steps.confirmation") },
  ];

  return (
    <StepsWrapper>
      <Steps
        current={currentStep - 1}
        items={items}
        variant="outlined"
        responsive={false}
      />
    </StepsWrapper>
  );
};

const StepsWrapper = styled.div`
  &&& .ant-steps-item-process:not(.ant-steps-item-custom) .ant-steps-item-icon {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &&& .ant-steps-item-finish:not(.ant-steps-item-custom) .ant-steps-item-icon {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    .ant-steps-item-title {
      display: none;
    }
  }
`;
