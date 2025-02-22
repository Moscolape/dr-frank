import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const links = [
  { name: "About", href: "/about" },
  { name: "Achievements", href: "/achievements" },
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
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.addEventListener("click", handleOutsideClick);
    } else {
      document.body.removeEventListener("click", handleOutsideClick);
    }

    return () => document.body.removeEventListener("click", handleOutsideClick);
  }, [isMenuOpen]);

  return (
    <nav className="flex justify-between items-center px-4 py-3">
      <Link to="/" className="logo">
        <img src="/dr-frank.svg" alt="My Logo" width={120} height={50} />
      </Link>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              currentPath === link.href ? "text-white bg-blue-700" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden relative">
        <motion.button onClick={toggleMenu} ref={menuButtonRef}>
          <img src="/menu-01.svg" alt="open" width={40} height={40} />
        </motion.button>
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 right-0 bg-white shadow-lg rounded-lg py-2 px-4 w-48"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-2 text-black hover:bg-blue-500 hover:text-white rounded-md"
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
