"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Zap,
  Brain,
  Bot,
  Database,
  TrendingUp,
  Users,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Code,
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

// AI Automation features
const AI_FEATURES = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Intelligent Process Automation",
    description: "Automate complex business processes with AI-powered decision making and learning capabilities.",
    benefits: ["Reduces manual errors", "Increases efficiency", "24/7 operation"]
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI Chatbots & Virtual Assistants",
    description: "Smart conversational AI that handles customer inquiries and provides instant support.",
    benefits: ["Instant responses", "Multi-language support", "Scalable customer service"]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Processing & Analytics",
    description: "Automated data extraction, processing, and analysis for actionable business insights.",
    benefits: ["Real-time insights", "Predictive analytics", "Automated reporting"]
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "Workflow Automation",
    description: "Streamline business workflows with intelligent routing and automated approvals.",
    benefits: ["Faster approvals", "Reduced bottlenecks", "Process transparency"]
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Machine Learning Models",
    description: "Custom ML models for predictive analytics, pattern recognition, and decision support.",
    benefits: ["Predictive insights", "Pattern recognition", "Continuous learning"]
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Business Intelligence",
    description: "AI-powered dashboards and reports that provide real-time business intelligence.",
    benefits: ["Real-time monitoring", "Custom dashboards", "Actionable insights"]
  }
];

// Use cases
const USE_CASES = [
  {
    industry: "E-commerce",
    title: "Smart Inventory Management",
    description: "AI-powered inventory forecasting and automated reordering systems.",
    icon: <ShoppingCart className="w-6 h-6" />,
    benefits: ["Reduced stockouts", "Optimized inventory", "Cost savings"]
  },
  {
    industry: "Healthcare",
    title: "Patient Data Processing",
    description: "Automated medical record processing and patient appointment scheduling.",
    icon: <Heart className="w-6 h-6" />,
    benefits: ["Faster processing", "Reduced errors", "Better patient care"]
  },
  {
    industry: "Finance",
    title: "Fraud Detection",
    description: "Real-time fraud detection and risk assessment using AI algorithms.",
    icon: <Shield className="w-6 h-6" />,
    benefits: ["Real-time detection", "Reduced fraud", "Compliance"]
  },
  {
    industry: "Manufacturing",
    title: "Predictive Maintenance",
    description: "AI-driven equipment monitoring and predictive maintenance scheduling.",
    icon: <Settings className="w-6 h-6" />,
    benefits: ["Reduced downtime", "Cost savings", "Extended equipment life"]
  }
];

// Process steps
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We analyze your current processes and identify automation opportunities.",
    icon: <Lightbulb className="w-8 h-8" />,
    details: ["Process mapping", "Opportunity identification", "ROI analysis"]
  },
  {
    step: "02",
    title: "AI Strategy Design",
    description: "Design a comprehensive AI automation strategy tailored to your business needs.",
    icon: <Target className="w-8 h-8" />,
    details: ["Technology selection", "Architecture design", "Implementation plan"]
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Build and test AI automation solutions with rigorous quality assurance.",
    icon: <Code className="w-8 h-8" />,
    details: ["AI model development", "Integration testing", "Performance optimization"]
  },
  {
    step: "04",
    title: "Deployment & Training",
    description: "Deploy solutions and provide comprehensive training for your team.",
    icon: <Rocket className="w-8 h-8" />,
    details: ["Production deployment", "Team training", "Documentation"]
  }
];

// Technologies
const TECHNOLOGIES = [
  { name: "Python", category: "Programming", icon: "🐍" },
  { name: "TensorFlow", category: "Machine Learning", icon: "🧠" },
  { name: "OpenAI GPT", category: "Natural Language", icon: "💬" },
  { name: "AWS SageMaker", category: "Cloud AI", icon: "☁️" },
  { name: "Azure ML", category: "Cloud AI", icon: "🔷" },
  { name: "Google Cloud AI", category: "Cloud AI", icon: "🔵" },
  { name: "RPA Tools", category: "Automation", icon: "🤖" },
  { name: "Apache Kafka", category: "Data Streaming", icon: "📡" }
];

// Benefits
const BENEFITS = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Increased Efficiency",
    description: "Automate repetitive tasks and processes to boost productivity by up to 80%."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Reduced Errors",
    description: "Minimize human errors and ensure consistent, high-quality results."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Operation",
    description: "AI systems work around the clock without breaks or fatigue."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Cost Savings",
    description: "Reduce operational costs and free up human resources for strategic tasks."
  }
];

export default function AIAutomationPage() {
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

  function UseCaseCard({ industry, title, description, icon, benefits }) {
    return (
      <motion.div
        variants={cardVariants}
        className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md hover:shadow-purple-700/30 transition-all duration-500 hover:scale-105"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="text-2xl">{icon}</div>
          <span className="text-sm font-medium text-fuchsia-400 bg-fuchsia-400/10 px-2 py-1 rounded-full">
            {industry}
          </span>
        </div>
        <h4 className="text-lg font-semibold mb-2 text-purple-200 group-hover:text-white transition-colors">
          {title}
        </h4>
        <p className="text-sm text-purple-300 mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-1">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="text-xs text-purple-200 flex items-center gap-2">
              <span className="text-fuchsia-400">•</span>
              {benefit}
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
            AI Automation <br />
            <TypeAnimation
              sequence={[
                "Transform Your Business",
                2000,
                "Boost Efficiency",
                2000,
                "Reduce Costs",
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
            Leverage the power of artificial intelligence to automate complex business processes, 
            enhance decision-making, and drive unprecedented growth for your organization.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-3 mt-6"
          >
            <CTAButton variant="primary">Get Started</CTAButton>
            <CTAButton variant="secondary">Watch Demo</CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <SectionWrapper backgroundType="secondary">
        <SectionHeader 
          title="AI Automation Features"
          subtitle="Comprehensive AI solutions that transform your business operations"
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {AI_FEATURES.map((feature, i) => (
            <motion.div key={i} variants={itemVariants}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper backgroundType="tertiary">
        <SectionHeader 
          title="Why Choose AI Automation?"
          subtitle="Discover the transformative benefits of implementing AI automation"
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

      {/* Use Cases Section */}
      <SectionWrapper backgroundType="secondary">
        <SectionHeader 
          title="Industry Use Cases"
          subtitle="See how AI automation is transforming different industries"
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {USE_CASES.map((useCase, i) => (
            <motion.div key={i} variants={itemVariants}>
              <UseCaseCard {...useCase} />
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Process Section */}
      <SectionWrapper backgroundType="tertiary">
        <SectionHeader 
          title="Our AI Implementation Process"
          subtitle="A proven methodology for successful AI automation deployment"
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

      {/* Technologies Section */}
      <SectionWrapper backgroundType="secondary">
        <SectionHeader 
          title="Technologies We Use"
          subtitle="Cutting-edge AI and automation technologies for optimal results"
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
            Ready to Automate with AI?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg mb-10 text-purple-100"
          >
            Let's discuss how AI automation can transform your business operations and drive growth.
          </motion.p>
          <CTAButton variant="primary" delay={0.4}>
            Start Your AI Journey
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
