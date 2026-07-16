import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cendex",
  description: "Modern Perpetual DEX built on Hyperliquid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
