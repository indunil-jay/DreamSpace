import { SectionHeader } from "@/components/section-header";
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

// Define the project type
type TProject = (typeof projects)[number];

const WorkCard = ({ project }: { project: TProject }) => {
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
        <div className="flex gap-6">
          {projects.map((project) => (
            <WorkCard project={project} key={project.id} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10"></div>
    </section>
  );
};
