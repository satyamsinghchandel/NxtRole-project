import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import logo from "../png/nxtrole.png";
import "remixicon/fonts/remixicon.css";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  const toggleMenu = () => setIsOpen(!isOpen);

  // Icon color logic (for hamburger + theme toggle)
  const iconColor =
    theme === "dark" ? "text-gray-200" : "text-gray-800";

  // For Theme Toggle Icon: show sun icon in dark, moon icon in light for better UX
  const themeIcon =
    theme === "dark" ? (
      <i className="ri-sun-line text-2xl"></i>
    ) : (
      <i className="ri-moon-line text-2xl"></i>
    );

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div
          className={
            theme === "dark"
              ? "flex items-center space-x-2 text-white"
              : "flex items-center space-x-2"
          }
        >
            <div className="p-1 bg-gray-200 rounded-full">
                <img src={logo} alt="Logo" className="h-14" />
            </div>
          
          <span className="text-xl font-bold text-gray-900 dark:text-white"></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#hero"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            About
          </a>
          <a
            href="#features"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Features
          </a>
          <a
            href="#contact"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          {/* Theme Toggle*/}
          <button
            onClick={toggleTheme}
            className={`px-3 py-1 rounded ${iconColor} hover:bg-gray-300 dark:hover:bg-gray-600 transition`}
            aria-label="Toggle Theme"
          >
            {themeIcon}
          </button>

          <a
            href="#hero"
            className="px-3 py-2 text-xs md:px-6 md:py-2 md:text-base bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full shadow-md hover:scale-105 hover:bg-blue-700 transition-all duration-200 font-semibold"
          >
            Get Started
          </a>

          
          <button
            className="md:hidden ml-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className={`w-6 h-6 ${iconColor}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

     
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 p-4 flex flex-col space-y-2">
          <a
            href="#hero"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition"
            onClick={()=>{setIsOpen(false)}}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition"
            onClick={()=>{setIsOpen(false)}}
          >
            About
          </a>
          <a
            href="#features"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition"
            onClick={()=>{setIsOpen(false)}}
          >
            Features
          </a>
          <a
            href="#contact"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition"
            onClick={()=>{setIsOpen(false)}}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
