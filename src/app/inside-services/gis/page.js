"use client";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, Globe, Workflow, ShieldCheck, BarChart, Cog } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function GISPage() {
  const gradientText = "GIS Solutions";
  const restText = " for Smart Decisions";
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
          Unlock spatial insights, mapping, and advanced analysis for better business and environmental decisions.
        </p>
        <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-5 py-3 rounded-full w-full sm:w-auto max-w-xs">
          Schedule GIS Demo
        </Button>
      </section>
      <section className="w-full max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-purple-300">Our GIS Capabilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center"><Map className="w-8 h-8" /></CardHeader>
            <CardTitle className="text-center text-lg">Mapping & Visualization</CardTitle>
            <CardContent className="text-center text-sm">Stunning interactive maps for assets, trends, and changes.</CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center"><Globe className="w-8 h-8" /></CardHeader>
            <CardTitle className="text-center text-lg">Spatial Analysis</CardTitle>
            <CardContent className="text-center text-sm">Find patterns, hotspots, and relationships in your data.</CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center"><Workflow className="w-8 h-8" /></CardHeader>
            <CardTitle className="text-center text-lg">Automated Workflows</CardTitle>
            <CardContent className="text-center text-sm">Automate data collection, processing, and reporting with Python, QGIS, and ArcGIS.</CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center"><BarChart className="w-8 h-8" /></CardHeader>
            <CardTitle className="text-center text-lg">Data Integration</CardTitle>
            <CardContent className="text-center text-sm">Combine GIS with IoT, remote sensing, and business systems.</CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center"><ShieldCheck className="w-8 h-8" /></CardHeader>
            <CardTitle className="text-center text-lg">Accuracy & Security</CardTitle>
            <CardContent className="text-center text-sm">Robust quality checks, access controls, and compliance.</CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 border border-purple-800 text-white">
            <CardHeader className="flex justify-center"><Cog className="w-8 h-8" /></CardHeader>
            <CardTitle className="text-center text-lg">Custom Solutions</CardTitle>
            <CardContent className="text-center text-sm">Tailored GIS apps, dashboards, and plugins for any sector.</CardContent>
          </Card>
        </div>
      </section>
      <section className="w-full py-16 text-center bg-gradient-to-r from-fuchsia-800 via-purple-700 to-black px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Need Powerful Location Insights?</h2>
          <p className="text-base mb-6 text-purple-100">
            Our GIS team is ready to tackle your mapping and analytics challenges.
          </p>
          <Button className="bg-white text-purple-800 px-5 py-3 font-semibold rounded-full hover:scale-105">
            Book a GIS Consultation
          </Button>
        </div>
      </section>
      <section className="max-w-2xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-purple-300 mb-4 text-center">FAQs</h2>
        <div className="space-y-4 text-purple-200">
          <div>
            <h4 className="text-lg font-semibold text-white">Which GIS tools do you use?</h4>
            <p>We work with QGIS, ArcGIS, Python, remote sensing software, and custom solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Can you build custom GIS dashboards?</h4>
            <p>Absolutely! We create interactive dashboards for any use case or device.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Do you offer training or support?</h4>
            <p>Yes — we provide user training, documentation, and full technical support.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
