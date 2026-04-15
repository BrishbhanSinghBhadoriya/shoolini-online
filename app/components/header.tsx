"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  onOpenModal: () => void;
}

const Header = ({ onOpenModal }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Programme", href: "#course" },
    { name: "Approvals", href: "#approvals" },
    { name: "About US", href: "#about" },
    { name: "Why US", href: "#why-us" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-[50]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Left Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo-shoolini.webp" 
              alt="University Logo"
              width={220}
              height={60}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-[18px] font-medium text-gray-800">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-[#ff2b57] transition">
              {link.name}
            </Link>
          ))}
          
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="text-[#ff2b57] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden bg-black ${
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4 text-white">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={toggleMenu}
              className="hover:text-[#ff2b57] transition border-b border-gray-800 pb-2 text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => {
              onOpenModal();
              toggleMenu();
            }}
            className="bg-[#ff2b57] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#ff5fa2] transition shadow-md mt-2 text-center"
          >
            Apply Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
