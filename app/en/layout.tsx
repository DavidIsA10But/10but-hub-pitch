
import type { Metadata, Viewport } from "next";
import "../globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["600","700"], variable: "--font-poppins" });

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

export const metadata: Metadata = {
  title: "10but — Talent ecosystem for hubs",
  description: "–75% de time-to-hire et 5 000 € économisés / recrutement. Déjà adopté par Sciences Po et Wacano.",
  openGraph: {
    title: "10but — Talent ecosystem for hubs",
    description: "–75% de time-to-hire et 5 000 € économisés / recrutement.",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
    type: "website",
    locale: "en_US"
  },
  twitter: { card: "summary_large_image", title: "10but — Talent ecosystem for hubs", description: "–75% de time-to-hire" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        {/* Analytics placeholder: add Plausible/GA if needed */}
        {children}
        <div className="sticky-cta">
          <a href="https://cal.com/david-10but/15min" target="_blank" className="btn-cta">Book a call</a>
        </div>
      </body>
    </html>
  );
}
