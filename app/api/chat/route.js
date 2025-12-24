import { NextResponse } from "next/server";
import { getKnowledgeContext } from "../../../lib/knowledgeBase";

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const COHERE_API_KEY = process.env.COHERE_API_KEY;

    if (!COHERE_API_KEY) {
      return NextResponse.json(
        { error: "COHERE_API_KEY is not configured" },
        { status: 500 }
      );
    }

    // Convert messages to Cohere format
    const chatHistory = messages.slice(0, -1).map(msg => ({
      role: msg.role === "user" ? "USER" : "CHATBOT",
      message: msg.content
    }));

    const lastMessage =
      messages.length > 0 ? messages[messages.length - 1].content : "";

    const knowledgeContext = getKnowledgeContext();

    const preamble = `You are PlastiBuild Assistant, a helpful AI that answers questions about PlastiBuild Creative Solutions Limited. You are friendly, knowledgeable, and always ready to help users understand the platform and its features.
  
  Use the following knowledge base to answer questions accurately. If the question is not covered in the knowledge base, you can provide general helpful information but make it clear you're providing general guidance.
  
  KNOWLEDGE BASE:
  ${knowledgeContext}
  
  INSTRUCTIONS:
  - Answer questions based on the knowledge base above
  - Be concise but informative
  - If asked about something not in the knowledge base, acknowledge it and offer to help with what you do know
  - Always maintain a friendly and professional tone`;
    const response = await fetch("https://api.cohere.com/v1/chat", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${COHERE_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "command-a-03-2025",
        message: lastMessage,
        chat_history: chatHistory,
        preamble,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Cohere API error:", response.status, errorText);
      return NextResponse.json({ error: "Cohere API error" }, { status: 500 });
    }

    const data = await response.json();

    return NextResponse.json({ content: data.text });
  } catch (error) {
    console.error("Chat function error:", error);
    return NextResponse.json(
      { error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}
