import { Circle3 } from "@/components/design/circl3";
import { GradientTag } from "@/components/gradient-tag";
import { Swipper } from "@/components/swipper";
import { slides1, slides2, slides3 } from "@/constants";

export const HeroSection = () => {
  return (
    <section className="relative pt-10 pb-20 side-gutter overflow-x-clip">
      <div className="text-center z-[99] max-w-screen-md mx-auto w-full ">
        <GradientTag> your imagination our creation</GradientTag>
        <h1 className="heading-main mt-2">
          Design defined by warmth and romance, with a little edge
        </h1>
        <div className="mt-4 w-[85%] mx-auto">
          <p className="sub-text-1 ">
            A beautiful and functional home holds the capacity to transform your
            mental, emotional, and physical state bringing you to a higher place
            in your general well-being and everyday life.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1  lg:grid-cols-[minmax(150px,1fr)_minmax(300px,2fr)_minmax(150px,1fr)]  min-h-[360px] h-[360px] 2xl:min-h-[500px] 2xl:h-[500px] gap-10 mt-16 lg:mt-20 ">
        <div className=" rounded-3xl border lg:inline-flex  hidden overflow-clip  min-h-[360px]  h-[360px] 2xl:min-h-[500px] 2xl:h-[500px] relative">
          <Swipper
            slides={slides1}
            navigation={false}
            pagination={false}
            direction="vertical"
            reverse={true}
          />
        </div>
        <div className=" rounded-3xl borderrelative overflow-clip  min-h-[360px]  h-[360px] 2xl:min-h-[500px] 2xl:h-[500px]">
          {" "}
          <Swipper slides={slides2} navigation={false} pagination={false} />
        </div>
        <div className=" rounded-3xl border lg:block hidden relative overflow-clip   min-h-[360px] h-[360px] 2xl:min-h-[500px] 2xl:h-[500px]">
          <Swipper
            slides={slides3}
            navigation={false}
            pagination={false}
            direction="vertical"
          />
        </div>
      </div>

      <Circle3 />
    </section>
  );
};
