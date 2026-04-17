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

// ✅ FULL SEO METADATA
export const metadata: Metadata = {
  metadataBase: new URL("https://myonlinedegree.online"),

  title: {
    default: "Online Degree Courses in India 2026 | UGC Approved Universities",
    template: "%s | My Online Degree",
  },

  description:
    "Explore UGC-approved online degree courses in India. Apply for top universities like Shoolini, Amity, Jain, LPU. Check fees, eligibility, and admission process.",

  keywords: [
    "Online Degree Courses India",
    "UGC Approved Online Universities",
    "Online MBA India",
    "Online BBA BCA MCA",
    "Distance Learning Universities",
    "Shoolini Online",
    "Amity Online",
    "Jain University Online",
    "LPU Online Courses",
    "NMIMS Online",
  ],

  authors: [{ name: "Unifost Education Pvt Ltd" }],
  creator: "Unifost Education",
  publisher: "My Online Degree",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Online Degree Courses in India 2026",
    description:
      "Apply for UGC-approved online degree courses from top universities. Get admission details, fees & placement support.",
    url: "https://myonlinedegree.online",
    siteName: "My Online Degree",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online Degree Courses India 2026",
    description:
      "Explore top online universities like Shoolini, Amity, Jain, LPU. Apply now.",
  },

  icons: {
    icon: "/favicon.ico",
  },

  alternates: {
    canonical: "https://myonlinedegree.online",
  },

  category: "education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* ✅ Extra SEO Tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="language" content="English" />

        {/* ✅ Schema Markup (Google Ranking Boost) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "My Online Degree",
              url: "https://myonlinedegree.online",
              logo: "https://myonlinedegree.online/logo.png",
              sameAs: [
                "https://www.facebook.com/",
                "https://www.instagram.com/",
                "https://www.linkedin.com/",
              ],
            }),
          }}
        />
      </head>

      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}