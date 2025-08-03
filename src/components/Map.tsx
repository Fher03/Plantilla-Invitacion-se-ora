"use client";
import { Parisienne } from "next/font/google";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface MapProps {
  children: React.ReactNode;
  title: string;
}
const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
});

export default function Map({ children, title }: MapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 1.5,
        ease: "easeOut",
      },
    }),
  };
  return (
    <div ref={ref} className="flex h-full flex-col justify-around items-center">
      <h2 className={`${parisienne.className} text-5xl text-white`}>
        {title.split("").map((letter, index) => {
          return (
            <motion.span
              key={index}
              initial="hidden"
              custom={index}
              animate={isInView ? "visible" : "hidden"}
              variants={variants}
            >
              {letter}
            </motion.span>
          );
        })}
      </h2>
      {children}
    </div>
  );
}
