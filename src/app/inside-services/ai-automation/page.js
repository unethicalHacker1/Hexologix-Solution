"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";

import {
  Brain,
  Bot,
  Database,
  TrendingUp,
  Users,
  Shield,
  Clock,
  Code,
  BarChart3,
  Workflow,
  Cpu,
  Target,
  Rocket,
  Lightbulb,
  Settings,
  ShoppingCart,
  Heart,
  Globe,
  Smartphone,
  Mail,
} from "lucide-react";

import {
  containerVariants,
  itemVariants,
  cardVariants,
} from "@/lib/animations";

/** Reusable viewport settings for all scroll-triggered animations */
const inView = { once: false, amount: 0.25, margin: "-10% 0px -10% 0px" };

/** Avoid hydration mismatch with TypeAnimation (client-only) */
const TypeAnimation = dynamic(
  () => import("react-type-animation").then((m) => m.TypeAnimation),
  {
    ssr: false,
  }
);

/* ---------------------------------- DATA ---------------------------------- */

const AI_FEATURES = [
  {
    icon: <Brain className="w-8 h-8" aria-hidden="true" />,
    title: "Intelligent Process Automation",
    description:
      "Automate complex business processes with AI-powered decision making and learning capabilities.",
    benefits: [
      "Reduces manual errors",
      "Increases efficiency",
      "24/7 operation",
    ],
  },
  {
    icon: <Bot className="w-8 h-8" aria-hidden="true" />,
    title: "AI Chatbots & Virtual Assistants",
    description:
      "Smart conversational AI that handles customer inquiries and provides instant support.",
    benefits: [
      "Instant responses",
      "Multi-language support",
      "Scalable customer service",
    ],
  },
  {
    icon: <Database className="w-8 h-8" aria-hidden="true" />,
    title: "Data Processing & Analytics",
    description:
      "Automated data extraction, processing, and analysis for actionable business insights.",
    benefits: [
      "Real-time insights",
      "Predictive analytics",
      "Automated reporting",
    ],
  },
  {
    icon: <Workflow className="w-8 h-8" aria-hidden="true" />,
    title: "Workflow Automation",
    description:
      "Streamline business workflows with intelligent routing and automated approvals.",
    benefits: [
      "Faster approvals",
      "Reduced bottlenecks",
      "Process transparency",
    ],
  },
  {
    icon: <Cpu className="w-8 h-8" aria-hidden="true" />,
    title: "Machine Learning Models",
    description:
      "Custom ML models for predictive analytics, pattern recognition, and decision support.",
    benefits: [
      "Predictive insights",
      "Pattern recognition",
      "Continuous learning",
    ],
  },
  {
    icon: <BarChart3 className="w-8 h-8" aria-hidden="true" />,
    title: "Business Intelligence",
    description:
      "AI-powered dashboards and reports that provide real-time business intelligence.",
    benefits: [
      "Real-time monitoring",
      "Custom dashboards",
      "Actionable insights",
    ],
  },
];

const USE_CASES = [
  {
    industry: "E-commerce",
    title: "Smart Inventory Management",
    description:
      "AI-powered inventory forecasting and automated reordering systems.",
    icon: <ShoppingCart className="w-6 h-6" aria-hidden="true" />,
    benefits: ["Reduced stockouts", "Optimized inventory", "Cost savings"],
  },
  {
    industry: "Healthcare",
    title: "Patient Data Processing",
    description:
      "Automated medical record processing and patient appointment scheduling.",
    icon: <Heart className="w-6 h-6" aria-hidden="true" />,
    benefits: ["Improved accuracy", "Faster processing", "Better patient care"],
  },
  {
    industry: "Finance",
    title: "Fraud Detection",
    description:
      "Real-time fraud detection and risk assessment using machine learning.",
    icon: <Shield className="w-6 h-6" aria-hidden="true" />,
    benefits: ["Real-time detection", "Reduced losses", "Enhanced security"],
  },
  {
    industry: "Manufacturing",
    title: "Predictive Maintenance",
    description:
      "AI-driven equipment monitoring and predictive maintenance scheduling.",
    icon: <Settings className="w-6 h-6" aria-hidden="true" />,
    benefits: [
      "Reduced downtime",
      "Cost optimization",
      "Extended equipment life",
    ],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description:
      "We analyze your current processes and identify automation opportunities.",
    icon: (
      <Lightbulb className="w-12 h-12 text-fuchsia-400" aria-hidden="true" />
    ),
    details: ["Process mapping", "Gap analysis", "ROI assessment"],
  },
  {
    step: "02",
    title: "AI Strategy & Design",
    description:
      "Design intelligent automation solutions tailored to your business needs.",
    icon: <Target className="w-12 h-12 text-purple-400" aria-hidden="true" />,
    details: [
      "Solution architecture",
      "AI model selection",
      "Integration planning",
    ],
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Build and rigorously test AI automation systems for reliability.",
    icon: <Code className="w-12 h-12 text-pink-400" aria-hidden="true" />,
    details: ["AI model development", "Integration", "Quality assurance"],
  },
  {
    step: "04",
    title: "Deployment & Optimization",
    description:
      "Deploy with precision and continuously optimize for maximum performance.",
    icon: <Rocket className="w-12 h-12 text-fuchsia-400" aria-hidden="true" />,
    details: [
      "Phased deployment",
      "Performance monitoring",
      "Continuous improvement",
    ],
  },
];

const BENEFITS = [
  {
    icon: <TrendingUp className="w-8 h-8" aria-hidden="true" />,
    title: "Increased Efficiency",
    description:
      "Automate repetitive tasks and boost productivity by up to 80%",
  },
  {
    icon: <Shield className="w-8 h-8" aria-hidden="true" />,
    title: "Enhanced Accuracy",
    description:
      "Reduce human errors and improve data quality with AI precision",
  },
  {
    icon: <Clock className="w-8 h-8" aria-hidden="true" />,
    title: "24/7 Operation",
    description: "AI systems work around the clock without breaks or fatigue",
  },
  {
    icon: <Users className="w-8 h-8" aria-hidden="true" />,
    title: "Scalable Solutions",
    description: "Easily scale operations without proportional cost increases",
  },
];

const RELATED_SERVICES = [
  {
    title: "Web Development",
    desc: "Next.js, WordPress & Shopify sites that convert.",
    icon: <Globe className="w-8 h-8" aria-hidden="true" />,
    features: ["Responsive Design", "SEO Optimization", "Performance Focused"],
    href: "/inside-services/web-dev",
  },
  {
    title: "App Development",
    desc: "Flutter & React Native for iOS & Android.",
    icon: <Smartphone className="w-8 h-8" aria-hidden="true" />,
    features: ["Cross-platform", "Native Performance", "App Store Ready"],
    href: "/inside-services/app-dev",
  },
  {
    title: "Email Marketing",
    desc: "Automated campaigns that drive engagement and sales.",
    icon: <Mail className="w-8 h-8" aria-hidden="true" />,
    features: ["Automation", "Analytics", "A/B Testing"],
    href: "/inside-services/email-marketing",
  },
];

/* -------------------------------- COMPONENTS ------------------------------- */

function FeatureCard({ icon, title, description, benefits }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md hover:shadow-purple-700/30 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105"
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
      <ul className="text-xs text-purple-200 space-y-1">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-fuchsia-400">•</span> {benefit}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function UseCaseCard({ industry, title, description, icon, benefits }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md hover:shadow-purple-700/30 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-fuchsia-400">{icon}</div>
        <span className="text-sm font-semibold text-purple-300">
          {industry}
        </span>
      </div>
      <h4 className="text-lg font-semibold mb-3 text-purple-200 group-hover:text-white transition-colors">
        {title}
      </h4>
      <p className="text-sm text-purple-300 mb-4 leading-relaxed">
        {description}
      </p>
      <ul className="text-xs text-purple-200 space-y-1">
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
      className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md hover:shadow-purple-700/30 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105 h-full flex flex-col items-center text-center"
    >
      <div className="mb-4 flex justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-xs font-bold text-fuchsia-400 mb-1">{step}</div>
      <h4 className="text-lg font-semibold mb-2 text-purple-200 group-hover:text-white transition-colors">
        {title}
      </h4>
      <p className="text-sm text-purple-300 mb-4 leading-relaxed">
        {description}
      </p>
      <ul className="text-xs text-purple-200 space-y-1">
        {details.map((detail, idx) => (
          <li key={idx} className="flex items-center gap-2 justify-center">
            <span className="text-fuchsia-400">•</span> {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md hover:shadow-purple-700/30 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105 h-full flex flex-col items-center text-center">
      <div className="mb-4 flex justify-center text-3xl group-hover:scale-110 group-hover:text-fuchsia-400 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="text-lg font-semibold mb-2 text-purple-200 group-hover:text-white transition-colors">
        {title}
      </h4>
      <p className="text-sm text-purple-300">{description}</p>
    </div>
  );
}

function ServiceCard({ title, desc, icon, href, features }) {
  return (
    <Link href={href} className="block h-full">
      <motion.div
        variants={cardVariants}
        className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md hover:shadow-purple-700/30 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105 h-full"
      >
        <div className="mb-4 flex justify-center text-3xl group-hover:scale-110 group-hover:text-fuchsia-400 transition-transform duration-300">
          {icon}
        </div>
        <h4 className="text-lg font-semibold mb-3 text-purple-200 group-hover:text-white transition-colors">
          {title}
        </h4>
        <p className="text-sm text-purple-300 mb-4">{desc}</p>
        <ul className="text-xs text-purple-200 space-y-1">
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

export default function AIAutomationPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative text-center px-4 sm:px-6 py-16 md:py-28 bg-gradient-to-br from-black via-[#2c003e] to-black text-white min-h-[70vh] flex items-center">
        {/* Glows (hidden on mobile for performance) */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="hidden md:block w-[800px] h-[800px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/2 -translate-x-1/2 animate-pulse" />
          <div
            className="hidden md:block w-[600px] h-[600px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-4xl mx-auto z-10 relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white"
          >
            Transform Your Business with <br />
            <span className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text inline-block">
              <TypeAnimation
                sequence={[
                  "AI-Powered Automation",
                  2000,
                  "Intelligent Workflows",
                  2000,
                  "Smart Process Optimization",
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
            className="text-base sm:text-lg text-purple-200 mb-8 px-2"
          >
            Automate complex processes, enhance decision-making, and scale your
            operations with cutting-edge AI solutions.
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

      {/* AI Features */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#1a002f] via-[#2c003e] to-black text-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="hidden md:block w-[800px] h-[800px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/2 -translate-x-1/2 animate-pulse" />
          <div
            className="hidden md:block w-[600px] h-[600px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={inView}
            className="text-3xl sm:text-5xl font-bold mb-6 text-white/90 tracking-tight"
          >
            AI Automation Solutions
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={inView}
            className="text-base sm:text-lg text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed px-2"
          >
            Leverage the power of artificial intelligence to automate complex
            processes and drive business growth.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {AI_FEATURES.map((feature, i) => (
              <motion.div key={i} variants={itemVariants}>
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-bl from-[#0d001b] via-[#1b0035] to-black relative text-white">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="hidden md:block w-[500px] h-[500px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/4 -z-10 animate-pulse" />
          <div
            className="hidden md:block w-[400px] h-[400px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 -z-10 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={inView}
            className="text-3xl sm:text-5xl font-bold mb-6 text-purple-300 tracking-tight text-center"
          >
            Industry Applications
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={inView}
            className="text-base sm:text-lg text-purple-200 mb-12 text-center max-w-2xl mx-auto leading-relaxed px-2"
          >
            Discover how AI automation transforms different industries and
            drives measurable results.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          >
            {USE_CASES.map((useCase, i) => (
              <motion.div key={i} variants={itemVariants}>
                <UseCaseCard {...useCase} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#1a002f] via-[#2c003e] to-black relative text-white">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="hidden md:block w-96 h-96 bg-purple-900/20 rounded-full blur-3xl absolute top-0 left-1/2 -translate-x-1/2 -z-10 animate-pulse" />
          <div
            className="hidden md:block w-80 h-80 bg-fuchsia-800/10 rounded-full blur-2xl absolute bottom-0 right-1/3 -z-10 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={inView}
            className="text-3xl sm:text-5xl font-bold text-purple-300 mb-6"
          >
            Our AI Implementation Process
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={inView}
            className="text-base sm:text-lg text-purple-200 mb-12 sm:mb-16 max-w-2xl mx-auto px-2"
          >
            A systematic approach to implementing AI automation that ensures
            success and delivers measurable ROI.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {PROCESS_STEPS.map((step, i) => (
              <motion.div key={i} variants={itemVariants}>
                <ProcessStepCard {...step} />
              </motion.div>
            ))}
          </motion.div>

          <div
            className="hidden lg:block absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent -z-10"
            style={{ top: "60%" }}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-gradient-to-br from-black via-[#150022] to-black text-white relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={inView}
            className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-12 text-purple-300"
          >
            Why Choose AI Automation
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {BENEFITS.map((benefit, i) => (
              <motion.div key={i} variants={itemVariants}>
                <BenefitCard {...benefit} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#1a002f] via-[#2c003e] to-black text-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="hidden md:block w-[800px] h-[800px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/2 -translate-x-1/2 animate-pulse" />
          <div
            className="hidden md:block w-[600px] h-[600px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={inView}
            className="text-3xl sm:text-5xl font-bold mb-6 text-white/90 tracking-tight"
          >
            Explore Our Other Services
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={inView}
            className="text-base sm:text-lg text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed px-2"
          >
            Discover our comprehensive suite of digital solutions to accelerate
            your business growth.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {RELATED_SERVICES.map((service, i) => (
              <motion.div key={i} variants={itemVariants}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-br from-fuchsia-800 via-purple-700 to-black text-white text-center overflow-hidden">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="hidden md:block w-[700px] h-[700px] bg-fuchsia-500/20 blur-3xl rounded-full absolute -top-48 left-1/2 -translate-x-1/2 animate-pulse" />
          <div className="hidden md:block w-[400px] h-[400px] bg-white/5 rounded-full blur-2xl absolute bottom-0 left-1/3" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent)] opacity-50" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={inView}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-8 leading-tight text-white"
          >
            Ready to Automate Your Business?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={inView}
            className="text-base sm:text-lg mb-8 sm:mb-10 text-purple-100 px-2"
          >
            Let&apos;s discuss how AI automation can transform your operations
            and drive growth.
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

      {/* Floating buttons aligned like the reference page */}
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
