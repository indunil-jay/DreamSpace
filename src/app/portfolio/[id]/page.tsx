import { Swipper } from "@/components/swipper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { ctaImage, slides } from "@/constants";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { IoChevronBackSharp } from "react-icons/io5";

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

const PortfolioDetailPage = () => {
  return (
    <section className="side-gutter ">
      <div className="sticky top-5 left-0 z-50">
        <BackButton />
        {/* <Circle3 /> */}
      </div>
      <Card className="max-w-screen-md w-full mx-auto my-10 z-[999] relative">
        <CardHeader>
          <CardTitle className="heading-main uppercase ">
            the grand apartment, ward place
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
                Make cafee unique look with old vibe
              </h3>
            </div>

            <div className="grid grid-cols-2">
              <div className="flex gap-2 items-center">
                <div className="h-[2rem] aspect-square rounded-full relative overflow-clip">
                  <Image
                    src={ctaImage}
                    alt="client-image"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-dark/60 italic text-[10px] leading-none">
                    client
                  </span>
                  <span className="text-xs font-medium">Mr.Ajith Perara</span>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 ">
                  <span className="text-dark/60 italic text-[10px] leading-none">
                    category
                  </span>
                  <span className="text-xs font-medium">cafee</span>
                </div>
                <span className="text-dark/70 font-medium text-xs ">
                  {dayjs().format("ddd, MMM D, YYYY h:mm A")}
                </span>
              </div>
            </div>
          </div>
          <Separator />

          <div className="mt-5">
            <h4 className="italic font-semibold text-[18px] underline">
              How we make decisions for this project
            </h4>
            <p className="text-[14px] break-all text-dark/95">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              aperiam repellat aliquam ex neque sunt provident nobis magnam quam
              veniam, mollitia architecto nesciunt nam veritatis? Eius nobis non
              tempora quasi ipsa? Molestias, corrupti odit? Qui sapiente
              accusantium labore? Dolorem error vitae doloremque explicabo.
              Dolore in amet laboriosam doloribus ducimus eum culpa nulla
              eligendi aspernatur blanditiis et commodi repudiandae nobis minima
              accusamus esse, soluta ut rem? Sunt nobis officia tempora, sed
              pariatur dolores, sint deserunt eaque ut assumenda magnam ipsam
              sequi quibusdam facilis perferendis ea deleniti, quod dolorum
              iusto quam! Vel voluptas voluptatibus, ut magni asperiores ducimus
              officiis itaque enim sapiente.
            </p>
          </div>
        </CardContent>
        {/* <CardFooter></CardFooter> */}
      </Card>
    </section>
  );
};

export default PortfolioDetailPage;
