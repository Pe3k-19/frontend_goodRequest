"use client";

import { useMemo } from "react";
import { useTheme } from "styled-components";
import { Select as AntdSelect, ConfigProvider } from "antd";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";
import { FieldLabel, OptionalTag } from "@/styles/componnets";

type SelectOption<T> = {
  value: T;
  label: string;
};

type SelectProps<T> = {
  id: string;
  label: string;
  value: T | null;
  onChange: (value: T | null) => void;
  options: SelectOption<T>[];
  isLoading?: boolean;
  placeholder?: string;
  required?: boolean;
};

export const Select = <T extends string | number>({
  id,
  label,
  value,
  onChange,
  options,
  isLoading = false,
  placeholder,
  required = false,
}: SelectProps<T>) => {
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
        {label} {!required && <OptionalTag>(Nepovinné)</OptionalTag>}
      </FieldLabel>
      <ConfigProvider theme={selectTheme}>
        <AntdSelect
          id={id}
          placeholder={placeholder}
          value={value ?? undefined}
          onChange={(next) => onChange((next as T) ?? null)}
          allowClear
          loading={isLoading}
          size="large"
          style={{ width: "100%" }}
          options={options}
          aria-required={required}
          suffixIcon={
            <ArrowDownIcon width={16} height={16} color={theme.colors.icon} />
          }
        />
      </ConfigProvider>
    </div>
  );
};
