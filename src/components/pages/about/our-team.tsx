import { SectionHeader } from "@/components/section-header";
import { teamMembers } from "@/constants";
import Image from "next/image";

export const OurteamSection = () => {
  return (
    <section className="bg-black py-20">
      <div className="side-gutter text-white">
        <SectionHeader
          paragraphTextColor="light"
          tag="Meet Our Experts"
          title="Our Team"
          paragraphText="At DreamSpace, our team is driven by a shared passion for transforming spaces into stunning environments. Each member brings unique expertise and creativity, working together to turn your vision into reality with precision and care."
        />

        <div className="mt-10 grid items-center justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="">
              <div className="min-h-[400px] h-[400px] relative ">
                <Image
                  src={member.image}
                  fill
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <p className="text-[18px] font-semibold capitalize">
                  {member.name}
                </p>
                <p className="text-base text-white/80 italic">{member.title}</p>
                <p className="text-sm text-purple-cs/50 italic">
                  {member.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
