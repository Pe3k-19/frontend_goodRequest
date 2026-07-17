"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-primary-light: ${({ theme }) => theme.colors.primaryLight};
    --color-primary-dark: ${({ theme }) => theme.colors.primaryDark};
    --color-text-primary: ${({ theme }) => theme.colors.textPrimary};
    --color-text-secondary: ${({ theme }) => theme.colors.textSecondary};
    --color-text-muted: ${({ theme }) => theme.colors.textMuted};
    --color-background: ${({ theme }) => theme.colors.background};
    --color-surface: ${({ theme }) => theme.colors.surface};
    --color-border: ${({ theme }) => theme.colors.border};
    --color-error: ${({ theme }) => theme.colors.error};
    --color-success: ${({ theme }) => theme.colors.success};
    --color-icon: ${({ theme }) => theme.colors.icon};
  }
`;
