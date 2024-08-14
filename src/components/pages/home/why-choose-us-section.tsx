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

        <div className="text-center text-white relative self-center  p-10">
          <GradientTag>WE ARE PASSIONATE ON WHAT WE PROVIDE</GradientTag>

          <SectionHeader> Why Choose us</SectionHeader>

          <p className="sub-text-1 mt-8 text-white/70">
            At our interior design company, we are dedicated to transforming
            spaces with creativity and precision. Our approach combines
            innovative design with a deep understanding of our clients' needs,
            ensuring that every project reflects their unique vision and
            enhances their. environment
          </p>
        </div>

        <div className="flex relative  justify-center items-center   ">
          <CardSwipper />
        </div>
      </div>
    </section>
  );
};
