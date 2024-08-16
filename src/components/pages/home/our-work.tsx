import { SectionHeader } from "@/components/section-header";
import { WorksCards } from "@/components/pages/home/our-work-cards";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const OurWorkSection = () => {
  return (
    <section className="pt-20 pb-10 bg-gradient-to-b from-background-light to-background-white">
      <SectionHeader
        tag="Past works"
        title="Our works"
        paragraphText="We love what we do, and we're proud of the
          impact our work has on our clients."
      />
      <WorksCards />
      <div className="flex justify-center mt-10 ">
        <Link href={`/portfolio`}>
          <Button className="uppercase">See more</Button>
        </Link>
      </div>
    </section>
  );
};
