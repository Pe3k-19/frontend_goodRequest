export const theme = {
  colors: {
    primary: "#4F46E5",
    primaryLight: "#EEEDFC",
    primaryDark: "#4338CA",
    textPrimary: "#111827",
    textSecondary: "#FAFAFA",
    textMuted: "#9CA3AF",
    background: "#ffffff",
    surface: "#F3F4F6",
    border: "#e5e7eb",
    error: "#dc2626",
    success: "#16a34a",
    icon: "#4B5563",
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
