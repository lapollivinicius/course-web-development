import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GARDEZ",
  description: "Venda ou Alugue"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
