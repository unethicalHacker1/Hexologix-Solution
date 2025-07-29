"use client";

import { Bot, Mail, ShieldCheck, MessageSquareHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CustomerSupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans px-6">
      {/* Hero Section */}
      <section className="py-24 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text">
            Customer Support Automation
          </span>{" "}
          that Works Around the Clock
        </h1>
        <p className="text-purple-200 text-lg md:text-xl mb-8">
          Elevate your customer experience with AI chatbots, automated helpdesks, and ticket workflows.
        </p>
        <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-8 py-4 text-lg rounded-full">
          Build Your AI Helpdesk
        </Button>
      </section>

      {/* Feature Cards */}
      <section className="py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">AI-Powered Support Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Chatbots & Live Chat",
              desc: "Trained assistants that resolve FAQs, collect data, and escalate with full context.",
              icon: <Bot className="w-8 h-8" />,
            },
            {
              title: "Automated Ticketing",
              desc: "Trigger ticket creation, categorization, and intelligent routing to support agents.",
              icon: <Mail className="w-8 h-8" />,
            },
            {
              title: "Multilingual Support",
              desc: "Serve global users with real-time translations and culturally aware responses.",
              icon: <ShieldCheck className="w-8 h-8" />,
            },
            {
              title: "Customer Sentiment AI",
              desc: "Analyze tone and urgency in messages to auto-prioritize and respond effectively.",
              icon: <MessageSquareHeart className="w-8 h-8" />,
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
