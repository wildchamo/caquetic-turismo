import { Map } from "@/components/map";
import { UserInfoModal } from "@/hooks/user-info-modal";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      {/* Contenido principal */}
      <div className="hidden lg:block">
        <Map />
      </div>

      {/* Texto centrado */}
      <div className="text-center mb-6 mt-5  lg:mt-24 font-semibold text-3xl">
        ¿Aún no sabes dónde viajar?
      </div>

      {/* Botón centrado */}
      <div className="text-center ">
        <Link
          className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-500 transition duration-300"
          href={"/chat"}
        >
          Averígualo con nuestra IA
        </Link>
      </div>

      <div className="block lg:hidden text-center mt-10">
        <p className="text-xl font-semibold mb-4">
          ¡La experiencia del mapa interactivo aún no está disponible en
          dispositivos móviles!
        </p>
        <p className="text-lg mb-6">Mientras tanto, puedes:</p>

        <div className="flex flex-col place-items-center gap-4">
          <UserInfoModal type="green" />

          <Link
            className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-500 transition duration-300 mb-6 w-fit"
            href={"/chat"}
          >
            Sobre el proyecto
          </Link>
        </div>
      </div>
    </main>
  );
}
