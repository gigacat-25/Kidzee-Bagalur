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
  metadataBase: new URL("https://kidzeekiadbbagalur.com"),
  title: "Kidzee KIADB Bagalur | Best Preschool & Day Care in Huvinayakanahalli",
  description: "Kidzee Preschool KIADB Bagalur (Huvinayakanahalli) offers premium early childhood education, Playgroup, Nursery, Kindergarten, and Daycare with 4.9⭐ rating.",
  keywords: [
    "Kidzee KIADB Bagalur",
    "Preschool in Huvinayakanahalli",
    "Kidzee Bagalur Huvinayakanahalli",
    "Best Day Care Bagalur",
    "Playgroup in Bangalore",
    "Nursery Huvinayakanahalli",
    "Zee Learn Preschool Bangalore",
    "Kidzee Bangalore",
    "Best Preschool in India",
    "Best Preschool in Bangalore",
    "Play School near me",
    "Pre Nursery School in Bagalur",
    "Kindergarten in Huvinayakanahalli",
    "Daycare near KIADB Aerospace Park",
    "Kidzee Admissions 2026-27",
    "Zee Learn Bagalur",
    "Early childhood education Bagalur"
  ],
  alternates: {
    canonical: "https://kidzeekiadbbagalur.com",
  },
  openGraph: {
    title: "Kidzee KIADB Bagalur | Best Preschool & Day Care in Huvinayakanahalli",
    description: "Kidzee Preschool KIADB Bagalur (Huvinayakanahalli) offers premium early childhood education, playgroup, nursery, kindergarten, and day care facilities with a 4.9⭐ rating.",
    url: "https://kidzeekiadbbagalur.com",
    siteName: "Kidzee KIADB Bagalur",
    images: [
      {
        url: "https://kidzeekiadbbagalur.com/images/about_kids.png",
        width: 1200,
        height: 630,
        alt: "Kidzee KIADB Bagalur Preschool Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kidzee KIADB Bagalur | Best Preschool & Day Care in Huvinayakanahalli",
    description: "Kidzee Preschool KIADB Bagalur (Huvinayakanahalli) offers premium early childhood education, playgroup, nursery, kindergarten, and day care facilities with a 4.9⭐ rating.",
    images: ["https://kidzeekiadbbagalur.com/images/about_kids.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/kidzee-logo.png",
    shortcut: "/kidzee-logo.png",
    apple: "/kidzee-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Schema for local preschool & educational organization
  const preschoolSchema = {
    "@context": "https://schema.org",
    "@type": ["Preschool", "EducationalOrganization", "LocalBusiness"],
    "name": "Kidzee KIADB Bagalur",
    "legalName": "Kidzee Preschool KIADB Bagalur Huvinayakanahalli",
    "image": "https://kidzeekiadbbagalur.com/images/about_kids.png",
    "logo": "https://kidzeekiadbbagalur.com/kidzee-logo.png",
    "@id": "https://kidzeekiadbbagalur.com/#preschool",
    "url": "https://kidzeekiadbbagalur.com",
    "telephone": "+919611123049",
    "email": "info@kidzeekiadbbagalur.com",
    "priceRange": "$$",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Zee Learn Ltd - Kidzee",
      "url": "https://www.kidzee.com"
    },
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
      "latitude": "13.1492",
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
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Preschool & Daycare Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Playgroup",
            "description": "Exploration-based early learning for toddlers aged 1.5 to 2.5 years."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Nursery",
            "description": "Foundation for literacy, numeracy, and social skills for ages 2.5 to 3.5 years."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Junior KG",
            "description": "Structured learning, phonics, and motor skill development for ages 3.5 to 4.5 years."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Senior KG",
            "description": "Primary school readiness curriculum for children aged 4.5 to 5.5 years."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Day Care",
            "description": "Safe, hygienic, and nurturing daycare facility for children aged 1.5 to 8 years."
          }
        }
      ]
    }
  };

  // Structured Schema for FAQ Page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What age can my child join Kidzee KIADB Bagalur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Children can join our Playgroup from 1.5 years of age. We offer structured kindergarten classes for kids up to 5.5 years, and daycare support for kids aged 1.5 to 8 years."
        }
      },
      {
        "@type": "Question",
        "name": "What curriculum does Kidzee Bagalur follow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We follow Kidzee's proprietary, scientific PéNTEMiND pedagogy. It is designed to stimulate brain development across five essential domains: Inventive, Analytical, Empathetic, Conscientious, and Creative minds."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide daycare near KIADB Aerospace Park?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide full-day and half-day premium daycare facilities near KIADB Aerospace Park & Huvinayakanahalli. Our daycare features sanitized nap areas, homework guidance, indoor play, and trained nannies."
        }
      },
      {
        "@type": "Question",
        "name": "Can parents visit the Kidzee Bagalur campus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We encourage parents to visit our campus located behind the Airports Authority of India Residential Colony, KIADB Bagalur. Visits are scheduled by booking online or calling +91 9611123049."
        }
      },
      {
        "@type": "Question",
        "name": "How do admissions work for the 2026-27 academic session?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Admissions are open year-round based on slot availability. You can submit an enquiry via our Contact Form, schedule a short campus tour, submit the child's documentation, and finalize registration."
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(preschoolSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${fredoka.variable} ${nunito.variable} font-nunito text-brand-dark bg-white antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

