"use client";

import { Steps } from "antd";
import styled from "styled-components";
import type { ContributionStep } from "@/types/contributions";

type ContributionStepperProps = {
  currentStep: ContributionStep;
};

const items = [
  { title: "Výber útulku" },
  { title: "Osobné údaje" },
  { title: "Potvrdenie" },
];

const StepsWrapper = styled.div`
  &&& .ant-steps-item-process:not(.ant-steps-item-custom) .ant-steps-item-icon {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &&&
    .ant-steps-item-process:not(.ant-steps-item-custom)
    .ant-steps-item-icon
    .ant-steps-item-icon-number {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &&& .ant-steps-item-finish:not(.ant-steps-item-custom) .ant-steps-item-icon {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }

  &&&
    .ant-steps-item-finish:not(.ant-steps-item-custom)
    .ant-steps-item-icon
    .ant-steps-item-icon-finish {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Stepper = ({ currentStep }: ContributionStepperProps) => (
  <StepsWrapper>
    <Steps current={currentStep - 1} items={items} variant="outlined" />
  </StepsWrapper>
);
