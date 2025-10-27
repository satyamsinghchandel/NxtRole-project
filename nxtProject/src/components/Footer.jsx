import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 h-text-gray-800 dark:text-gray-200 py-6 transition-colors py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 ">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="#"
            className="hover:text-blue-500 transition-colors text-xl"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="hover:text-sky-400 transition-colors text-xl"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-blue-600 transition-colors text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="hover:text-pink-500 transition-colors text-xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="text-sm text-center md:text-right">
          © 2025 <span className="font-semibold">NxtRole.AI</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
