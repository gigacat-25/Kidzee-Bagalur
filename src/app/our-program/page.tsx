import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import Pentemind from "@/components/Pentemind";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preschool & Day Care Programs | Kidzee KIADB Bagalur",
  description: "Explore our early childhood programs: Playgroup, Nursery, Junior KG, Senior KG, and Day Care. Backed by Kidzee's scientific PéNTEMiND pedagogy.",
  keywords: [
    "preschool programs Bangalore",
    "Kidzee playgroup curriculum",
    "PENTEMIND pedagogy",
    "kindergarten syllabus",
    "day care facilities Bagalur",
    "play school activities"
  ],
  alternates: {
    canonical: "https://kidzeekiadbbagalur.com/our-program",
  }
};

export default function OurProgramPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Programs />
        <Pentemind />
      </main>
      <Footer />
    </>
  );
}
