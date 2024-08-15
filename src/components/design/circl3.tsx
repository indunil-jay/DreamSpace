"use client";
import { motion } from "framer-motion";

export const Circle3 = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="z-[-99] absolute top-[20%] left-[20%] -translate-y-1/2 -translate-x-1/2 lg:h-[25rem] h-[12rem] aspect-square rounded-full bg-orange-cs/90 blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="z-[-99] absolute top-[20%] right-[20%]  -translate-y-1/2 translate-x-1/2 lg:h-[25rem] h-[12rem] aspect-square rounded-full bg-yellow-cs/90 blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="z-[-99] absolute bottom-[5%] left-1/2 -translate-x-1/2 lg:h-[35rem] h-[18rem] aspect-square rounded-full bg-purple-cs blur-3xl"
      ></motion.div>
    </>
  );
};
