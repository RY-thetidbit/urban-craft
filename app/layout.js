import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const body = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://urbancraft.example.com"),
  title: {
    default: `${site.name} — Modular Kitchens & Interior Design in Ambernath`,
    template: `%s · ${site.name}`,
  },
  description:
    "Urban Craft designs and builds bespoke modular kitchens, wardrobes and full-home interiors in Ambernath & Mumbai. Premium materials, transparent pricing, on-time delivery.",
  keywords: [
    "modular kitchen Ambernath",
    "interior designer Ambernath",
    "kitchen and interiors",
    "wardrobe design",
    "home interiors Mumbai",
    "Urban Craft",
  ],
  openGraph: {
    title: `${site.name} — Kitchen & Interiors`,
    description:
      "Bespoke modular kitchens and full-home interiors crafted in Ambernath.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
