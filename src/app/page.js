import { Map } from "@/components/map";
import Link from "next/link";

export default function Home() {


  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      {/* Contenido principal */}
      <div className="flex-grow">
        <Map />
      </div>

      {/* Texto centrado */}
      <div className="text-center mb-6 font-semibold text-3xl">
        ¿Aún no sabes dónde viajar?
      </div>

      {/* Botón centrado */}
          <div className="text-center mb-6">
      <Link
        className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-500 transition duration-300"
        href={"/chat"}
>
        Averígualo con nuestra IA
      </Link>
</div>
    </main>
  );
}