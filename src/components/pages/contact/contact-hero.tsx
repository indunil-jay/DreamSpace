import { SectionHeader } from "@/components/section-header";

export const ContactHeroSection = () => {
  return (
    <section className="py-20">
      <div className="side-gutter">
        <SectionHeader
          title="Let's Bring Your Vision to Life"
          headerUnderline={false}
          tag="Get in Touch with DreamSpace"
          paragraphText="Whether you're ready to start a new project or simply have questions, our team at DreamSpace is here to help. Reach out today and let's discuss how we can turn your interior design dreams into reality. We're just a message away."
        />
      </div>
    </section>
  );
};
