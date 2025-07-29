"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Code, Menu, X, ChevronDown } from "lucide-react";
import { useRef } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // mobile dropdown
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false); // desktop dropdown for touch
  const [scrollY, setScrollY] = useState(0);
  const desktopDropdownRef = useRef(null);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    if (!isDesktopServicesOpen) return;
    function handleClick(e) {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(e.target)
      ) {
        setIsDesktopServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isDesktopServicesOpen]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full py-4 px-6 md:px-12 flex justify-between items-center fixed top-0 z-50 transition-all duration-500 ${
        scrollY > 50
          ? "bg-black/90 backdrop-blur-lg shadow-xl border-b border-purple-800"
          : "bg-transparent"
      }`}
    >
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
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>

        {/* Desktop Dropdown - now supports click for touch devices */}
        <div
          className="relative group"
          ref={desktopDropdownRef}
          tabIndex={0}
          aria-haspopup="true"
          aria-expanded={isDesktopServicesOpen}
          onMouseEnter={() => setIsDesktopServicesOpen(true)}
          onMouseLeave={() => setIsDesktopServicesOpen(false)}
          onClick={() => setIsDesktopServicesOpen((v) => !v)}
          onKeyDown={e => {
            if (e.key === "Enter" || e.key === " ") setIsDesktopServicesOpen((v) => !v);
            if (e.key === "Escape") setIsDesktopServicesOpen(false);
          }}
        >
          <div className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer focus:outline-none">
            <span>Services</span>
            <ChevronDown className={`w-4 h-4 text-purple-400 transition-transform duration-300 ${isDesktopServicesOpen ? "rotate-180" : ""}`} />
          </div>

          {/* Dropdown Menu */}
          <div
            className={`absolute top-full left-0 mt-4 w-64 max-w-xs bg-gradient-to-br from-[#1b002d] via-[#2a0044] to-black border border-purple-700 rounded-xl shadow-2xl transition-all duration-300 ease-in-out transform z-50 backdrop-blur-lg
              ${isDesktopServicesOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-90"}`}
            style={{ right: 0, left: "auto" }}
            role="menu"
            aria-label="Services"
          >
            <ul className="flex flex-col text-sm text-purple-200 p-4 space-y-2">
              <li><Link href="/inside-services/ai-automation" className="block px-4 py-2 rounded-lg hover:bg-purple-800/40 hover:text-white" tabIndex={isDesktopServicesOpen ? 0 : -1}>AI Automation</Link></li>
              <li><Link href="/#web" className="block px-4 py-2 rounded-lg hover:bg-purple-800/40 hover:text-white" tabIndex={isDesktopServicesOpen ? 0 : -1}>Web Development</Link></li>
              <li><Link href="/#app" className="block px-4 py-2 rounded-lg hover:bg-purple-800/40 hover:text-white" tabIndex={isDesktopServicesOpen ? 0 : -1}>App Development</Link></li>
              <li><Link href="/#email" className="block px-4 py-2 rounded-lg hover:bg-purple-800/40 hover:text-white" tabIndex={isDesktopServicesOpen ? 0 : -1}>Email Marketing</Link></li>
              <li><Link href="/#social" className="block px-4 py-2 rounded-lg hover:bg-purple-800/40 hover:text-white" tabIndex={isDesktopServicesOpen ? 0 : -1}>Social Media Marketing</Link></li>
              <li><Link href="/#uiux" className="block px-4 py-2 rounded-lg hover:bg-purple-800/40 hover:text-white" tabIndex={isDesktopServicesOpen ? 0 : -1}>UI/UX Design</Link></li>
            </ul>
          </div>
        </div>

        <Link href="/Portfolio" className="hover:text-white transition-colors">Portfolio</Link>
        <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
        <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
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
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-b border-purple-700 md:hidden z-50 max-h-[90vh] overflow-y-auto">
          <nav className="flex flex-col p-4 space-y-4 text-purple-200">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>

            {/* Mobile Services Dropdown */}
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-between w-full hover:text-white transition-colors focus:outline-none"
              aria-haspopup="true"
              aria-expanded={isServicesOpen}
              aria-controls="mobile-services-dropdown"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transform transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isServicesOpen && (
              <div id="mobile-services-dropdown" className="ml-4 flex flex-col space-y-2 text-purple-300">
                <Link href="/inside-services/ai-automation" className="hover:text-white">AI Automation</Link>
                <Link href="/#web" className="hover:text-white">Web Development</Link>
                <Link href="/#app" className="hover:text-white">App Development</Link>
                <Link href="/#email" className="hover:text-white">Email Marketing</Link>
                <Link href="/#social" className="hover:text-white">Social Media Marketing</Link>
                <Link href="/#uiux" className="hover:text-white">UI/UX Design</Link>
              </div>
            )}

            <Link href="/Portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
