"use client";

import styled from "styled-components";
import type { HelpType } from "@/types/contributions";

const HELP_TYPE_LABELS = {
  shelter: "Prispieť konkrétnemu útulku",
  foundation: "Prispieť celej nadácii",
} as const;

type HelpTypeToggleProps = {
  value: HelpType;
  onChange: (value: HelpType) => void;
};

export const ToggleButtons = ({ value, onChange }: HelpTypeToggleProps) => (
  <ToggleRoot role="group" aria-label="Typ príspevku">
    {(Object.keys(HELP_TYPE_LABELS) as HelpType[]).map((type) => (
      <ToggleButton
        key={type}
        type="button"
        $active={value === type}
        aria-pressed={value === type}
        onClick={() => onChange(type)}
      >
        {HELP_TYPE_LABELS[type]}
      </ToggleButton>
    ))}
  </ToggleRoot>
);

const ToggleRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(0.5)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.background};
`;

const ToggleButton = styled.button<{ $active: boolean }>`
  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(4)}`};
  border-radius: ${({ theme }) => theme.radii.md};
  border: none;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : "transparent"};
  color: ${({ $active, theme }) =>
    $active ? "#ffffff" : theme.colors.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4;
  cursor: pointer;
  text-align: center;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: ${({ $active, theme }) =>
      $active ? theme.colors.primary : theme.colors.surface};
  }

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 1px;
  }
`;
