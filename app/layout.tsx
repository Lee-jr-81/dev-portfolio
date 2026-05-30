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

const siteDescription =
  "Independent developer partnering with agencies and product teams on Next.js applications, marketing sites, and SaaS builds. Structured delivery, clean handoff, production-focused engineering. Based in Birmingham, UK.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lee Williams | Next.js Developer",
    template: "%s | Lee Williams",
  },
  description: siteDescription,
  keywords: [
    "Next.js",
    "React",
    "agency overflow",
    "web development partner",
    "Birmingham",
  ],
  authors: [{ name: "Lee Williams", url: siteUrl }],
  creator: "Lee Williams",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Lee Williams",
    title: "Lee Williams | Next.js Developer",
    description: siteDescription,
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
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
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
