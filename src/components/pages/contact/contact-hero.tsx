import { Circle } from "@/components/design/circle";
import { SectionHeader } from "@/components/section-header";

export const ContactHeroSection = () => {
  return (
    <section className="py-20 relative overflow-x-clip ">
      <div className="side-gutter">
        <SectionHeader
          title="Let's Bring Your Vision to Life"
          headerUnderline={false}
          tag="Get in Touch with DreamSpace"
          paragraphText="Whether you're ready to start a new project or simply have questions, our team at DreamSpace is here to help. Reach out today and let's discuss how we can turn your interior design dreams into reality. We're just a message away."
        />
      </div>
      <Circle styles="blur-3xl bg-orange-cs/80 h-[12rem] lg:h-[20rem] aspect-square rounded-full top-[2%] left-[6%]  lg:left-[16%] z-[-1]" />
      <Circle styles="blur-3xl bg-yellow-cs h-[12rem] lg:h-[20rem] aspect-square rounded-full lg:top-[8%] top-[20%] right-[6%]  lg:right-[18%] z-[-1]" />
      <Circle styles="blur-3xl bg-purple-cs h-[12rem] lg:h-[20rem] aspect-square rounded-full lg:top-[70%] -translate-y-1/2 top-[20%] left-[6%]  lg:left-1/2 -translate-x-1/2 z-[-1]" />
    </section>
  );
};
