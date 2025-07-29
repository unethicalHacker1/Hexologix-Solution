"use client";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BrainCircuit,
  Workflow,
  Bot,
  ShieldCheck,
  Zap,
  Cog,
} from "lucide-react";
import React, { useEffect, useState } from "react";

export default function AiAutomationsPage() {
  // Typewriter effect for heading
  const fullHeading = "AI Automations That Supercharge Your Business";
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
    <main className="w-full min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans m-0 p-0 overflow-x-hidden">
      {/* ✅ Fixed Top Spacing */}
      <Header />

      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 flex flex-col items-center text-center px-2 sm:px-4 lg:px-6">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 animate-fade-in-up">
          <span className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text">
            AI Automations
          </span>{" "}
          {typedHeading.slice("AI Automations".length)}
        </h1>
        <p className="text-purple-200 text-sm sm:text-base md:text-lg mb-6 max-w-xl mx-auto">
          Automate tasks, increase efficiency, and scale operations using intelligent workflows crafted by Hexologix.
        </p>
        <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-5 py-3 text-base rounded-full w-full sm:w-auto max-w-xs">
          Schedule Free Consultation
        </Button>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl mx-auto py-8 sm:py-12 md:py-16 px-2 sm:px-4 lg:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 text-purple-300">
          What We Automate
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              title: "Lead Management",
              desc: "Capture, qualify, and assign leads automatically using forms, chatbots, and workflows.",
              icon: <Bot className="w-8 h-8" />,
            },
            {
              title: "CRM Workflows",
              desc: "Connect HubSpot, Zoho, Salesforce, and automate pipeline, email, and deal stages.",
              icon: <Workflow className="w-8 h-8" />,
            },
            {
              title: "Customer Support",
              desc: "Deploy AI-powered help desks, email responders, and WhatsApp bots for 24/7 assistance.",
              icon: <ShieldCheck className="w-8 h-8" />,
            },
            {
              title: "Internal Operations",
              desc: "Automate HR onboarding, IT requests, and employee reminders via logic-based flows.",
              icon: <BrainCircuit className="w-8 h-8" />,
            },
            {
              title: "Email Campaigns",
              desc: "Set up trigger-based campaigns for new users, cart abandonment, or retention workflows.",
              icon: <Zap className="w-8 h-8" />,
            },
            {
              title: "Custom Integrations",
              desc: "Connect Slack, Notion, Google Sheets, CRMs, and any APIs to run end-to-end automation.",
              icon: <Cog className="w-8 h-8" />,
            },
          ].map((s, i) => (
            <Card
              key={i}
              className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-4 border border-purple-800 text-white hover:scale-[1.01] transition-transform flex flex-col h-full min-h-[220px]"
            >
              <CardHeader>
                <div className="mb-3 flex justify-center">{s.icon}</div>
                <CardTitle className="text-base md:text-lg text-center">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-xs md:text-sm text-center">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 sm:py-16 md:py-18 text-center bg-gradient-to-r from-fuchsia-800 via-purple-700 to-black px-2 sm:px-4 lg:px-6">
        <div className="w-full max-w-xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Ready to Automate Smarter?</h2>
          <p className="text-sm sm:text-base mb-6 text-purple-100">
            Let’s build workflows that work even while you sleep.
          </p>
          <Button className="bg-white text-purple-800 px-5 py-3 text-base font-semibold rounded-full w-full sm:w-auto max-w-xs hover:scale-105 transition-all">
            Book a Strategy Session
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-2xl mx-auto py-8 sm:py-12 md:py-16 px-2 sm:px-4 lg:px-6">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-300 mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 text-purple-200 w-full">
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">What platforms do you support?</h4>
            <p className="text-sm md:text-base">We work with Zapier, Make, n8n, custom Node.js workflows, and any modern API-based platform.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Can you automate my current CRM?</h4>
            <p className="text-sm md:text-base">Yes, we specialize in integrating and automating HubSpot, Zoho, Salesforce, and custom CRMs.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Will I get reports on what automations do?</h4>
            <p className="text-sm md:text-base">Yes — we can build dashboards to track automation performance, errors, success rate, and value impact.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
