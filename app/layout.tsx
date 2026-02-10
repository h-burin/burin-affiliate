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
              baseColor="#efefef"
              activeColor="#bebebe"
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
