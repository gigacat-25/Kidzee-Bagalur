import Navbar from "@/components/Navbar";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Kidzee KIADB Bagalur | Top Preschool in Bengaluru",
  description: "Learn about Kidzee KIADB Bagalur. Backed by Zee Learn, we have over 2 decades of experience and a 4.9⭐ rating. Discover our ECCE-certified teachers and secure campus.",
  keywords: [
    "About Kidzee",
    "Kidzee KIADB Bagalur history",
    "best play school team",
    "preschool educators Bangalore",
    "Zee Learn history",
    "early childhood education expert"
  ],
  alternates: {
    canonical: "https://kidzeekiadbbagalur.com/about",
  }
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <About />
        <WhyChoose />
      </main>
      <Footer />
    </>
  );
}
