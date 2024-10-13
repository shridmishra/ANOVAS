"use client";
import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

export const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Header visible at start

  useEffect(() => {
    // Load theme from local storage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      setTheme("light");
      document.documentElement.classList.add("light");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Show the header if at the top, hide if scrolling down, show if scrolling up
      if (scrollY === 0) {
        setIsVisible(true); // Always show the header at the top
      } else if (scrollY > lastScrollY) {
        setIsVisible(false); // Hide the header when scrolling down
      } else {
        setIsVisible(true); // Show the header when scrolling up
      }

      setLastScrollY(scrollY); // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className={`border-gray-200 dark:border-gray-700 font-sora fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-transparent`} // Always transparent background
    >
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-6 backdrop-blur-md">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse ml-10">
          <img src="./logo.png" className="h-12" alt="Logo" />
          <span className="self-center text-3xl font-semibold text-neutral-700 dark:text-white">
            AVONAS
          </span>
        </a>

        <div className="flex items-center">
          <button
            type="button"
            className="inline-flex items-center p-2 w-12 h-12 justify-center text-lg text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isDropdownOpen ? "true" : "false"}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open main menu</span>
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
          </button>

          <div
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } w-full md:block md:w-auto relative`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
              {/* Nav Items */}
              {["Home", "Services", "About", "Contact"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`block py-3 px-4 text-xl rounded-lg transition duration-200 ${
                      theme === "light"
                        ? "text-gray-900 hover:text-purple-600"
                        : "text-white hover:text-purple-300"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={toggleTheme}
            className="p-5 transition duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
          >
            {theme === "light" ? (
              <FaMoon className="text-gray-800 dark:text-white" />
            ) : (
              <MdSunny className="text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
