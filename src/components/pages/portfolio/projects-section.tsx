import { SectionHeader } from "@/components/section-header";
import { Swipper } from "@/components/swipper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { projects, slides2 } from "@/constants";
import dayjs from "dayjs";
import { FaLocationDot } from "react-icons/fa6";
import { FcShop } from "react-icons/fc";
import { PiDotFill } from "react-icons/pi";

const ProjectCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="uppercase text-[1.8rem]">
          Inside a Vibrant Bay Area Home
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="w-full min-h-[340px] h-[340px] relative rounded-md overflow-clip">
            <Swipper slides={slides2} navigation={false} pagination={false} />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col space-y-4">
              <CardDescription className="line-clamp-[10] text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, cupiditate necessitatibus doloribus veniam voluptatum
                velit harum minus vitae accusamus itaque recusandae molestias,
                explicabo laborum? Error eaque adipisci in perspiciatis ea,
                architecto veniam tempore sed pariatur, nulla nam, nobis magnam
                fuga.
              </CardDescription>
              <div>
                <div className="grid grid-cols-[max-content_1fr] gap-2">
                  <div className="flex items-center gap-0.5">
                    <PiDotFill className="size-6 text-purple-cs" />
                    <span className="text-xs font-semibold">Type : </span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <FcShop />
                    <span className="font-medium text-xs capitalize">
                      {/* {project.type} */}coffee shop
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
                      {/* {project.location} */} kandy, peradeniya
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-end">
              <p className="text-dark/70 text-sm">
                {dayjs().format("ddd, MMM D, YYYY h:mm A")}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
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
            <ProjectCard key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
