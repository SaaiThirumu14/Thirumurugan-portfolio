import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Tools", path: "#tools" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] max-w-xl bg-black/70 backdrop-blur-md border border-slate-700 rounded-full shadow-lg text-white z-50">
        <div className="flex items-center justify-center md:justify-center px-4 sm:px-6 py-5 relative">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="relative group hover:text-indigo-400 transition-all duration-300"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none p-1 hover:bg-white/10 rounded transition-colors absolute right-4"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute block w-full h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}
              ></span>
              <span
                className={`absolute block w-full h-0.5 bg-white transition-all duration-300 top-3 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`absolute block w-full h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-black/95 backdrop-blur-sm"></div>

        {/* Menu Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <div className="space-y-15">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                onClick={closeMenu}
                className="block text-center"
              >
                <div className="text-2xl sm:text-3xl text-white hover:text-indigo-400 transition-all duration-300 font-semibold">
                  {item.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;