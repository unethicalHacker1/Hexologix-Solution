"use client";
import Header from "@/components/Header/page";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Zap, BarChart, Bot, ShieldCheck, Workflow } from "lucide-react";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function EmailMarketingPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans">
      <Header />
      <section className="w-full max-w-5xl mx-auto pt-24 sm:pt-32 md:pt-40 pb-12 text-center px-6">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          <span className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text">
            Email Marketing
          </span>{" "}
          <TypeAnimation
            sequence={[
              "Workflows That Convert",
              2000,
              "Campaigns That Engage",
              2000,
              "Automation That Sells",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text inline-block"
          />
        </h1>
        <p className="text-purple-200 text-sm sm:text-base md:text-lg mb-6 max-w-xl mx-auto">
          Build, launch, and automate beautiful campaigns that drive engagement
          and sales.
        </p>
        <Link href="/contact">
          <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-5 py-3 rounded-full w-full sm:w-auto max-w-xs">
            Free Campaign Audit
          </Button>
        </Link>
      </section>
      <section className="w-full max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-purple-300">
          What We Deliver
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <Mail className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              Automated Campaigns
            </CardTitle>
            <CardContent className="text-center text-sm">
              Trigger-based welcome, nurture, and retention flows.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <Bot className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              Personalization
            </CardTitle>
            <CardContent className="text-center text-sm">
              Smart content and timing for every subscriber segment.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <Zap className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              Deliverability
            </CardTitle>
            <CardContent className="text-center text-sm">
              We optimize sender reputation, SPF/DKIM, and inbox rates.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <BarChart className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              Analytics & A/B Testing
            </CardTitle>
            <CardContent className="text-center text-sm">
              Track opens, clicks, revenue, and test what works best.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <ShieldCheck className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">Compliance</CardTitle>
            <CardContent className="text-center text-sm">
              GDPR, CAN-SPAM, and privacy compliance built-in.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <Workflow className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">Integration</CardTitle>
            <CardContent className="text-center text-sm">
              Connect Mailchimp, SendGrid, Klaviyo, HubSpot, and more.
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="w-full py-16 text-center bg-gradient-to-r from-fuchsia-800 via-purple-700 to-black px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Skyrocket Engagement?
          </h2>
          <p className="text-base mb-6 text-purple-100">
            Start converting more leads with intelligent email automation.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-purple-800 px-5 py-3 font-semibold rounded-full hover:scale-105">
              Book a Strategy Session
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
              Which tools do you use?
            </h4>
            <p>
              We work with Mailchimp, Klaviyo, SendGrid, Brevo, HubSpot, and
              custom stacks.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">
              Do you offer copywriting and design?
            </h4>
            <p>Yes, our team crafts engaging content, layouts, and graphics.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">
              Will I see results?
            </h4>
            <p>
              All campaigns include analytics dashboards and optimization
              reviews.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
