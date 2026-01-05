import type { Metadata } from "next";
import "./globals.css";
import { Cookie, Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CookieBanner from "./components/cookieBanner";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinks = [
  { name: "Domů", href: "/" },
  { name: "O mně", href: "#" },
  { name: "Moje práce", href: "#" },
  { name: "Pracovní zkušenost", href: "#" },
  { name: "Kontakt", href: "#" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Michael Ptáček",
  url: "https://michaelptacek.com",
  image: "https://michaelptacek.com/photo.jpg",
  sameAs: [
    "https://www.linkedin.com/in/ptacekmichael/",
    "https://github.com/michaelptacek05/",
    "https://www.instagram.com/michal.718/",
  ],
  jobTitle: "UX Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Freelancer",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Praha",
    addressCountry: "CZ",
  },
};

export const metadata: Metadata = {
  title: {
    template: "%s | UX Engineer",
    default: "Michael Ptáček | UX Engineer",
  },
  description:
    "UX designer a frontend web developer s víceletou zkušeností a praxí v jedné osobě.",
  metadataBase: new URL("https://michaelptacek.com"),
  keywords: ['Web development', 'Next.js', 'React', 'Portfolio', 'Programátor Praha', 'Programator praha východ', 'Webové stránky', 'Web praha východ', 'UX Designer', 'Grafik'],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Michael Ptáček",
    description:
      "UX designer a frontend web developer s víceletou zkušeností a praxí v jedné osobě.",
    url: "https://michaelptacek.com",
    siteName: "Michael Ptáček",
    locale: "cs_CZ",
    type: "website",
  },
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
