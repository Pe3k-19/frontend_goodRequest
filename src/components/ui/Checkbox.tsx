"use client";

import type { ReactNode } from "react";
import { Checkbox as AntdCheckbox } from "antd";
import styled from "styled-components";

type CheckboxProps = {
  id?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: ReactNode;
};

export function Checkbox({ id, checked, onChange, children }: CheckboxProps) {
  return (
    <StyledCheckbox
      id={id}
      checked={checked}
      onChange={(event) => onChange(event.target.checked)}
    >
      {children}
    </StyledCheckbox>
  );
}

const StyledCheckbox = styled(AntdCheckbox)`
  .ant-checkbox-checked {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .ant-checkbox-checked::after {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &&&:hover .ant-checkbox-checked:not(.ant-checkbox-disabled) {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    border-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &&&:hover .ant-checkbox-checked::after {
    border-color: ${({ theme }) => theme.colors.primaryDark};
  }

  .ant-checkbox:has(.ant-checkbox-input:focus-visible) {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 1px;
  }
`;
