"use client"

import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY === 0 || scrollY < lastScrollY)
      setLastScrollY(scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
  }

  const menuItems = ["Home", "Services", "About", "Contact"]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 font-sora lg:text-4xl ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-black bg-opacity-80 backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-3">
              <img src="/logo.png?height=28&width=28" className="h-12 w-12" alt="Logo" />
              <span className="text-2xl font-semibold text-white">AVONAS</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
                  onClick={handleMenuItemClick}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-300 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-white hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition duration-200"
              onClick={handleMenuItemClick}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}