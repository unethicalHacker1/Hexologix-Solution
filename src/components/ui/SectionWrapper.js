"use client";
import { motion } from "framer-motion";

export default function SectionWrapper({ 
  children, 
  className = "", 
  backgroundType = "primary",
  id = "",
  containerClass = "max-w-7xl mx-auto relative z-10"
}) {
  const backgroundEffects = {
    primary: (
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/2 -translate-x-1/2 animate-pulse"></div>
        <div className="w-[600px] h-[600px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    ),
    secondary: (
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[500px] h-[500px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/4 -z-10 animate-pulse"></div>
        <div className="w-[400px] h-[400px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 -z-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
    ),
    tertiary: (
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-3xl absolute top-0 left-1/2 -translate-x-1/2 -z-10 animate-pulse"></div>
        <div className="w-[300px] h-[300px] bg-fuchsia-800/10 rounded-full blur-2xl absolute bottom-0 right-1/3 -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    ),
    cta: (
      <div className="absolute inset-0 -z-10">
        <div className="w-[700px] h-[700px] bg-fuchsia-500/20 blur-3xl rounded-full absolute -top-48 left-1/2 -translate-x-1/2 animate-pulse" />
        <div className="w-[400px] h-[400px] bg-white/5 rounded-full blur-2xl absolute bottom-0 left-1/3" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent)] opacity-50" />
      </div>
    )
  };

  const backgroundClasses = {
    primary: "bg-gradient-to-br from-black via-[#2c003e] to-black",
    secondary: "bg-gradient-to-br from-[#1a002f] via-[#2c003e] to-black",
    tertiary: "bg-gradient-to-bl from-[#0d001b] via-[#1b0035] to-black",
    cta: "bg-gradient-to-br from-fuchsia-800 via-purple-700 to-black"
  };

  return (
    <section 
      id={id}
      className={`relative py-20 px-4 sm:px-6 overflow-hidden text-white ${backgroundClasses[backgroundType]} ${className}`}
    >
      {backgroundEffects[backgroundType]}
      <motion.div
        className={containerClass}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        //animate={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}   // ✅ ensures it stays visible
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} // ✅ plays animation only once
      >
        {children}
      </motion.div>
    </section>
  );
}
