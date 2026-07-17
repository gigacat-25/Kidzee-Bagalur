import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import Pentemind from "@/components/Pentemind";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preschool & Daycare Programs | Kidzee KIADB Bagalur",
  description: "Explore Kidzee KIADB Bagalur early childhood programs: Playgroup, Nursery, Junior KG, Senior KG, and Day Care in Huvinayakanahalli. Powered by PéNTEMiND pedagogy.",
  keywords: [
    "preschool programs Bangalore",
    "Kidzee playgroup curriculum Bagalur",
    "PENTEMIND pedagogy",
    "kindergarten syllabus Huvinayakanahalli",
    "day care facilities Bagalur",
    "play school activities Aerospace Park",
    "Nursery admissions Bagalur"
  ],
  alternates: {
    canonical: "https://kidzeekiadbbagalur.com/our-program",
  },
  openGraph: {
    title: "Preschool & Daycare Programs | Kidzee KIADB Bagalur",
    description: "Explore Kidzee KIADB Bagalur early childhood programs: Playgroup, Nursery, Junior KG, Senior KG, and Day Care in Huvinayakanahalli.",
    url: "https://kidzeekiadbbagalur.com/our-program",
    siteName: "Kidzee KIADB Bagalur",
    images: [
      {
        url: "https://kidzeekiadbbagalur.com/images/about_kids.png",
        width: 1200,
        height: 630,
        alt: "Kidzee KIADB Bagalur Preschool Programs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preschool & Daycare Programs | Kidzee KIADB Bagalur",
    description: "Explore Kidzee KIADB Bagalur early childhood programs: Playgroup, Nursery, Junior KG, Senior KG, and Day Care.",
    images: ["https://kidzeekiadbbagalur.com/images/about_kids.png"],
  },
};

export default function OurProgramPage() {
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
        "name": "Our Programs",
        "item": "https://kidzeekiadbbagalur.com/our-program"
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
        <Programs />
        <Pentemind />
      </main>
      <Footer />
    </>
  );
}

