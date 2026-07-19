"use client";

import { useMemo } from "react";
import { useTheme } from "styled-components";
import { Select as AntdSelect, ConfigProvider } from "antd";
import { useTranslation } from "react-i18next";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";
import { FieldError, FieldLabel, OptionalTag } from "@/styles/componnets";

type SelectOption<T> = {
  value: T;
  label: string;
};

type SelectProps<T> = {
  id: string;
  label: string;
  value: T | null;
  onChange: (value: T | null) => void;
  onBlur?: () => void;
  options: SelectOption<T>[];
  isLoading?: boolean;
  placeholder?: string;
  required?: boolean;
  error?: string;
};

export const Select = <T extends string | number>({
  id,
  label,
  value,
  onChange,
  onBlur,
  options,
  isLoading = false,
  placeholder,
  required = false,
  error,
}: SelectProps<T>) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const selectTheme = useMemo(
    () => ({
      components: {
        Select: {
          selectorBg: theme.colors.surface,
          hoverBorderColor: theme.colors.primary,
          activeBorderColor: theme.colors.primary,
          colorBorder: theme.colors.surface,
        },
      },
    }),
    [theme],
  );

  return (
    <div>
      <FieldLabel htmlFor={id}>
        {label} {!required && <OptionalTag>{t("common.optional")}</OptionalTag>}
      </FieldLabel>
      <ConfigProvider theme={selectTheme}>
        <AntdSelect
          id={id}
          placeholder={placeholder}
          value={value ?? undefined}
          onChange={(next) => onChange((next as T) ?? null)}
          onBlur={onBlur}
          allowClear
          loading={isLoading}
          size="large"
          style={{ width: "100%" }}
          options={options}
          aria-required={required}
          aria-invalid={error ? true : undefined}
          status={error ? "error" : undefined}
          suffixIcon={
            <ArrowDownIcon width={16} height={16} color={theme.colors.icon} />
          }
        />
      </ConfigProvider>
      <FieldError>{error}</FieldError>
    </div>
  );
};
