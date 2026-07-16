import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyCendex from "@/components/WhyCendex";
import Assets from "@/components/Assets";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <WhyCendex />
      <Assets />
      <Footer />
    </>
  );
}
