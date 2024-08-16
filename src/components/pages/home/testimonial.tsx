import { testimonials } from "@/constants";
import { SectionHeader } from "@/components/section-header";
import { TestimonialColumn } from "@/components/pages/home/testimonial-column";
import { Circle3 } from "@/components/design/circl3";

const column1 = [...testimonials.slice(0, 5), ...testimonials.slice(0, 5)];
const column2 = [...testimonials.slice(5, 11), ...testimonials.slice(5, 11)];
const column3 = [...testimonials.slice(11, 15), ...testimonials.slice(11, 15)];

export const TestimonialSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      <Circle3 />
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
