import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white">
        <Hero />
      </main>
    </>
  );
}
