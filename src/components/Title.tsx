"use client";

import { Allura } from "next/font/google";
import { motion } from "framer-motion";
import { CSSProperties } from "react";

interface TitleProps {
  name: string;
  style?: CSSProperties;
}

const allura = Allura({ weight: "400", style: "normal", subsets: ["latin"] });

export default function Title({ name, style }: TitleProps) {
  return (
    <motion.div
      className="w-4/5 mx-auto relative bottom-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <h1 className={`${allura.className} text-6xl text-center ${style}`}>
        {name}
      </h1>
    </motion.div>
  );
}
