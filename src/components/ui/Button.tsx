import styled from "styled-components";

type PresetButtonProps = {
  value: number;
  active: boolean;
  presetSymbol?: string;
  disabled?: boolean;
  onClick: () => void;
};

export const Button = ({
  value,
  active,
  presetSymbol,
  disabled,
  onClick,
}: PresetButtonProps) => {
  return (
    <PresetButton
      type="button"
      $active={active}
      aria-pressed={active}
      onClick={onClick}
      disabled={disabled}
    >
      {presetSymbol ? `${value} ${presetSymbol}` : value}
    </PresetButton>
  );
};

const PresetButton = styled.button<{ $active: boolean }>`
  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(2)}`};
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid;
  border-color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.surface};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.surface};
  color: ${({ $active, disabled, theme }) =>
    $active
      ? "#ffffff"
      : disabled
        ? theme.colors.textMuted
        : theme.colors.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus-visible:not(:disabled) {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 1px;
  }
`;
