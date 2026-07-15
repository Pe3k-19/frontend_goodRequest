"use client";

import { useState } from "react";
import styled from "styled-components";
import { SectionBlock, SectionLabel } from "@/styles/componnets";
import { Button } from "./Button";

const PRESET_AMOUNTS = [5, 10, 20, 30, 50, 100] as const;

type AmountSectionProps = {
  value: number;
  onChange: (value: number) => void;
};

export function AmountSection({ value, onChange }: AmountSectionProps) {
  const [inputValue, setInputValue] = useState(value.toString());

  const handleInputChange = (raw: string) => {
    const sanitized = raw.replace(/[^\d]/g, "");
    setInputValue(sanitized || "0");
    onChange(Number(sanitized));
  };

  const handlePresetClick = (amount: number) => {
    setInputValue(amount.toString());
    onChange(amount);
  };

  const presetButtons = PRESET_AMOUNTS.map((amount) => (
    <Button
      key={amount}
      value={amount}
      presetSymbol="€"
      active={Number(value) === amount}
      onClick={() => handlePresetClick(amount)}
    />
  ));

  return (
    <SectionBlock>
      <SectionLabel>Suma, ktorou chcem prispieť</SectionLabel>

      <AmountInputWrapper>
        <AmountInput
          type="text"
          inputMode="numeric"
          value={inputValue}
          onChange={(event) => handleInputChange(event.target.value)}
          aria-label="Suma príspevku v eurách"
        />
        <CurrencySuffix>€</CurrencySuffix>
      </AmountInputWrapper>
      <PresetGrid role="group" aria-label="Predvolené sumy">
        {presetButtons}
      </PresetGrid>
    </SectionBlock>
  );
}

const AmountInputWrapper = styled.div`
  display: flex;
  width: 180px;
  align-self: center;
  align-items: baseline;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(4)} 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

const AmountInput = styled.input`
  width: 120px;
  border: none;
  background: transparent;
  font-size: 4rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`;

const CurrencySuffix = styled.span`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const PresetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing(3)};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
