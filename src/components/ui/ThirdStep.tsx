"use client";

import { useState } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { useShelters } from "@/lib/hooks/shelters";
import type { ContributionFormValues } from "@/lib/validation/contribution";
import { FormHeading, SectionBlock, SectionLabel } from "@/styles/componnets";
import { Checkbox } from "./Checkbox";
import { FormNavigation } from "./FormNavigation";

const HELP_TYPE_SUMMARY = {
  foundation: "Finančný príspevok celej nadácii",
  shelter: "Finančný príspevok konkrétnemu útulku",
} as const;

type ThirdStepProps = {
  onBack: () => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
  error?: string | null;
};

export function ThirdStep({
  onBack,
  onSubmit,
  isSubmitting,
  error,
}: ThirdStepProps) {
  const [consent, setConsent] = useState(false);
  const { getValues } = useFormContext<ContributionFormValues>();
  const { data: shelters = [] } = useShelters();

  const values = getValues();
  const shelterName = shelters.find(
    (shelter) => shelter.id === values.shelterId,
  )?.name;

  const contributionRows = [
    { label: "Forma pomoci", value: HELP_TYPE_SUMMARY[values.helpType] },
    ...(shelterName ? [{ label: "Útulok", value: shelterName }] : []),
    { label: "Suma príspevku", value: `${values.amount} €` },
  ];

  const personalRows = [
    {
      label: "Meno a priezvisko",
      value: `${values.firstName} ${values.lastName}`.trim(),
    },
    { label: "E-mail", value: values.email },
    { label: "Telefónne číslo", value: values.phone },
  ];

  const contributionRowsComponents = contributionRows.map((row) => (
    <SummaryRow key={row.label}>
      <SummaryLabel>{row.label}</SummaryLabel>
      <SummaryValue>{row.value}</SummaryValue>
    </SummaryRow>
  ));

  const personalRowsComponents = personalRows.map((row) => (
    <SummaryRow key={row.label}>
      <SummaryLabel>{row.label}</SummaryLabel>
      <SummaryValue>{row.value}</SummaryValue>
    </SummaryRow>
  ));

  return (
    <>
      <FormHeading>Skontrolujte si zadané údaje</FormHeading>
      <SectionBlock>
        <SectionLabel>Zhrnutie</SectionLabel>
        <SummaryList>{contributionRowsComponents}</SummaryList>
        <Divider />
        <SummaryList>{personalRowsComponents}</SummaryList>
      </SectionBlock>
      <Divider />
      <Checkbox id="consent" checked={consent} onChange={setConsent}>
        Súhlasím so spracovaním mojich osobných údajov
      </Checkbox>
      {error ? <SubmitError role="alert">{error}</SubmitError> : null}
      <FormNavigation
        onBack={onBack}
        onContinue={onSubmit}
        continueLabel="Odoslať formulár"
        continueShowIcon={false}
        continueDisabled={!consent || isSubmitting}
      />
    </>
  );
}

const SummaryList = styled.dl`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
`;

const SummaryRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const SummaryLabel = styled.dt`
  font-size: 0.875rem;
`;

const SummaryValue = styled.dd`
  font-size: 0.875rem;
  font-weight: 600;
  text-align: right;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Divider = styled.div`
  height: 1px;
  margin: ${({ theme }) => theme.spacing(5)} 0;
  background-color: ${({ theme }) => theme.colors.border};
`;

const SubmitError = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.error};
`;
