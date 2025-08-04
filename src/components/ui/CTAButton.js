"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

/**
 * Re-usable call-to-action button that
 * – builds a URL like /contact#form (anchor prop)
 * – if already on that page, prevents navigation and smooth-scrolls
 * – supports small entrance animation via framer-motion
 */
export default function CTAButton({
  children,
  href = "/contact#form", // base path
  anchor = "form",    // section id on the contact page
  variant = "primary",
  className = "",
  delay = 0,
}) {
  const pathname = usePathname();

  /* ——— visual variants ——— */
  const styles = {
    primary:
      "bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-3 text-sm rounded-full hover:scale-105 transition-all",
    secondary:
      "bg-transparent border-2 border-purple-500 text-purple-300 px-6 py-3 text-sm rounded-full hover:bg-purple-600 hover:text-white transition-all hover:scale-105",
    outline:
      "bg-transparent border-2 border-fuchsia-400 text-fuchsia-300 px-6 py-3 text-sm rounded-full hover:bg-fuchsia-600 hover:text-white transition-all hover:scale-105",
  };

  /* ——— click handler ——— */
  const handleClick = (e) => {
    if (pathname === href) {
      // already on /contact — intercept and scroll
      e.preventDefault();
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const url = `${href}#${anchor}`;

  return (
    <Link href={url} scroll={false} onClick={handleClick}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Button className={`${styles[variant]} ${className}`}>
          {children}
        </Button>
      </motion.div>
    </Link>
  );
}
