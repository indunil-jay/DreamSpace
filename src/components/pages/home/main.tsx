import { HeroSection } from "@/components/pages/home/hero-section";
import { OurWorkSection } from "@/components/pages/home/our-work";
import { WhatWeDoSection } from "@/components/pages/home/what-we-do-section";
import { WhyWeChoose } from "@/components/pages/home/why-choose-us-section";

export const Main = () => {
  return (
    <main>
      <HeroSection />
      <WhatWeDoSection />
      <WhyWeChoose />
      <OurWorkSection />
    </main>
  );
};
