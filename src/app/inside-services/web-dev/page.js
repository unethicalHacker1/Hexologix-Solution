"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Globe,
  Code,
  Smartphone,
  Zap,
  Palette,
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
  Search,
  Lock,
  Wifi,
} from "lucide-react";
import { useState, useEffect } from "react";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import CTAButton from "@/components/ui/CTAButton";
import { 
  containerVariants, 
  itemVariants, 
  cardVariants, 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight,
  commonAnimationProps 
} from "@/lib/animations";

// Web Development services
const WEB_SERVICES = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Custom Website Development",
    description: "Tailored websites built with modern technologies and best practices for optimal performance.",
    benefits: ["Responsive design", "SEO optimized", "Fast loading"]
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-commerce Solutions",
    description: "Complete online stores with payment processing, inventory management, and customer features.",
    benefits: ["Secure payments", "Inventory tracking", "Customer management"]
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Applications",
    description: "Complex web applications with advanced functionality and user management systems.",
    benefits: ["User authentication", "Real-time features", "Scalable architecture"]
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO & Performance",
    description: "Search engine optimization and performance optimization for maximum visibility and speed.",
    benefits: ["Higher rankings", "Faster loading", "Better UX"]
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Security & Maintenance",
    description: "Ongoing security updates, maintenance, and support to keep your website secure and up-to-date.",
    benefits: ["Regular updates", "Security monitoring", "24/7 support"]
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "API Development",
    description: "Custom API development for seamless integration with third-party services and applications.",
    benefits: ["RESTful APIs", "Documentation", "Integration support"]
  }
];

// Technologies
const TECHNOLOGIES = [
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "Next.js", category: "Framework", icon: "▲" },
  { name: "Node.js", category: "Backend", icon: "🟢" },
  { name: "TypeScript", category: "Language", icon: "📘" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "AWS", category: "Cloud", icon: "☁️" },
  { name: "Docker", category: "DevOps", icon: "🐳" }
];

// Process steps
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a detailed project plan and architecture.",
    icon: <Lightbulb className="w-8 h-8" />,
    details: ["Requirements gathering", "Technical planning", "Timeline creation"]
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Create wireframes, mockups, and interactive prototypes for your approval.",
    icon: <Palette className="w-8 h-8" />,
    details: ["UI/UX design", "Wireframing", "Prototyping"]
  },
  {
    step: "03",
    title: "Development",
    description: "Build your website using modern technologies and best practices.",
    icon: <Code className="w-8 h-8" />,
    details: ["Frontend development", "Backend development", "Database setup"]
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Rigorous testing and deployment to ensure everything works perfectly.",
    icon: <Rocket className="w-8 h-8" />,
    details: ["Quality assurance", "Performance testing", "Deployment"]
  }
];

// Benefits
const BENEFITS = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Increased Conversions",
    description: "Optimized websites that convert visitors into customers and drive business growth."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enhanced Security",
    description: "Robust security measures to protect your website and customer data."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Faster Performance",
    description: "Lightning-fast websites that provide excellent user experience and SEO benefits."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Better User Experience",
    description: "Intuitive and engaging user interfaces that keep visitors coming back."
  }
];

// Project types
const PROJECT_TYPES = [
  {
    type: "Corporate Websites",
    title: "Professional Business Sites",
    description: "Modern, professional websites that represent your brand and drive business growth.",
    icon: <Globe className="w-6 h-6" />,
    features: ["Brand-focused design", "Lead generation", "Content management"]
  },
  {
    type: "E-commerce Platforms",
    title: "Online Stores",
    description: "Complete e-commerce solutions with payment processing and inventory management.",
    icon: <ShoppingCart className="w-6 h-6" />,
    features: ["Payment integration", "Inventory management", "Order tracking"]
  },
  {
    type: "Web Applications",
    title: "Custom Applications",
    description: "Complex web applications with advanced functionality and user management.",
    icon: <Code className="w-6 h-6" />,
    features: ["User authentication", "Real-time features", "API integration"]
  },
  {
    type: "Portfolio Sites",
    title: "Creative Portfolios",
    description: "Stunning portfolio websites that showcase your work and attract clients.",
    icon: <Palette className="w-6 h-6" />,
    features: ["Showcase galleries", "Contact forms", "Social integration"]
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

  function ServiceCard({ icon, title, description, benefits }) {
    return (
      <motion.div
        variants={cardVariants}
        className="group bg-white/10 backdrop-blur-lg p-6 border border-white/20 text-white shadow-xl hover:shadow-fuchsia-700/30 hover:border-fuchsia-400 transition-all duration-300 rounded-2xl"
      >
        <div className="mb-4 flex justify-center text-3xl group-hover:scale-110 group-hover:text-fuchsia-400 transition-transform duration-300 drop-shadow-lg">
          {icon}
        </div>
        <h4 className="text-lg font-bold mb-3 tracking-tight text-white/90">{title}</h4>
        <p className="text-sm text-purple-100 mb-4">{description}</p>
        <ul className="space-y-2">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-purple-200">
              <CheckCircle className="w-3 h-3 text-fuchsia-400" />
              {benefit}
            </li>
          ))}
        </ul>
      </motion.div>
    );
  }

  function ProjectTypeCard({ type, title, description, icon, features }) {
    return (
      <motion.div
        variants={cardVariants}
        className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md hover:shadow-purple-700/30 transition-all duration-500 hover:scale-105"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="text-fuchsia-400 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <span className="text-sm font-medium text-fuchsia-400 bg-fuchsia-400/10 px-2 py-1 rounded-full">
            {type}
          </span>
        </div>
        <h4 className="text-lg font-semibold mb-2 text-purple-200 group-hover:text-white transition-colors">
          {title}
        </h4>
        <p className="text-sm text-purple-300 mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-1">
          {features.map((feature, idx) => (
            <li key={idx} className="text-xs text-purple-200 flex items-center gap-2">
              <span className="text-fuchsia-400">•</span>
              {feature}
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
        className="group p-6 rounded-2xl border border-purple-800 bg-[#1a001f]/60 backdrop-blur-md shadow-lg hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-fuchsia-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {step}
          </div>
          <div className="text-fuchsia-400 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
        <h4 className="text-lg font-semibold text-purple-200 mb-2 group-hover:text-white transition-colors">
          {title}
        </h4>
        <p className="text-sm text-purple-400 mb-3">{description}</p>
        <ul className="space-y-1">
          {details.map((detail, idx) => (
            <li key={idx} className="text-xs text-purple-300 flex items-center gap-2">
              <span className="text-fuchsia-400">✓</span>
              {detail}
            </li>
          ))}
        </ul>
      </motion.div>
    );
  }

  function BenefitCard({ icon, title, description }) {
    return (
      <motion.div
        variants={itemVariants}
        className="text-center p-6 rounded-2xl border border-purple-800 bg-[#1a001f]/40 backdrop-blur-md"
      >
        <div className="flex justify-center mb-4 text-fuchsia-400">
          {icon}
        </div>
        <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
        <p className="text-sm text-purple-300">{description}</p>
      </motion.div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans overflow-x-hidden">
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
            Web Development <br />
            <TypeAnimation
              sequence={[
                "Modern & Responsive",
                2000,
                "Fast & Secure",
                2000,
                "SEO Optimized",
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
            Create stunning, high-performance websites and web applications that drive results 
            and provide exceptional user experiences across all devices.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-3 mt-6"
          >
            <CTAButton variant="primary">Start Your Project</CTAButton>
            <CTAButton variant="secondary">View Portfolio</CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <SectionWrapper backgroundType="secondary">
        <SectionHeader 
          title="Web Development Services"
          subtitle="Comprehensive web solutions tailored to your business needs"
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {WEB_SERVICES.map((service, i) => (
            <motion.div key={i} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper backgroundType="tertiary">
        <SectionHeader 
          title="Why Choose Our Web Development?"
          subtitle="Discover the advantages of working with our expert development team"
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {BENEFITS.map((benefit, i) => (
            <motion.div key={i} variants={itemVariants}>
              <BenefitCard {...benefit} />
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Project Types Section */}
      <SectionWrapper backgroundType="secondary">
        <SectionHeader 
          title="Types of Projects We Build"
          subtitle="From simple websites to complex web applications"
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {PROJECT_TYPES.map((project, i) => (
            <motion.div key={i} variants={itemVariants}>
              <ProjectTypeCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Technologies Section */}
      <SectionWrapper backgroundType="tertiary">
        <SectionHeader 
          title="Technologies We Use"
          subtitle="Modern, reliable technologies for building robust web solutions"
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {TECHNOLOGIES.map((tech, i) => (
            <motion.div key={i} variants={itemVariants}>
              <div className="bg-white/10 backdrop-blur-lg p-6 border border-white/20 rounded-2xl text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h4 className="font-semibold text-white mb-1">{tech.name}</h4>
                <p className="text-xs text-purple-300">{tech.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Process Section */}
      <SectionWrapper backgroundType="secondary">
        <SectionHeader 
          title="Our Development Process"
          subtitle="A proven methodology for successful web development projects"
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PROCESS_STEPS.map((step, i) => (
            <motion.div key={i} variants={itemVariants}>
              <ProcessStepCard {...step} />
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper backgroundType="cta">
        <div className="text-center">
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
            Let's discuss your project and create a stunning website that drives results.
          </motion.p>
          <CTAButton variant="primary" delay={0.4}>
            Start Your Project
          </CTAButton>
        </div>
      </SectionWrapper>

      <Footer />
      
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
