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
  Cloud,
  Code,
  Globe,
  Palette,
  MapPin,
  Zap,
  TrendingUp,
  Shield,
  Rocket,
  Lightbulb,
  Search,
  Eye,
  Cloud as AWS,
  Cloud as Azure,
  Cloud as Google,
  Cloud as Migration,
  Cloud as Security,
  Cloud as DevOps,
  Cloud as Monitoring,
  Cloud as Backup,
} from "lucide-react";

import {
  containerVariants,
  itemVariants,
  cardVariants,
} from "@/lib/animations";

/** Reusable viewport settings for scroll-triggered animations */
const inView = { once: false, amount: 0, margin: "-10% 0px -10% 0px" };

/** Avoid hydration mismatch with TypeAnimation (client-only) */
const TypeAnimation = dynamic(
  () => import("react-type-animation").then((m) => m.TypeAnimation),
  { ssr: false }
);

/* ---------------------------------- DATA ---------------------------------- */

const CLOUD_FEATURES = [
  {
    icon: <Migration className="w-8 h-8" aria-hidden="true" />,
    title: "Cloud Migration",
    description:
      "Seamless migration of applications and data to cloud platforms.",
    benefits: ["Zero downtime", "Data integrity", "Performance optimization"],
  },
  {
    icon: <Security className="w-8 h-8" aria-hidden="true" />,
    title: "Cloud Security",
    description: "Comprehensive security solutions for cloud infrastructure.",
    benefits: ["Identity management", "Data encryption", "Compliance"],
  },
  {
    icon: <DevOps className="w-8 h-8" aria-hidden="true" />,
    title: "DevOps & CI/CD",
    description: "Automated deployment and continuous integration pipelines.",
    benefits: ["Automated testing", "Deployment automation", "Monitoring"],
  },
  {
    icon: <Monitoring className="w-8 h-8" aria-hidden="true" />,
    title: "Cloud Monitoring",
    description: "Real-time monitoring and alerting for cloud resources.",
    benefits: ["Performance tracking", "Cost optimization", "Alert management"],
  },
  {
    icon: <Backup className="w-8 h-8" aria-hidden="true" />,
    title: "Backup & Recovery",
    description: "Reliable backup solutions and disaster recovery planning.",
    benefits: ["Automated backups", "Disaster recovery", "Data protection"],
  },
  {
    icon: <AWS className="w-8 h-8" aria-hidden="true" />,
    title: "Multi-Cloud Strategy",
    description: "Optimized multi-cloud solutions for maximum flexibility.",
    benefits: ["Vendor diversity", "Cost optimization", "High availability"],
  },
];

const CLOUD_PLATFORMS = [
  {
    category: "AWS",
    title: "Amazon Web Services",
    description:
      "Comprehensive AWS solutions for scalable cloud infrastructure.",
    icon: <AWS className="w-6 h-6" aria-hidden="true" />,
    benefits: ["EC2 instances", "S3 storage", "Lambda functions"],
  },
  {
    category: "Azure",
    title: "Microsoft Azure",
    description: "Enterprise-grade cloud solutions with Microsoft integration.",
    icon: <Azure className="w-6 h-6" aria-hidden="true" />,
    benefits: ["Virtual machines", "Azure SQL", "Functions"],
  },
  {
    category: "Google Cloud",
    title: "Google Cloud Platform",
    description:
      "Advanced cloud services with AI and machine learning capabilities.",
    icon: <Google className="w-6 h-6" aria-hidden="true" />,
    benefits: ["Compute Engine", "BigQuery", "AI/ML services"],
  },
  {
    category: "Hybrid",
    title: "Hybrid Cloud Solutions",
    description:
      "Flexible hybrid cloud deployments combining on-premise and cloud.",
    icon: <Cloud className="w-6 h-6" aria-hidden="true" />,
    benefits: ["Flexibility", "Cost control", "Security compliance"],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Assessment & Planning",
    description:
      "We assess your current infrastructure and plan the cloud migration strategy.",
    icon: (
      <Lightbulb className="w-12 h-12 text-fuchsia-400" aria-hidden="true" />
    ),
    details: ["Infrastructure audit", "Migration planning", "Cost analysis"],
  },
  {
    step: "02",
    title: "Architecture Design",
    description:
      "Design scalable and secure cloud architecture for your applications.",
    icon: <Palette className="w-12 h-12 text-purple-400" aria-hidden="true" />,
    details: ["Cloud architecture", "Security design", "Scalability planning"],
  },
  {
    step: "03",
    title: "Migration & Deployment",
    description:
      "Execute the migration with minimal downtime and maximum efficiency.",
    icon: <Code className="w-12 h-12 text-pink-400" aria-hidden="true" />,
    details: ["Application migration", "Data migration", "Testing"],
  },
  {
    step: "04",
    title: "Optimization & Support",
    description:
      "Optimize performance and provide ongoing cloud management support.",
    icon: <Rocket className="w-12 h-12 text-fuchsia-400" aria-hidden="true" />,
    details: [
      "Performance optimization",
      "Cost optimization",
      "Ongoing support",
    ],
  },
];

const BENEFITS = [
  {
    icon: <TrendingUp className="w-8 h-8" aria-hidden="true" />,
    title: "Scalability",
    description: "Scale resources up or down based on demand",
  },
  {
    icon: <Eye className="w-8 h-8" aria-hidden="true" />,
    title: "Cost Efficiency",
    description: "Pay only for the resources you use",
  },
  {
    icon: <Search className="w-8 h-8" aria-hidden="true" />,
    title: "High Availability",
    description: "99.9% uptime with redundant infrastructure",
  },
  {
    icon: <Shield className="w-8 h-8" aria-hidden="true" />,
    title: "Enhanced Security",
    description: "Enterprise-grade security and compliance",
  },
];

const RELATED_SERVICES = [
  {
    title: "AI Automation",
    desc: "Custom workflows for CRM, leads, and business ops.",
    icon: <Zap className="w-8 h-8" aria-hidden="true" />,
    features: ["CRM Integration", "Lead Automation", "Workflow Optimization"],
    href: "/inside-services/AI-Automation",
  },
  {
    title: "Web Development",
    desc: "Next.js, WordPress & Shopify sites that convert.",
    icon: <Globe className="w-8 h-8" aria-hidden="true" />,
    features: ["Responsive Design", "SEO Optimization", "Performance Focused"],
    href: "/inside-services/WebDevelopment",
  },
  {
    title: "GIS Services",
    desc: "Advanced mapping and spatial analysis solutions.",
    icon: <MapPin className="w-8 h-8" aria-hidden="true" />,
    features: ["Digital Mapping", "Spatial Analysis", "Data Visualization"],
    href: "/inside-services/GIS",
  },
];

/* -------------------------------- COMPONENTS ------------------------------- */

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

function PlatformCard({ category, title, description, icon, benefits }) {
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
    <div className="group h-full flex flex-col p-6 rounded-2xl border border-purple-800 bg-[#1a001f]/60 backdrop-blur-md shadow-lg transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105 text-center">
      <div className="mb-4 flex justify-center text-3xl group-hover:scale-110 group-hover:text-fuchsia-400 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-purple-200 mb-2 group-hover:text-white transition-colors">
        {title}
      </h4>
      <p className="mt-auto text-sm text-purple-400">{description}</p>
    </div>
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

export default function CloudComputingPage() {
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
      <section className="relative overflow-hidden text-center px-4 sm:px-6 py-16 md:py-28 bg-gradient-to-br from-black via-[#2c003e] to-black text-white min-h-[70vh] flex items-center">
        {/* Glows (hidden on mobile for performance) */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
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
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight break-words"
          >
            Cloud Computing That <br />
            <span className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text inline-block">
              <TypeAnimation
                sequence={[
                  "Scales & Performs",
                  2000,
                  "Secures & Optimizes",
                  2000,
                  "Transforms & Grows",
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
            Scalable cloud infrastructure solutions that drive performance,
            security, and business growth.
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

      {/* Cloud Computing Features */}
      <section className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#1a002f] via-[#2c003e] to-black text-white">
        <div className="max-w-7xl mx-auto text-center relative z-10 min-w-0 break-words">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={inView}
            className="text-3xl sm:text-5xl font-bold mb-6 text-white/90 tracking-tight break-words"
          >
            Cloud Computing Solutions
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={inView}
            className="text-base sm:text-lg text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed px-2"
          >
            Comprehensive cloud solutions that optimize performance, reduce
            costs, and enhance security.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          >
            {CLOUD_FEATURES.map((feature, i) => (
              <motion.div key={i} variants={itemVariants} className="h-full">
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-bl from-[#0d001b] via-[#1b0035] to-black relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto relative z-10 min-w-0 break-words">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={inView}
            className="text-3xl sm:text-5xl font-bold mb-6 text-purple-300 tracking-tight text-center break-words"
          >
            Cloud Platforms
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={inView}
            className="text-base sm:text-lg text-purple-200 mb-12 text-center max-w-2xl mx-auto leading-relaxed px-2"
          >
            Expert solutions across all major cloud platforms for maximum
            flexibility and optimization.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr"
          >
            {CLOUD_PLATFORMS.map((platform, i) => (
              <motion.div key={i} variants={itemVariants} className="h-full">
                <PlatformCard {...platform} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#1a002f] via-[#2c003e] to-black relative overflow-hidden text-white">
        <div className="max-w-6xl mx-auto text-center relative z-10 min-w-0 break-words">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={inView}
            className="text-3xl sm:text-5xl font-bold text-purple-300 mb-6 leading-tight break-words"
          >
            Our Cloud Migration Process
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={inView}
            className="text-base sm:text-lg text-purple-200 mb-12 sm:mb-16 max-w-2xl mx-auto px-2"
          >
            A proven methodology that ensures smooth cloud migration with
            minimal disruption and maximum benefits.
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
            className="hidden lg:block absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent -z-10"
            style={{ top: "60%" }}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-gradient-to-br from-black via-[#150022] to-black text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center min-w-0 break-words">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={inView}
            className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-12 text-purple-300 break-words"
          >
            Why Choose Our Cloud Computing
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#1a002f] via-[#2c003e] to-black text-white overflow-hidden">
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
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
      <section className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-br from-fuchsia-800 via-purple-700 to-black text-white text-center">
        <div className="max-w-4xl mx-auto relative z-10 min-w-0 break-words">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={inView}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-8 leading-tight text-white break-words"
          >
            Ready to Scale in the Cloud?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={inView}
            className="text-base sm:text-lg mb-8 sm:mb-10 text-purple-100 px-2"
          >
            Let&apos;s discuss your cloud strategy and create scalable
            infrastructure that drives business growth.
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
