import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preschool Admissions 2026-27 | Kidzee KIADB Bagalur",
  description: "Enroll your child at Kidzee KIADB Bagalur in Huvinayakanahalli. Admissions open for Playgroup, Nursery, Junior KG, Senior KG, and Day Care. Book a campus tour today.",
  keywords: [
    "preschool admissions Bangalore",
    "Kidzee admissions 2026-27",
    "play school registration Bagalur",
    "kindergarten enrollment Huvinayakanahalli",
    "daycare admissions Aerospace Park"
  ],
  alternates: {
    canonical: "https://kidzeekiadbbagalur.com/admissions",
  },
  openGraph: {
    title: "Preschool Admissions 2026-27 | Kidzee KIADB Bagalur",
    description: "Enroll your child at Kidzee KIADB Bagalur in Huvinayakanahalli. Admissions open for Playgroup, Nursery, Junior KG, Senior KG, and Day Care.",
    url: "https://kidzeekiadbbagalur.com/admissions",
    siteName: "Kidzee KIADB Bagalur",
    images: [
      {
        url: "https://kidzeekiadbbagalur.com/images/about_kids.png",
        width: 1200,
        height: 630,
        alt: "Kidzee KIADB Bagalur Preschool Admissions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preschool Admissions 2026-27 | Kidzee KIADB Bagalur",
    description: "Enroll your child at Kidzee KIADB Bagalur in Huvinayakanahalli. Admissions open for 2026-27.",
    images: ["https://kidzeekiadbbagalur.com/images/about_kids.png"],
  },
};

export default function AdmissionsPage() {
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
        "name": "Admissions",
        "item": "https://kidzeekiadbbagalur.com/admissions"
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

