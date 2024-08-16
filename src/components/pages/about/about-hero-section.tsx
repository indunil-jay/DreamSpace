import { aboutHeroImg, aboutHeromobileImg } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const AboutHeroSection = () => {
  return (
    <>
      <div className="h-[20rem] z-[98]  aspect-square rounded-full bg-yellow-cs absolute md:-top-[10rem] -top-[12rem] left-[-6rem] md:left-[-2rem]" />
      <div
        className={cn(
          "min-h-dvh h-dvh w-full top-0 absolute overflow-hidden hidden md:block",
          "after:bg-dark/60 after:absolute after:content-[' '] after:top-0 after:min-h-dvh after:h-dvh after:w-full after:z-10 after:overflow-hidden"
        )}
      >
        <Image
          src={aboutHeroImg}
          alt="about-page-hero-image"
          fill
          priority
          className="object-cover w-full h-full"
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
          priority
          className="object-cover w-full h-full"
        />
      </div>
      <section className=" min-h-[calc(100dvh-5rem)] h-[calc(100dvh-5rem)] flex flex-col  justify-center items-center overflow-hidden">
        <h1 className="heading-main mt-2 text-white relative z-[9999]">
          About us
        </h1>
      </section>
    </>
  );
};
