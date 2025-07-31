"use client";
import Header from "@/components/Header/page";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard, PenTool, Eye, Smartphone, Palette, UserCheck } from "lucide-react";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function UIUXDesignPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans">
      <Header />
      <section className="w-full max-w-5xl mx-auto pt-24 sm:pt-32 md:pt-40 pb-12 text-center px-6">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          <span className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text">
            UI/UX Design
          </span>{" "}
          <TypeAnimation
            sequence={[
              "Interfaces with Pixel-Perfect Design",
              2000,
              "That Users Love",
              2000,
              "That Converts",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text inline-block"
          />
        </h1>
        <p className="text-purple-200 text-sm sm:text-base md:text-lg mb-6 max-w-xl mx-auto">
          Delight your users and grow your brand with professional design for web, mobile, and product experiences.
        </p>
        <Link href="/contact">
          <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-5 py-3 rounded-full w-full sm:w-auto max-w-xs">
            Start My Design Project
          </Button>
        </Link>
      </section>
      <section className="w-full max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-purple-300">Design Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center"><LayoutDashboard className="w-8 h-8" /></CardHeader>
            <CardTitle className="text-center text-lg">Web & App UI</CardTitle>
            <CardContent className="text-center text-sm">Pixel-perfect interfaces for every device and screen size.</CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center"><PenTool className="w-8 h-8" /></CardHeader>
            <CardTitle className="text-center text-lg">UX Research</CardTitle>
            <CardContent className="text-center text-sm">User flows, journey mapping, and persona-driven design.</CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center"><Palette className="w-8 h-8" /></CardHeader>
            <CardTitle className="text-center text-lg">Branding</CardTitle>
            <CardContent className="text-center text-sm">Logos, color systems, and style guides that stand out.</CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center"><Eye className="w-8 h-8" /></CardHeader>
            <CardTitle className="text-center text-lg">Prototyping</CardTitle>
            <CardContent className="text-center text-sm">Clickable Figma or Adobe XD prototypes for instant feedback.</CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center"><Smartphone className="w-8 h-8" /></CardHeader>
            <CardTitle className="text-center text-lg">Mobile-First</CardTitle>
            <CardContent className="text-center text-sm">Responsive, intuitive layouts optimized for mobile users.</CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center"><UserCheck className="w-8 h-8" /></CardHeader>
            <CardTitle className="text-center text-lg">Accessibility</CardTitle>
            <CardContent className="text-center text-sm">WCAG, ADA, and user-friendly design for everyone.</CardContent>
          </Card>
        </div>
      </section>
      <section className="w-full py-16 text-center bg-gradient-to-r from-fuchsia-800 via-purple-700 to-black px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Need Next-Level Design?</h2>
          <p className="text-base mb-6 text-purple-100">
            Let's create a design that users love and remember.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-purple-800 px-5 py-3 font-semibold rounded-full hover:scale-105">
              Book a Free Design Call
            </Button>
          </Link>
        </div>
      </section>
      <section className="max-w-2xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-purple-300 mb-4 text-center">FAQs</h2>
        <div className="space-y-4 text-purple-200">
          <div>
            <h4 className="text-lg font-semibold text-white">Which tools do you use?</h4>
            <p>We design with Figma, Adobe XD, Sketch, and Illustrator.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Can you work with my dev team?</h4>
            <p>Yes! We deliver assets and documentation for seamless handoff.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Do you offer brand design?</h4>
            <p>Absolutely — we craft memorable brand identities and guides.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
