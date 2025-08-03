"use client";

import { Roboto_Slab } from "next/font/google";
import Image from "next/image";
import RightBottomFlowers from "#/right_bottom_flowers.png";
import LeftTopFlowers from "#/left_top_flowers.png";
import { useRef } from "react";
import { useInView, Variants } from "framer-motion";
import { motion } from "framer-motion";

interface CardProps {
  date: string;
  hour: string;
  place?: string;
  message: string;
}

const libertinusMono = Roboto_Slab({
  weight: "400",
  subsets: ["latin"],
});

export default function Card({ date, hour, place, message }: CardProps) {
  const flowersTopRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const flowersBottomRef = useRef<HTMLDivElement>(null);

  const flowersTopInView = useInView(flowersTopRef, {
    once: true,
    margin: "-20%",
  });
  const cardInView = useInView(cardRef, { once: true });
  const flowersBottomInView = useInView(flowersBottomRef, {
    once: true,
    margin: "-20%",
  });

  const variants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* Tarjeta principal */}
      <motion.div
        ref={cardRef}
        initial="hidden"
        animate={cardInView ? "visible" : "hidden"}
        variants={variants}
        className={`${libertinusMono.className} relative py-20 text-center text-xl gap-10 border-pink-300 border-4 rounded-sm flex flex-col justify-center bg-amber-100 items-center w-4/5 h-3/5 backdrop-blur-md shadow-lg p-6`}
      >
        <motion.div
          ref={flowersTopRef}
          initial="hidden"
          animate={flowersTopInView ? "visible" : "hidden"}
          variants={variants}
          className="absolute -top-1/4 -left-20 z-10"
        >
          <Image
            src={LeftTopFlowers}
            alt="Tira de Flores"
            width={200}
            height={200}
          />
        </motion.div>
        <div className="flex flex-col gap-3">
          <p>Fecha: {date}</p>
          <p>Hora: {hour}</p>
          {place ? <p>Lugar: {place}</p> : ""}
          <p>{message}</p>
        </div>
        {/* Flores inferiores */}
        <motion.div
          ref={flowersBottomRef}
          initial="hidden"
          animate={flowersBottomInView ? "visible" : "hidden"}
          variants={variants}
          className="absolute -bottom-1/5 -right-20 z-10"
        >
          <Image
            src={RightBottomFlowers}
            alt="Tira de flores"
            width={200}
            height={200}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
