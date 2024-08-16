"use client";
import { Button } from "@/components/ui/button";
import { ctaImage, processArr } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ProcessContentCard = ({
  process,
}: {
  process: (typeof processArr)[number];
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  " key={process.id}>
      <motion.div
        animate={{ opacity: 0.2, scale: 0.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={cn(
          "min-h-dvh h-dvh relative w-full ",
          process.order[0] === 1
            ? "lg:order-1 order-2 "
            : "lg:order-2  order-1 "
        )}
      >
        <Image
          src={process.image}
          alt="process-steps"
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div
        className={cn(
          "min-h-dvh h-dvh relative w-full flex flex-col justify-center p-10  lg:p-20",
          process.bgcolor,
          process.order[1] === 2 ? "lg:order-2 " : "lg:order-1 "
        )}
      >
        <span
          className={cn(
            "text-[4rem]",
            process.textColor === "white" ? "text-white" : "text-dark"
          )}
        >
          0{process.id}
        </span>
        <h2
          className={cn(
            "text-[2.2rem] uppercase font-semibold",
            process.textColor === "white" ? "text-white" : "text-dark"
          )}
        >
          {process.title}
        </h2>
        <p
          className={cn(
            process.textColor === "white" ? "text-white/80" : "text-dark/80"
          )}
        >
          {process.description}
        </p>
      </motion.div>
    </div>
  );
};

export const ProcessContent = () => {
  return (
    <section className="overflow-clip">
      {processArr.map((process) => (
        <ProcessContentCard key={process.id} process={process} />
      ))}
      <div className="min-h-dvh h-dvh relative w-full bg-orange-950 flex flex-col justify-center items-center">
        <h2 className="uppercase text-white text-[3rem]">Get Inspired ?</h2>
        <Link
          href="/portfolio"
          className="text-white italic underline underline-offset-4 font-medium"
        >
          View portfolio
        </Link>
      </div>
      <div className="min-h-dvh h-dvh relative w-full">
        <div className="absolute z-20 inset-0 min-h-dvh h-dvh bg-dark/70 w-full "></div>
        <div className="absolute z-30 flex flex-col items-center justify-center  min-h-dvh h-dvh w-full ">
          <div className="text-center">
            <h2 className="uppercase text-white text-[2.2rem]">
              Want to start a project?
            </h2>
            <Button
              variant={"link"}
              className="italic font-semibold text-white/90"
            >
              Let&apos;s Begin
            </Button>
          </div>
        </div>
        <Image
          src={ctaImage}
          alt="our-process-footer-image"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};
