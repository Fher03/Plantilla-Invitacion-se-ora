"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ImagesProps {
  style?: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  initialX: number;
  finalX: number;
}

export default function AnimatedImage({
  style,
  src,
  width,
  height,
  alt,
  initialX,
  finalX,
}: ImagesProps) {
  return (
    <motion.div
      className={style}
      initial={{ opacity: 0, x: initialX }}
      animate={{ opacity: 1, x: finalX }}
      transition={{ duration: 1 }}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </motion.div>
  );
}
