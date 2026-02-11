import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import DotGrid from "@/components/ReactBits/DotGrid/DotGrid";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "thai"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: {
    default: "อาเฮียฮ้อ | Burin Samphanwetsopha",
    template: "%s | อาเฮียฮ้อ",
  },
  description:
    "รวมลิงก์ทุกช่องทางของ อาเฮียฮ้อ - Burin Samphanwetsopha | Shopping, อสังหาริมทรัพย์, Facebook, Instagram, YouTube, TikTok, Lemon8",
  keywords: [
    "อาเฮียฮ้อ",
    "Burin",
    "Burin Samphanwetsopha",
    "rhiahor",
    "Shopee",
    "อสังหาริมทรัพย์",
    "bio link",
  ],
  authors: [{ name: "Burin Samphanwetsopha" }],
  openGraph: {
    title: "อาเฮียฮ้อ | Burin Samphanwetsopha",
    description:
      "รวมลิงก์ทุกช่องทางของ อาเฮียฮ้อ - Shopping, อสังหาริมทรัพย์ และโซเชียลมีเดีย",
    type: "website",
    locale: "th_TH",
    siteName: "อาเฮียฮ้อ",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 100 100"><rect width="100" height="100" rx="50" fill="%23111111"></rect><path fill="%23fff" d="M54 54.40L54 54.40Q55.10 46.40 55.60 38.30Q56.10 30.20 56.10 27.75Q56.10 25.30 56.10 24.90L56.10 24.90L56 20.30Q67.30 26.30 75.90 26.30L75.90 26.30Q74.40 47.80 68.10 65.50L68.10 65.50Q66.70 69.40 65.80 71.10L65.80 71.10L64.90 72.80Q61.30 72.80 57.30 74.05Q53.30 75.30 51.10 76.60L51.10 76.60L48.80 77.90Q50.90 71.80 52.60 63L52.60 63Q47 64.50 42.70 67L42.70 67L41.20 79.70Q39.90 79.30 37.80 78.60Q35.70 77.90 31.10 75.15Q26.50 72.40 24.10 69.10L24.10 69.10Q24.90 58.70 26.90 49.65Q28.90 40.60 30.50 36.70L30.50 36.70L32.20 32.80Q37.60 29.20 49.90 27.40L49.90 27.40Q46.40 41.80 44.20 56.60L44.20 56.60Q49.70 56.10 54 54.40Z"></path></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} antialiased`}
      >
        <div>
          <div className="w-full h-screen fixed top-0 z-0">
            <DotGrid
              dotSize={5}
              gap={15}
              baseColor="#f5f5f5"
              activeColor="#e4e4e4"
              proximity={120}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
