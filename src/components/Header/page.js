"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const desktopDropdownRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isDesktopServicesOpen) return;
    const handleClick = (e) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(e.target)) {
        setIsDesktopServicesOpen(false);
      }
    };
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
  className={`w-full py-3 px-4 md:px-10 flex justify-between items-center fixed top-0 z-50 transition-all duration-500 ${
    scrollY > 50
      ? "bg-black/90 backdrop-blur-lg shadow-lg border-b border-purple-700"
      : "bg-black/50 backdrop-blur-md border-b border-purple-500/20 shadow-sm"
  }`}
  style={{
    borderBottom: "1px solid rgba(180, 90, 255, 0.3)", // Sleek divider
    boxShadow: "0 1px 8px rgba(120, 40, 200, 0.25)",   // Soft glow effect
  }}
>

      {/* Logo */}
<Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
  <Image 
    src="/transparent logo.png" 
    alt="Hexologix Logo" 
    width={35}    // Adjust size as needed
    height={35} 
    className="rounded-md object-contain"
  />
  <h1 className="text-sm md:text-base font-semibold bg-gradient-to-r from-fuchsia-400 to-purple-500 text-transparent bg-clip-text">
    Hexologix Solutions
  </h1>
</Link>


      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-5 text-xs lg:text-sm text-purple-200 font-medium relative">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>

        {/* Desktop Dropdown */}
        <div
          className="relative group"
          ref={desktopDropdownRef}
          onMouseEnter={() => setIsDesktopServicesOpen(true)}
          onMouseLeave={() => setIsDesktopServicesOpen(false)}
          onClick={() => setIsDesktopServicesOpen((v) => !v)}
          tabIndex={0}
        >
          <div className="flex items-center gap-1 hover:text-white cursor-pointer">
            <span>Services</span>
            <ChevronDown className={`w-3.5 h-3.5 text-purple-400 transition-transform duration-300 ${isDesktopServicesOpen ? "rotate-180" : ""}`} />
          </div>
          <div
            className={`absolute top-full mt-3 w-56 bg-gradient-to-br from-[#1b002d] via-[#2a0044] to-black border border-purple-700 rounded-lg shadow-xl transition-all duration-300 z-50
              ${isDesktopServicesOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-90"}`}
          >
            <ul className="flex flex-col text-xs text-purple-200 p-3 space-y-1.5">
              <li><Link href="/inside-services/ai-automation" className="block px-3 py-1.5 rounded-md hover:bg-purple-800/40 hover:text-white">AI Automation</Link></li>
              <li><Link href="/inside-services/web-dev" className="block px-3 py-1.5 rounded-md hover:bg-purple-800/40 hover:text-white">Web Development</Link></li>
              <li><Link href="/inside-services/app-dev" className="block px-3 py-1.5 rounded-md hover:bg-purple-800/40 hover:text-white">App Development</Link></li>
              <li><Link href="/inside-services/email-marketing" className="block px-3 py-1.5 rounded-md hover:bg-purple-800/40 hover:text-white">Email Marketing</Link></li>
              <li><Link href="/inside-services/ss-marketing" className="block px-3 py-1.5 rounded-md hover:bg-purple-800/40 hover:text-white">Social Media Marketing</Link></li>
              <li><Link href="/inside-services/ui-design" className="block px-3 py-1.5 rounded-md hover:bg-purple-800/40 hover:text-white">UI/UX Design</Link></li>
              <li><Link href="/inside-services/gis" className="block px-3 py-1.5 rounded-md hover:bg-purple-800/40 hover:text-white">GIS Services</Link></li>
              <li><Link href="/inside-services/cloud-computing" className="block px-3 py-1.5 rounded-md hover:bg-purple-800/40 hover:text-white">Cloud Computing</Link></li>
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
          <X className="w-5 h-5 text-purple-300" />
        ) : (
          <Menu className="w-5 h-5 text-purple-300" />
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-b border-purple-700 md:hidden z-50 max-h-[90vh] overflow-y-auto">
          <nav className="flex flex-col p-3 space-y-3 text-xs text-purple-200">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>

            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-between w-full hover:text-white"
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transform transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {isServicesOpen && (
              <div className="ml-3 flex flex-col space-y-1 text-purple-300 text-xs">
                <Link href="/inside-services/ai-automation" className="hover:text-white">AI Automation</Link>
                <Link href="/inside-services/web-dev" className="hover:text-white">Web Development</Link>
                <Link href="/inside-services/app-dev" className="hover:text-white">App Development</Link>
                <Link href="/inside-services/email-marketing" className="hover:text-white">Email Marketing</Link>
                <Link href="/inside-services/ss-marketing" className="hover:text-white">Social Media Marketing</Link>
                <Link href="/inside-services/ui-design" className="hover:text-white">UI/UX Design</Link>
                <Link href="/inside-services/gis" className="hover:text-white">GIS Services</Link>
                <Link href="/inside-services/cloud-computing" className="hover:text-white">Cloud Computing</Link>
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
