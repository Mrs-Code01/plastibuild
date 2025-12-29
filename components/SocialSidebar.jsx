// SocialSidebar.jsx
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn
} from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="fixed top-1/3 right-0 flex flex-col space-y-2 z-[200]">
      <a
        href="https://www.facebook.com/share/1BRUFgBrwS/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 p-3 text-white hover:opacity-80"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.youtube.com/@PlastiBuildCreativeSolutions"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 p-3 text-white hover:opacity-80"
      >
        <FaYoutube />
      </a>
      <a
        href="https://instagram.com/plastibuildcreativesolutions?igshid=ZGUzMzM3NWJiOQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 p-3 text-white hover:opacity-80"
      >
        <FaInstagram />
      </a>
      <a
        href="https://twitter.com/Plastibuild?t=T8h3YOZLNHXIJ8SWHNPwXg&s=09"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-sky-500 p-3 text-white hover:opacity-80"
      >
        <FaTwitter />
      </a>
      <a
        href="https://wa.link/5h5xsa"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 text-white hover:opacity-80"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://www.linkedin.com/company/plastibuild-creative-solutions/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 p-3 text-white hover:opacity-80"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default SocialSidebar;
