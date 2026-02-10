import { Bot, MessageSquare, MessageCircle } from "lucide-react";
import { useState } from "react";
import ChatContainer from "./ChatContainer";

export default function ChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (text) => {
    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      setMessages([
        ...newMessages,
        { role: "assistant", content: data.content || "Sorry, no reply." },
      ]);
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Error contacting server." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}

      <style>
        {`
          @keyframes giggle-bounce {
            0%, 100% { 
              transform: translateY(0) rotate(0deg);
              box-shadow: 0 0 15px 2px rgba(21, 128, 61, 0.4); /* Subtle glow */
            }
            25% { 
              transform: translateY(-5px) rotate(-2deg);
              box-shadow: 0 10px 25px 5px rgba(21, 128, 61, 0.6); /* Lifted glow */
            }
            50% { 
              transform: translateY(0) rotate(2deg);
              box-shadow: 0 0 15px 2px rgba(21, 128, 61, 0.4);
            }
            75% { 
              transform: translateY(-4px) rotate(-2deg);
              box-shadow: 0 5px 20px 3px rgba(21, 128, 61, 0.5);
            }
          }

          .animate-giggle-glow {
            animation: giggle-bounce 2.5s ease-in-out infinite;
          }
        `}
      </style>

      <button
        onClick={() => setIsOpen(true)}
        className="animate-giggle-glow font-raleway flex items-center gap-[12px] fixed z-[100] bottom-[24px] right-[24px] bg-green-700 text-white px-[20px] py-[12px] rounded-[30px] transition-all duration-300 text-[16px] font-semibold cursor-pointer border-none outline-none hover:bg-green-800"
      >
        <span>ChatBot</span>
        <Bot
          size={26}
          className="drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
        />
      </button>
      {/* Modal */}
      {isOpen && (
        <div className="fixed z-[300] inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-[40px] max-[700px]:p-[30px] rounded-[24px] w-[500px] max-[700px]:w-[320px]  shadow-xl relative">
            {/* Close Button */}
            <h1 className="font-catamaran text-[23px] text-center text-[#000000] pb-[10px] max-[500px]:text-[20px]">
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
