"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";

import {
  Code,
  Globe,
  Zap,
  Database,
  TrendingUp,
  Shield,
  BarChart3,
  Rocket,
  Lightbulb,
  Search,
  Eye,
  Cloud,
  Briefcase,
  Users,
  ShoppingCart,
  Headphones,
  Link as LinkIcon,
} from "lucide-react";

import {
  containerVariants,
  itemVariants,
  cardVariants,
} from "@/lib/animations";

/** Shared viewport config for on-scroll animations */
const inView = { once: false, amount: 0, margin: "-10% 0px -10% 0px" };

/** Avoid hydration mismatch with TypeAnimation (client-only) */
const TypeAnimation = dynamic(
  () => import("react-type-animation").then((m) => m.TypeAnimation),
  { ssr: false }
);

/* ---------------------------------- DATA ---------------------------------- */
/** Primary Salesforce offering buckets pulled from your service list:
 * - Salesforce Core
 * - Sales Cloud
 * - Service Cloud
 * - Experience Cloud
 * - Multi-Cloud Integration with Salesforce Core
 * - B2C CRM Sync
 * - Order Management Connector
 */

const SF_FEATURES = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Salesforce Core",
    description:
      "Org setup, security model, profiles/roles, custom objects, and scalable data architecture.",
    benefits: ["Org & security setup", "Custom objects & fields", "Automation basics"],
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Sales Cloud",
    description:
      "Lead-to-opportunity pipelines, forecasting, and product/pricebook configuration that accelerates revenue.",
    benefits: ["Leads & opportunities", "Forecasting", "Products/quotes"],
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Service Cloud",
    description:
      "Omni-channel case management with SLAs, knowledge base, and field service for faster resolution.",
    benefits: ["Case management", "Knowledge & macros", "Field service"],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Experience Cloud",
    description:
      "Branded portals for customers and partners with secure access, self-service, and CMS content.",
    benefits: ["Customer/partner portals", "SSO & permissions", "Self-service"],
  },
  {
    icon: <LinkIcon className="w-8 h-8" />,
    title: "Multi-Cloud Integration",
    description:
      "Connect Salesforce Core with ERP, marketing tools, and data warehouses to unify your stack.",
    benefits: ["API & middleware", "Real-time sync", "Event-driven flows"],
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "B2C CRM Sync & Order Connector",
    description:
      "Two-way sync between storefronts and Salesforce for orders, customers, and service workflows.",
    benefits: ["Customer 360", "Order lifecycle", "Returns & service"],
  },
];

const SF_SOLUTIONS = [
  {
    category: "Revenue",
    title: "Pipeline & Forecasting",
    description:
      "Sales Cloud configuration for predictable pipelines, territory planning, and forecast accuracy.",
    icon: <TrendingUp className="w-6 h-6" />,
    benefits: ["Stages & SLAs", "Territories & quotes", "Forecast dashboards"],
  },
  {
    category: "Support",
    title: "Omni-Channel Service",
    description:
      "Route cases across email, chat, phone, and social, with automation and knowledge at agents’ fingertips.",
    icon: <Headphones className="w-6 h-6" />,
    benefits: ["Case routing", "Macros & KB", "CSAT tracking"],
  },
  {
    category: "Experience",
    title: "Customer/Partner Portals",
    description:
      "Experience Cloud portals for self-service, partner deal registration, and secure document sharing.",
    icon: <Globe className="w-6 h-6" />,
    benefits: ["Auth & roles", "Self-service", "Partner workflows"],
  },
  {
    category: "Commerce",
    title: "Order Management",
    description:
      "Order capture to fulfillment with status sync, cancellations/returns, and post-purchase support.",
    icon: <ShoppingCart className="w-6 h-6" />,
    benefits: ["Order sync", "RMA flows", "Service handoffs"],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Solution Design",
    description:
      "We map business goals to Salesforce capabilities and define your target architecture.",
    icon: <Lightbulb className="w-12 h-12 text-fuchsia-400" />,
    details: ["Workshops", "User stories", "Solution blueprint"],
  },
  {
    step: "02",
    title: "Data & Security Model",
    description:
      "Design scalable objects, sharing, profiles/roles, and clean data migration plans.",
    icon: <Database className="w-12 h-12 text-purple-400" />,
    details: ["Object model", "Profiles & roles", "Data migration"],
  },
  {
    step: "03",
    title: "Automation & Integrations",
    description:
      "Build flows, validation rules, and connect external systems via APIs or middleware.",
    icon: <Code className="w-12 h-12 text-pink-400" />,
    details: ["Flows & rules", "APIs & events", "Testing"],
  },
  {
    step: "04",
    title: "UAT, Go-Live & Enablement",
    description:
      "User acceptance testing, deployment, training, and hypercare for a smooth launch.",
    icon: <Rocket className="w-12 h-12 text-fuchsia-400" />,
    details: ["UAT & cutover", "Training", "Post-go-live support"],
  },
];

const BENEFITS = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Faster Time-to-Value",
    description: "Proven blueprints and accelerators shorten your launch.",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Single Customer View",
    description: "Unified data across marketing, sales, service, and orders.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Scalable Automation",
    description: "Low-code flows and best-practice guardrails.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security & Compliance",
    description: "Robust sharing, data retention, and auditability.",
  },
];

const RELATED_SERVICES = [
  {
    title: "AI Automation (Einstein + Ops)",
    desc: "Boost productivity with AI prompts, copilots, and workflow bots.",
    icon: <Zap className="w-8 h-8" />,
    features: ["Einstein prompts", "Lead scoring", "Flow bots"],
    href: "/inside-services/AI-Automation",
  },
  {
    title: "Web Development",
    desc: "Next.js storefronts, portals, and custom apps integrated with Salesforce.",
    icon: <Globe className="w-8 h-8" />,
    features: ["Headless commerce", "Auth & SSO", "DX-friendly"],
    href: "/inside-services/WebDevelopment",
  },
  {
    title: "Cloud & DevOps",
    desc: "CI/CD, backups, and environments for reliable Salesforce releases.",
    icon: <Cloud className="w-8 h-8" />,
    features: ["Pipelines", "Backups", "Monitoring"],
    href: "/inside-services/CloudComputing",
  },
];

/* ------------------------------- CARDS -------------------------------- */

function FeatureCard({ icon, title, description, benefits }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group h-full flex flex-col bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105"
    >
      <div className="mb-4 flex justify-center text-3xl group-hover:scale-110 group-hover:text-fuchsia-400 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="text-xl font-semibold mb-3 text-purple-200 group-hover:text-white transition-colors">
        {title}
      </h4>
      <p className="text-sm text-purple-300 mb-4 leading-relaxed">
        {description}
      </p>
      <ul className="mt-auto text-xs text-purple-200 space-y-1">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-fuchsia-400">•</span> {benefit}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function SolutionCard({ category, title, description, icon, benefits }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group h-full flex flex-col bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-fuchsia-400">{icon}</div>
        <span className="text-sm font-semibold text-purple-300">
          {category}
        </span>
      </div>
      <h4 className="text-lg font-semibold mb-3 text-purple-200 group-hover:text-white transition-colors">
        {title}
      </h4>
      <p className="text-sm text-purple-300 mb-4 leading-relaxed">
        {description}
      </p>
      <ul className="mt-auto text-xs text-purple-200 space-y-1">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-fuchsia-400">✓</span> {benefit}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProcessStepCard({ step, title, description, icon, details }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group h-full flex flex-col p-8 rounded-2xl border border-purple-800 bg-[#1a001f]/60 backdrop-blur-md shadow-lg transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105 text-center"
    >
      <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-sm font-bold text-fuchsia-400 mb-2">{step}</div>
      <h4 className="text-xl font-semibold text-purple-200 mb-3 group-hover:text-white transition-colors">
        {title}
      </h4>
      <p className="text-sm text-purple-400 mb-4">{description}</p>
      <ul className="mt-auto text-xs text-purple-300 space-y-1">
        {details.map((detail, idx) => (
          <li key={idx} className="flex items-center justify-center gap-2">
            <span className="text-fuchsia-400">•</span> {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group h-full flex flex-col p-6 rounded-2xl border border-purple-800 bg-[#1a001f]/60 backdrop-blur-md shadow-lg transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105 text-center"
    >
      <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-fuchsia-400">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-purple-200 mb-2 group-hover:text-white transition-colors">
        {title}
      </h4>
      <p className="mt-auto text-sm text-purple-400">{description}</p>
    </motion.div>
  );
}

function ServiceCard({ title, desc, icon, href, features }) {
  return (
    <Link href={href} className="block h-full">
      <motion.div
        variants={cardVariants}
        className="group h-full flex flex-col bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105"
      >
        <div className="mb-4 flex justify-center text-3xl group-hover:scale-110 group-hover:text-fuchsia-400 transition-transform duration-300">
          {icon}
        </div>
        <h4 className="text-lg font-semibold mb-3 text-purple-200 group-hover:text-white transition-colors">
          {title}
        </h4>
        <p className="text-sm text-purple-300 mb-4">{desc}</p>
        <ul className="mt-auto text-xs text-purple-200 space-y-1">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="text-fuchsia-400">•</span> {feature}
            </li>
          ))}
        </ul>
      </motion.div>
    </Link>
  );
}

/* --------------------------------- PAGE ---------------------------------- */

export default function SalesforcePage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen overflow-x-clip bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden text-center px-6 py-20 md:py-32 bg-gradient-to-br from-black via-[#2c003e] to-black text-white min-h-[70vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="hidden md:block w-[800px] h-[800px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/2 -translate-x-1/2 animate-pulse" />
          <div
            className="hidden md:block w-[600px] h-[600px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="max-w-4xl mx-auto z-10 relative min-w-0 break-words">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white break-words"
          >
            Salesforce Services That <br />
            <span className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text inline-block">
              <TypeAnimation
                sequence={[
                  "Close Deals Faster",
                  2000,
                  "Delight Every Customer",
                  2000,
                  "Unify Your Stack",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-purple-200 mb-8"
          >
            Implement, integrate, and scale Salesforce to power sales, service,
            experiences, and order operations with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-3 mt-6"
          >
            <Link href="/contact#form">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-3 text-sm rounded-full hover:scale-105 transition-all">
                Get Started
              </Button>
            </Link>
            <Link href="/contact#form">
              <Button className="w-full sm:w-auto bg-transparent border-2 border-purple-500 text-purple-300 px-6 py-3 text-sm rounded-full hover:bg-purple-600 hover:text-white transition-all hover:scale-105">
                Book a Call
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Salesforce Feature Stack */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 bg-gradient-to-br from-[#1a002f] via-[#2c003e] to-black text-white">
        <div className="max-w-7xl mx-auto text-center relative z-10 min-w-0 break-words">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={inView}
            className="text-3xl sm:text-5xl font-bold mb-6 text-white/90 tracking-tight break-words"
          >
            Salesforce Services & Solutions
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={inView}
            className="text-base sm:text-lg text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            From core setup to multi-cloud integrations and order orchestration,
            we tailor Salesforce to your business.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          >
            {SF_FEATURES.map((feature, i) => (
              <motion.div key={i} variants={itemVariants} className="h-full">
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions by Outcome */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-bl from-[#0d001b] via-[#1b0035] to-black relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto relative z-10 min-w-0 break-words">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={inView}
            className="text-3xl sm:text-5xl font-bold mb-6 text-purple-300 tracking-tight text-center break-words"
          >
            What We Deliver with Salesforce
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={inView}
            className="text-base sm:text-lg text-purple-200 mb-12 text-center max-w-2xl mx-auto leading-relaxed"
          >
            Practical, outcome-driven implementations for revenue, service,
            experiences, and commerce ops.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr"
          >
            {SF_SOLUTIONS.map((solution, i) => (
              <motion.div key={i} variants={itemVariants} className="h-full">
                <SolutionCard {...solution} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1a002f] via-[#2c003e] to-black relative overflow-hidden text-white">
        <div className="max-w-6xl mx-auto text-center relative z-10 min-w-0 break-words">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={inView}
            className="text-3xl sm:text-5xl font-bold text-purple-300 mb-6 break-words"
          >
            Our Salesforce Delivery Process
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={inView}
            className="text-base sm:text-lg text-purple-200 mb-12 sm:mb-16 max-w-2xl mx-auto"
          >
            Clear phases, measurable outcomes, and enablement baked in from day
            one.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-fr"
          >
            {PROCESS_STEPS.map((step, i) => (
              <motion.div key={i} variants={itemVariants} className="h-full">
                <ProcessStepCard {...step} />
              </motion.div>
            ))}
          </motion.div>

          <div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent -z-10"
            style={{ top: "60%" }}
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-24 bg-gradient-to-br from-black via-[#150022] to-black text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center min-w-0 break-words">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={inView}
            className="text-3xl sm:text-5xl font-bold mb-12 text-purple-300 break-words"
          >
            Why Choose Our Salesforce Team
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-fr"
          >
            {BENEFITS.map((benefit, i) => (
              <motion.div key={i} variants={itemVariants} className="h-full">
                <BenefitCard {...benefit} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-[#1a002f] via-[#2c003e] to-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10 min-w-0 break-words">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={inView}
            className="text-3xl sm:text-5xl font-bold mb-6 text-white/90 tracking-tight break-words"
          >
            Explore Our Other Services
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={inView}
            className="text-base sm:text-lg text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Extend Salesforce with AI, modern web experiences, and reliable
            cloud/devops.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
          >
            {RELATED_SERVICES.map((service, i) => (
              <motion.div key={i} variants={itemVariants} className="h-full">
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 px-6 bg-gradient-to-br from-fuchsia-800 via-purple-700 to-black text-white text-center">
        <div className="max-w-4xl mx-auto relative z-10 min-w-0 break-words">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={inView}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-white break-words"
          >
            Ready to Scale with Salesforce?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={inView}
            className="text-base sm:text-lg mb-10 text-purple-100"
          >
            Let’s design your roadmap and go live with a secure, scalable
            implementation that your team loves.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={inView}
          >
            <Link href="/contact#form">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-3 text-sm rounded-full hover:scale-105 transition-all">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Floating buttons */}
      <WhatsAppButton />

      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 transform hover:scale-110 hover:shadow-purple-500/50 border border-purple-400/20 backdrop-blur-sm"
          aria-label="Back to top"
          style={{
            boxShadow:
              "0 10px 25px -5px rgba(147, 51, 234, 0.3), 0 4px 6px -2px rgba(147, 51, 234, 0.1)",
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </main>
  );
}
