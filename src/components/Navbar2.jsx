import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  "Overview",
  "Keynote Speakers",
  "Program",
  "Special Sessions",
  "International Advisory Board",
  "Organizers",
  "Abstract Submission",
  "Registration",
  "Conference Publications",
  "Previous ICMS Links",
  "Contact",
  "Sponsors",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed w-full z-50 flex justify-between items-center p-4 transition-all ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center">
          <img src="/IIITNR-Logo.png" className="w-16 h-16" alt="IIITNR Logo" />
          <h1 className="text-xl font-bold text-[#4671AF] px-5">CAM</h1>
        </div>
        
        <button onClick={() => setIsOpen(true)} style={{background: "white"}}>
          <Menu size={28}/>
        </button>
      </div>

      {/* Sidebar */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 z-50"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
            style={{background: "white"}}
          >
            <X size={24} />
          </button>
          {/* Divider after cross button */}
          <div className="mt-12">
            <hr className="mb-4 border-gray-300" />
            <ul className="space-y-2 text-left">
              {menuItems.map((item, index) => (
                <li key={index} className="text-gray-700 hover:text-black cursor-pointer">
                  <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </>
  );
}
