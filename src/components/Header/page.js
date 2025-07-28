"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Code, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full py-4 px-6 md:px-12 flex justify-between items-center fixed top-0 z-50 transition-all duration-500 ${
      scrollY > 50
        ? "bg-black/90 backdrop-blur-lg shadow-xl border-b border-purple-800"
        : "bg-transparent"
    }`}>
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-lg flex items-center justify-center">
          <Code className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-500 text-transparent bg-clip-text">
          TechFlow
        </h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 text-purple-200 font-medium relative">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>

        {/* Services Dropdown */}
        <div className="relative group">
          <div className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
            <span>Services</span>
            <ChevronDown className="w-4 h-4 text-purple-400 group-hover:rotate-180 transition-transform duration-300" />
          </div>

          {/* Dropdown Content */}
          <div className="absolute top-full left-0 mt-4 w-64 bg-gradient-to-br from-[#1b002d] via-[#2a0044] to-black border border-purple-700 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-in-out transform scale-90 group-hover:scale-100 z-50 backdrop-blur-lg">
            <ul className="flex flex-col text-sm text-purple-200 p-4 space-y-2">
              <li><Link href="/#ai" className="block px-4 py-2 rounded-lg hover:bg-purple-800/40 hover:text-white">AI Automation</Link></li>
              <li><Link href="/#web" className="block px-4 py-2 rounded-lg hover:bg-purple-800/40 hover:text-white">Web Development</Link></li>
              <li><Link href="/#app" className="block px-4 py-2 rounded-lg hover:bg-purple-800/40 hover:text-white">App Development</Link></li>
              <li><Link href="/#email" className="block px-4 py-2 rounded-lg hover:bg-purple-800/40 hover:text-white">Email Marketing</Link></li>
              <li><Link href="/#social" className="block px-4 py-2 rounded-lg hover:bg-purple-800/40 hover:text-white">Social Media Marketing</Link></li>
              <li><Link href="/#uiux" className="block px-4 py-2 rounded-lg hover:bg-purple-800/40 hover:text-white">UI/UX Design</Link></li>
            </ul>
          </div>
        </div>

        <Link href="/Portfolio" className="hover:text-white transition-colors">Portfolio</Link>
        <Link href="/#about" className="hover:text-white transition-colors">About</Link>
        <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-purple-900/20 transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-purple-300" />
        ) : (
          <Menu className="w-6 h-6 text-purple-300" />
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-b border-purple-700 md:hidden">
          <nav className="flex flex-col p-4 space-y-4 text-purple-200">
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "/#services" },
              { name: "Portfolio", href: "/Portfolio" },
              { name: "About", href: "/#about" },
              { name: "Contact", href: "/#contact" }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
