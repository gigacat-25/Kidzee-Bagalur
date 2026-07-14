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

