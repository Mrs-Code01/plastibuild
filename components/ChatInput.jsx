// import { useState } from "react";

// export default function ChatInput({ onSend }) {
//   const [text, setText] = useState("");

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (text.trim()) {
//       onSend(text);
//       setText("");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="chat-input">
//       <input
//         value={text}
//         onChange={e => setText(e.target.value)}
//         placeholder="Type your message..."
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

// import { useState } from "react";
// import { Send, User } from "lucide-react";

// export default function ChatInput({ onSend }) {
//   const [text, setText] = useState("");

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (text.trim()) {
//       onSend(text); // ✅ send just the string
//       setText("");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="w-full px-[16px] py-[12px] border-t border-gray-300 bg-white flex items-center gap-[12px]"
//     >
//       <User className="text-gray-400 w-[24px] h-[24px]" />
//       <input
//         value={text}
//         onChange={e => setText(e.target.value)}
//         placeholder="Type your message..."
//         className="w-[calc(100%-96px)] px-[12px] py-[10px] border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <button
//         type="submit"
//         className="w-[40px] h-[40px] bg-blue-500 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition"
//       >
//         <Send size={18} />
//       </button>
//     </form>
//   );
// }

import { useState } from "react";
import { Send, User } from "lucide-react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="font-raleway w-full px-[16px] py-[12px] border-t border-[#008000] bg-white flex items-center gap-[12px]"
    >
      <User className="text-[#008000] w-[24px] h-[24px]" />
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type your message..."
        className="w-[calc(100%-96px)] px-[12px] py-[10px] border border-[#008000] rounded-[16px] text-sm focus:outline-none focus:ring-2 focus:ring-[#008000]"
      />
      <button
        type="submit"
        className="cursor-pointer w-[40px] h-[40px] bg-[#008000] text-white rounded-[12px] flex items-center justify-center hover:bg-[#006400] transition"
      >
        <Send size={18} />
      </button>
    </form>
  );
}
