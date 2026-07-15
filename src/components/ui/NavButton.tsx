import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

type NavigationButtonProps = {
  variant?: "primary" | "secondary";
  label: string;
  disabled?: boolean;
  isBackButton?: boolean;
  onClick?: () => void;
};

export const NavButton = ({
  variant = "primary",
  label,
  disabled,
  isBackButton = false,
  onClick,
}: NavigationButtonProps) => {
  return (
    <NavigationButton
      type="button"
      $variant={variant}
      disabled={disabled}
      onClick={onClick}
    >
      {isBackButton ? <ArrowLeftOutlined aria-hidden /> : null}
      {label}
      {!isBackButton ? <ArrowRightOutlined aria-hidden /> : null}
    </NavigationButton>
  );
};

const NavigationButton = styled.button<{ $variant: "primary" | "secondary" }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(6)}`};
  border-radius: ${({ theme }) => theme.radii.md};
  border: none;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition:
    background 0.2s ease,
    opacity 0.2s ease;

  ${({ $variant, theme }) =>
    $variant === "primary"
      ? `
    background: ${theme.colors.primary};
    color: ${theme.colors.textSecondary};

    &:hover:not(:disabled) {
      background: ${theme.colors.primaryDark};
    }
  `
      : `
    background: ${theme.colors.surface};
    color: ${theme.colors.textPrimary};

    &:hover:not(:disabled) {
      background: ${theme.colors.border};
    }
  `}

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 1px;
  }
`;
