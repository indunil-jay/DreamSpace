import Image from "next/image";

import { testimonials } from "@/constants";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/section-header";

const column1 = testimonials.slice(0, 5);
const column2 = testimonials.slice(5, 11);
const column3 = testimonials.slice(11, 15);

interface IColum {
  column: typeof testimonials;
  style?: string;
  duration?: number;
}

const Column = ({ column, style, duration }: IColum) => {
  return (
    <div className={cn(style)}>
      <div className="flex flex-col items-center justify-center gap-6 pb-6">
        {column.map((t) => (
          <div className="p-10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] border border-[#f1f1f1] max-w-xs w-full">
            <div>
              <span className="text-[13px]">{t.text}</span>
            </div>

            <div>
              <div className="flex items-center gap-2 mt-5">
                <div className="relative">
                  <Image
                    src={t.imageSrc}
                    alt="testimonial-user-cover"
                    className="h-10 w-10 rounded-full"
                    width={40}
                    height={40}
                  />
                </div>

                <div className=" flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {t.name}
                  </div>
                  <div className="leading-5 tracking-tight text-sm text-dark/70">
                    {t.username}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TestimonialSection = () => {
  return (
    <section className="bg-white">
      <div className="py-20">
        <SectionHeader
          title="What our clients say"
          tag="Testimonial"
          paragraphText="Read what our clients have to say about their experiences with us.
            Their stories and feedback highlight our commitment to delivering
            exceptional service and quality."
        />

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <Column column={column1} duration={30} />
          <Column column={column2} style="hidden md:block" duration={15} />
          <Column column={column3} style="hidden lg:block" duration={10} />
        </div>
      </div>
    </section>
  );
};
