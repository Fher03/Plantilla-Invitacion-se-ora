import Title from "@/components/Title";
import AnimatedImage from "@/components/Images";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alejandra Ruiz Cumpleaños",
  description: "Invitacion Alejandra Ruiz",
};

export default function HomePage() {
  return (
    <main className="flex flex-col gap-16 justify-center h-screen w-full bg-amber-200">
      <AnimatedImage
        src="/flor_roja.webp"
        width={250}
        height={250}
        style="pt-10"
        alt="Image flor roja"
        initialX={-70}
        finalX={-50}
      />
      <Title name="Cumpleaños de Alejandra Ruiz" />
      <AnimatedImage
        src="/flor_gris.png"
        width={300}
        height={300}
        style="flex justify-end items-end h-screen"
        alt="Imagen flor gris"
        initialX={70}
        finalX={40}
      />
    </main>
  );
}
