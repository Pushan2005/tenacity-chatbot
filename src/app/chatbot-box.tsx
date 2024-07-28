"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export default function ChatbotBox() {
    const [Open, setOpen] = useState(false);

    return (
      <>
        {!Open ? (
          <div className="fixed bottom-4 right-4 m-8">
            <Button onClick={() => setOpen(true)}>Open Chatbot</Button>
          </div>
        ) : (
          <div className="fixed bottom-4 right-4 m-8 w-80 h-100 border-2">
            <Button onClick={() => setOpen(false)}>×</Button>
            <div className="mt-4">
              <ScrollArea className="h-full w-full">Text</ScrollArea>
            </div>
          </div>
        )}
      </>
    );
}
