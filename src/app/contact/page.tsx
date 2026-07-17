import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Location | Kidzee KIADB Bagalur",
  description: "Get in touch with Kidzee KIADB Bagalur. Located behind Airports Authority of India Residential Colony, Huvinayakanahalli. Call +91 9611123049.",
  keywords: [
    "Contact Kidzee Bagalur",
    "Kidzee Huvinayakanahalli phone number",
    "pre school location Bagalur",
    "KIADB Aerospace Park daycare address",
    "Kidzee school location map"
  ],
  alternates: {
    canonical: "https://kidzeekiadbbagalur.com/contact",
  },
  openGraph: {
    title: "Contact Us & Location | Kidzee KIADB Bagalur",
    description: "Get in touch with Kidzee KIADB Bagalur in Huvinayakanahalli. Call +91 9611123049 or schedule a campus tour.",
    url: "https://kidzeekiadbbagalur.com/contact",
    siteName: "Kidzee KIADB Bagalur",
    images: [
      {
        url: "https://kidzeekiadbbagalur.com/images/about_kids.png",
        width: 1200,
        height: 630,
        alt: "Kidzee KIADB Bagalur Location Map and Contact",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Location | Kidzee KIADB Bagalur",
    description: "Get in touch with Kidzee KIADB Bagalur in Huvinayakanahalli.",
    images: ["https://kidzeekiadbbagalur.com/images/about_kids.png"],
  },
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://kidzeekiadbbagalur.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://kidzeekiadbbagalur.com/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </>
  );
}

