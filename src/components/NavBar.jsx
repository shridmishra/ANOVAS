"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const togglePages = () => setIsPagesOpen(prev => !prev);
  const toggleBlog = () => setIsBlogOpen(prev => !prev);

  return (
    <div className="menu-wrap font-sora mt-10 relative border-gray-500 rounded-full mx-4 sm:mx-10 lg:mx-24 z-50">
      <div className='p-3'> 
        <nav className="menu-nav flex justify-between items-center bg-[#1C1832] text-white rounded-full shadow-lg px-4 md:px-8 py-4">
          <div className="logo flex items-center space-x-3"> 
            <Link href="/" passHref>
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </Link>
            <div className='font-semibold text-2xl'>ANOVAS</div>
          </div>

          <div className="navbar-wrap main-menu hidden lg:flex space-x-4 ml-auto"> 
            <ul className="navigation flex space-x-4 text-xl">
              <li className="active text-[#e039fd]"><Link href="/">Home</Link></li>
              <li className="hover:text-[#e039fd]"><Link href="/nft-marketplace">Projects</Link></li>
              <li className="hover:text-[#e039fd]"><Link href="/collections">About</Link></li>
              <li className="relative group hover:text-[#e039fd]">
                <Link href="#" onMouseEnter={togglePages} onMouseLeave={togglePages}>
                  Services
                </Link>
                {isPagesOpen && (
                  <ul className="submenu absolute top-full left-0 w-56 bg-gray-800 text-white py-3 rounded-md">
                    <li><Link href="/ui-ux-design" className="block p-2 hover:bg-gray-600 rounded">UI/UX Design</Link></li>
                    <li><Link href="/app-development" className="block p-2 hover:bg-gray-600 rounded">App Development</Link></li>
                    <li><Link href="/web-development" className="block p-2 hover:bg-gray-600 rounded">Web Development</Link></li>
                    <li><Link href="/devops-solutions" className="block p-2 hover:bg-gray-600 rounded">DevOps Solutions</Link></li>
                    <li><Link href="/mobile-app-development" className="block p-2 hover:bg-gray-600 rounded">Mobile App Development</Link></li>
                    <li><Link href="/cloud-services" className="block p-2 hover:bg-gray-600 rounded">Cloud Services</Link></li>
                    <li><Link href="/web-app-creation" className="block p-2 hover:bg-gray-600 rounded">Web App Creation</Link></li>
                    <li><Link href="/ui-ux-profiles" className="block p-2 hover:bg-gray-600 rounded">UI/UX Profiles</Link></li>
                    <li><Link href="/login-register" className="block p-2 hover:bg-gray-600 rounded">Login &amp; Register</Link></li>
                  </ul>
                )}
              </li>
              <li className="relative group hover:text-[#e039fd] mr-10">
                <Link href="#" onMouseEnter={toggleBlog} onMouseLeave={toggleBlog}>
                  More
                </Link>
                {isBlogOpen && (
                  <ul className="submenu absolute top-full left-0 w-48 bg-gray-800 text-white py-3 rounded-md">
                    <li><Link href="/blog" className="block px-4 py-2 hover:bg-gray-600">Our Blog</Link></li>
                    <li><Link href="/blog-details" className="block px-4 py-2 hover:bg-gray-600">Blog Details</Link></li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

         

          <button className="md:hidden p-2 ml-auto" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div className={`mobile-menu bg-gray-800 text-white p-4 rounded-lg mt-2 shadow-lg md:hidden fixed top-0 right-0 h-full w-64 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <button className="absolute top-4 right-4" onClick={toggleMenu}>
            <FaTimes className="text-white" size={24} />
          </button>
          <ul className="space-y-4 mt-10">
            <li className="hover:bg-gray-600 p-3 rounded"><Link href="/">Home</Link></li>
            <li className="hover:bg-gray-600 p-3 rounded"><Link href="/nft-marketplace">Explore</Link></li>
            <li className="hover:bg-gray-600 p-3 rounded"><Link href="/collections">About</Link></li>
            <li className="relative group">
              <Link href="#" className="flex items-center justify-between hover:bg-gray-600 p-3 rounded" onClick={togglePages}>
                 Services
              </Link>
              {isPagesOpen && (
                <ul className="submenu bg-gray-700 py-2 rounded-md mt-2 z-50">
                <li><Link href="/activity" className="block p-2 hover:bg-gray-600 rounded">Web Development</Link></li>
                <li><Link href="/category" className="block p-2 hover:bg-gray-600 rounded">App Development</Link></li>
                <li><Link href="/ranking" className="block p-2 hover:bg-gray-600 rounded">Web App Ranking</Link></li>
                <li><Link href="/creators" className="block p-2 hover:bg-gray-600 rounded">Web App Creators</Link></li>
                <li><Link href="/market-single" className="block p-2 hover:bg-gray-600 rounded">Web Market</Link></li>
                <li><Link href="/nft-live-bidding" className="block p-2 hover:bg-gray-600 rounded">Live Web Bidding</Link></li>
                <li><Link href="/create-item" className="block p-2 hover:bg-gray-600 rounded">Create Web App</Link></li>
                <li><Link href="/author-profile" className="block p-2 hover:bg-gray-600 rounded">Author Web Profile</Link></li>
                <li><Link href="/login-register" className="block p-2 hover:bg-gray-600 rounded">Login &amp; Register</Link></li>
              </ul>
              )}
            </li>
            <li className="relative group">
              <Link href="#" className="flex items-center justify-between hover:bg-gray-600 p-3 rounded" onClick={toggleBlog}>
                Blog
              </Link>
              {isBlogOpen && (
                <ul className="submenu bg-gray-700 py-2 rounded-md mt-2">
                  <li><Link href="/blog" className="block p-2 hover:bg-gray-600 rounded">Our Blog</Link></li>
                  <li><Link href="/blog-details" className="block p-2 hover:bg-gray-600 rounded">Blog Details</Link></li>
                </ul>
              )}
            </li>
           
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
