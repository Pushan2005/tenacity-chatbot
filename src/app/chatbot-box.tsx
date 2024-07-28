"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useEffect, useState } from "react";

export default function ChatbotBox() {
    // const [Open, setOpen] = useState(false);
    const [Open, setOpen] = useState(true);
    const [messages, setMessages] = useState<string[]>(Array(20).fill("hi"));
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput("");
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
    }, [messages]);

    return (
        <div className="">
            {!Open ? (
                <div className="m-8">
                    <Button onClick={() => setOpen(true)}>Open Chatbot</Button>
                </div>
            ) : (
                <div className="m-8 border-gray-800 border w-80 flex flex-col items-end h-96">
                    <div className="flex">
                        {/* <p className="">Chatbot</p> */}
                        <Button
                            variant={"outline"}
                            onClick={() => setOpen(false)}
                        >
                            ×
                        </Button>
                    </div>
                    <div className="mt-4 flex flex-col justify-center">
                        <div
                            id="scroll-area"
                            className="h-64 overflow-y-auto p-2 w-80"
                        >
                            {messages.map((message, index) => (
                                <p
                                    key={index}
                                    className="p-2 bg-blue-100 rounded mt-1"
                                >
                                    {(index % 2 === 0
                                        ? "Learn.AI: "
                                        : "You: ") + message}
                                </p>
                            ))}
                        </div>
                        <div className="flex p-2">
                            <Input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-grow p-2 border border-gray-300 rounded mr-2"
                            />
                            <Button
                                onClick={handleSend}
                                className="p-2 bg-blue-500 text-white rounded"
                            >
                                Send
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
