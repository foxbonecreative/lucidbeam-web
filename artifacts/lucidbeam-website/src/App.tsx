import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Ethics from "@/components/Ethics";
import Founder from "@/components/Founder";
import FAQ from "@/components/FAQ";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[hsl(222_47%_6%)] text-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Features />
        <Ethics />
        <Founder />
        <FAQ />
        <Support />
      </main>
      <Footer />
    </div>
  );
}
