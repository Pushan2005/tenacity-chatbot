"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Content } from "@google/generative-ai";
import { useEffect, useState } from "react";
import { getGeminiResponse } from "./actions";
import ReactMarkdown from "react-markdown";

export default function ChatbotBox() {
    const initialChatHistory: Content[] = [
        {
            role: "user",
            parts: [
                {
                    text: 'Initialise chat with "Hello, I am Learn.AI. What would you like to know?"',
                },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "Hello, I am Learn.AI. What would you like to know?" },
            ],
        },
    ];

    const [Open, setOpen] = useState(true);
    const [chatHistory, setChatHistory] =
        useState<Content[]>(initialChatHistory);

    const [input, setInput] = useState("");
    const [isSendDisabled, setIsSendDisabled] = useState(false);

    const handleSend = async () => {
        if (input.trim()) {
            setIsSendDisabled(true);
            const prompt = input.trim();
            setInput("");
            const oldChat = chatHistory;
            const newChat = {
                role: "user",
                parts: [{ text: prompt }],
            };
            setChatHistory([...oldChat, newChat]);
            const response = await getGeminiResponse(prompt, chatHistory);
            setChatHistory(response.newHistory);
            setIsSendDisabled(false);
        }
    };

    const scrollToBottom = () => {
        const scrollArea = document.getElementById("scroll-area");
        if (scrollArea) {
            scrollArea.scrollTop = scrollArea.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatHistory]);

    return (
        <div className="text-black p-4">
            {!Open ? (
                <div className="mr-8 mb-8">
                    <Button onClick={() => setOpen(true)}>Open Chatbot</Button>
                </div>
            ) : (
                <div className="w-80 mx-2 drop-shadow-2xl flex flex-col items-end h-[30rem] p-2 bg-gray-400 rounded-lg">
                    <div className="flex w-full justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback className="text-white">
                                    LA
                                </AvatarFallback>
                            </Avatar>
                            <p className="text-lg font-bold">Learn.AI</p>
                        </div>
                        <Button
                            variant={"ghost"}
                            onClick={() => setOpen(false)}
                            className="rounded-full font-bold hover:bg-inherit  text-lg "
                        >
                            ×
                        </Button>
                    </div>
                    <div className="flex flex-col justify-center w-full h-full">
                        <div
                            id="scroll-area"
                            className="h-[23rem] overflow-y-auto w-full bg-white border border-gray-300 rounded p-2"
                        >
                            {chatHistory.slice(1).map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex mb-2 ${
                                        message.role === "model"
                                            ? "justify-start"
                                            : "justify-end"
                                    }`}
                                >
                                    <div
                                        className={`py-2 max-w-max px-3 rounded-3xl ${
                                            message.role === "user"
                                                ? "bg-green-100 rounded-br-none text-right"
                                                : "bg-gray-200 rounded-bl-none text-left"
                                        }`}
                                    >
                                        <div className="text-sm">
                                            {message.parts.map(
                                                (part, index) => (
                                                    <ReactMarkdown key={index}>
                                                        {part.text}
                                                    </ReactMarkdown>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex py-1 items-center mt-1 w-full">
                            <Input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-grow p-2 border bg-white border-gray-300 rounded mr-2"
                            />
                            <Button
                                variant={"default"}
                                onClick={handleSend}
                                className={`px-3 h-8 rounded ${
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
