// SocialSidebar.jsx
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="fixed top-1/3 right-0 flex flex-col space-y-2 z-50">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 p-3 text-white hover:opacity-80"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 p-3 text-white hover:opacity-80"
      >
        <FaYoutube />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 p-3 text-white hover:opacity-80"
      >
        <FaInstagram />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-sky-500 p-3 text-white hover:opacity-80"
      >
        <FaTwitter />
      </a>
      <a
        href="https://whatsapp.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 text-white hover:opacity-80"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default SocialSidebar;
