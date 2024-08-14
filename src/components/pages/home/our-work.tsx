"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/section-header";

import { projects } from "@/constants";
import { PiDotFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaLocationDot } from "react-icons/fa6";
import { FcShop } from "react-icons/fc";

const Row = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex">
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[340px] bg-white w-full border min-h-[420px] rounded-md overflow-clip"
          >
            <div className="max-w-sm h-[200px] relative">
              <Image
                src={project.image}
                alt="our-works"
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 p-4 space-y-2">
              <h4 className="uppercase font-medium line-clamp-3">
                {project.name}
              </h4>
              <Separator />
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-[max-content_1fr] gap-4">
                  <div className="flex items-center gap-1">
                    <PiDotFill className="size-6 text-purple-cs" />
                    <span className="text-sm font-semibold">Type : </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FcShop />
                    <span className="font-medium text-sm capitalize">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-[max-content_1fr] gap-4">
                  <div className="flex items-center gap-1">
                    <PiDotFill className="size-6 text-purple-cs" />
                    <span className="text-sm font-semibold">Location : </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaLocationDot className="text-emerald-500" />
                    <span className="font-medium text-sm capitalize">
                      {project.location}
                    </span>
                  </div>
                </div>
              </div>
              <Button className="uppercase px-5 py-1.5 bg-dark text-white">
                Watch out
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const OurWorkSection = () => {
  return (
    <section className="py-20">
      <SectionHeader
        tag="Past works"
        title="Our works"
        paragraphText="We love what we do, and we're proud of the
          impact our work has on our clients."
      />

      <div className="pt-10 flex overflow-hidden justify-center [mask-image:linear-gradient(to_left,transparent,black_25%,black_75%,transparent)]">
        {/* <Row /> */}
      </div>

      <div className="flex justify-center mt-10"></div>
    </section>
  );
};
