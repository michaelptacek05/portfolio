import type { Metadata } from "next";
import "./globals.css";
import { Cookie, Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CookieBanner from "./components/cookieBanner";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinks = [
    { name: 'Domů', href: '/' },
    { name: 'O mně', href: '#' },
    { name: 'Moje práce', href: '#' },
    { name: 'Pracovní zkušenost', href: '#' },
    { name: 'Kontakt', href: '#' },
  ];

export const metadata: Metadata = {
  title: "Michael Ptáček",
  description: "UX Engineer z Prahy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className="bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
