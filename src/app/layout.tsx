import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ChatbotBox from "./chatbot-box";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Chatbot - Tenacity Learn",
    description: "Chatbot prototype",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} min-h-screen bg-background font-sans antialiased __variable_ac79ff`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="z-50 fixed bottom-4 right-4">
                        <ChatbotBox />
                    </div>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
