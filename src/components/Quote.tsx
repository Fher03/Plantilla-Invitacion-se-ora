"use client";

import { Parisienne } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface QuoteProps {
  text: string;
}

const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
});

export default function Quote({ text }: QuoteProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="h-screen flex justify-center items-center w-4/5 z-10">
      <motion.h2
        ref={ref}
        className={`${parisienne.className} font-semibold text-white text-5xl text-center`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        {text}
      </motion.h2>
    </div>
  );
}
