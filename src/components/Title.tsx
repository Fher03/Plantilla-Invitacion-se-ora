"use client";

import { Allura } from "next/font/google";
import { motion, Variants } from "framer-motion";

interface TitleProps {
  name: string;
}

const allura = Allura({ weight: "400", style: "normal" });

const container: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
  }),
};

const child: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: -20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export default function Title({ name }: TitleProps) {
  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {name.split("").map((char, index) => (
        <motion.span
          key={index}
          className={`${allura.className}`}
          variants={child}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
