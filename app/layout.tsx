import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GridLines from "@/components/ui/GridLines";
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
    default: "Eco Architect AI — Generative Urban Planning",
    template: "%s | Eco Architect AI",
  },
  description:
    "Eco Architect AI is a Generative AI-powered urban planning assistant that helps architects and city planners design smarter, more sustainable cities.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ECO.AI.studio"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Eco Architect AI",
    title: "Eco Architect AI — Generative Urban Planning",
    description:
      "Eco Architect AI is a Generative AI-powered urban planning assistant.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Eco Architect AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eco Architect AI — Generative Urban Planning",
    description: "Eco Architect AI is a Generative AI-powered urban planning assistant.",
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
          <GridLines />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
