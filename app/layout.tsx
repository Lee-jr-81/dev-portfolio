import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://leewilliams.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lee Williams | Next.js Developer",
    template: "%s | Lee Williams",
  },
  description:
    "Next.js developer building fast, stable, trade-grade web applications. Birmingham, UK.",
  keywords: ["Next.js", "React", "developer", "portfolio", "web development", "Birmingham"],
  authors: [{ name: "Lee Williams", url: siteUrl }],
  creator: "Lee Williams",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Lee Williams",
    title: "Lee Williams | Next.js Developer",
    description:
      "Next.js developer building fast, stable, trade-grade web applications. Birmingham, UK.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Lee Williams - Next.js Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lee Williams | Next.js Developer",
    description:
      "Next.js developer building fast, stable, trade-grade web applications. Birmingham, UK.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: ["/favicon.ico", "/favicon.svg"],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
