import { aboutHeroImg, aboutHeromobileImg } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const AboutHeroSection = () => {
  return (
    <>
      <div
        className={cn(
          "min-h-dvh h-dvh w-full top-0 absolute !overflow-hidden hidden md:block",
          "after:bg-dark/60 after:absolute after:content-[' '] after:top-0 after:min-h-dvh after:h-dvh after:w-full after:z-10 !after:overflow-hidden"
        )}
      >
        <Image
          src={aboutHeroImg}
          alt="about-page-hero-image"
          fill
          className="object-cover overflow-clip"
        />
      </div>
      <div
        className={cn(
          "min-h-dvh h-dvh w-full top-0 absolute !overflow-hidden md:hidden",
          "after:bg-dark/60 after:absolute after:content-[' '] after:top-0 after:min-h-dvh after:h-dvh after:w-full after:z-10 !after:overflow-hidden"
        )}
      >
        <Image
          src={aboutHeromobileImg}
          alt="about-page-hero-image"
          fill
          className="object-cover overflow-clip"
        />
      </div>
      <section className="z-[100] min-h-[calc(100dvh-5rem)] h-[calc(100dvh-5rem)] flex flex-col  justify-center overflow-hidden"></section>
    </>
  );
};
