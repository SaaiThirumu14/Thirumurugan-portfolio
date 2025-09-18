import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-black/50 to-transparent backdrop-blur-sm border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center space-y-8">
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 font-medium"
            >
              About
            </a>
            <a
              href="#tools"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 font-medium"
            >
              Tools
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center gap-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/imthirumu"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white/5 hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400 group-hover:text-indigo-400 transition-colors duration-300"
              >
                <path
                  d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/thirumurugan-m-b-7084a6325"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white/5 hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400 group-hover:text-indigo-400 transition-colors duration-300"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/SaaiThirumu14"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white/5 hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400 group-hover:text-indigo-400 transition-colors duration-300"
              >
                <path
                  d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 18c-4.51 2-5-2-7-2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Copyright and Credits */}
          <div className="text-center space-y-2">
            <p className="text-gray-300 font-medium">
              Developed with ❤️ by <span className="text-indigo-400">Thirumurugan</span>
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;