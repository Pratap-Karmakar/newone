
import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";
import Footer from "@/components/Footer";
import { GetInTouch } from "@/components/GetInTouch";
import HeroSection from "@/components/HeroSection";
import TeamData from "@/components/TeamData";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";
// import { BackgroundLines } from "@/components/ui/background-lines";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      {/* <BackgroundLines/> */}
      <BackgroundLinesDemo/>
      <WhatWeDo/>
      <TeamData/>
      <WhyChooseUs/>
      <GetInTouch/>
      <Footer/>
    </main>
  );
}
