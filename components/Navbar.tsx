"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0A0A0A] border-b border-white/10 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/infinitica3.png"
                alt="Infinitica Logo"
                width={140}
                height={45}
                className="h-10 w-auto object-contain brightness-100 contrast-100 hover:opacity-90 transition-opacity"
                priority
              />
            </Link>
          </div>

       

       

          {/* Action Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-white text-black border border-white font-semibold text-[15px] px-6 py-2.5 rounded-none hover:bg-[#AC58E9] hover:text-white hover:border-[#AC58E9] active:scale-95 transition-all duration-200 tracking-tight"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              aria-label="Shopping Cart"
              className="p-2 rounded-none border border-white/10 bg-[#111] text-zinc-300 hover:text-[#AC58E9] hover:border-[#AC58E9]"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-none border border-transparent text-zinc-400 hover:text-[#AC58E9] hover:border-white/10 hover:bg-[#111] focus:outline-none transition-all"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/10 px-4 pt-2 pb-6 space-y-4">
          <div className="flex flex-col space-y-3">
            <Link
              href="/#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-[#AC58E9] py-2 transition-colors border-l-2 border-transparent hover:border-[#AC58E9] pl-2"
            >
              Features
            </Link>
            <Link
              href="/#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-[#AC58E9] py-2 transition-colors border-l-2 border-transparent hover:border-[#AC58E9] pl-2"
            >
              About us
            </Link>
            <Link
              href="/#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-[#AC58E9] py-2 transition-colors border-l-2 border-transparent hover:border-[#AC58E9] pl-2"
            >
              Pricing
            </Link>
            <Link
              href="/#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-[#AC58E9] py-2 transition-colors border-l-2 border-transparent hover:border-[#AC58E9] pl-2"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-[#AC58E9] py-2 transition-colors border-l-2 border-transparent hover:border-[#AC58E9] pl-2"
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center bg-white text-black border border-white font-semibold py-3 rounded-none hover:bg-[#AC58E9] hover:text-white hover:border-[#AC58E9] transition-colors mt-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
