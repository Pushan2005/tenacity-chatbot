import { promptHistory } from "../../actions";
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const prompt = body.prompt;

    const genAI = new GoogleGenerativeAI(
        process.env.NEXT_PUBLIC_GEMINI_API_KEY!
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const chat = model.startChat({
        history: body.history,
        generationConfig: {
            maxOutputTokens: 100,
        },
    });

    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();
    const newHistory = chat.getHistory();
    return NextResponse.json({
        gemini_response: `${text}`,
        newHistory: newHistory,
    });
}
