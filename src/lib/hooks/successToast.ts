"use client";

import { App } from "antd";
import type { HelpType } from "@/types/contributions";

export function useSuccessToast() {
  const { message } = App.useApp();

  const showSuccessToast = (helpType: HelpType) => {
    message.open({
      type: "success",
      content:
        helpType === "shelter"
          ? "Ďakujeme za Vašu pomoc pre útulok."
          : "Ďakujeme za Vašu platbu.",
      duration: 5,
      className: "contribution-success-toast",
    });
  };

  return { showSuccessToast };
}
