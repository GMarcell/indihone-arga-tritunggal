import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NewNavbar } from "@/components/NewNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Indihone Arga Tritunggal",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={inter.className}>
        <NewNavbar/>
        {children}
        </body>
    </html>
  );
}
