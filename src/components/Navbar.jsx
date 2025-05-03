import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex-shrink-0">
          <a href="#hero" className="hover:text-gray-300 flex items-center">
            <img
              src="https://i.postimg.cc/5thMZW4G/MY-PF.jpg"
              alt="Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="ml-3 text-xl font-semibold">Chanda Portfolio</span>
          </a>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="text-3xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 right-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 md:static md:flex md:space-x-8 md:bg-transparent md:justify-end`}
        >
          <a
            href="#hero"
            className="block py-3 px-6 text-center hover:bg-blue-700 md:hover:bg-transparent md:hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-3 px-6 text-center hover:bg-blue-700 md:hover:bg-transparent md:hover:text-gray-300 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-3 px-6 text-center hover:bg-blue-700 md:hover:bg-transparent md:hover:text-gray-300 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#resume"
            className="block py-3 px-6 text-center hover:bg-blue-700 md:hover:bg-transparent md:hover:text-gray-300 transition-colors duration-300"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="block py-3 px-6 text-center hover:bg-blue-700 md:hover:bg-transparent md:hover:text-gray-300 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
