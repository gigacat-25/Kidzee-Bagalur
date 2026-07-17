import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Programs from "@/components/Programs";
import Pentemind from "@/components/Pentemind";
import DaycareBanner from "@/components/DaycareBanner";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import GoogleRating from "@/components/GoogleRating";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kidzee KIADB Bagalur | Best Preschool & Day Care in Huvinayakanahalli",
  description: "Kidzee Preschool KIADB Bagalur (Huvinayakanahalli, Aerospace Park) offers Playgroup, Nursery, Kindergarten, and Daycare with 4.9⭐ rating. Enquire for 2026-27 admissions.",
  keywords: [
    "Kidzee KIADB Bagalur",
    "Preschool in Huvinayakanahalli",
    "Best Preschool in Bagalur",
    "Kidzee Bagalur Huvinayakanahalli",
    "Best Day Care Bagalur",
    "Playgroup in Bangalore",
    "Nursery Huvinayakanahalli",
    "Zee Learn Preschool Bangalore",
    "Best Preschool in India",
    "Play School near Aerospace Park",
    "Pre Nursery School in Bagalur",
    "Kindergarten in Huvinayakanahalli",
    "Kidzee Admissions 2026-27"
  ],
  alternates: {
    canonical: "https://kidzeekiadbbagalur.com",
  },
  openGraph: {
    title: "Kidzee KIADB Bagalur | Best Preschool & Day Care in Huvinayakanahalli",
    description: "Kidzee Preschool KIADB Bagalur offers early childhood education, Playgroup, Nursery, Kindergarten & Day Care with 4.9⭐ parent rating. Admissions Open 2026-27.",
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
    description: "Kidzee Preschool KIADB Bagalur offers early childhood education, Playgroup, Nursery, Kindergarten & Day Care with 4.9⭐ parent rating.",
    images: ["https://kidzeekiadbbagalur.com/images/about_kids.png"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <WhyChoose />
        <Programs />
        <Pentemind />
        <DaycareBanner />
        <Gallery />
        <Testimonials />
        <GoogleRating />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


