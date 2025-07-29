"use client";
import Header from "@/components/Header/page";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  ThumbsUp,
  Zap,
  BarChart,
  Smartphone,
  Workflow,
} from "lucide-react";
import React, { useEffect, useState } from "react";

export default function SocialMediaMarketingPage() {
  const gradientText = "Social Media Marketing";
  const restText = " Campaigns That Drive Results";
  const fullHeading = gradientText + restText;
  const [typedHeading, setTypedHeading] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedHeading(fullHeading.slice(0, i + 1));
      i++;
      if (i === fullHeading.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans">
      <Header />
      <section className="w-full max-w-5xl mx-auto pt-24 sm:pt-32 md:pt-40 pb-12 text-center px-6">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          <span className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text">
            {typedHeading.slice(0, gradientText.length)}
          </span>
          {typedHeading.length > gradientText.length && (
            <>{typedHeading.slice(gradientText.length)}</>
          )}
        </h1>
        <p className="text-purple-200 text-sm sm:text-base md:text-lg mb-6 max-w-xl mx-auto">
          Build your brand, connect with customers, and drive sales with
          data-driven campaigns on every major platform.
        </p>
        <Link href="/contact">
          <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-5 py-3 rounded-full w-full sm:w-auto max-w-xs">
            Free Social Audit
          </Button>
        </Link>
      </section>
      <section className="w-full max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-purple-300">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <Users className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              Audience Growth
            </CardTitle>
            <CardContent className="text-center text-sm">
              Attract followers organically and via paid ads.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <ThumbsUp className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              Brand Engagement
            </CardTitle>
            <CardContent className="text-center text-sm">
              Boost likes, shares, and interactions with unique content.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <Zap className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              Viral Campaigns
            </CardTitle>
            <CardContent className="text-center text-sm">
              Hashtag trends, challenges, and influencer partnerships.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <BarChart className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">Analytics</CardTitle>
            <CardContent className="text-center text-sm">
              Measure everything: reach, clicks, conversions, ROI.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <Smartphone className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              Multi-Platform
            </CardTitle>
            <CardContent className="text-center text-sm">
              Instagram, Facebook, LinkedIn, TikTok, X, YouTube, and more.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <Workflow className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              Content Creation
            </CardTitle>
            <CardContent className="text-center text-sm">
              Graphic design, reels, copywriting, and more by pros.
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="w-full py-16 text-center bg-gradient-to-r from-fuchsia-800 via-purple-700 to-black px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Want to Go Viral?</h2>
          <p className="text-base mb-6 text-purple-100">
            Our experts are ready to manage and grow your social presence.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-purple-800 px-5 py-3 font-semibold rounded-full hover:scale-105">
              Book a Social Strategy Call
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
              Which platforms do you manage?
            </h4>
            <p>
              All major platforms: Instagram, Facebook, LinkedIn, X, TikTok,
              YouTube, Pinterest.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">
              Do you create the content?
            </h4>
            <p>
              Yes — our team handles all copywriting, graphics, and video edits.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">
              How do you measure success?
            </h4>
            <p>
              We use in-depth analytics and send monthly reports on all KPIs.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
