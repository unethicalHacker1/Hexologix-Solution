"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTAButton({ 
  children, 
  href = "/contact", 
  variant = "primary", 
  className = "",
  delay = 0,
  onClick = null
}) {
  const buttonStyles = {
    primary: "bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-3 text-sm rounded-full hover:scale-105 transition-all",
    secondary: "bg-transparent border-2 border-purple-500 text-purple-300 px-6 py-3 text-sm rounded-full hover:bg-purple-600 hover:text-white transition-all hover:scale-105",
    outline: "bg-transparent border-2 border-fuchsia-400 text-fuchsia-300 px-6 py-3 text-sm rounded-full hover:bg-fuchsia-600 hover:text-white transition-all hover:scale-105",
  };

  const buttonContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Button 
        className={`${buttonStyles[variant]} ${className}`}
        onClick={onClick}
      >
        {children}
      </Button>
    </motion.div>
  );

  if (onClick) {
    return buttonContent;
  }

  return (
    <Link href={href}>
      {buttonContent}
    </Link>
  );
} 