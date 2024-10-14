"use client";
import React, { useState, useEffect } from "react";

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY === 0 || scrollY < lastScrollY);
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById("navbar-dropdown");
      if (isDropdownOpen && dropdown && !dropdown.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Close dropdown when an item is clicked
  const handleMenuItemClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className={`border-gray-200 dark:border-gray-700 font-sora fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-black bg-opacity-80`}
    >
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-6 backdrop-blur-md">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse ml-10">
          <img src="./logo.png" className="h-12" alt="Logo" />
          <span className="self-center text-3xl font-semibold text-neutral-700 dark:text-white">
            AVONAS
          </span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-10 mr-10">
          {["Home", "Services", "About", "Contact"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-xl text-white hover:text-purple-300 transition duration-200"
              onClick={handleMenuItemClick}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className="relative md:hidden">
          <button
            type="button"
            className="inline-flex items-center p-2 w-12 h-12 justify-center text-lg text-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isDropdownOpen ? "true" : "false"}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open main menu</span>
            {/* Toggle icon based on dropdown state */}
            {isDropdownOpen ? (
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>

          {/* Overlay for dropdown */}
          {isDropdownOpen && (
            <div className="fixed inset-0 bg-black opacity-30 z-40" onClick={toggleDropdown} />
          )}

          <div
            className={`absolute right-0 text-center mt-2 w-screen bg-black rounded-lg shadow-lg z-50 transition-all duration-300 ease-in-out ${
              isDropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-2 m-0">
              {["Home", "Services", "About", "Contact"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="block py-3 px-4 w-full text-xl text-white rounded-lg transition duration-200 hover:text-purple-300 hover:bg-gray-700 dark:hover:bg-gray-600"
                    onClick={handleMenuItemClick} // Close on click
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
