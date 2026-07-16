"use client";

import { useMemo, useState } from "react";
import { Input as AntdInput, Select as AntdSelect, ConfigProvider } from "antd";
import styled, { useTheme } from "styled-components";
import { PHONE_COUNTRY_CONFIG } from "@/constants/phone";
import { ArrowDownIcon } from "@/components/icons/ArrowDownIcon";
import { FieldError, FieldLabel } from "@/styles/componnets";
import type { PhoneCountry } from "@/types/contributions";
import { FlagSkIcon } from "@/components/icons/FlagSkIcon";
import { FlagCzIcon } from "@/components/icons/FlagCzIcon";

export const PHONE_COUNTRIES = Object.keys(
  PHONE_COUNTRY_CONFIG,
) as PhoneCountry[];

type PhoneInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  onBlur?: () => void;
};

export const PhoneInput = ({
  id,
  label,
  value,
  onChange,
  required = true,
  error,
  onBlur,
}: PhoneInputProps) => {
  const theme = useTheme();
  const [country, setCountry] = useState<PhoneCountry>("SK");
  const { placeholder } = PHONE_COUNTRY_CONFIG[country];

  const phoneTheme = useMemo(
    () => ({
      components: {
        Input: {
          colorBgContainer: theme.colors.surface,
          hoverBorderColor: theme.colors.primary,
          activeBorderColor: theme.colors.primary,
          colorBorder: theme.colors.surface,
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
    [theme],
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

  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <ConfigProvider theme={phoneTheme}>
        <PhoneInputGroup>
          <CountrySelect
            value={""}
            prefix={country === "SK" ? <FlagSkIcon /> : <FlagCzIcon />}
            onChange={(next) => setCountry(next as PhoneCountry)}
            options={countryOptions}
            suffixIcon={
              <ArrowDownIcon width={12} height={12} color={theme.colors.icon} />
            }
            popupMatchSelectWidth={false}
            aria-label="Predvoľba krajiny"
            optionLabelProp="label"
            labelRender={() => null}
          />

          <AntdInput
            id={id}
            size="large"
            value={value}
            placeholder={placeholder}
            onChange={(event) => onChange(event.target.value)}
            onBlur={onBlur}
            aria-required={required}
            aria-invalid={error ? true : undefined}
            status={error ? "error" : undefined}
            inputMode="tel"
          />
        </PhoneInputGroup>
      </ConfigProvider>
      <FieldError>{`${error ? `${error} ${placeholder}` : ""}`}</FieldError>
    </div>
  );
};

const PhoneInputGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;
  overflow: hidden;
  transition: border-color 0.2s ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .ant-input,
  .ant-input:focus,
  .ant-input-focused {
    box-shadow: none;
  }

  .ant-select-selector {
    box-shadow: none !important;
  }
`;

const CountrySelect = styled(AntdSelect)`
  flex: 0 0 auto;
  height: 40px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.md};

  &&& .ant-select-selector {
    padding-inline: ${({ theme }) => theme.spacing(2)};
  }

  &&& .ant-select-prefix {
    margin-inline-end: ${({ theme }) => theme.spacing(1)};
  }

  &&& .ant-select-selection-search {
    width: 0;
  }

  &&& .ant-select-selection-item {
    padding: 0;
  }
`;

const CountryOption = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;
