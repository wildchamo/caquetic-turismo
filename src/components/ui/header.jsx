import { UserInfoModal } from "@/hooks/user-info-modal";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-green-700 border-b border-green-900 shadow-lg">
      {/* Logo y título */}
      <Link href={"/"}>
        <div className="flex items-center gap-4 cursor-pointer">
          <img
            src="/YAKUMAP.png" // Reemplaza con la ruta de tu logo amazónico
            alt="Yakú Map Logo"
            className="w-12 h-12 rounded-full border-2 border-yellow-500 shadow-md"
          />
          <h1 className="text-2xl font-extrabold text-yellow-300 drop-shadow-md ">
            Yakú Map: Tu guía en las maravillas del Caquetá 🌿
          </h1>
        </div>
      </Link>

      {/* Botones de navegación */}
      <nav className="flex items-center gap-6">
      <UserInfoModal></UserInfoModal>
        <Link
         href="/about"
          className="text-white hover:text-yellow-300 transition duration-300 font-semibold"
        >
          Acerca del Proyecto👨🏻‍💻
        </Link>
      </nav>
    </header>
  );
}
