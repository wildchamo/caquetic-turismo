import { NextResponse } from "next/server";
import { get_users } from "@/services/user";

const openAIKey = process.env.OPENAI_API_KEY;

export const dynamic = "force-dynamic";

export async function GET() {
  // const users2 = await get_users();

  const prompt = "hola"; // Replace with your actual prompt

  console.log(openAIKey);
  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openAIKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        prompt: prompt,
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    const message = data.choices[0].text.trim();
    console.log(data);

    return NextResponse.json({ message });
  } catch (error) {
    console.error("Error querying ChatGPT:", error);
    return NextResponse.json(
      { error: "Failed to query ChatGPT" },
      { status: 500 }
    );
  }
}
