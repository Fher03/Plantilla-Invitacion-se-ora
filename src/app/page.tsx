import Title from "@/components/Title";
import AnimatedImage from "@/components/Images";
import { Metadata } from "next";
import Quote from "@/components/Quote";
import Image from "next/image";
import BackgroundImage from "#/background_quote.jpg";
import Card from "@/components/Card";
import GardenImage from "#/garden.jpg";
import Map from "@/components/Map";

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
        <Image
          src={GardenImage}
          alt="Jardin de flores"
          fill
          className="object-cover blur-sm -z-10"
        />
      </section>
      <section className="h-screen min-w-screen bg-black">
        <Map title="Lugar del Evento">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1754247382833!6m8!1m7!1sliV4RTD1dV-9wlPddwHtLg!2m2!1d25.58197929791111!2d-99.99200673899932!3f226.7257035489399!4f-21.892774001910354!5f0.7820865974627469"
            className="w-4/5 rounded-sm"
            height="550"
            loading="lazy"
          ></iframe>
        </Map>
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
