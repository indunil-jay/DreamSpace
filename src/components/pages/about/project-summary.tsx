"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projectsTypes } from "@/constants";

export const ProjectSummarySection = () => {
  return (
    <section className="py-20 bg-dark">
      <motion.div
        animate={{ opacity: 0.2, scale: 0.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-white max-w-screen-lg w-full mx-auto gap-10"
      >
        {projectsTypes.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center justify-center"
          >
            <AnimatedCount end={project.count} />
            <p className="uppercase text-[1.2rem] font-medium">
              {project.type}
            </p>
            <p className="uppercase text-white/60 font-light">
              {project.count}+ projects
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

// AnimatedCount Component
const AnimatedCount = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endCount = end;
    const duration = 2;
    const increment = endCount / (duration * 60);

    const updateCount = () => {
      start += increment;
      if (start >= endCount) {
        setCount(endCount);
        return;
      }
      setCount(Math.floor(start));
      requestAnimationFrame(updateCount);
    };

    updateCount();
  }, [end]);

  return (
    <motion.div
      className="text-[2.2rem] font-semibold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {count}+
    </motion.div>
  );
};
