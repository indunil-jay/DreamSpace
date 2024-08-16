import { Circle } from "@/components/design/circle";

export const PortfolioHero = () => {
  return (
    <section className="pt-10 relative  overflow-x-clip">
      <Circle styles="blur-3xl bg-orange-cs/80 h-[12rem] lg:h-[20rem] aspect-square rounded-full top-[2%] left-[6%]  lg:left-[16%] z-[-1]" />
      <Circle styles="blur-3xl bg-yellow-cs h-[12rem] lg:h-[20rem] aspect-square rounded-full lg:top-[8%] top-[20%] right-[6%]  lg:right-[18%] z-[-1]" />
      <Circle styles="blur-3xl bg-purple-cs h-[12rem] lg:h-[20rem] aspect-square rounded-full lg:top-[95%] -translate-y-1/2 top-[60%] left-[6%]  lg:left-[35%] z-[-1]" />
      <div className="text-center max-w-screen-md mx-auto w-full side-gutter relative ">
        <h1 className="heading-main mt-2">
          Showcasing Our Interior Masterpieces
        </h1>
        <div className="mt-4 w-[85%] mx-auto">
          <p className="text-sm text-dark/90 ">
            Explore our curated portfolio of beautifully designed spaces. From
            modern offices to elegant homes, each project reflects our
            commitment to quality, creativity, and attention to detail. Discover
            the transformative power of exceptional interior design
          </p>
        </div>
        {/* <Circle /> */}
      </div>
    </section>
  );
};
