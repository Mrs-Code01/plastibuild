import { Bot, MessageSquare, MessageCircle } from "lucide-react";
import { useState } from "react";
import ChatContainer from "./ChatContainer";

export default function ChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async text => {
    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages })
      });

      const data = await res.json();
      setMessages([
        ...newMessages,
        { role: "assistant", content: data.content || "Sorry, no reply." }
      ]);
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Error contacting server." }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="font-raleway flex items-center fixed z-[100] bottom-[24px] right-[24px] bg-[#008000] text-white px-[20px] py-[12px] rounded-[30px] shadow-lg hover:bg-[#006400] transition text-[16px] font-semibold cursor-pointer"
      >
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          {/* Monochrome, currentColor for inheriting text color */}
          ChatBot
          <Bot size={30} />
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed z-[100] inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white py-[40px] rounded-[24px] w-[90%] max-w-[600px]  shadow-xl relative">
            {/* Close Button */}
            <h1 className="font-catamaran text-[23px] text-center text-[#000000] pb-[10px]">
              ChatBot Support
            </h1>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-[12px] right-[12px] text-[#008000] text-xl font-bold hover:text-[#006400] cursor-pointer"
            >
              ×
            </button>

            {/* Chat UI */}
            <ChatContainer
              messages={messages}
              onSend={handleSend}
              isTyping={isTyping}
            />
          </div>
        </div>
      )}
    </>
  );
}
