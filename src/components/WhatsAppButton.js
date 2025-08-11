"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si"; // ✅ Real WhatsApp logo

export default function WhatsAppButton({
  phoneNumber = "447842575876",
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
        bg-gradient-to-br from-purple-800/50 to-fuchsia-800/50
        rounded-full border border-white/10 backdrop-blur-md
        shadow-2xl transition-all duration-300
        w-14 h-14 flex items-center justify-center
        focus:outline-none focus:ring-2 focus:ring-purple-400/60
      "
      style={{
        boxShadow:
          "0 10px 25px -5px rgba(168, 85, 247, 0.4), 0 4px 6px -2px rgba(168, 85, 247, 0.15)",
      }}
    >
      <SiWhatsapp className="w-6 h-6" style={{ color: "#25D366" }} /> {/* ✅ Official WhatsApp green */}
    </motion.button>
  );
}
