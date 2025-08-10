"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Code,
  Globe,
  Palette,
  Zap,
  TrendingUp,
  Shield,
  Play,
  Rocket,
  Lightbulb,
  Monitor,
  ShoppingCart,
  Heart,
  Search,
  Eye,
  Cloud,
  Smartphone as CrossPlatform,
  Smartphone as Native,
  Smartphone as Progressive,
  Smartphone as Wearable,
} from "lucide-react";
import { useState, useEffect } from "react";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import Link from "next/link";
import {
  containerVariants,
  itemVariants,
  cardVariants,
} from "@/lib/animations";

/** Shared viewport config so sections animate cleanly while scrolling DOWN */
const inView = { once: false, amount: 0.25, margin: "-10% 0px -10% 0px" };

// App Development features
const APP_FEATURES = [
  {
    icon: <CrossPlatform className="w-8 h-8" />,
    title: "Cross-Platform Development",
    description: "Build once, deploy everywhere with Flutter and React Native.",
    benefits: ["Single codebase", "Native performance", "Faster development"],
  },
  {
    icon: <Native className="w-8 h-8" />,
    title: "Native App Development",
    description:
      "Platform-specific apps for iOS and Android with optimal performance.",
    benefits: ["Platform optimization", "Better performance", "Native features"],
  },
  {
    icon: <Progressive className="w-8 h-8" />,
    title: "Progressive Web Apps",
    description:
      "Web apps that work like native apps with offline capabilities.",
    benefits: ["Offline support", "App-like experience", "Easy updates"],
  },
  {
    icon: <Wearable className="w-8 h-8" />,
    title: "Wearable & IoT Apps",
    description: "Apps for smartwatches, fitness trackers, and IoT devices.",
    benefits: ["Health tracking", "Smart notifications", "IoT integration"],
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Integration",
    description:
      "Seamless cloud services integration for data sync and storage.",
    benefits: ["Real-time sync", "Scalable backend", "Data security"],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "App Store Optimization",
    description: "Optimize your app for better visibility and downloads.",
    benefits: ["Higher rankings", "More downloads", "Better reviews"],
  },
];

// App Types
const APP_TYPES = [
  {
    category: "Business",
    title: "Enterprise Apps",
    description:
      "Custom business applications for internal operations and customer management.",
    icon: <Monitor className="w-6 h-6" />,
    benefits: [
      "Employee productivity",
      "Customer management",
      "Process automation",
    ],
  },
  {
    category: "E-commerce",
    title: "Shopping Apps",
    description:
      "Mobile commerce apps with payment processing and inventory management.",
    icon: <ShoppingCart className="w-6 h-6" />,
    benefits: ["Secure payments", "Inventory tracking", "Customer loyalty"],
  },
  {
    category: "Health",
    title: "Healthcare Apps",
    description:
      "Medical and wellness apps for patient care and health monitoring.",
    icon: <Heart className="w-6 h-6" />,
    benefits: ["Patient monitoring", "Health tracking", "Medical records"],
  },
  {
    category: "Entertainment",
    title: "Media & Gaming",
    description:
      "Entertainment apps including streaming, gaming, and social media.",
    icon: <Play className="w-6 h-6" />,
    benefits: ["Content streaming", "Social features", "Gaming integration"],
  },
];

// Process steps
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We analyze your requirements and create a comprehensive app development plan.",
    icon: <Lightbulb className="w-12 h-12 text-fuchsia-400" />,
    details: [
      "Requirements gathering",
      "Platform selection",
      "Architecture planning",
    ],
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Create beautiful, intuitive app designs with interactive prototypes.",
    icon: <Palette className="w-12 h-12 text-purple-400" />,
    details: ["UI/UX design", "Interactive prototypes", "User testing"],
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Build your app with clean code and rigorous testing procedures.",
    icon: <Code className="w-12 h-12 text-pink-400" />,
    details: ["Clean coding", "Quality assurance", "Performance testing"],
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Deploy your app to app stores and provide ongoing support.",
    icon: <Rocket className="w-12 h-12 text-fuchsia-400" />,
    details: ["App store submission", "Post-launch support", "Updates & maintenance"],
  },
];

// Benefits
const BENEFITS = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Increased Engagement",
    description: "Mobile apps drive higher user engagement and retention",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Better User Experience",
    description: "Native app performance and intuitive mobile interfaces",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "App Store Visibility",
    description: "Reach millions of users through app store optimization",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure & Reliable",
    description: "Robust security measures and 99.9% uptime guarantee",
  },
];

// Related services
const RELATED_SERVICES = [
  {
    title: "AI Automation",
    desc: "Custom workflows for CRM, leads, and business ops.",
    icon: <Zap className="w-8 h-8" />,
    features: ["CRM Integration", "Lead Automation", "Workflow Optimization"],
    href: "/inside-services/ai-automation",
  },
  {
    title: "Web Development",
    desc: "Next.js, WordPress & Shopify sites that convert.",
    icon: <Globe className="w-8 h-8" />,
    features: ["Responsive Design", "SEO Optimization", "Performance Focused"],
    href: "/inside-services/web-dev",
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interfaces that users love.",
    icon: <Palette className="w-8 h-8" />,
    features: ["User Research", "Prototyping", "Design Systems"],
    href: "/inside-services/ui-design",
  },
];

export default function AppDevPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function FeatureCard({ icon, title, description, benefits }) {
    return (
      <motion.div
        variants={cardVariants}
        className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md hover:shadow-purple-700/30 transition-all duration-500 hover:scale-105"
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

  function AppTypeCard({ category, title, description, icon, benefits }) {
    return (
      <motion.div
        variants={cardVariants}
        className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md hover:shadow-purple-700/30 transition-all duration-500 hover:scale-105"
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
        className="group p-8 rounded-2xl border border-purple-800 bg-[#1a001f]/60 backdrop-blur-md shadow-lg hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 text-center"
      >
        <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="text-sm font-bold text-fuchsia-400 mb-2">{step}</div>
        <h4 className="text-xl font-semibold text-purple-200 mb-3 group-hover:text-white transition-colors">
          {title}
        </h4>
        <p className="text-sm text-purple-400 mb-4">{description}</p>
        <ul className="text-xs text-purple-300 space-y-1">
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
        className="group p-6 rounded-2xl border border-purple-800 bg-[#1a001f]/60 backdrop-blur-md shadow-lg hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 text-center"
      >
        <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-fuchsia-400">
          {icon}
        </div>
        <h4 className="text-lg font-semibold text-purple-200 mb-2 group-hover:text-white transition-colors">
          {title}
        </h4>
        <p className="text-sm text-purple-400">{description}</p>
      </motion.div>
    );
  }

  function ServiceCard({ title, desc, icon, href, features }) {
    return (
      <Link href={href} className="block h-full">
        <motion.div
          variants={cardVariants}
          className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md hover:shadow-purple-700/30 transition-all duration-500 hover:scale-105 h-full"
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans overflow-x-hidden">
      <div className="min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans overflow-x-hidden">
        <Header />

        {/* Hero Section */}
        <section className="relative text-center px-6 py-20 md:py-32 bg-gradient-to-br from-black via-[#2c003e] to-black text-white min-h-screen flex items-center">
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-[800px] h-[800px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/2 -translate-x-1/2 animate-pulse"></div>
            <div
              className="w-[600px] h-[600px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
          <div className="max-w-4xl mx-auto z-10 relative">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
            >
              Build Mobile Apps That <br />
              <TypeAnimation
                sequence={[
                  "Engage & Convert",
                  2000,
                  "Scale & Perform",
                  2000,
                  "Delight & Retain",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text inline-block"
              />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-purple-200 mb-8"
            >
              Native and cross-platform mobile applications that deliver
              exceptional user experiences and drive business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-3 mt-6"
            >
              <Link href="/contact#form">
                <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-3 text-sm rounded-full hover:scale-105 transition-all">
                  Get Started
                </Button>
              </Link>
              <Link href="/contact#form">
                <Button className="bg-transparent border-2 border-purple-500 text-purple-300 px-6 py-3 text-sm rounded-full hover:bg-purple-600 hover:text-white transition-all hover:scale-105">
                  Book a Call
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* App Development Features Section */}
        <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-[#1a002f] via-[#2c003e] to-black text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-[800px] h-[800px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/2 -translate-x-1/2 animate-pulse"></div>
            <div
              className="w-[600px] h-[600px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={inView}
              className="text-4xl sm:text-5xl font-bold mb-6 text-white/90 tracking-tight"
            >
              Mobile App Development Solutions
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={inView}
              className="text-lg text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              From native iOS and Android apps to cross-platform solutions, we
              build mobile applications that users love.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={inView}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {APP_FEATURES.map((feature, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* App Types Section */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-bl from-[#0d001b] via-[#1b0035] to-black relative text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-[500px] h-[500px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/4 -z-10 animate-pulse"></div>
            <div
              className="w-[400px] h-[400px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 -z-10 animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={inView}
              className="text-4xl sm:text-5xl font-bold mb-6 text-purple-300 tracking-tight text-center"
            >
              Types of Apps We Build
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={inView}
              className="text-lg text-purple-200 mb-12 text-center max-w-2xl mx-auto leading-relaxed"
            >
              Specialized mobile applications for various industries and
              business needs.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={inView}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
            >
              {APP_TYPES.map((appType, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <AppTypeCard {...appType} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-[#1a002f] via-[#2c003e] to-black relative text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-96 h-96 bg-purple-900/20 rounded-full blur-3xl absolute top-0 left-1/2 -translate-x-1/2 -z-10 animate-pulse"></div>
            <div
              className="w-80 h-80 bg-fuchsia-800/10 rounded-full blur-2xl absolute bottom-0 right-1/3 -z-10 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={inView}
              className="text-4xl sm:text-5xl font-bold text-purple-300 mb-6"
            >
              Our App Development Process
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={inView}
              className="text-lg text-purple-200 mb-16 max-w-2xl mx-auto"
            >
              A proven methodology that ensures your mobile app is built to the
              highest standards and delivers results.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={inView}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {PROCESS_STEPS.map((step, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <ProcessStepCard {...step} />
                </motion.div>
              ))}
            </motion.div>

            <div
              className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent -z-10"
              style={{ top: "60%" }}
            ></div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-6 py-24 bg-gradient-to-br from-black via-[#150022] to-black text-white relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={inView}
              className="text-4xl font-bold mb-12 text-purple-300"
            >
              Why Choose Our App Development
            </motion.h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={inView}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {BENEFITS.map((benefit, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <BenefitCard {...benefit} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-[#1a002f] via-[#2c003e] to-black text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-[800px] h-[800px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/2 -translate-x-1/2 animate-pulse"></div>
            <div
              className="w-[600px] h-[600px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={inView}
              className="text-4xl sm:text-5xl font-bold mb-6 text-white/90 tracking-tight"
            >
              Explore Our Other Services
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={inView}
              className="text-lg text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Discover our comprehensive suite of digital solutions to
              accelerate your business growth.
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

        {/* CTA Section */}
        <section className="relative py-28 px-6 bg-gradient-to-br from-fuchsia-800 via-purple-700 to-black text-white text-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="w-[700px] h-[700px] bg-fuchsia-500/20 blur-3xl rounded-full absolute -top-48 left-1/2 -translate-x-1/2 animate-pulse" />
            <div className="w-[400px] h-[400px] bg-white/5 rounded-full blur-2xl absolute bottom-0 left-1/3" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent)] opacity-50" />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={inView}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-white"
            >
              Ready to Build Your App?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={inView}
              className="text-lg mb-10 text-purple-100"
            >
              Let&apos;s discuss your app idea and create a mobile solution that
              drives results and grows your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={inView}
            >
              <Link href="/contact#form">
                <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-3 text-sm rounded-full hover:scale-105 transition-all">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
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
