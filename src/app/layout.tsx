import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "COLWMA | City of London Wealth Management Awards",
  description: "The City of London Wealth Management Awards celebrate excellence in wealth management. Held annually at the prestigious Guildhall in London.",
  keywords: ["wealth management", "awards", "London", "Guildhall", "finance", "investment"],
  openGraph: {
    title: "COLWMA | City of London Wealth Management Awards",
    description: "Celebrating excellence in wealth management since 2014. Annual ceremony at the Guildhall, London.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
