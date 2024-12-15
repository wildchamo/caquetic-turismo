"use client";
import { Map } from "@/components/map";

import ChatBotAI from "../components/ui/chat";
export default function Home() {
  return (
    <main>
      <Map />
      aún no sabes que destino tomar? hablar con nuestra ai para descrubirlo
      <ChatBotAI />
    </main>
  );
}
