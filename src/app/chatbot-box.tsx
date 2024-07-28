"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { GoogleGenerativeAI } from "@google/generative-ai";

import { useEffect, useState } from "react";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

async function runBot() {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const chat = model.startChat({
        history: [
            {
                role: "model",
                parts: [
                    { text: "Great to meet you. What would you like to know?" },
                ],
            },
        ],
        generationConfig: {
            maxOutputTokens: 100,
        },
    });
}

export default function ChatbotBox() {
    const [Open, setOpen] = useState(true);
    const [messages, setMessages] = useState<string[]>(Array(20).fill("hi"));
    const [input, setInput] = useState("");
    const [isSendDisabled, setIsSendDisabled] = useState(false);

    const handleSend = async () => {
        if (input.trim()) {
            setMessages([...messages, input]);
            // const result = await chat.sendMessage(input);
            setInput("");
            setIsSendDisabled(true);
            setTimeout(() => {
                setIsSendDisabled(false);
            }, 3000);
        }
    };

    const scrollToBottom = () => {
        const scrollArea = document.getElementById("scroll-area");
        if (scrollArea) {
            scrollArea.scrollTop = scrollArea.scrollHeight;
        }
    };

    useEffect(() => {
        runBot();
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="text-black p-4">
            {!Open ? (
                <div className="mr-8 mb-8">
                    <Button onClick={() => setOpen(true)}>Open Chatbot</Button>
                </div>
            ) : (
                <div className="border border-red-800 w-80 mx-2 flex flex-col items-end h-96 p-2 bg-gray-100 rounded-lg">
                    <div className="flex w-full justify-between items-center mb-2">
                        <p className="text-lg font-bold">Chatbot</p>
                        <Button
                            variant={"default"}
                            onClick={() => setOpen(false)}
                        >
                            ×
                        </Button>
                    </div>
                    <div className="flex flex-col justify-center w-full h-full">
                        <div
                            id="scroll-area"
                            className="h-64 overflow-y-auto w-full bg-white border border-gray-300 rounded p-2"
                        >
                            {messages.map((message, index) => (
                                <p
                                    key={index}
                                    className={`py-2 px-3 rounded mb-2 ${
                                        index % 2 === 0
                                            ? "bg-blue-100 text-left"
                                            : "bg-green-100 text-right"
                                    }`}
                                >
                                    {index % 2 === 0 ? "Learn.AI: " : "You: "}
                                    {message}
                                </p>
                            ))}
                        </div>
                        <div className="flex py-2 mt-2 w-full">
                            <Input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-grow p-2 border bg-white border-gray-300 rounded mr-2"
                            />
                            <Button
                                variant={"default"}
                                onClick={handleSend}
                                className={`p-2 rounded ${
                                    isSendDisabled
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-blue-500 hover:text-black text-white"
                                }`}
                                disabled={isSendDisabled}
                            >
                                {isSendDisabled ? "Wait..." : "Send"}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
