"use client";

import { useMemo } from "react";
import { Input as AntdInput, Select as AntdSelect, ConfigProvider } from "antd";
import styled, { useTheme } from "styled-components";
import { PHONE_COUNTRY_CONFIG } from "@/constants/phone";
import type { PhoneCountry } from "@/types/contributions";
import { FlagSkIcon } from "@/components/icons/FlagSkIcon";
import { FlagCzIcon } from "@/components/icons/FlagCzIcon";
import { FieldError, FieldLabel } from "@/styles/componnets";
import { ArrowDownIcon } from "@/components/icons/ArrowDownIcon";

const PHONE_COUNTRIES = Object.keys(PHONE_COUNTRY_CONFIG) as PhoneCountry[];
const NATIONAL_PLACEHOLDER = "123 456 789";

type PhoneInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  country: PhoneCountry;
  onCountryChange: (value: PhoneCountry) => void;
  required?: boolean;
  error?: string;
  onBlur?: () => void;
};

function formatNationalDigits(digits: string): string {
  const groups = digits
    .replace(/\D/g, "")
    .slice(0, 9)
    .match(/.{1,3}/g);
  return groups ? groups.join(" ") : "";
}

function getNationalNumber(phone: string, country: PhoneCountry): string {
  const compact = phone.replace(/\s+/g, "");
  const currentDial = PHONE_COUNTRY_CONFIG[country].dialCode;

  let national = compact;
  if (compact.startsWith(currentDial)) {
    national = compact.slice(currentDial.length);
  } else {
    for (const code of PHONE_COUNTRIES) {
      const dial = PHONE_COUNTRY_CONFIG[code].dialCode;
      if (compact.startsWith(dial)) {
        national = compact.slice(dial.length);
        break;
      }
    }
  }

  return formatNationalDigits(national);
}

function buildPhoneValue(country: PhoneCountry, national: string): string {
  const dialCode = PHONE_COUNTRY_CONFIG[country].dialCode;
  const formattedNational = formatNationalDigits(national);
  return formattedNational
    ? `${dialCode} ${formattedNational}`
    : `${dialCode} `;
}

export const PhoneInput = ({
  id,
  label,
  value,
  onChange,
  country,
  onCountryChange,
  required = true,
  error,
  onBlur,
}: PhoneInputProps) => {
  const theme = useTheme();
  const dialCode = PHONE_COUNTRY_CONFIG[country].dialCode;
  const nationalValue = getNationalNumber(value, country);

  const phoneTheme = useMemo(
    () => ({
      components: {
        Input: {
          colorBgContainer: "transparent",
          hoverBorderColor: "transparent",
          activeBorderColor: "transparent",
          colorBorder: "transparent",
          activeShadow: "none",
        },
        Select: {
          selectorBg: "transparent",
          hoverBorderColor: "transparent",
          activeBorderColor: "transparent",
          colorBorder: "transparent",
        },
      },
    }),
    [],
  );

  const countryOptions = PHONE_COUNTRIES.map((code) => ({
    value: code,
    label: (
      <CountryOption>
        <span aria-hidden>{PHONE_COUNTRY_CONFIG[code].flag}</span>
        <span>{PHONE_COUNTRY_CONFIG[code].dialCode}</span>
      </CountryOption>
    ),
  }));

  const handleCountryChange = (next: unknown) => {
    const nextCountry = next as PhoneCountry;
    onCountryChange(nextCountry);
    onChange(buildPhoneValue(nextCountry, nationalValue));
  };

  const handleNationalChange = (raw: string) => {
    onChange(buildPhoneValue(country, raw));
  };

  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <ConfigProvider theme={phoneTheme}>
        <PhoneInputGroup $hasError={Boolean(error)}>
          <CountrySelect
            value={country}
            prefix={country === "SK" ? <FlagSkIcon /> : <FlagCzIcon />}
            onChange={handleCountryChange}
            options={countryOptions}
            suffixIcon={
              <ArrowDownIcon width={12} height={12} color={theme.colors.icon} />
            }
            popupMatchSelectWidth={false}
            aria-label="Predvoľba krajiny"
            labelRender={() => null}
          />
          <DialCode aria-hidden>{dialCode}</DialCode>
          <AntdInput
            id={id}
            size="large"
            value={nationalValue}
            placeholder={NATIONAL_PLACEHOLDER}
            onChange={(event) => handleNationalChange(event.target.value)}
            onBlur={onBlur}
            aria-required={required}
            aria-invalid={error ? true : undefined}
            aria-label={`${label}, predvoľba ${dialCode}`}
            inputMode="tel"
          />
        </PhoneInputGroup>
      </ConfigProvider>
      <FieldError>{error}</FieldError>
    </div>
  );
};

const PhoneInputGroup = styled.div<{ $hasError: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.surface};
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.primary};
  }

  &:focus-within {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.primary};
  }

  .ant-input,
  .ant-input:focus,
  .ant-input-focused {
    box-shadow: none;
    background: transparent;
    padding: 0;
  }
`;

const DialCode = styled.span`
  flex: 0 0 auto;
  font-size: 1rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.textPrimary};
  user-select: none;
`;

const CountrySelect = styled(AntdSelect)`
  flex: 0 0 auto;
  width: 64px;
  height: 40px;
`;

const CountryOption = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;
