import { CardSwipper } from "@/components/card-swipper";
import { GradientTag } from "@/components/gradient-tag";
import { SectionHeader } from "@/components/section-header";

export const WhyWeChoose = () => {
  return (
    <section className="py-20  bg-dark overflow-clip">
      <div className="grid lg:grid-cols-2 relative min-h-[580px] h-[580px]">
        <div className="absolute left-1/2 -translate-x-1/2 top-[25%] md:top-1/2 -translate-y-1/2 pointer-events-none">
          <div className="md:text-[15rem] text-[12rem]  text-white/10 font-bold leading-none">
            <span className="block lg:relative lg:left-[-1rem]"> WE</span>
            <span className="block lg:relative lg:left-[-4rem]">ARE </span>
          </div>
        </div>

        <div className="self-center text-white">
          <SectionHeader
            title="Why Choose us"
            tag="WE ARE PASSIONATE ON WHAT WE PROVIDE"
            paragraphText="At our interior design company, we are dedicated to transforming
            spaces with creativity and precision. Our approach combines
            innovative design with a deep understanding of our clients' needs,
            ensuring that every project reflects their unique vision and
            enhances their environment."
            paragraphTextColor="light"
          />
        </div>

        <div className="flex relative  justify-center items-center   ">
          <CardSwipper />
        </div>
      </div>
    </section>
  );
};
