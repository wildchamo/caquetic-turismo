import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-background border-b">
      <Link href={"/"}>
        <h1 className="text-xl font-bold">
          Yakú Map: Tu guía en las maravillas del Caquetá 🏕️
        </h1>
      </Link>
    </header>
  );
}
