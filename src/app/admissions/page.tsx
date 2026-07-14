import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preschool Admissions 2026-27 | Kidzee KIADB Bagalur",
  description: "Enroll your child at Kidzee KIADB Bagalur. Admissions open for Playgroup, Nursery, Junior KG, Senior KG, and Day Care. Schedule a campus visit or call today.",
  keywords: [
    "preschool admissions Bangalore",
    "Kidzee admissions 2026",
    "play school registration Bagalur",
    "kindergarten enrollment Huvinayakanahalli",
    "daycare admissions Huvinayakanahalli"
  ],
  alternates: {
    canonical: "https://kidzeekiadbbagalur.com/admissions",
  }
};

export default function AdmissionsPage() {
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
