// export default function ChatMessage({ message }) {
//   return (
//     <div className={`message ${message.role}`}>
//       <p>{message.content}</p>
//     </div>
//   );
// }
// export default function ChatMessage({ message }) {
//   const isUser = message.role === "user";

//   return (
//     <div
//       className={`w-full px-[16px] py-[8px] ${
//         isUser ? "text-right" : "text-left"
//       }`}
//     >
//       <div
//         className={`relative inline-block px-[12px] py-[8px] rounded-lg text-sm ${
//           isUser ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"
//         }`}
//       >
//         {/* ✅ Only render the string */}
//         <p>{message.content}</p>

//         {/* bubble tail */}
//         <span
//           className={`absolute bottom-0 ${
//             isUser
//               ? "right-[-6px] border-r-[12px] border-t-[12px] border-r-transparent border-t-blue-500"
//               : "left-[-6px] border-l-[12px] border-t-[12px] border-l-transparent border-t-gray-100"
//           }`}
//         ></span>
//       </div>
//     </div>
//   );
// }

export default function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <div
      className={`w-full px-[16px] py-[8px] ${
        isUser ? "text-right" : "text-left"
      }`}
    >
      <div
        className={`relative inline-block px-[14px] py-[10px] rounded-[20px] text-sm ${
          isUser ? "bg-[#008000] text-white" : "bg-[#e6f4ea] text-[#004d00]"
        }`}
      >
        <p>{message.content}</p>

        {/* bubble tail */}
        <span
          className={`absolute bottom-[2px] ${
            isUser
              ? "right-[-8px] border-r-[14px] border-t-[14px] border-r-transparent border-t-[#008000]"
              : "left-[-8px] border-l-[14px] border-t-[14px] border-l-transparent border-t-[#e6f4ea]"
          }`}
        ></span>
      </div>
    </div>
  );
}
