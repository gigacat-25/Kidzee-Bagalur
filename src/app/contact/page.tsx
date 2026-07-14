import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Kidzee KIADB Bagalur | Map & Location Details",
  description: "Get in touch with Kidzee KIADB Bagalur. Located behind Airports Authority of India Residential Colony, Huvinayakanahalli. Call +91 9611123049.",
  keywords: [
    "Contact Kidzee Bagalur",
    "Kidzee Huvinayakanahalli phone number",
    "pre school location Bagalur",
    "KIADB Aerospace Park daycare address",
    "Kidzee school map"
  ],
  alternates: {
    canonical: "https://kidzeekiadbbagalur.com/contact",
  }
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
