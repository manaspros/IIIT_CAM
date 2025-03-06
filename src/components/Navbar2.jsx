import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

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
  const [isButtonAnimating, setIsButtonAnimating] = useState(false);
  const sidebarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close sidebar when clicking outside
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleNavigation = (item) => {
    const pageRoutes = {
      "About": "/about",
      "Contact": "/contact",
      "Special Sessions": "/special-sessions"  // Add route for Special Sessions
    };

    // If it's a page route, use React Router
    if (pageRoutes[item]) {
      setIsOpen(false);
      setTimeout(() => {
        window.location.href = pageRoutes[item];
      }, 300);
      return;
    }

    const idMap = {
      "Keynote Speakers": "keynote-speakers",
      "Program": "program",
      "Conference Publications": "conference-publications",
      "Previous ICMS Links": "previous-icms-links",
    };

    // Use the mapping if available, otherwise use the default transformation
    const id = idMap[item] || item.toLowerCase().replace(/\s+/g, "-");

    // Close the sidebar with a slight delay
    setTimeout(() => {
      setIsOpen(false);
    }, 300);

    // If we're not on the homepage and need to navigate to a section
    if (location.pathname !== '/' && !pageRoutes[item]) {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      // If element exists on current page, smooth scroll to it
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 400);
    } else {
      // If element doesn't exist, navigate to home with hash
      setTimeout(() => {
        window.location.href = `/#${id}`;
      }, 400);
    }
  };

  const handleMenuClick = () => {
    setIsButtonAnimating(true);
    setIsOpen(true);
    // Reset animation state after animation completes
    setTimeout(() => setIsButtonAnimating(false), 700);
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed w-full z-50 flex justify-between items-center px-6 py-3 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
      >
        <div className="flex items-center">
          <Link to="/">
            <img src="/IIITNR-Logo.png" className="w-16 h-16" alt="IIITNR Logo" />
          </Link>
          <Link to="/" className="text-xl font-bold text-[#4671AF] px-5 hover:opacity-80 transition-opacity">
            CAM
          </Link>
        </div>

        <motion.button
          onClick={handleMenuClick}
          className={`p-2 rounded-full transition-all duration-300 backdrop-blur-sm ${isScrolled
            ? "bg-transparent hover:bg-gray-100/50"
            : "bg-transparent hover:bg-white/30"
            } ${isButtonAnimating ? "animate-pulse" : ""}`}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          aria-label="Open menu"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isButtonAnimating ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Menu size={24} className="text-[#ffffff]" />
          </motion.div>
        </motion.button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar with custom scrollbar */}
            <motion.div
              ref={sidebarRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 z-50 overflow-y-auto scrollbar-thin"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#4671AF #f1f1f1'
              }}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-[#4671AF]">Menu</h2>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-transparent hover:bg-gray-100 transition-colors"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  aria-label="Close menu"
                >
                  <X size={20} className="text-gray-700" />
                </motion.button>
              </div>

              <div className="mt-8">
                <hr className="mb-6 border-gray-200" />
                <ul className="space-y-4 text-left">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={index}
                      className={`py-2 px-3 rounded-lg cursor-pointer transition-colors flex items-center justify-between
                        ${item === "Overview" ||
                          item === "Keynote Speakers" ||
                          item === "Program" ||
                          item === "Conference Publications" ||
                          item === "Previous ICMS Links" ||
                          item === "About" ||
                          item === "Contact"
                          ? "bg-blue-50 hover:bg-blue-100 text-[#4671AF]"
                          : "text-gray-700 hover:bg-gray-50"
                        }`}
                      onClick={() => handleNavigation(item)}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-lg font-medium">{item}</span>
                      <ChevronRight size={18} className={item === "Overview" ||
                        item === "Keynote Speakers" ||
                        item === "Program" ||
                        item === "Conference Publications" ||
                        item === "Previous ICMS Links" ||
                        item === "About" ||
                        item === "Contact"
                        ? "text-[#4671AF]"
                        : "text-gray-400"} />
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 text-center text-sm text-gray-500">
                <p>© 2023 IIITNR CAM Workshop</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
