import mongoose from "mongoose";

let isConnected = false; // global connection state

export async function connectDB() {
  // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  if (mongoose.connection.readyState === 1) {
    console.log("⚡ Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI); // use env directly
    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}
