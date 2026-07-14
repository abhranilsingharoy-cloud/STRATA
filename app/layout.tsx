import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GridLines from "@/components/ui/GridLines";
import CustomCursor from "@/components/ui/Cursor";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "STRATA — Architecture & Design Studio",
    template: "%s | STRATA Studio",
  },
  description:
    "STRATA is an award-winning architecture and interior design studio delivering exceptional spaces that shape how you live. 180+ projects, $120M+ built value.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://strata.studio"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "STRATA Studio",
    title: "STRATA — Architecture & Design Studio",
    description:
      "Award-winning architecture and interior design. Designing Form, Shaping Life.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "STRATA Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "STRATA — Architecture & Design Studio",
    description: "Award-winning architecture and interior design. Designing Form, Shaping Life.",
    images: ["/og-image.png"],
  },
  robots: {
    index: process.env.NEXT_PUBLIC_NOINDEX !== "true",
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${inter.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SmoothScrollProvider>
          <GridLines />
          <CustomCursor />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
