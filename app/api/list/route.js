import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function GET() {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix: "plastibuildimages/", // folder path
      max_results: 50
    });

    return new Response(
      JSON.stringify({ images: result.resources.map(r => r.secure_url) }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500
    });
  }
}
