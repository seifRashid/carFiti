import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden sm:overflow-x-visible">
      <Navbar />
      <Hero />
      <div id="about">
        <WhyChooseUs />
      </div>
      <Services />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
