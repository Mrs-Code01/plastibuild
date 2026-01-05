// import ChatInput from "./ChatInput";
// import ChatMessage from "./ChatMessage";

// export default function ChatContainer({ messages, onSend }) {
//   return (
//     <div className="chat-container">
//       <div className="chat-messages">
//         {messages.map((msg, index) => (
//           <ChatMessage key={index} message={msg} />
//         ))}
//       </div>
//       <ChatInput onSend={onSend} />
//     </div>
//   );
// }
// import ChatInput from "./ChatInput";
// import ChatMessage from "./ChatMessage";

// export default function ChatContainer({ messages, onSend, isTyping }) {
//   return (
//     <div className="w-full max-w-[600px] mx-auto h-[80vh] border border-gray-300 rounded-lg overflow-hidden flex flex-col bg-white shadow-md">
//       <div className="flex-1 overflow-y-auto px-[8px] py-[12px] bg-gray-50">
//         {messages.map((msg, index) => (
//           <ChatMessage key={index} message={msg} />
//         ))}

//         {isTyping && (
//           <div className="px-[16px] py-[8px] text-left text-sm text-gray-500 animate-pulse">
//             Assistant is typing...
//           </div>
//         )}
//       </div>
//       <ChatInput onSend={onSend} />
//     </div>
//   );
// }

import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

export default function ChatContainer({ messages, onSend, isTyping }) {
  return (
    <div className="font-raleway w-full max-w-[500px] mx-auto h-[70vh] max-[700px]:h-[40vh] border border-[#008000] rounded-[24px] overflow-hidden flex flex-col bg-[#f0fff0] shadow-lg">
      <div className="flex-1 overflow-y-auto px-[10px] py-[14px]">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}

        {isTyping && (
          <div className="px-[16px] py-[8px] text-left text-sm text-[#008000] animate-pulse">
            Assistant is typing...
          </div>
        )}
      </div>
      <ChatInput onSend={onSend} />
    </div>
  );
}
