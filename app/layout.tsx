import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LangController from "./LangController";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ondihon Arga Tritunggal",
  description: "Official Distributor of Atlas copco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <LangController>{children}</LangController>
      </body>
    </html>
  );
}
