"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/constants";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FcShop } from "react-icons/fc";
import { PiDotFill } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type TProject = (typeof projects)[number];

export const WorkCard = ({ project }: { project: TProject }) => {
  return (
    <Card className="overflow-clip max-w-[320px] w-full hover:shadow-lg">
      <div className="h-[200px] aspect-video relative">
        <Image src={project.image} alt="card-image" fill />
      </div>
      <CardHeader>
        <CardTitle className="text-[1.2rem] uppercase w-full line-clamp-2">
          {project.name}
        </CardTitle>

        <Separator />
        <CardDescription className="line-clamp-4 break-all text-xs">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
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
      </CardContent>
      <CardFooter>
        <Button>
          <span className="uppercase">See details</span>
          <span className="ml-2">
            <BsArrowRight />
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export const WorksCards = () => {
  return (
    <div className="pt-10 flex overflow-hidden justify-center [mask-image:linear-gradient(to_left,transparent,black_25%,black_75%,transparent)]">
      <AnimatePresence>
        <motion.div
          animate={{
            translateX: "-50%",
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 10,
          }}
          className={cn(
            "flex items-center justify-center gap-6 pr-6 max-w-full w-full  "
          )}
        >
          {[...projects, ...projects].map((project) => (
            <WorkCard project={project} key={project.id} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
