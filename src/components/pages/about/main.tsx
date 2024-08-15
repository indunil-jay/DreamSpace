import { AboutContentSection } from "./about-content";
import { AboutHeroSection } from "./about-hero-section";
import { OurteamSection } from "./our-team";
import { ProjectSummarySection } from "./project-summary";

export const Main = () => {
  return (
    <>
      <AboutHeroSection />
      <AboutContentSection />
      <ProjectSummarySection />
      <OurteamSection />
    </>
  );
};
