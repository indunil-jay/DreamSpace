import { HeroSection } from "@/components/pages/home/hero-section";
import { OurWorkSection } from "@/components/pages/home/our-work";
import { WhatWeDoSection } from "@/components/pages/home/what-we-do-section";
import { WhyWeChoose } from "@/components/pages/home/why-choose-us-section";
import { TestimonialSection } from "@/components/pages/home/testimonial";
import { CTASection } from "@/components/pages/home/cta-section";

export const Main = () => {
  return (
    <main>
      <HeroSection />
      <WhatWeDoSection />
      <WhyWeChoose />
      <OurWorkSection />
      <TestimonialSection />
      <CTASection />
    </main>
  );
};
