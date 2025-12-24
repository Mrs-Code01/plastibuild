// "use client";
// import { useState } from "react";
// import ChatContainer from "@/components/ChatContainer";

// export default function ChatPage() {
//   const [messages, setMessages] = useState([]);

//   const handleSend = async text => {
//     const newMessages = [...messages, { role: "user", content: text }];
//     setMessages(newMessages);

//     const res = await fetch("/api/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ messages: newMessages })
//     });
//     const data = await res.json();

//     setMessages([...newMessages, { role: "assistant", content: data.content }]);
//   };

//   return <ChatContainer messages={messages} onSend={handleSend} />;
// }

"use client";
import { useState } from "react";
// import ChatContainer from "@/components/ChatContainer";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async text => {
    // Add user message
    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);

    // Show typing indicator
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages })
      });

      const data = await res.json();

      if (data.content) {
        setMessages([
          ...newMessages,
          { role: "assistant", content: data.content }
        ]);
      } else {
        setMessages([
          ...newMessages,
          { role: "assistant", content: "Sorry, I couldn't generate a reply." }
        ]);
      }
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Error contacting server." }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // return (
  //   <ChatContainer
  //     messages={messages}
  //     onSend={handleSend}
  //     isTyping={isTyping}
  //   />
  // );
}
