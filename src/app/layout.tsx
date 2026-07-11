import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nkangi Disan — AI & Software Founder",
  description:
    "AI & Software Founder building intelligent products for Africa and emerging markets. Founder/CEO of Grittrix Technologies.",
  openGraph: {
    title: "Nkangi Disan — AI & Software Founder",
    description:
      "AI & Software Founder building intelligent products for Africa and emerging markets.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-cream text-ink font-body antialiased">
        {children}
      </body>
    </html>
  );
}
