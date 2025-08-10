"use client";

import {
  Mail,
  Users,
  Globe,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Whatsapp, // may be undefined on older lucide-react versions
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socials = [
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/hexologix",
      gradient: "from-purple-800/50 to-fuchsia-800/50",
      hover: "hover:bg-purple-700/50",
      color: "text-purple-300",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/hexologix-solutions/",
      gradient: "from-purple-800/50 to-fuchsia-800/50",
      hover: "hover:bg-purple-700/50",
      color: "text-purple-300",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/hexologix",
      gradient: "from-purple-800/50 to-fuchsia-800/50",
      hover: "hover:bg-purple-700/50",
      color: "text-purple-300",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/hexologix_solutions?igsh=MTZmMDFwbDR1anBy",
      gradient: "from-purple-800/50 to-fuchsia-800/50",
      hover: "hover:bg-purple-700/50",
      color: "text-purple-300",
    },
    {
      name: "WhatsApp",
      icon: Whatsapp, // if undefined, we'll render an inline SVG fallback
      href: "https://wa.me/923001234567",
      gradient: "from-purple-800/50 to-fuchsia-800/50",
      hover: "hover:bg-purple-700/50",
      color: "text-purple-300",
    },
  ];

  return (
    <footer className="bg-black text-purple-200 py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[400px] h-[400px] bg-purple-900/10 blur-3xl rounded-full absolute -top-20 left-1/4 -z-10"></div>
        <div className="w-[300px] h-[300px] bg-fuchsia-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 -z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Link
                href="/"
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/transparent logo.png"
                  alt="Hexologix Logo"
                  width={48}
                  height={48}
                  className="rounded-xl object-contain"
                />
                <h4 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-500 text-transparent bg-clip-text">
                  Hexologix Solutions
                </h4>
              </Link>
            </div>
            <p className="text-purple-300 mb-6 leading-relaxed max-w-md">
              Innovative AI solutions and beautiful code for modern businesses.
              We transform ideas into powerful digital experiences that drive
              growth and success.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gradient-to-br ${social.gradient} border border-white/10 rounded-lg flex items-center justify-center text-lg ${social.hover} hover:scale-110 transition-all duration-300 group`}
                  aria-label={social.name}
                >
                  {social.icon ? (
                    <social.icon
                      className={`w-5 h-5 ${social.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  ) : social.name === "WhatsApp" ? (
                    // Inline fallback if Whatsapp is undefined in your lucide-react version
                    <svg
                      viewBox="0 0 32 32"
                      className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M19.11 17.04c-.27-.14-1.58-.78-1.83-.87-.25-.09-.43-.14-.62.14-.18.27-.71.87-.87 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.35-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.05-.22-.53-.44-.46-.62-.46-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.65 1.13 2.83.14.18 1.95 2.97 4.73 4.05 2.78 1.08 2.78.72 3.28.69.5-.03 1.58-.64 1.81-1.26.23-.62.23-1.15.16-1.26-.07-.11-.25-.18-.52-.32z" />
                      <path d="M15.99 5.33c-5.86 0-10.62 4.76-10.62 10.62 0 1.87.5 3.64 1.38 5.16l-1.46 5.34 5.47-1.44a10.58 10.58 0 0 0 5.22 1.35c5.86 0 10.62-4.76 10.62-10.62S21.85 5.33 15.99 5.33zm0 19.05c-1.75 0-3.38-.45-4.82-1.24l-.35-.19-3.23.85.86-3.15-.2-.32a8.96 8.96 0 1 1 7.74 4.05z" />
                    </svg>
                  ) : null}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full mr-3"></span>
              Navigation
            </h5>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Portfolio", href: "/Portfolio" },
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact#form" },
                { name: "Privacy Policy", href: "/PrivacyPolicy" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-purple-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-fuchsia-400 group-hover:w-4 transition-all duration-300 mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full mr-3"></span>
              Services
            </h5>
            <ul className="space-y-3">
              {[
                {
                  name: "AI Automation",
                  href: "/inside-services/AI-Automation",
                },
                {
                  name: "Web Development",
                  href: "/inside-services/WebDevelopment",
                },
                {
                  name: "App Development",
                  href: "/inside-services/AppDevelopment",
                },
                {
                  name: "Email Marketing",
                  href: "/inside-services/EmailMarketing",
                },
                {
                  name: "Social Media Marketing",
                  href: "/inside-services/SocialMediaMarketing",
                },
                { name: "UI/UX Design", href: "/inside-services/UI-Design" },
                { name: "GIS Services", href: "/inside-services/GIS" },
                {
                  name: "Cloud Computing",
                  href: "/inside-services/CloudComputing",
                },
              ].map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-purple-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-fuchsia-400 group-hover:w-4 transition-all duration-300 mr-2"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-purple-800/50 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-800/50 to-fuchsia-800/50 border border-purple-700 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <p className="text-sm text-purple-400 font-medium">Email</p>
                <p className="text-white hover:text-purple-300 transition-colors">
                  info@hexologixsolutions.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-800/50 to-fuchsia-800/50 border border-purple-700 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <p className="text-sm text-purple-400 font-medium">Phone</p>
                <p className="text-white hover:text-purple-300 transition-colors">
                  +44 7842 575876
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-800/50 to-fuchsia-800/50 border border-purple-700 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <p className="text-sm text-purple-400 font-medium">Location</p>
                <p className="text-white hover:text-purple-300 transition-colors">
                  23 chancellor court NN2 7AP Northampton Northamptonshire
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-800/50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-purple-400">
            © {new Date().getFullYear()} Hexologix Solutions. All rights
            reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="/PrivacyPolicy"
              className="text-purple-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-purple-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/cookie-policy"
              className="text-purple-400 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
