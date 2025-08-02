"use client";

import { Allura } from "next/font/google";
import { motion } from "framer-motion";

interface TitleProps {
  name: string;
}

const allura = Allura({ weight: "400", style: "normal" });

export default function Title({ name }: TitleProps) {
  return (
    <motion.div
      className="w-4/5 mx-auto"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: -30, opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1 className={`${allura.className} text-6xl text-center`}>{name}</h1>
    </motion.div>
  );
}
