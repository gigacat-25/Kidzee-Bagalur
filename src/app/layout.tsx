import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kidzee KIADB Bagalur | Best Preschool & Day Care in Huvinayakanahalli, Bengaluru",
  description: "Kidzee Preschool KIADB Bagalur (Huvinayakanahalli) offers premium early childhood education, playgroup, nursery, kindergarten, and day care facilities with a 4.9⭐ rating. Secure, child-centric learning environment.",
  keywords: [
    "Kidzee KIADB Bagalur",
    "Preschool in Huvinayakanahalli",
    "Kidzee Bagalur Huvinayakanahalli",
    "Best Day Care Bagalur",
    "Playgroup in Bangalore",
    "Nursery Huvinayakanahalli",
    "Zee Learn Preschool Bangalore",
    "Kidzee Bangalore"
  ],
  openGraph: {
    title: "Kidzee KIADB Bagalur | Best Preschool & Day Care in Huvinayakanahalli, Bengaluru",
    description: "Kidzee Preschool KIADB Bagalur (Huvinayakanahalli) offers premium early childhood education, playgroup, nursery, kindergarten, and day care facilities with a 4.9⭐ rating.",
    url: "https://kidzeekiadbbagalur.com",
    siteName: "Kidzee KIADB Bagalur",
    images: [
      {
        url: "https://images.unsplash.com/photo-1603354311397-2d5f3848b937?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Kidzee KIADB Bagalur Preschool",
      },
    ],
    locale: "en_IN",
    type: "website",
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
  // Structured Schema for local preschool
  const preschoolSchema = {
    "@context": "https://schema.org",
    "@type": "Preschool",
    "name": "Kidzee KIADB Bagalur",
    "image": "https://images.unsplash.com/photo-1603354311397-2d5f3848b937?auto=format&fit=crop&w=800&q=80",
    "@id": "https://kidzeekiadbbagalur.com/#preschool",
    "url": "https://kidzeekiadbbagalur.com",
    "telephone": "+919611123049",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "58/7, Behind Airports Authority of India Residential Colony, KIADB Bagalur, Huvinayakanahalli",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "562149",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.1492", // Approximate coordinates for Bagalur/Huvinayakanahalli area
      "longitude": "77.6714"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:30",
      "closes": "18:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "36"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(preschoolSchema) }}
        />
      </head>
      <body className={`${fredoka.variable} ${nunito.variable} font-nunito text-brand-dark bg-white antialiased`}>
        {children}
      </body>
    </html>
  );
}

