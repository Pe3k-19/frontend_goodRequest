"use client";

import { useMemo } from "react";
import { useTheme } from "styled-components";
import { Input as AntdInput, ConfigProvider } from "antd";
import { FieldLabel, OptionalTag } from "@/styles/componnets";

type InputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: "text" | "email";
};

export function Input({
  id,
  label,
  value,
  onChange,
  placeholder,
  required = false,
  type = "text",
}: InputProps) {
  const theme = useTheme();

  const inputTheme = useMemo(
    () => ({
      components: {
        Input: {
          colorBgContainer: theme.colors.surface,
          hoverBorderColor: theme.colors.primary,
          activeBorderColor: theme.colors.primary,
          colorBorder: theme.colors.surface,
          activeShadow: "none",
        },
      },
    }),
    [theme],
  );

  return (
    <div>
      <FieldLabel htmlFor={id}>
        {label} {!required ? <OptionalTag>(Nepovinné)</OptionalTag> : ""}
      </FieldLabel>
      <ConfigProvider theme={inputTheme}>
        <AntdInput
          id={id}
          type={type}
          size="large"
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          aria-required={required}
        />
      </ConfigProvider>
    </div>
  );
}
