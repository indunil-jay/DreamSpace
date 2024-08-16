import { SectionHeader } from "@/components/section-header";
import { WorksCards } from "@/components/pages/home/our-work-cards";

export const OurWorkSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background-light to-background-white">
      <SectionHeader
        tag="Past works"
        title="Our works"
        paragraphText="We love what we do, and we're proud of the
          impact our work has on our clients."
      />
      <WorksCards />
      <div className="flex justify-center mt-10"></div>
    </section>
  );
};
