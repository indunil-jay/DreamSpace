import { Swipper } from "@/components/swipper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { projects, slides } from "@/constants";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";

import { Metadata } from "next";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = projects[+id - 1];
  return {
    title: project.name,
    description: project.summary,
    // openGraph:{
    //   images:[{url:post.imageUrl}]
    // }
  };
}

const BackButton = () => {
  return (
    <Button className="bg-yellow-cs/90 group  transition-all hover:bg-yellow-cs">
      <Link href="/portfolio" className="flex gap-2 items-center">
        <span>
          <IoChevronBackSharp className="size-4 font-semibold text-dark/90 group-hover:text-dark" />
        </span>
        <span className="font-semibold text-dark/90 group-hover:text-dark">
          Back
        </span>
      </Link>
    </Button>
  );
};

const ImageGallery = () => {
  return (
    <div className="h-[600px] min-h-[600px] 2xl:h-[840px]  2xl:min-h-[840px] overflow-clip rounded-3xl">
      <Swipper slides={slides} />
    </div>
  );
};

const PortfolioDetailPage = ({ params }: { params: { id: string } }) => {
  const project = projects[+params.id - 1];
  return (
    <section className="side-gutter ">
      <div className="sticky top-5 left-0 z-50">
        <BackButton />
      </div>
      <Card className="max-w-screen-md w-full mx-auto my-10 z-[999] relative">
        <CardHeader>
          <CardTitle className="heading-main uppercase ">
            {project.name}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <ImageGallery />

          <div className="mt-5 mb-2">
            <div className="">
              <span className="text-xs bg-yellow-cs font-semibold  px-2 inline-block -skew-x-12">
                Requirement
              </span>
              <h3 className="text-[1.8rem] capitalize font-semibold leading-none">
                {project.requirement}
              </h3>
            </div>

            <div className="grid grid-cols-2">
              <div className="flex gap-2 items-center">
                <div className="h-[2rem] aspect-square rounded-full relative overflow-clip">
                  <Image
                    src={project.clientImage}
                    alt="client-image"
                    fill
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-dark/60 italic text-[10px] leading-none">
                    client
                  </span>
                  <span className="text-xs font-medium">{project.client}</span>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 ">
                  <span className="text-dark/60 italic text-[10px] leading-none">
                    category
                  </span>
                  <span className="text-xs font-medium">{project.type}</span>
                </div>
                <span className="text-dark/70 font-medium text-xs ">
                  {dayjs(project.finishedDate).format(
                    "ddd, MMM D, YYYY h:mm A"
                  )}
                </span>
              </div>
            </div>
          </div>
          <Separator />

          <div className="mt-5 ">
            {/* {project.description.map((p) => (
              <div className="mb-5" key={p.id}>
                <h4 className="italic font-semibold text-[18px] underline mb-3">
                  {p.title}
                </h4>
                <p className="text-[14px] break-words text-dark/95">{p.text}</p>
              </div>
            ))} */}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default PortfolioDetailPage;
