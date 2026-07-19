import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import sk from "./locales/sk.json";
import cz from "./locales/cz.json";

export const SUPPORTED_LANGUAGES = ["sk", "cz"] as const;
export type AppLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const LANGUAGE_LABELS: Record<AppLanguage, string> = {
  sk: "SK",
  cz: "CZ",
};

const STORAGE_KEY = "i18nextLng";

export function resolveAppLanguage(raw: string | null | undefined): AppLanguage {
  if (!raw) return "sk";
  const base = raw.toLowerCase().split("-")[0];
  if (base === "cz" || base === "cs") return "cz";
  if (base === "sk") return "sk";
  return "sk";
}

/** Apply stored/navigator language after hydration to avoid SSR mismatch. */
export function applyClientLanguage() {
  if (typeof window === "undefined") return;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  const fromNavigator = window.navigator.language;
  const next = resolveAppLanguage(stored ?? fromNavigator);

  if (i18n.language !== next) {
    void i18n.changeLanguage(next);
  }

  window.localStorage.setItem(STORAGE_KEY, next);
}

void i18n.use(initReactI18next).init({
  resources: {
    sk: { translation: sk },
    cz: { translation: cz },
  },
  // Fixed initial language so server HTML matches the first client render.
  lng: "sk",
  fallbackLng: "sk",
  supportedLngs: [...SUPPORTED_LANGUAGES],
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

i18n.on("languageChanged", (lng) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, resolveAppLanguage(lng));
});

export default i18n;
