"use client";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Globe,
  Code,
  Smartphone,
  Palette,
  Mail,
  MapPin,
  Zap,
  Database,
  TrendingUp,
  Users,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BarChart3,
  Workflow,
  Cpu,
  Target,
  Rocket,
  Lightbulb,
  Settings,
  Monitor,
  ShoppingCart,
  Heart,
  Smartphone as Mobile,
  Laptop,
  Search,
  Eye,
  Zap as Lightning,
  Layers,
  GitBranch,
  Cloud,
  Server,
  Wifi,
  Lock,
  Globe as World,
  Smartphone as Phone,
  Monitor as Desktop,
  Tablet,
} from "lucide-react";
import { useState, useEffect } from "react";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import Image from "next/image";
import Link from "next/link";
import { 
  containerVariants, 
  itemVariants, 
  cardVariants, 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight,
  commonAnimationProps 
} from "@/lib/animations";

// Web Development features
const WEB_FEATURES = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom Web Applications",
    description: "Tailored web applications built with modern frameworks and best practices.",
    benefits: ["Scalable architecture", "Performance optimized", "SEO friendly"]
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "E-commerce Solutions",
    description: "Complete online stores with payment processing and inventory management.",
    benefits: ["Secure payments", "Inventory tracking", "Analytics dashboard"]
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO Optimization",
    description: "Search engine optimization to improve visibility and drive organic traffic.",
    benefits: ["Higher rankings", "Increased traffic", "Better conversions"]
  },
  {
    icon: <Mobile className="w-8 h-8" />,
    title: "Responsive Design",
    description: "Websites that work perfectly on all devices and screen sizes.",
    benefits: ["Mobile-first", "Cross-browser", "Touch optimized"]
  },
  {
    icon: <Lightning className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Lightning-fast websites with optimized loading times and user experience.",
    benefits: ["Fast loading", "Core Web Vitals", "User retention"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security & Maintenance",
    description: "Robust security measures and ongoing maintenance for your website.",
    benefits: ["SSL certificates", "Regular updates", "Backup systems"]
  }
];

// Technologies
const TECHNOLOGIES = [
  {
    category: "Frontend",
    title: "React & Next.js",
    description: "Modern JavaScript frameworks for dynamic, fast web applications.",
    icon: <Code className="w-6 h-6" />,
    benefits: ["Component-based", "Server-side rendering", "Fast performance"]
  },
  {
    category: "CMS",
    title: "WordPress & Shopify",
    description: "Popular content management systems for easy website management.",
    icon: <Globe className="w-6 h-6" />,
    benefits: ["User-friendly", "Plugin ecosystem", "E-commerce ready"]
  },
  {
    category: "Backend",
    title: "Node.js & APIs",
    description: "Robust backend solutions with RESTful APIs and database integration.",
    icon: <Server className="w-6 h-6" />,
    benefits: ["Scalable", "Real-time", "Database integration"]
  },
  {
    category: "Cloud",
    title: "AWS & Vercel",
    description: "Cloud hosting and deployment for reliable, scalable web applications.",
    icon: <Cloud className="w-6 h-6" />,
    benefits: ["Global CDN", "Auto-scaling", "99.9% uptime"]
  }
];

// Process steps
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a comprehensive development plan.",
    icon: <Lightbulb className="w-12 h-12 text-fuchsia-400" />,
    details: ["Requirements gathering", "Wireframing", "Technology selection"]
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Create beautiful, user-friendly designs with interactive prototypes.",
    icon: <Palette className="w-12 h-12 text-purple-400" />,
    details: ["UI/UX design", "Interactive prototypes", "User testing"]
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Build your website with clean code and rigorous testing procedures.",
    icon: <Code className="w-12 h-12 text-pink-400" />,
    details: ["Clean coding", "Quality assurance", "Performance testing"]
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Deploy your website and provide ongoing support and maintenance.",
    icon: <Rocket className="w-12 h-12 text-fuchsia-400" />,
    details: ["Production deployment", "SEO optimization", "Ongoing support"]
  }
];

// Benefits
const BENEFITS = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Increased Conversions",
    description: "Optimized websites that convert visitors into customers"
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Better User Experience",
    description: "Intuitive designs that keep users engaged and satisfied"
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO Visibility",
    description: "Higher search rankings and increased organic traffic"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure & Reliable",
    description: "Robust security measures and 99.9% uptime guarantee"
  }
];

// Related services
const RELATED_SERVICES = [
  { 
    title: "AI Automation", 
    desc: "Custom workflows for CRM, leads, and business ops.", 
    icon: <Zap className="w-8 h-8" />,
    features: ["CRM Integration", "Lead Automation", "Workflow Optimization"],
    href: "/inside-services/ai-automation"
  },
  { 
    title: "App Development", 
    desc: "Flutter & React Native for iOS & Android.", 
    icon: <Smartphone className="w-8 h-8" />,
    features: ["Cross-platform", "Native Performance", "App Store Ready"],
    href: "/inside-services/app-dev"
  },
  { 
    title: "UI/UX Design", 
    desc: "Beautiful, intuitive interfaces that users love.", 
    icon: <Palette className="w-8 h-8" />,
    features: ["User Research", "Prototyping", "Design Systems"],
    href: "/inside-services/ui-design"
  }
];

export default function WebDevPage() {
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
        <h4 className="text-xl font-semibold mb-3 text-purple-200 group-hover:text-white transition-colors">{title}</h4>
        <p className="text-sm text-purple-300 mb-4 leading-relaxed">{description}</p>
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

  function TechnologyCard({ category, title, description, icon, benefits }) {
    return (
      <motion.div
        variants={cardVariants}
        className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md hover:shadow-purple-700/30 transition-all duration-500 hover:scale-105"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="text-fuchsia-400">{icon}</div>
          <span className="text-sm font-semibold text-purple-300">{category}</span>
        </div>
        <h4 className="text-lg font-semibold mb-3 text-purple-200 group-hover:text-white transition-colors">{title}</h4>
        <p className="text-sm text-purple-300 mb-4 leading-relaxed">{description}</p>
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
        <h4 className="text-xl font-semibold text-purple-200 mb-3 group-hover:text-white transition-colors">{title}</h4>
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
        <h4 className="text-lg font-semibold text-purple-200 mb-2 group-hover:text-white transition-colors">{title}</h4>
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
          <h4 className="text-lg font-semibold mb-3 text-purple-200 group-hover:text-white transition-colors">{title}</h4>
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
            <div className="w-[600px] h-[600px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="max-w-4xl mx-auto z-10 relative">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
            >
              Build Websites That <br />
              <TypeAnimation
                sequence={[
                  "Convert & Scale",
                  2000,
                  "Rank & Perform",
                  2000,
                  "Engage & Delight",
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
              Modern, responsive websites built with cutting-edge technologies that drive results and grow your business.
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

        {/* Web Development Features Section */}
        <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-[#1a002f] via-[#2c003e] to-black text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-[800px] h-[800px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/2 -translate-x-1/2 animate-pulse"></div>
            <div className="w-[600px] h-[600px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-4xl sm:text-5xl font-bold mb-6 text-white/90 tracking-tight"
            >
              Web Development Solutions
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-lg text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              From simple websites to complex web applications, we build digital solutions that drive business growth.
            </motion.p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {WEB_FEATURES.map((feature, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-bl from-[#0d001b] via-[#1b0035] to-black relative text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-[500px] h-[500px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/4 -z-10 animate-pulse"></div>
            <div className="w-[400px] h-[400px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 -z-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-4xl sm:text-5xl font-bold mb-6 text-purple-300 tracking-tight text-center"
            >
              Technologies We Use
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-lg text-purple-200 mb-12 text-center max-w-2xl mx-auto leading-relaxed"
            >
              Cutting-edge technologies and frameworks to build fast, scalable, and maintainable web solutions.
            </motion.p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
            >
              {TECHNOLOGIES.map((tech, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <TechnologyCard {...tech} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-[#1a002f] via-[#2c003e] to-black relative text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-96 h-96 bg-purple-900/20 rounded-full blur-3xl absolute top-0 left-1/2 -translate-x-1/2 -z-10 animate-pulse"></div>
            <div className="w-80 h-80 bg-fuchsia-800/10 rounded-full blur-2xl absolute bottom-0 right-1/3 -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl sm:text-5xl font-bold text-purple-300 mb-6"
            >
              Our Development Process
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-lg text-purple-200 mb-16 max-w-2xl mx-auto"
            >
              A proven methodology that ensures your website is built to the highest standards and delivers results.
            </motion.p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {PROCESS_STEPS.map((step, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <ProcessStepCard {...step} />
                </motion.div>
              ))}
            </motion.div>

            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent -z-10" style={{ top: '60%' }}></div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-6 py-24 bg-gradient-to-br from-black via-[#150022] to-black text-white relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl font-bold mb-12 text-purple-300"
            >
              Why Choose Our Web Development
            </motion.h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
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
            <div className="w-[600px] h-[600px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-4xl sm:text-5xl font-bold mb-6 text-white/90 tracking-tight"
            >
              Explore Our Other Services
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-lg text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Discover our comprehensive suite of digital solutions to accelerate your business growth.
            </motion.p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
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
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-white"
            >
              Ready to Build Your Website?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-lg mb-10 text-purple-100"
            >
              Let&apos;s discuss your project and create a website that drives results and grows your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
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
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 transform hover:scale-110 hover:shadow-purple-500/50 border border-purple-400/20 backdrop-blur-sm"
          aria-label="Back to top"
          style={{
            boxShadow: '0 10px 25px -5px rgba(147, 51, 234, 0.3), 0 4px 6px -2px rgba(147, 51, 234, 0.1)'
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </main>
  );
}
