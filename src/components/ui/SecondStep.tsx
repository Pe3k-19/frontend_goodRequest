"use client";

import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const {
    control,
    formState: { errors },
  } = useFormContext<ContributionFormValues>();

  return (
    <>
      <FormHeading>{t("form.step2Title")}</FormHeading>

      <SectionBlock>
        <SectionLabel>{t("form.aboutYou")}</SectionLabel>

        <NameFieldsRow>
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <Input
                id="first-name"
                label={t("form.firstName")}
                placeholder={t("form.firstNamePlaceholder")}
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
                label={t("form.lastName")}
                placeholder={t("form.lastNamePlaceholder")}
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
              label={t("form.email")}
              placeholder={t("form.emailPlaceholder")}
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
            <Controller
              control={control}
              name="phoneCountry"
              render={({ field: countryField }) => (
                <PhoneInput
                  id="phone"
                  label={t("form.phone")}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  country={countryField.value}
                  onCountryChange={countryField.onChange}
                  error={errors.phone?.message}
                />
              )}
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
