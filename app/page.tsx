"use client";

import { useEffect, useRef } from "react";
import { useChat } from "ai/react";
import { useClerk, useUser } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AIMessage, UserMessage } from "@/components/ui/messages";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  const { messages, input, handleInputChange, handleSubmit } = useChat();

  useEffect(() => {
    if (ref.current === null) return;
    ref.current.scrollTo(0, ref.current.scrollHeight);
  }, [messages]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSignedIn) {
      handleSubmit(e);
    } else {
      openSignIn();
    }
  };
  return (
    <>
      <div className="sm:w-1/2 sm:mx-auto sm:px-5 lg:px-0 mt-3">
        <ScrollArea className="mb-2 h-[400px] rounded-md border p-4" ref={ref}>
          {messages.map((m) => (
            <div key={m.id}>
              {m.role === "user" ? (
                <UserMessage text={m.content} />
              ) : (
                <AIMessage text={m.content} />
              )}
            </div>
          ))}
        </ScrollArea>
        <form onSubmit={onSubmit}>
          <Input
            placeholder="Ask me anything..."
            value={input}
            onChange={handleInputChange}
          />
        </form>
      </div>
    </>
  );
}
