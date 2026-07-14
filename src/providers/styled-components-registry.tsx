"use client";

import { useServerInsertedHTML } from "next/navigation";
import type { ReactNode } from "react";
import { useState } from "react";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";
import { theme } from "@/styles/theme";

type StyledComponentsRegistryProps = {
  children: ReactNode;
};

export function StyledComponentsRegistry({
  children,
}: StyledComponentsRegistryProps) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyleSheetManager>
  );
}
