import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dulcetventuresuganda.com"),
  title: {
    default: "Dulcet Ventures Uganda | Strategic Consulting & Advisory Services",
    template: "%s | Dulcet Ventures Uganda",
  },
  description: "Dulcet Ventures Uganda is a multidisciplinary consulting firm providing strategic, analytical, and project-focused solutions. Services include project management, feasibility studies, master planning, strategy development, market analysis, and M&E. Serving Uganda and East Africa.",
  keywords: [
    "Dulcet Ventures Uganda",
    "consulting firm Uganda",
    "strategic consulting Uganda",
    "project management Uganda",
    "feasibility studies Uganda",
    "master planning Uganda",
    "strategy development Uganda",
    "market analysis Uganda",
    "financial analysis Uganda",
    "monitoring and evaluation Uganda",
    "environmental studies Uganda",
    "capacity building Uganda",
    "public policy advisory Uganda",
    "consultancy East Africa",
    "business consulting Kampala",
  ],
  authors: [{ name: "Dulcet Ventures Uganda" }],
  creator: "Dulcet Ventures Uganda",
  publisher: "Dulcet Ventures Uganda",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://dulcetventuresuganda.com",
    siteName: "Dulcet Ventures Uganda",
    title: "Dulcet Ventures Uganda | Strategic Consulting & Advisory Services",
    description: "Dulcet Ventures Uganda is a multidisciplinary consulting firm providing strategic, analytical, and project-focused solutions to public and private sector clients.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dulcet Ventures Uganda - Strategic Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulcet Ventures Uganda",
    description: "Strategic consulting and advisory services in Uganda",
    creator: "@dulcetventures",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={`${geist.variable} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
