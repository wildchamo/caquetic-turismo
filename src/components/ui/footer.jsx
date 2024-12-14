import { UserInfoModal } from "@/hooks/user-info-modal";
import { Button } from "./button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t p-4 px-10 flex justify-between">
      <UserInfoModal />

      <Link href="/about">
        <Button variant="outline">Acerca del proyecto</Button>
      </Link>
    </footer>
  );
}
