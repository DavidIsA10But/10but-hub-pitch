
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["600","700"], variable: "--font-poppins" });

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

export const metadata: Metadata = {
  title: "10but — Talent ecosystem for hubs",
  description: "Transformez votre hub en vivier de talents exclusif.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
