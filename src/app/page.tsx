import Title from "@/components/Title";
import AnimatedImage from "@/components/Images";
import { Metadata } from "next";
import Quote from "@/components/Quote";
import Image from "next/image";
import BackgroundImage from "#/background_quote.jpg";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Alejandra Ruiz Cumpleaños",
  description: "Invitacion Alejandra Ruiz",
};

export default function HomePage() {
  return (
    <div>
      <main className="flex flex-col gap-16 justify-center h-screen w-screen bg-amber-200">
        <AnimatedImage
          src="/flor_roja.webp"
          width={300}
          height={300}
          style="pt-10"
          alt="Image flor roja"
          initialX={-100}
          finalX={-70}
        />
        <Title name="Cumpleaños de Alejandra Ruiz" />
        <AnimatedImage
          src="/flor_gris.png"
          width={300}
          height={300}
          style="flex justify-end items-end h-screen z-10"
          alt="Imagen flor gris"
          initialX={70}
          finalX={40}
        />
      </main>
      <section className="h-screen">
        <Card place="Jardines de Capellania" date="19-08-25" hour="2:00PM" />
      </section>
      <section className="bg-black/45 w-screen h-screen relative flex justify-center">
        <Quote text="Nos encantaria contar con tu presencia" />
        <Image
          src={BackgroundImage}
          quality={100}
          fill
          className="object-cover blur-sm -z-10"
          alt="Background image"
        />
      </section>
    </div>
  );
}
