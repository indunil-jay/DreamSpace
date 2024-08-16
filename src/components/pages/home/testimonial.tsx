import { testimonials } from "@/constants";
import { SectionHeader } from "@/components/section-header";
import { TestimonialColumn } from "@/components/pages/home/testimonial-column";
import { Circle } from "@/components/design/circle";

const column1 = [...testimonials.slice(0, 5), ...testimonials.slice(0, 5)];
const column2 = [...testimonials.slice(5, 11), ...testimonials.slice(5, 11)];
const column3 = [...testimonials.slice(11, 15), ...testimonials.slice(11, 15)];

export const TestimonialSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 relative overflow-x-clip">
      <Circle styles="blur-3xl bg-orange-cs/80 h-[12rem] lg:h-[20rem] aspect-square rounded-full top-[2%] left-[6%]  lg:left-[6%] " />
      <Circle styles="blur-3xl bg-yellow-cs h-[12rem] lg:h-[20rem] aspect-square rounded-full lg:top-[50%] top-[70%] right-[6%]  lg:right-[6%] " />
      <Circle styles="blur-3xl bg-purple-cs h-[12rem] lg:h-[20rem] aspect-square rounded-full lg:top-[95%] -translate-y-1/2 top-[60%] left-[6%]  lg:left-[5%] " />
      <div className="pt-20 pb-40">
        <SectionHeader
          title="What our clients say"
          tag="Testimonial"
          paragraphText="Read what our clients have to say about their experiences with us.
            Their stories and feedback highlight our commitment to delivering
            exceptional service and quality."
        />

        <div className="flex z-50 relative justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialColumn column={column1} duration={30} />
          <TestimonialColumn
            column={column2}
            style="hidden md:block"
            duration={15}
          />
          <TestimonialColumn
            column={column3}
            style="hidden lg:block"
            duration={10}
          />
        </div>
      </div>
    </section>
  );
};
