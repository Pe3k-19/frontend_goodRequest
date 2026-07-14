import { QueryProvider } from "@/providers/query-provider";
import { StyledComponentsRegistry } from "@/providers/styled-components-registry";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <StyledComponentsRegistry>
          <QueryProvider>{children}</QueryProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
