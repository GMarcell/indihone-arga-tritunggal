import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NewNavbar from "@/components/NewNavbar";
import { FloatingButton } from "@/components/FloatingButton";

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
        <NewNavbar/>
        {children}
        <Footer/>
        <FloatingButton/>
        </body>
    </html>
  );
}
