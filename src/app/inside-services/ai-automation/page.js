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

export default function AiAutomationsPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans m-0 p-0 overflow-x-hidden">
      {/* ✅ Fixed Top Spacing */}
      <Header />

      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto py-16 sm:py-20 md:py-28 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text">
            AI Automations
          </span>{" "}
          That Supercharge Your Business
        </h1>
        <p className="text-purple-200 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Automate tasks, increase efficiency, and scale operations using intelligent workflows crafted by Hexologix.
        </p>
        <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-4 text-lg rounded-full w-full sm:w-auto">
          Schedule Free Consultation
        </Button>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-purple-300">
          What We Automate
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6">
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
              className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-6 border border-purple-800 text-white hover:scale-[1.02] transition-transform flex flex-col h-full"
            >
              <CardHeader>
                <div className="mb-4 flex justify-center">{s.icon}</div>
                <CardTitle className="text-lg md:text-xl text-center">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm md:text-base text-center">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 text-center bg-gradient-to-r from-fuchsia-800 via-purple-700 to-black px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">Ready to Automate Smarter?</h2>
          <p className="text-base sm:text-lg mb-8 text-purple-100">
            Let’s build workflows that work even while you sleep.
          </p>
          <Button className="bg-white text-purple-800 px-6 py-4 text-lg font-semibold rounded-full w-full sm:w-auto hover:scale-105 transition-all">
            Book a Strategy Session
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-4xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 text-purple-200 w-full">
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
