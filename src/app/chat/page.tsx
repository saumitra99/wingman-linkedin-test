/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import React, { useState, useRef, useEffect } from "react";

const ChatUI = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const botMessage = await fetchBotResponse(input);
    setMessages((prev) => [...prev, botMessage]);
  };
  // @ts-ignore
  const fetchBotResponse = async (userInput) => {
    console.log(userInput);
    const response = await fetch("https://dummyjson.com/quotes/random");

    const data = await response.json();
    return { id: Date.now(), sender: "bot", text: data.quote };
  };

  useEffect(() => {
    // @ts-ignore
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow overflow-y-auto p-4 bg-gray-100">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`my-2 p-2 rounded-lg flex items-start ${
              msg.sender === "user"
                ? "self-end justify-end"
                : "self-start justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <div className="w-8 h-8 bg-gray-400 rounded-full mr-2"></div>
            )}
            <div
              className={`${
                msg.sender === "user"
                  ? "bg-brand-primary text-white"
                  : "bg-gray-300 text-black"
              } p-2 rounded-lg`}
              style={{ maxWidth: "90%" }}
            >
              {msg.text}
            </div>
            {msg.sender === "user" && (
              <div className="w-8 h-8 bg-gray-400 rounded-full ml-2"></div>
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="p-4 bg-white border-t border-gray-300">
        <div className="flex">
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded-lg"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            className="ml-2 p-2 bg-brand-primary text-white rounded-lg"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
