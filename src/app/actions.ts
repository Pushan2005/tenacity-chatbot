"use server";

import { GoogleGenerativeAI, Content } from "@google/generative-ai";

export async function getGeminiResponse(prompt: string, history: Content[]) {
    const genAI = new GoogleGenerativeAI(
        process.env.NEXT_PUBLIC_GEMINI_API_KEY!
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const chat = model.startChat({
        history: history,
        // generationConfig: {
        //     maxOutputTokens: 200,
        // },
    });

    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();
    const newHistory = await chat.getHistory();
    return {
        gemini_response: `${text}`,
        newHistory: newHistory,
    };

    //
}
