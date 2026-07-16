"use client";

import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";
import type { ContributionFormValues } from "@/lib/validation/contribution";
import { FormHeading, SectionBlock, SectionLabel } from "@/styles/componnets";
import { Input } from "./Input";
import { PhoneInput } from "./PhoneInput";
import { FormNavigation } from "./FormNavigation";

type SecondStepProps = {
  onBack: () => void;
  onContinue: () => void;
};

export function SecondStep({ onBack, onContinue }: SecondStepProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext<ContributionFormValues>();

  return (
    <>
      <FormHeading>Potrebujeme od Vás zopár informácií</FormHeading>

      <SectionBlock>
        <SectionLabel>O vás</SectionLabel>

        <NameFieldsRow>
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <Input
                id="first-name"
                label="Meno"
                placeholder="Zadajte Vaše meno"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={errors.firstName?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <Input
                id="last-name"
                label="Priezvisko"
                placeholder="Zadajte Vaše priezvisko"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                required
                error={errors.lastName?.message}
              />
            )}
          />
        </NameFieldsRow>

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              id="email"
              label="E-mailová adresa"
              placeholder="Zadajte Váš e-mail"
              type="email"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              required
              error={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <PhoneInput
              id="phone"
              label="Telefónne číslo"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.phone?.message}
            />
          )}
        />
      </SectionBlock>

      <FormNavigation onBack={onBack} onContinue={onContinue} />
    </>
  );
}

const NameFieldsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
  }
`;
