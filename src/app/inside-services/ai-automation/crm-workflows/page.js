"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow, DatabaseZap, Mail, UserCog } from "lucide-react";

export default function CrmWorkflowsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans px-6">
      {/* Hero */}
      <section className="py-24 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text">
            CRM Workflows
          </span>{" "}
          that Sell While You Sleep
        </h1>
        <p className="text-purple-200 text-lg md:text-xl mb-8">
          Automate pipelines, follow-ups, and lifecycle stages with smart logic tailored to your CRM.
        </p>
        <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-8 py-4 text-lg rounded-full">
          Book CRM Audit
        </Button>
      </section>

      {/* Workflow Features */}
      <section className="py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-300">Smart CRM Automations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Pipeline Automation",
              desc: "Move deals between stages automatically based on customer actions or dates.",
              icon: <Workflow className="w-8 h-8" />,
            },
            {
              title: "Auto-Followups",
              desc: "Send follow-up emails or assign tasks when leads go cold or become qualified.",
              icon: <Mail className="w-8 h-8" />,
            },
            {
              title: "Data Enrichment",
              desc: "Pull lead info from APIs, databases, or previous actions and update CRM in real-time.",
              icon: <DatabaseZap className="w-8 h-8" />,
            },
            {
              title: "Role-Based Actions",
              desc: "Assign leads to reps based on geography, lead score, or industry with conditional logic.",
              icon: <UserCog className="w-8 h-8" />,
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
