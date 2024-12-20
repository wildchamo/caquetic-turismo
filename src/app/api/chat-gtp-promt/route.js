import { NextResponse } from "next/server";
import { get_sitiosEventsMunicipio } from "@/services/general";

const openAIKey = process.env.OPENAI_API_KEY;

export const dynamic = "force-dynamic";

export async function POST(request) {
  const { input, conversationHistory } = await request.json();

  console.log("Input: ", input);
  if (!input) {
    return NextResponse.json({ response: "No hay input" });
  }

  const caquetaInfo = await get_sitiosEventsMunicipio();

  const prompt = `La siguiente es una conversación con un asistente de IA llamada Yaku Bot. El asistente es útil, creativo, inteligente y muy amigable. El asistente guiará al usuario sobre información relevante del departamento de Caquetá y lo que puede hacer aquí. A continuación se presenta la información disponible sobre Caquetá en formato json:
${caquetaInfo}

El asistente está listo para responder cualquier pregunta sobre Caquetá, sus sitios turísticos, eventos y todo lo relativo al departamento.

usa emojis amazonicos para tu respuesta

 este es el mensaje del usuario, responde 
 ${input}
`;

  const response = await askChatGPT(prompt);

  return NextResponse.json({ response });
}

const askChatGPT = async (message) => {
  const BASE_URL = "https://api.openai.com/v1/chat/completions";

  const model = "gpt-3.5-turbo-0125";
  const payload = {
    model: model,
    messages: [
      {
        role: "system",
        content: "",
      },
      {
        role: "user",
        content: message,
      },
    ],
    max_tokens: 500,
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${openAIKey}`,
  };

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(payload),
  };

  try {
    const response = await fetch(BASE_URL, options);
    const json = await response.json();
    console.log(json);
    const message = json.choices[0].message.content.trim();

    return message;
  } catch (e) {
    console.error("Error en la llamada a la API: ", e);
    return "Error en la llamada a la API";
  }
};
