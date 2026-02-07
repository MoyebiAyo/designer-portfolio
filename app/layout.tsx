import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Navigation from "./components/Navigation";
import CACCertificate from "./components/CACCertificate";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mouse Designs | Moyebi Ayodele - Graphic Designer Portfolio",
  description: "Graphic designer specializing in branding, digital design, and visual storytelling. View the portfolio of Mouse Designs.",
  keywords: ["graphic design", "branding", "visual design", "portfolio", "creative", "designer", "Mouse Designs"],
  authors: [{ name: "Moyebi Ayodele" }],
  openGraph: {
    title: "Mouse Designs | Moyebi Ayodele - Portfolio",
    description: "Graphic designer specializing in branding, digital design, and visual storytelling.",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased relative`}>
        <div className="mesh-bg" />
        <ThemeProvider>
          <Navigation />
          <CACCertificate />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
