import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { clinic, doctor, siteUrl } from "@/data/clinic";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr. Khushal Gangwani | Oramax Dental & Maxillofacial Clinic, Juhu Mumbai",
    template: "%s | Oramax Dental & Maxillofacial Clinic",
  },
  description:
    "Oramax Dental & Maxillofacial Clinic in Juhu, Mumbai — oral and maxillofacial care by Dr. Khushal Gangwani. Request an appointment, call the clinic or get directions.",
  keywords: [
    "Dr Khushal Gangwani",
    "Oramax Dental Maxillofacial Clinic",
    "oral and maxillofacial surgeon Juhu",
    "maxillofacial surgeon Mumbai",
    "oral surgeon Juhu Mumbai",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: clinic.name,
    title: `${doctor.name} — ${clinic.name}, Juhu Mumbai`,
    description:
      "Specialized oral & maxillofacial care in Juhu, Mumbai. Request an appointment or call the clinic.",
    url: "/",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: clinic.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${doctor.name} — ${clinic.name}`,
    description: "Specialized oral & maxillofacial care in Juhu, Mumbai.",
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#16222d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        "@id": `${siteUrl}/#clinic`,
        name: clinic.name,
        description:
          "Dental and maxillofacial clinic in Juhu, Mumbai providing specialist oral and maxillofacial care.",
        url: siteUrl,
        telephone: clinic.phoneDisplay,
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Sukh Shanti, 8, N S Rd Number 8, Jaihind Society, Nutan Laxmi Society, Vithal Nagar, Juhu",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400049",
          addressCountry: "IN",
        },
        hasMap: clinic.mapsSearchUrl,
        medicalSpecialty: "OralAndMaxillofacial",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/about#doctor`,
        name: doctor.name,
        jobTitle: doctor.specialty,
        worksFor: { "@id": `${siteUrl}/#clinic` },
      },
    ],
  };

  return (
    <html lang="en-IN" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1 pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
