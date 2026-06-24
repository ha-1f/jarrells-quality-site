import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const slab = Geist({
  variable: "--font-slab",
  subsets: ["latin"],
  weight: "900",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: {
    default: `${SITE.name} | HVAC Repair, Installation & Maintenance in Middle Tennessee`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Jarrell's Quality provides trusted HVAC repair, installation, and maintenance for homes and businesses across Middle Tennessee. Licensed, insured, and family owned.",
  keywords: [
    "HVAC repair",
    "AC installation",
    "heat pump service",
    "heating repair",
    "maintenance plans",
    "indoor air quality",
    "emergency HVAC",
    "local HVAC contractor",
    "Murfreesboro HVAC",
  ],
  openGraph: {
    title: `${SITE.name} | Heating, Cooling & Comfort`,
    description:
      "Honest, reliable HVAC service for Middle Tennessee homes and businesses.",
    siteName: SITE.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${slab.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-navy-950 text-cream-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
