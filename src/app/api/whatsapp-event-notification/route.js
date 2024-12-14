import { createTwillioClient } from "@/lib/utils";

const client = createTwillioClient();

export const dynamic = "force-dynamic";

export async function GET() {
  const users = [
    {
      name: "Cesar",
      phoneNumber: "3115688883",
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
    const { name, phoneNumber } = user;
    // const { name, date, municipio, hour } = events[0];
    const whatsappPromise = client.messages
      .create({
        from: "MG6fa13751d6def000a2d443822ca88579",
        contentSid: "HX83b8cef97f10a20ae1f7dc8df57c945a",
        // contentVariables: JSON.stringify({
        //   1: `${nombre}`,
        //   2: `${daysLeft}`,
        //   3: type,
        // }),
        to: `whatsapp:+57${phoneNumber}`,
      })
      .then((message) => console.log(message.sid))
      .catch((error) =>
        console.error("Error sending WhatsApp message:", error)
      );

    await Promise.all([whatsappPromise]);
  });
}
