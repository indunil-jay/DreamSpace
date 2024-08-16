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
import Link from "next/link";

type TProject = (typeof projects)[number];

export const WorkCard = ({ project }: { project: TProject }) => {
  return (
    <Card className="overflow-clip max-w-[320px] w-full hover:shadow-lg flex-none h-[520px] min-h-[520px] flex justify-between flex-col">
      <div>
        <div className="h-[200px] min-h-[200px] aspect-video relative">
          <Image src={project.image} alt="card-image" fill />
        </div>
        <CardHeader>
          <CardTitle className="text-[1.2rem] uppercase w-full line-clamp-2">
            {project.name}
          </CardTitle>

          <Separator />
          <CardDescription className="line-clamp-4 break-all text-xs">
            {project.summary}
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
      </div>
      <div>
        <CardFooter>
          <Link href={`/portfolio/${project.id}`} className="block w-full">
            <Button asChild>
              <>
                <span className="uppercase">See details</span>
                <span className="ml-2">
                  <BsArrowRight />
                </span>
              </>
            </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export const WorksCards = () => {
  return (
    <div className="pt-10 w-full flex justify-center">
      <div className="overflow-x-auto pl-[3rem] pr-[3rem] works-scrollbar">
        <div className="flex items-center gap-6 pb-[5rem] justify-start">
          {projects.map((project) => (
            <WorkCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
