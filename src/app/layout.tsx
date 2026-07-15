import { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { QueryProvider } from "@/providers/query-provider";
import { StyledComponentsRegistry } from "@/providers/styled-components-registry";
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
          <StyledComponentsRegistry>
            <QueryProvider>{children}</QueryProvider>
          </StyledComponentsRegistry>
        </AntdRegistry>
      </body>
    </html>
  );
}
