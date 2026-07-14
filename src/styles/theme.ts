export const theme = {
  colors: {
    primary: "#f7941e",
    primaryDark: "#d97b0a",
    text: "#171717",
    textMuted: "#6b7280",
    background: "#ffffff",
    surface: "#f5f5f5",
    border: "#e5e7eb",
    error: "#dc2626",
    success: "#16a34a",
  },
  radii: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    pill: "9999px",
  },
  spacing: (multiplier: number) => `${multiplier * 4}px`,
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
  },
} as const;

export type AppTheme = typeof theme;
