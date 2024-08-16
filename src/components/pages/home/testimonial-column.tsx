"use client";
import { testimonials } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

interface IColum {
  column: typeof testimonials;
  style?: string;
  duration?: number;
}

export const TestimonialColumn = ({ column, style, duration }: IColum) => {
  return (
    <div className={cn(style, "!z-[9999999] !relative bg-transparent")}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: duration || 5,
        }}
        className={cn("flex items-center justify-center gap-6 pb-6 flex-col ")}
      >
        {column.map((t, i) => (
          <div
            key={i}
            className="p-10 rounded-3xl bg-white shadow-[0_7px_14px_#EAEAEA] border border-[#f1f1f1] max-w-xs w-full"
          >
            <div>
              <span className="text-[13px]">{t.text}</span>
            </div>

            <div>
              <div className="flex items-center gap-2 mt-5">
                <div className="relative">
                  <Image
                    src={t.imageSrc}
                    alt="testimonial-user-cover"
                    className="h-10 w-10 rounded-full"
                    width={40}
                    height={40}
                  />
                </div>

                <div className=" flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {t.name}
                  </div>
                  <div className="leading-5 tracking-tight text-sm text-dark/70">
                    {t.username}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
