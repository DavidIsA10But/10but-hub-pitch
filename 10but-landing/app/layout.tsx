
import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["600","700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "10but — Écosystème de talents pour hubs",
  description: "Transformez votre hub en vivier de talents exclusif.",
  viewport: "width=device-width, initial-scale=1",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  themeColor: "#ffffff",
  openGraph: {
    title: "10but — Écosystème de talents pour hubs",
    description: "Réduction du time-to-hire de 75% et 5 000 € économisés par recrutement.",
    url: "https://",
    siteName: "10but",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
    locale: "fr_FR",
    type: "website",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-white text-ink antialiased">{children}</body>
    </html>
  );
}
