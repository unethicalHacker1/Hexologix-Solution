"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WhatsAppButton({
  phoneNumber = "923001234567",
  presetMessage = "Hello, I would like to know more about your services!",
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(presetMessage)}`,
      "_blank"
    );
  };

  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      onClick={openWhatsApp}
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-24 right-8 z-50
        bg-gradient-to-r from-green-500 to-green-600 text-white
        rounded-full border border-green-300/30 backdrop-blur-md
        shadow-2xl transition-all duration-300
        w-14 h-14 flex items-center justify-center
        focus:outline-none focus:ring-2 focus:ring-green-300/60
      "
      style={{
        boxShadow:
          "0 10px 25px -5px rgba(34, 197, 94, 0.40), 0 4px 6px -2px rgba(34, 197, 94, 0.15)",
      }}
    >
      {/* WhatsApp icon */}
      <svg
        viewBox="0 0 32 32"
        className="w-6 h-6"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.04c-.27-.14-1.58-.78-1.83-.87-.25-.09-.43-.14-.62.14-.18.27-.71.87-.87 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.35-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.05-.22-.53-.44-.46-.62-.46-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.65 1.13 2.83.14.18 1.95 2.97 4.73 4.05 2.78 1.08 2.78.72 3.28.69.5-.03 1.58-.64 1.81-1.26.23-.62.23-1.15.16-1.26-.07-.11-.25-.18-.52-.32z" />
        <path d="M15.99 5.33c-5.86 0-10.62 4.76-10.62 10.62 0 1.87.5 3.64 1.38 5.16l-1.46 5.34 5.47-1.44a10.58 10.58 0 0 0 5.22 1.35c5.86 0 10.62-4.76 10.62-10.62S21.85 5.33 15.99 5.33zm0 19.05c-1.75 0-3.38-.45-4.82-1.24l-.35-.19-3.23.85.86-3.15-.2-.32a8.96 8.96 0 1 1 7.74 4.05z" />
      </svg>
    </motion.button>
  );
}
