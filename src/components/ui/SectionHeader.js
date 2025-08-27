"use client";
import { motion } from "framer-motion";

export default function SectionHeader({ 
  title, 
  subtitle, 
  className = "", 
  titleClass = "text-4xl sm:text-5xl font-bold mb-6 text-white/90 tracking-tight",
  subtitleClass = "text-lg text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed",
  center = true,
  delay = 0
}) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
         <motion.h3
     initial={{ opacity: 1, y: 30 }}
     whileInView={{ opacity: 1, y: 0 }}
     animate={{ opacity: 1, y: 0 }}  
     transition={{ duration: 0.6, delay }}
     viewport={{ once: true, margin: "-50px" }}
     className={titleClass}
   >
     {title}
   </motion.h3>

   {subtitle && (
     <motion.p
       initial={{ opacity: 1, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, delay: delay + 0.1 }}
       viewport={{ once: true, margin: "-50px" }}
       className={subtitleClass}
     >
       {subtitle}
     </motion.p>
   )}

    </div>
  );
} 