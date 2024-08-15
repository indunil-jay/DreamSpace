"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export const ScrollTop = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed z-[99999] origin-left top-0 left-0 bg-grad right-0 h-2 bg-[linear-gradient(to_right,#fab868,#d1f349,#fb1a14,#a182f3)]"
    />
  );
};
