import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import SocialSidebar from "../components/SocialSidebar";

const customFont1 = localFont({
  src: "./fonts/Catamaran-Black.ttf",
  variable: "--catamaran-font"
});

const customFont2 = localFont({
  src: "./fonts/Poppins-Light.ttf",
  variable: "--raleway-font"
});

export const metadata = {
  title: "PlastiBuild Creative Solutions Limited",
  description:
    "Climate-tech & sustainable manufacturing company driving circular economy innovation across Africa....",
  icons: { icon: "/favicon.png" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={` ${customFont1.variable} ${customFont2.variable} antialiased`}
      >
        <SocialSidebar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
