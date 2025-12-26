import { connectDB } from "../../../lib/mongodb/waitlist";
import Form from "../../../models/WaitlistForm";

export async function POST(req) {
  try {
    await connectDB(process.env.MONGO_URI);
    const body = await req.json();

    const newForm = new Form(body);
    const savedForm = await newForm.save();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully!",
        data: savedForm
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Error saving form:", err);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error saving form",
        error: err
      }),
      { status: 500 }
    );
  }
}
