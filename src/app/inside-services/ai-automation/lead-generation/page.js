"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Funnel, MailCheck } from "lucide-react";

export default function LeadGenerationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans px-6">
      {/* Hero */}
      <section className="py-24 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text">
            Lead Generation
          </span>{" "}
          on Autopilot
        </h1>
        <p className="text-purple-200 text-lg md:text-xl mb-8">
          Capture, qualify, and nurture leads 24/7 using AI and smart automations.
        </p>
        <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-8 py-4 text-lg rounded-full">
          Start Growing Your Pipeline
        </Button>
      </section>

      {/* Features */}
      <section className="py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">How We Generate Leads</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Chatbots",
              desc: "Engage visitors with intelligent bots that ask qualifying questions and collect contact data.",
              icon: <Bot className="w-8 h-8" />,
            },
            {
              title: "Landing Funnels",
              desc: "We build high-converting pages with lead magnets, opt-in forms, and automated nurturing.",
              icon: <Funnel className="w-8 h-8" />,
            },
            {
              title: "Email Captures",
              desc: "Automate cold email replies and follow-ups using intent detection and trigger logic.",
              icon: <MailCheck className="w-8 h-8" />,
            },
          ].map((s, i) => (
            <Card
              key={i}
              className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-6 border border-purple-800 text-white hover:scale-[1.02] transition-transform"
            >
              <CardHeader>
                <div className="mb-4">{s.icon}</div>
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent>{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
