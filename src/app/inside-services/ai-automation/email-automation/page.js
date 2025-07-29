"use client";

import { Mail, Send, Filter, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EmailAutomationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans px-6">
      {/* Hero Section */}
      <section className="py-24 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text">
            Email Automation
          </span>{" "}
          that Converts and Closes
        </h1>
        <p className="text-purple-200 text-lg md:text-xl mb-8">
          Automate follow-ups, segment lists, and trigger personalized journeys – all on autopilot.
        </p>
        <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-8 py-4 text-lg rounded-full">
          Book Strategy Call
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">Smart Email Automations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Drip Campaigns",
              desc: "Send timed email sequences triggered by signups, purchases, or inactivity.",
              icon: <Send className="w-8 h-8" />,
            },
            {
              title: "Smart Segmentation",
              desc: "Filter your contacts by behavior, tags, or CRM properties in real time.",
              icon: <Filter className="w-8 h-8" />,
            },
            {
              title: "AI Personalization",
              desc: "Deliver tailored messages with GPT-powered dynamic content for each user.",
              icon: <Sparkles className="w-8 h-8" />,
            },
            {
              title: "Autonomous Replies",
              desc: "Auto-respond to FAQs, confirmations, and leads using intelligent logic.",
              icon: <Mail className="w-8 h-8" />,
            },
          ].map((feature, i) => (
            <Card
              key={i}
              className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-6 border border-purple-800 text-white hover:scale-[1.02] transition-transform"
            >
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>{feature.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
