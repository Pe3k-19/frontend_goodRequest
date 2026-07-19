"use client";

import styled from "styled-components";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useShelters } from "@/lib/hooks/shelters";
import type { ContributionFormValues } from "@/lib/validation/contribution";
import {
  FieldError,
  FormHeading,
  SectionBlock,
  SectionLabel,
} from "@/styles/componnets";
import { Checkbox } from "./Checkbox";
import { FormNavigation } from "./FormNavigation";
import { CURRENCY } from "@/constants/units";

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
  const { t } = useTranslation();
  const {
    control,
    getValues,
    formState: { errors },
  } = useFormContext<ContributionFormValues>();
  const { data: shelters = [] } = useShelters();

  const values = getValues();
  const shelterName = shelters.find(
    (shelter) => shelter.id === values.shelterId,
  )?.name;

  const helpSummaryKey =
    values.helpType === "foundation"
      ? "form.helpSummaryFoundation"
      : "form.helpSummaryShelter";

  const contributionRows = [
    { label: t("form.helpForm"), value: t(helpSummaryKey) },
    ...(shelterName
      ? [{ label: t("form.shelterLabel"), value: shelterName }]
      : []),
    {
      label: t("form.contributionAmount"),
      value: `${values.amount} ${CURRENCY}`,
    },
  ];

  const personalRows = [
    {
      label: t("form.fullName"),
      value: `${values.firstName} ${values.lastName}`.trim(),
    },
    { label: t("form.emailShort"), value: values.email },
    { label: t("form.phone"), value: values.phone },
  ];

  return (
    <>
      <FormHeading>{t("form.step3Title")}</FormHeading>
      <SectionBlock>
        <SectionLabel>{t("form.summary")}</SectionLabel>
        <SummaryList>
          {contributionRows.map((row) => (
            <SummaryRow key={row.label}>
              <SummaryLabel>{row.label}</SummaryLabel>
              <SummaryValue>{row.value}</SummaryValue>
            </SummaryRow>
          ))}
        </SummaryList>
        <Divider />
        <SummaryList>
          {personalRows.map((row) => (
            <SummaryRow key={row.label}>
              <SummaryLabel>{row.label}</SummaryLabel>
              <SummaryValue>{row.value}</SummaryValue>
            </SummaryRow>
          ))}
        </SummaryList>
      </SectionBlock>
      <Divider />
      <ConsentField>
        <Controller
          control={control}
          name="consent"
          render={({ field }) => (
            <Checkbox
              id="consent"
              checked={field.value}
              onChange={field.onChange}
            >
              {t("form.consent")}
            </Checkbox>
          )}
        />
        <FieldError>{errors.consent?.message}</FieldError>
      </ConsentField>
      {error ? <SubmitError role="alert">{error}</SubmitError> : null}
      <FormNavigation
        onBack={onBack}
        onContinue={onSubmit}
        continueLabel={t("form.submit")}
        continueShowIcon={false}
        continueDisabled={isSubmitting}
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

const ConsentField = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubmitError = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.error};
`;
