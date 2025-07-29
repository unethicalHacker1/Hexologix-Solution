"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BrainCircuit,
  Workflow,
  Bot,
  ShieldCheck,
  Zap,
  DatabaseZap,
  Cog,
} from "lucide-react";

export default function AiAutomationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans px-6">
      {/* Hero Section */}
      <section className="py-24 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text">
            AI Automations
          </span>{" "}
          That Supercharge Your Business
        </h1>
        <p className="text-purple-200 text-lg md:text-xl mb-8">
          Automate tasks, increase efficiency, and scale operations using intelligent workflows crafted by Hexologix.
        </p>
        <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-8 py-4 text-lg rounded-full">
          Schedule Free Consultation
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">What We Automate</h2>
        <div className="grid md:grid-cols-3 gap-8">
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

      {/* CTA Section */}
      <section className="py-24 text-center bg-gradient-to-r from-fuchsia-800 via-purple-700 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Automate Smarter?</h2>
          <p className="text-lg mb-8 text-purple-100">
            Let’s build workflows that work even while you sleep.
          </p>
          <Button className="bg-white text-purple-800 px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all">
            Book a Strategy Session
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 max-w-4xl mx-auto text-left">
        <h2 className="text-3xl font-bold text-purple-300 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 text-purple-200">
          <div>
            <h4 className="text-xl font-semibold text-white mb-2">What platforms do you support?</h4>
            <p>We work with Zapier, Make, n8n, custom Node.js workflows, and any modern API-based platform.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-2">Can you automate my current CRM?</h4>
            <p>Yes, we specialize in integrating and automating HubSpot, Zoho, Salesforce, and custom CRMs.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-2">Will I get reports on what automations do?</h4>
            <p>Yes — we can build dashboards to track automation performance, errors, success rate, and value impact.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
