import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phonenumber: { type: String, required: true },
  location: { type: String, required: true }
});

// Prevent model overwrite in dev
export default mongoose.models.Form ||
  mongoose.model("WaitListForm", formSchema);
