"use client";

import { useEffect, type ReactNode } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "@/i18n/config";

type I18nProviderProps = {
  children: ReactNode;
};

function DocumentLangSync({ children }: { children: ReactNode }) {
  const { i18n: i18nInstance } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18nInstance.language === "cz" ? "cs" : "sk";
  }, [i18nInstance.language]);

  return children;
}

export function I18nProvider({ children }: I18nProviderProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <DocumentLangSync>{children}</DocumentLangSync>
    </I18nextProvider>
  );
}
