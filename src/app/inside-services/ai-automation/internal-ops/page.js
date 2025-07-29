"use client";

import { Settings2, FileText, Workflow, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InternalOpsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans px-6">
      {/* Hero Section */}
      <section className="py-24 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text">
            Internal Ops Automation
          </span>{" "}
          that Drives Productivity
        </h1>
        <p className="text-purple-200 text-lg md:text-xl mb-8">
          Streamline back-office workflows, employee processes, and admin tasks with intelligent automation.
        </p>
        <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-8 py-4 text-lg rounded-full">
          Book Strategy Call
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">Automation Areas We Cover</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "HR Onboarding",
              desc: "Automate new hire setup, documentation, and orientation workflows.",
              icon: <FileText className="w-8 h-8" />,
            },
            {
              title: "SOP Management",
              desc: "Trigger internal flows and approvals for tasks, audits, or compliance.",
              icon: <Workflow className="w-8 h-8" />,
            },
            {
              title: "Security Workflows",
              desc: "Control access, permissions, and IT checklists with audit-ready automation.",
              icon: <ShieldCheck className="w-8 h-8" />,
            },
            {
              title: "IT Ops Automation",
              desc: "Use rules to reset passwords, log support requests, or spin up environments.",
              icon: <Settings2 className="w-8 h-8" />,
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
