import { create_user, get_users } from "@/services/user";
import { NextResponse } from "next/server";
get_users;

const acountSid = process.env.TWILIO_ACCOUNT_ID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(acountSid, authToken);

export const dynamic = "force-dynamic";

export async function GET() {
  const users2 = await get_users();

  console.log(users2);

  const users = [
    {
      name: "Carlos Prada",
      // phoneNumber: "3108805124",
    },
  ];

  const events = [
    {
      name: "Festival de Verano",
      date: "15 de Dicimebre",
      municipio: "Solita",
      hour: "3 pm",
    },
  ];

  users.forEach(async (user) => {
    const { name: userName, phoneNumber } = user;
    const { name: eventName, date, municipio, hour } = events[0];
    const whatsappPromise = client.messages
      .create({
        from: "MG6fa13751d6def000a2d443822ca88579",
        contentSid: "HXf3528756ec0c36bd74fd56fc83f2a4a7",
        contentVariables: JSON.stringify({
          1: `${userName}`,
          2: `${eventName}`,
          3: municipio,
          3: date,
          3: hour,
        }),
        to: `whatsapp:+57${phoneNumber}`,
      })
      .then((message) => console.log(message.sid))
      .catch((error) =>
        console.error("Error sending WhatsApp message:", error)
      );

    await Promise.all([whatsappPromise]);
  });

  return NextResponse.json({ message: "Messages sent" });
}
