"use client";
import { SectionHeader } from "@/components/section-header";
import { Swipper } from "@/components/swipper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { projects } from "@/constants";
import dayjs from "dayjs";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FcShop } from "react-icons/fc";
import { PiDotFill } from "react-icons/pi";
import { motion } from "framer-motion";

const ProjectCard = ({ project }: { project: (typeof projects)[number] }) => {
  return (
    <motion.div
      animate={{ opacity: 0.2, scale: 0.3 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="overflow-clip"
    >
      <Card>
        <CardHeader>
          <CardTitle className="uppercase text-[1.8rem]">
            {project.name}
          </CardTitle>
          <Separator />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="w-full min-h-[340px] h-[340px] relative rounded-md overflow-clip">
              <Swipper
                slides={project.images}
                navigation={false}
                pagination={false}
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex flex-col ">
                <CardDescription className="line-clamp-[10] text-sm mb-4">
                  {project.summary}
                </CardDescription>

                <div className="space-y-2">
                  <div className="grid grid-cols-[max-content_1fr] gap-2">
                    <div className="flex items-center gap-0.5">
                      <PiDotFill className="size-6 text-purple-cs" />
                      <span className="text-xs font-semibold">Type : </span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <FcShop />
                      <span className="font-medium text-xs capitalize">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-[max-content_1fr] gap-2">
                    <div className="flex items-center gap-0.5">
                      <PiDotFill className="size-6 text-purple-cs" />
                      <span className="text-xs font-semibold">Location : </span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <FaLocationDot className="text-emerald-500" />
                      <span className="font-medium text-xs capitalize">
                        {project.location}
                      </span>
                    </div>
                  </div>
                </div>

                <Link href={`/portfolio/${project.id}`} className="mt-6">
                  <Button className=" uppercase">View more details</Button>
                </Link>
              </div>

              <div className="self-end">
                <p className="text-dark/70 text-sm">
                  {dayjs(project.finishedDate).format(
                    "ddd, MMM D, YYYY h:mm A"
                  )}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const ProjectSection = () => {
  return (
    <section className="py-20">
      <div className="side-gutter ">
        <SectionHeader
          title="Our Latest Creations"
          tag="featured projects"
          paragraphText="Explore a selection of our latest projects, each reflecting our dedication to exceptional design and meticulous attention to detail. From commercial spaces to residential havens, these projects showcase our ability to create environments that inspire and impress"
          headerUnderline={false}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
