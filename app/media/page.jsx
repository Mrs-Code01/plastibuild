// "use client"; // because we’re using file input + fetch

// import { useState, useEffect } from "react";

// export default function MediaPage() {
//   const [images, setImages] = useState([]);

//   // Fetch images from Cloudinary (by tag or prefix)
//   useEffect(() => {
//     const fetchImages = async () => {
//       const res = await fetch("/api/list"); // optional API route for listing
//       const data = await res.json();
//       setImages(data.images);
//     };
//     fetchImages();
//   }, []);

//   const handleUpload = async e => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append("file", file);

//     const res = await fetch("/api/upload", {
//       method: "POST",
//       body: formData
//     });

//     const data = await res.json();
//     setImages(prev => [...prev, data.url]); // add new image to gallery
//   };

//   return (
//     <div className="p-4 mt-[300px]">
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleUpload}
//         className="mb-4 border p-2"
//       />

//       <div className="flex justify-between gap-y-[20px] flex-wrap w-full">
//         {images.map((src, idx) => (
//           <div key={idx} className="flex w-[23%] h-[300px]">
//             <img
//               src={src}
//               alt={`Image ${idx}`}
//               className="w-full object-cover object-top"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client"; // because we’re using file input + fetch

import { useState, useEffect } from "react";

export default function MediaPage() {
  const [images, setImages] = useState([]);
  const [password, setPassword] = useState(""); // track what user types
  const [unlocked, setUnlocked] = useState(false); // whether input is shown

  // Fetch images from Cloudinary (by tag or prefix)
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/list");
        if (!res.ok) {
          console.warn("Response not OK:", res.status);
          setImages([]); // fallback
          return;
        }

        const data = await res.json();
        setImages(Array.isArray(data.images) ? data.images : []);
      } catch (err) {
        console.error("Failed to fetch images:", err);
        setImages([]); // fallback when offline or fetch fails
      }
    };
    fetchImages();
  }, []);

  const handleUpload = async e => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      if (data.url) {
        setImages(prev => [...prev, data.url]); // add new image to gallery
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed. Please try again.");
    }
  };

  const handleUnlock = () => {
    if (password === "Ecofeet@01") {
      setUnlocked(true);
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <div className="w-[90%] mx-auto my-[200px]">
      {/* Password field shown until unlocked */}
      {!unlocked && (
        <div className="mb-4 font-raleway">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border border-[1px] outline-[0] p-2 mr-2 w-[150px] max-[350px]:w-[100%] max-[350px]:mb-[10px] max-[350px]:mr-0"
          />
          <button
            onClick={handleUnlock}
            className="bg-[#000000] text-white px-4 py-2 mb-[15px] rounded max-[350px]:w-[100%] cursor-pointer"
          >
            Unlock Upload
          </button>
        </div>
      )}

      {/* File input only shows if unlocked */}
      {unlocked && (
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="mb-4 border p-2"
        />
      )}

      <div className="flex justify-between gap-y-[30px] flex-wrap w-full">
        {(images || []).map((src, idx) => (
          <div
            key={idx}
            className="flex w-[23%] h-[300px] max-[850px]:w-[32%] max-[600px]:w-[48%] max-[430px]:w-[100%]"
          >
            <img
              src={src}
              alt={`Image ${idx}`}
              className="w-full object-cover object-top"
            />
          </div>
        ))}
      </div>

      {/* Friendly placeholder when no images */}
      {images.length === 0 && (
        <p className="font-raleway text-gray-500 mt-4">No images available.</p>
      )}
    </div>
  );
}
