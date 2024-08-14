import { ourprocessHeroImg } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const ProcessHeroSection = () => {
  return (
    <>
      <div
        className={cn(
          "min-h-dvh h-dvh w-full top-0 absolute !overflow-hidden",
          "after:bg-dark/60 after:absolute after:content-[' '] after:top-0 after:min-h-dvh after:h-dvh after:w-full after:z-10 !after:overflow-hidden"
        )}
      >
        <Image
          src={ourprocessHeroImg}
          alt="our-process-page-hero-image"
          fill
          className="object-cover overflow-clip"
        />
      </div>

      <section className="relative z-[100] min-h-[calc(100dvh-5rem)] h-[calc(100dvh-5rem)] flex flex-col  justify-center overflow-hidden ">
        <div className="text-center max-w-screen-md mx-auto w-full side-gutter  relative -top-[2rem] ">
          <h1 className="heading-main mt-2 text-white">Our Proven Process</h1>
          <div className="mt-4 w-[85%] mx-auto">
            <p className="text-sm  text-white/70 italic ">
              &#10075;&#10075; Every project is unique, but our commitment to
              excellence remains the same. From the first spark of an idea to
              the final execution, we meticulously plan, innovate, and deliver
              solutions tailored to your needs. Discover the steps that turn
              your dreams into a tangible reality. &#10076;&#10076;
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
