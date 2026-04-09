"use client";

import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  onOpenModal: () => void;
}

const Header = ({ onOpenModal }: HeaderProps) => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-[50]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Left Logo */}
        <div className="flex items-center">
          <Image
            src="/logo-shoolini.webp" 
            alt="University Logo"
            width={220}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Right Menu */}
        <nav className="hidden md:flex items-center gap-8 text-[18px] font-medium text-gray-800">
          <Link href="#" className="hover:text-[#ff2b57] transition">
            Programme
          </Link>
          <Link href="#" className="hover:text-[#ff2b57] transition">
            Approvals
          </Link>
          <Link href="#" className="hover:text-[#ff2b57] transition">
            About US
          </Link>
          <Link href="#" className="hover:text-[#ff2b57] transition">
            Why US
          </Link>
          <button 
            onClick={onOpenModal}
            className="bg-[#ff2b57] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#ff5fa2] transition shadow-md"
          >
            Apply Now
          </button>
        </nav>

        {/* Mobile Toggle Placeholder (Optional) */}
        <div className="md:hidden">
          <button onClick={onOpenModal} className="bg-[#ff2b57] text-white px-4 py-1.5 rounded-md text-sm font-bold">
            Apply
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
