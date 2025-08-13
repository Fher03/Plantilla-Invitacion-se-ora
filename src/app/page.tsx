import Title from "@/components/Title";
import AnimatedImage from "@/components/Images";
import { Metadata } from "next";
import Quote from "@/components/Quote";
import Image from "next/image";
import BackgroundImage from "#/background_quote.jpg";
import Card from "@/components/Card";
import GardenImage from "#/garden.jpg";
import Map from "@/components/Map";
import BackgroundMusic from "@/components/BackgroundMusic";

export const metadata: Metadata = {
  title: "Alejandra Ruiz Cumpleaños",
  description: "Invitacion Alejandra Ruiz",
};

export default function HomePage() {
  return (
    <div>
      <BackgroundMusic />
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
        <Card date="19-08-25" hour="3:00PM" message="Invitación Personal" />
        <Image
          src={GardenImage}
          alt="Jardin de flores"
          fill
          className="object-cover blur-sm -z-10"
        />
      </section>
      <section className="h-screen min-w-screen bg-black">
        <Map title="Lugar del Evento" subtitle="Quinta Arath">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.7474353338425!2d-99.99482092392306!3d25.58006821608531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662dbdfe664d707%3A0x3cebaea9e20da62!2sSinaloa%20327%2C%20Jardines%20de%20Capellan%C3%ADa%2C%2067484%20Cadereyta%20Jim%C3%A9nez%2C%20N.L.!5e0!3m2!1ses!2smx!4v1754253584405!5m2!1ses!2smx"
            height="400"
            className="rounded-sm w/4/5"
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
      <section className="h-[20vh]">
        <div className="flex flex-col items-center justify-center gap-2 bg-white h-full">
          <h3 className="text-lg">WebVite - Invitaciones digitales</h3>
          <p className="text-md">Whatsapp: +52 828 120 3532</p>
          <a
            className="bg-green-500 text-white rounded-sm px-4 py-2"
            href="https://wa.me/8281203532?text=Hola, me gustaria mas informacion"
          >
            Enviar Whatsapp
          </a>
        </div>
      </section>
    </div>
  );
}
