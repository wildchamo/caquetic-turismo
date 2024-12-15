"use client";
import React, { useState } from "react";

export default function ChatBotPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input) return;

    const newMessage = { user: "Usuario", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer TU_API_KEY",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
          max_tokens: 150,
        }),
      });

      const data = await response.json();

      if (data.choices && data.choices.length > 0) {
        const botMessage = {
          user: "Yakú Bot",
          text: data.choices[0].message.content,
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        setMessages((prev) => [
          ...prev,
          { user: "Yakú Bot", text: "No se pudo generar una respuesta." },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { user: "Yakú Bot", text: "Error al conectar con el servidor." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="p-8 bg-gray-100 min-h-screen flex">
      {/* Chatbot Section */}
      <section className="bg-white rounded-lg shadow-lg p-8 w-2/3">
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-4 text-center">
          🏕️ Yakú Bot 🤖
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
          Este es el asistente inteligente de Yakú Map. ¡Haz tus preguntas sobre
          turismo, eventos y más en el departamento del Caquetá!
        </p>
        <div className="chatbox h-[60vh] overflow-y-auto border border-gray-300 p-4 mb-4 rounded-lg">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-md mb-2 ${
                msg.user === "Usuario" ? "bg-indigo-100 text-right" : "bg-gray-200 text-left"
              }`}
            >
              <span className="font-bold">{msg.user}:</span> {msg.text}
            </div>
          ))}
          {isLoading && (
            <div className="p-2 rounded-md mb-2 bg-gray-200 text-left">Escribiendo...</div>
          )}
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            className="flex-grow border border-gray-300 rounded-md p-4 text-lg"
            placeholder="Escribe tu pregunta aquí..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-indigo-600 text-white rounded-md px-6 py-4 text-lg hover:bg-indigo-500 transition"
          >
            Enviar
          </button>
        </div>
      </section>

      {/* Imagen Section */}
      <section className="w-1/3 flex justify-center items-center">
        <img
          src="/caqueta.jpg" // Ruta de la imagen en la carpeta public
          alt="Descripción de la imagen"
          className="rounded-lg shadow-md w-full h-full object-cover"
        />
      </section>

    </main>
  );
}
