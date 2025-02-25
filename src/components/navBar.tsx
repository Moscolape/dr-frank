import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Importing icons

const links = [
  { name: "About", href: "/about" },
  { name: "Milestones", href: "/milestones" },
  { name: "Contact", href: "/contact" },
  { name: "Engagements", href: "/engagements" },
  { name: "Media", href: "/media" },
];

export default function NavLinks() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setTimeout(() => setMenuOpen(false), 100); // ✅ Add delay to prevent immediate closing
      }
    };

    if (isMenuOpen) {
      setTimeout(() => {
        document.body.addEventListener("click", handleOutsideClick);
      }, 50); // ✅ Delay attaching the event
    } else {
      document.body.removeEventListener("click", handleOutsideClick);
    }

    return () => document.body.removeEventListener("click", handleOutsideClick);
  }, [isMenuOpen]);

  return (
    <nav className="flex justify-between items-center sm:px-4 sm:py-3">
      <Link to="/" className="logo">
        <img src="/dr-frank.svg" alt="My Logo" width={150} height={70} />
      </Link>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4 font-Poppins">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className={`px-4 py-2 text-h6 font-medium rounded-md ${
              currentPath === link.href ? "text-white bg-black" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden relative">
        <motion.button onClick={toggleMenu} ref={menuButtonRef} className="p-2 rounded-md focus:outline-none">
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </motion.button>
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute z-40 top-16 right-4 bg-white shadow-lg rounded-lg py-2 px-3 w-48 animate-fadeDownFast"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block p-2 text-black hover:bg-black hover:text-white rounded-md"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
