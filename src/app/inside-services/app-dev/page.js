"use client";
import Header from "@/components/Header/page";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Smartphone,
  Code,
  Cog,
  ShieldCheck,
  Rocket,
  Workflow,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function AppDevelopmentPage() {

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans m-0 p-0 overflow-x-hidden">
      <Header />

      <section className="w-full max-w-5xl mx-auto pt-24 sm:pt-32 md:pt-40 pb-12 text-center px-6">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          <span className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text">
            App Development
          </span>{" "}
          <TypeAnimation
            sequence={[
              "for Every Platform",
              2000,
              "That Users Love",
              2000,
              "That Performs",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text inline-block"
          />
        </h1>
        <p className="text-purple-200 text-sm sm:text-base md:text-lg mb-6 max-w-xl mx-auto">
          Build iOS, Android, and cross-platform apps with blazing performance
          and stunning UX.
        </p>
        <Link href="/contact">
          <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-5 py-3 rounded-full w-full sm:w-auto max-w-xs">
            Start Your App Project
          </Button>
        </Link>
      </section>

      <section className="w-full max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-purple-300">
          What We Build
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              title: "iOS & Android Apps",
              desc: "Native apps built using Swift, Kotlin, or Flutter for high-performance delivery.",
              icon: <Smartphone className="w-8 h-8" />,
            },
            {
              title: "Cross-Platform Solutions",
              desc: "One codebase. Multiple platforms. Built using React Native or Flutter.",
              icon: <Workflow className="w-8 h-8" />,
            },
            {
              title: "Backend Integrations",
              desc: "Secure APIs, real-time databases, and cloud backend support included.",
              icon: <Cog className="w-8 h-8" />,
            },
            {
              title: "App Security",
              desc: "We ensure your app is protected through secure authentication & encryption.",
              icon: <ShieldCheck className="w-8 h-8" />,
            },
            {
              title: "App Store Deployment",
              desc: "End-to-end support in getting your app published to App Store & Play Store.",
              icon: <Rocket className="w-8 h-8" />,
            },
            {
              title: "UI/UX Design",
              desc: "Polished, intuitive mobile designs with user-first principles.",
              icon: <Code className="w-8 h-8" />,
            },
          ].map((f, i) => (
            <Card
              key={i}
              className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-4 border border-purple-800 text-white hover:scale-[1.01] transition-transform"
            >
              <CardHeader className="flex justify-center">{f.icon}</CardHeader>
              <CardTitle className="text-center text-lg">{f.title}</CardTitle>
              <CardContent className="text-center text-sm">
                {f.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full py-16 text-center bg-gradient-to-r from-fuchsia-800 via-purple-700 to-black px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Have an App Idea?</h2>
          <p className="text-base mb-6 text-purple-100">
            Let’s bring it to life with powerful code and beautiful design.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-purple-800 px-5 py-3 font-semibold rounded-full hover:scale-105">
              Get Started Today
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
              Do you build both Android and iOS?
            </h4>
            <p>
              Yes — we can develop for either or both, depending on your
              audience and budget.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">
              Can I see progress during development?
            </h4>
            <p>
              We work in agile sprints and provide weekly builds for
              transparency and feedback.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">
              Will you help publish the app?
            </h4>
            <p>
              Absolutely — we handle all the steps required for App Store or
              Google Play launch.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
