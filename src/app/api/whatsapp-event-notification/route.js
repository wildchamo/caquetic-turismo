import { get_events } from "@/services/event";
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
  // return;
  // const users = [
  //   {
  //     name: "Carlos Prada",
  //     // phoneNumber: "3108805124",
  //   },
  // ];

  const events = await get_events();

  const randomEvent = events[Math.floor(Math.random() * events.length)];

  const eventName = randomEvent.name;

  console.log(randomEvent);

  const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]; // Horas de 8 AM a 6 PM
  const randomHour = hours[Math.floor(Math.random() * hours.length)];
  const halfHour = Math.random() < 0.5 ? ":00" : ":30";
  const hourToDisplay = `${randomHour}${halfHour}`;

  users2.forEach(async (user) => {
    const { name: userName, phone_number } = user;
    const whatsappPromise = client.messages
      .create({
        from: "MG6fa13751d6def000a2d443822ca88579",
        contentSid: "HXf3528756ec0c36bd74fd56fc83f2a4a7",
        contentVariables: JSON.stringify({
          1: `${userName}`,
          2: `${eventName}`,
          3: `${randomEvent.municipio.name}`,
          3: "2024-02-17",
          3: hourToDisplay,
        }),
        to: `whatsapp:+57${phone_number}`,
      })
      .then((message) => console.log(message.sid))
      .catch((error) =>
        console.error("Error sending WhatsApp message:", error)
      );

    await Promise.all([whatsappPromise]);
  });

  return NextResponse.json({ message: "Messages sent" });
}
