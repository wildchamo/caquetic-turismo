"use client";
import React, { useState } from "react";

const ChatBotAI = () => {
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
    <div className="fixed right-0 top-0 h-screen w-80 bg-white shadow-lg p-4">
      <div className="text-center font-bold text-xl text-indigo-600 mb-4">
        Yakú Bot🤖
      </div>
      <div className="chatbox h-[70vh] overflow-y-auto border border-gray-300 p-2 mb-4 rounded-lg">
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
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-grow border border-gray-300 rounded-md p-2"
          placeholder="Escribe tu pregunta aquí..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-500 transition"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};  

export default ChatBotAI;
