"use client";

import { App } from "antd";
import { useTranslation } from "react-i18next";
import type { HelpType } from "@/types/contributions";

export function useSuccessToast() {
  const { message } = App.useApp();
  const { t } = useTranslation();

  const showSuccessToast = (helpType: HelpType) => {
    message.open({
      type: "success",
      content:
        helpType === "shelter"
          ? t("toast.shelterSuccess")
          : t("toast.foundationSuccess"),
      duration: 5,
      className: "contribution-success-toast",
    });
  };

  return { showSuccessToast };
}
