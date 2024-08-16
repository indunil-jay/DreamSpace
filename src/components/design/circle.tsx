"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CircleProps {
  scale?: number;
  opacity?: number;
  duration?: number;
  styles: string;
}

export const Circle = ({ scale, opacity, duration, styles }: CircleProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: opacity || 0.5, scale: scale || 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: duration || 0.5 }}
        className={cn("absolute ", styles && styles)}
      ></motion.div>
    </>
  );
};
