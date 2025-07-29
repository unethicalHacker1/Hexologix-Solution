"use client";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Cloud,
  Server,
  ShieldCheck,
  Rocket,
  Cog,
  Workflow,
} from "lucide-react";
import React, { useEffect, useState } from "react";

export default function CloudComputingPage() {
  const gradientText = "Cloud Computing";
  const restText = " That Power Scalability";
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
          Scale your business with secure, high-availability cloud and DevOps
          solutions on AWS, Azure, GCP, or custom stacks.
        </p>
        <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-5 py-3 rounded-full w-full sm:w-auto max-w-xs">
          Request Cloud Assessment
        </Button>
      </section>
      <section className="w-full max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-purple-300">
          Our Cloud Capabilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <Cloud className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              Cloud Migration
            </CardTitle>
            <CardContent className="text-center text-sm">
              Move from on-premise to cloud with zero data loss and minimal
              downtime.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <Server className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              DevOps Automation
            </CardTitle>
            <CardContent className="text-center text-sm">
              CI/CD, monitoring, and auto-scaling using best-in-class pipelines.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <Workflow className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              Hybrid & Multi-Cloud
            </CardTitle>
            <CardContent className="text-center text-sm">
              Deploy across AWS, Azure, GCP, and on-prem simultaneously.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <ShieldCheck className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              Security & Compliance
            </CardTitle>
            <CardContent className="text-center text-sm">
              Cloud security audits, penetration testing, and compliance
              readiness.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <Rocket className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              Performance Tuning
            </CardTitle>
            <CardContent className="text-center text-sm">
              Optimize workloads for speed, reliability, and cost efficiency.
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center">
              <Cog className="w-8 h-8" />
            </CardHeader>
            <CardTitle className="text-center text-lg">
              Managed Services
            </CardTitle>
            <CardContent className="text-center text-sm">
              Ongoing support, backups, and upgrades with 24/7 monitoring.
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="w-full py-16 text-center bg-gradient-to-r from-fuchsia-800 via-purple-700 to-black px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Need Cloud Help?</h2>
          <p className="text-base mb-6 text-purple-100">
            Schedule a discovery call with our cloud architects.
          </p>
          <Button className="bg-white text-purple-800 px-5 py-3 font-semibold rounded-full hover:scale-105">
            Book Consultation
          </Button>
        </div>
      </section>
      <section className="max-w-2xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-purple-300 mb-4 text-center">
          FAQs
        </h2>
        <div className="space-y-4 text-purple-200">
          <div>
            <h4 className="text-lg font-semibold text-white">
              Which cloud platforms do you support?
            </h4>
            <p>
              We work with AWS, Azure, Google Cloud, DigitalOcean, and hybrid
              clouds.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">
              Do you offer managed cloud services?
            </h4>
            <p>
              Yes, we handle everything from deployment to upgrades and
              security.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">
              How secure is my data?
            </h4>
            <p>
              All workloads are secured with enterprise best practices and
              compliance controls.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
