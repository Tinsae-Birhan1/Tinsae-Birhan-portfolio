import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tinsae Birhan | Software Engineer, Contact Me",
  description:
    "Contact Tinsae Birhan, Software Engineer with 4.5+ years building APIs, business platforms, and full stack apps for international teams. Remote ready.",
  keywords: [
    "Tinsae Birhan",
    "contact software engineer",
    "backend developer",
    "NestJS developer",
    "ERPNext developer",
    "remote developer Ethiopia",
    "full stack engineer",
  ],
  authors: [{ name: "Tinsae Birhan" }],
  openGraph: {
    title: "Tinsae Birhan | Software Engineer, Contact Me",
    description:
      "4.5+ years shipping payroll, disbursement, and SaaS products for US startups. Open to full time & contract roles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
