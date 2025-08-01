import Link from "next/link";

export default function About(): React.JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">
          ¡Esta es mi página de &quot;Acerca de&quot;!
        </h1>
        <p className="mt-4">
          Aquí puedes hablar sobre ti, tu empresa o tu proyecto.
        </p>
        <Link href="/" className="mt-8 text-blue-500 hover:underline">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
