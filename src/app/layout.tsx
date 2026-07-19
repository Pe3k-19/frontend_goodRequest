import { Metadata } from "next";
import { App as AntdApp } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { QueryProvider } from "@/providers/query-provider";
import { StyledComponentsRegistry } from "@/providers/styled-components-registry";
import { I18nProvider } from "@/providers/i18n-provider";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GoodBoy - podpora útulkov pre psy",
    template: "%s | GoodBoy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AntdRegistry>
          <AntdApp>
            <StyledComponentsRegistry>
              <I18nProvider>
                <QueryProvider>
                  <LanguageSelector />
                  {children}
                </QueryProvider>
              </I18nProvider>
            </StyledComponentsRegistry>
          </AntdApp>
        </AntdRegistry>
      </body>
    </html>
  );
}
