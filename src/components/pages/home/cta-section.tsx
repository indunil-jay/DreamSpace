import { ctaImage } from "@/constants";
import Image from "next/image";
import { FaSquarePhoneFlip } from "react-icons/fa6";

export const CTASection = () => {
  return (
    <section className="overflow-clip pt-20">
      <div className="relative">
        <div className="absolute z-50 inset-0 bg-dark/80"></div>
        <div className="absolute z-[999] inset-0  text-white flex flex-col justify-center items-center">
          <h4 className="uppercase text-[1.6rem] underline underline-offset-4">
            Let&apos;s Work togther
          </h4>

          <div className="inline-flex items-center justify-center gap-2 border px-7 cursor-pointer py-2 mt-8 bg-white/5 rounded-sm transition-all hover:bg-white hover:text-black">
            <span className="uppercase font-medium">
              Schedule a consultation call us
            </span>
            <FaSquarePhoneFlip className="size-6" />
          </div>
        </div>
        <div className="w-full min-h-[560px] relative">
          <Image
            src={ctaImage}
            alt="cta-image"
            fill
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};
