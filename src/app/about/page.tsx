import Navbar from "@/components/Navbar";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Kidzee KIADB Bagalur | Best Preschool in Huvinayakanahalli",
  description: "Learn about Kidzee KIADB Bagalur in Huvinayakanahalli. Backed by Zee Learn & PéNTEMiND pedagogy with a 4.9⭐ parent rating and ECCE-certified teachers.",
  keywords: [
    "About Kidzee KIADB Bagalur",
    "Best Preschool in Huvinayakanahalli",
    "Zee Learn Bagalur background",
    "Preschool educators Bagalur",
    "PENTEMIND methodology Bangalore",
    "Early childhood care Huvinayakanahalli"
  ],
  alternates: {
    canonical: "https://kidzeekiadbbagalur.com/about",
  },
  openGraph: {
    title: "About Us | Kidzee KIADB Bagalur | Best Preschool in Huvinayakanahalli",
    description: "Learn about Kidzee KIADB Bagalur in Huvinayakanahalli. Backed by Zee Learn & PéNTEMiND pedagogy with a 4.9⭐ parent rating.",
    url: "https://kidzeekiadbbagalur.com/about",
    siteName: "Kidzee KIADB Bagalur",
    images: [
      {
        url: "https://kidzeekiadbbagalur.com/images/about_kids.png",
        width: 1200,
        height: 630,
        alt: "About Kidzee KIADB Bagalur Preschool Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Kidzee KIADB Bagalur | Best Preschool in Huvinayakanahalli",
    description: "Learn about Kidzee KIADB Bagalur in Huvinayakanahalli. Backed by Zee Learn & PéNTEMiND pedagogy.",
    images: ["https://kidzeekiadbbagalur.com/images/about_kids.png"],
  },
};

export default function AboutPage() {
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
        "name": "About Us",
        "item": "https://kidzeekiadbbagalur.com/about"
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
        <About />
        <WhyChoose />
      </main>
      <Footer />
    </>
  );
}

