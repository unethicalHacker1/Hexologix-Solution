"use client";
import Header from "@/components/Header/page";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Globe, Smartphone, ShieldCheck, Workflow, Rocket } from "lucide-react";
import React, { useEffect, useState } from "react";
import { 
  containerVariants, 
  itemVariants, 
  cardVariants, 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight,
  commonAnimationProps 
} from "@/lib/animations";
import { TypeAnimation } from "react-type-animation";

export default function WebDevelopmentPage() {

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans">
      <Header />
      <motion.section 
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl mx-auto pt-24 sm:pt-32 md:pt-40 pb-12 text-center px-6"
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          <span className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text">
            Web Development
          </span>{" "}
          <TypeAnimation
            sequence={[
              "That Performs",
              2000,
              "That Converts",
              2000,
              "That Scales",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text inline-block"
          />
        </h1>
        <p className="text-purple-200 text-sm sm:text-base md:text-lg mb-6 max-w-xl mx-auto">
          Next-gen websites, eCommerce, and portals built for speed, security,
          and conversion.
        </p>
        <Link href="/contact">
          <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-5 py-3 rounded-full w-full sm:w-auto max-w-xs">
            Get a Free Website Audit
          </Button>
        </Link>
      </motion.section>
      <motion.section 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl mx-auto py-16 px-6"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-2xl font-bold text-center mb-8 text-purple-300"
        >
          Web Expertise
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <Code className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              MERN/MEAN Stack
            </CardTitle>
            <CardContent className="text-center text-sm">
              React, Next.js, Node, MongoDB, Express, Angular & more.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <Smartphone className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              Mobile Responsive
            </CardTitle>
            <CardContent className="text-center text-sm">
              Pixel-perfect UI from mobile to desktop.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <Rocket className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              Performance & SEO
            </CardTitle>
            <CardContent className="text-center text-sm">
              Lightning-fast load times, accessibility, and search visibility.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <Workflow className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              CMS & eCommerce
            </CardTitle>
            <CardContent className="text-center text-sm">
              Custom Shopify, WooCommerce, Strapi, or headless CMS builds.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <ShieldCheck className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              Security & Compliance
            </CardTitle>
            <CardContent className="text-center text-sm">
              Best-in-class security, GDPR compliance, and audit logs.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <Globe className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              APIs & Integrations
            </CardTitle>
            <CardContent className="text-center text-sm">
              Payment, CRM, analytics, and third-party app connections.
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
      <section className="w-full py-16 text-center bg-gradient-to-r from-fuchsia-800 via-purple-700 to-black px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Need a Website That Wins?</h2>
          <p className="text-base mb-6 text-purple-100">
            Let’s build a web presence that gets results.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-purple-800 px-5 py-3 font-semibold rounded-full hover:scale-105">
              Book a Free Web Consult
            </Button>
          </Link>
        </div>
      </section>
      <section className="max-w-2xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-purple-300 mb-4 text-center">
          FAQs
        </h2>
        <div className="space-y-4 text-purple-200">
          <div>
            <h4 className="text-lg font-semibold text-white">
              Which tech stacks do you use?
            </h4>
            <p>
              MERN, MEAN, Next.js, Shopify, WooCommerce, headless CMS and more.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">
              Will my site work on mobile?
            </h4>
            <p>
              Absolutely. All sites are fully responsive, tested, and
              mobile-optimized.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">
              Do you handle hosting and support?
            </h4>
            <p>
              Yes — we offer managed hosting, security, maintenance, and
              updates.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
