import { SectionHeader } from "@/components/section-header";
import { Swipper } from "@/components/swipper";
import { slides2 } from "@/constants";

export const AboutContentSection = () => {
  return (
    <section className="bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full h-full relative rounded-md overflow-clip">
          <Swipper slides={slides2} navigation={false} pagination={false} />
        </div>

        <div className="bg-dark/90 text-white side-gutter p-10 flex items-center justify-center flex-col">
          <SectionHeader
            title="OUR STORY"
            tag="Where vision meets reality"
            headerUnderline={false}
          />

          <div className="space-y-3 text-sm text-white/70 mt-3 transition-colors hover:text-white">
            <p className="indent-8">
              DreamSpace is a full-service interior design firm dedicated to
              crafting exceptional and innovative spaces that reflect the unique
              vision of each client. Specializing in residential, commercial,
              and hospitality design, our firm approaches every project with a
              fresh perspective, ensuring that each space is both functional and
              aesthetically captivating.
            </p>
            <p>
              At DreamSpace, we believe in the power of efficient space
              planning, drawing from years of experience to create interiors
              that are not only beautiful but also practical. Our goal is to
              deliver high-quality designs that stand the test of time, offering
              enduring value and enjoyment for generations to come.
            </p>
            <p>
              We take pride in our ability to transform concepts into reality,
              utilizing the latest advancements in design technology to achieve
              extraordinary results. DreamSpace is committed to continuous
              improvement, constantly refining our skills and staying up-to-date
              with industry innovations. By using only the finest materials and
              furnishings, we ensure that every project we undertake is of the
              highest standard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
