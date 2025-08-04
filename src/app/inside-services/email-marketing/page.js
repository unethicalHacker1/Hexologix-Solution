"use client";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  Code,
  Globe,
  Palette,
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
  Mail as Email,
  Send,
  Mail as Newsletter,
  Mail as Automation,
  Mail as Campaign,
  Mail as Analytics,
  Mail as Segmentation,
  Mail as Personalization,
  Mail as A_BTesting,
  Mail as Templates,
  Mail as Integration,
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

// Email Marketing features
const EMAIL_FEATURES = [
  {
    icon: <Automation className="w-8 h-8" />,
    title: "Email Automation",
    description: "Automated email sequences that nurture leads and drive conversions.",
    benefits: ["Drip campaigns", "Trigger-based emails", "Lead nurturing"]
  },
  {
    icon: <Campaign className="w-8 h-8" />,
    title: "Campaign Management",
    description: "Create, send, and track email campaigns with advanced analytics.",
    benefits: ["A/B testing", "Performance tracking", "Campaign optimization"]
  },
  {
    icon: <Segmentation className="w-8 h-8" />,
    title: "Audience Segmentation",
    description: "Target specific customer segments with personalized content.",
    benefits: ["Behavioral targeting", "Demographic segmentation", "Custom lists"]
  },
  {
    icon: <Personalization className="w-8 h-8" />,
    title: "Personalization",
    description: "Dynamic content and personalized messaging for higher engagement.",
    benefits: ["Dynamic content", "Personalized subject lines", "Custom recommendations"]
  },
  {
    icon: <Analytics className="w-8 h-8" />,
    title: "Advanced Analytics",
    description: "Comprehensive reporting and insights to optimize your campaigns.",
    benefits: ["Open rates", "Click-through rates", "Conversion tracking"]
  },
  {
    icon: <Integration className="w-8 h-8" />,
    title: "CRM Integration",
    description: "Seamless integration with your existing CRM and marketing tools.",
    benefits: ["Lead scoring", "Contact sync", "Workflow automation"]
  }
];

// Email Types
const EMAIL_TYPES = [
  {
    category: "Lead Nurturing",
    title: "Welcome Series",
    description: "Onboarding emails that introduce new subscribers to your brand.",
    icon: <Mail className="w-6 h-6" />,
    benefits: ["Brand introduction", "Value proposition", "Next steps"]
  },
  {
    category: "Sales",
    title: "Promotional Campaigns",
    description: "Sales-focused emails that drive conversions and revenue.",
    icon: <ShoppingCart className="w-6 h-6" />,
    benefits: ["Product promotions", "Limited offers", "Sales events"]
  },
  {
    category: "Engagement",
    title: "Newsletter & Content",
    description: "Educational content that keeps your audience engaged.",
    icon: <Newsletter className="w-6 h-6" />,
    benefits: ["Industry insights", "Educational content", "Company updates"]
  },
  {
    category: "Retention",
    title: "Re-engagement",
    description: "Campaigns to win back inactive subscribers and customers.",
    icon: <Target className="w-6 h-6" />,
    benefits: ["Win-back offers", "Feedback requests", "Special incentives"]
  }
];

// Process steps
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Strategy & Planning",
    description: "We develop a comprehensive email marketing strategy tailored to your business.",
    icon: <Lightbulb className="w-12 h-12 text-fuchsia-400" />,
    details: ["Audience analysis", "Content strategy", "Campaign planning"]
  },
  {
    step: "02",
    title: "Design & Content",
    description: "Create compelling email designs and content that resonates with your audience.",
    icon: <Palette className="w-12 h-12 text-purple-400" />,
    details: ["Email templates", "Content creation", "Brand consistency"]
  },
  {
    step: "03",
    title: "Implementation & Testing",
    description: "Set up automation workflows and thoroughly test all campaigns.",
    icon: <Code className="w-12 h-12 text-pink-400" />,
    details: ["Automation setup", "A/B testing", "Quality assurance"]
  },
  {
    step: "04",
    title: "Launch & Optimize",
    description: "Deploy campaigns and continuously optimize based on performance data.",
    icon: <Rocket className="w-12 h-12 text-fuchsia-400" />,
    details: ["Campaign launch", "Performance monitoring", "Continuous optimization"]
  }
];

// Benefits
const BENEFITS = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Higher ROI",
    description: "Email marketing delivers the highest ROI of any marketing channel"
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Better Engagement",
    description: "Personalized content that drives higher open and click rates"
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Targeted Reach",
    description: "Reach the right audience with precise segmentation and targeting"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Measurable Results",
    description: "Track every metric and optimize campaigns for better performance"
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
    title: "Web Development", 
    desc: "Next.js, WordPress & Shopify sites that convert.", 
    icon: <Globe className="w-8 h-8" />,
    features: ["Responsive Design", "SEO Optimization", "Performance Focused"],
    href: "/inside-services/web-dev"
  },
  { 
    title: "Social Media Marketing", 
    desc: "Strategic social media campaigns that build brand awareness.", 
    icon: <Users className="w-8 h-8" />,
    features: ["Content Strategy", "Community Management", "Paid Advertising"],
    href: "/inside-services/ss-marketing"
  }
];

export default function EmailMarketingPage() {
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

  function EmailTypeCard({ category, title, description, icon, benefits }) {
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
              Email Marketing That <br />
          <TypeAnimation
            sequence={[
                  "Converts & Engages",
              2000,
                  "Nurtures & Sells",
              2000,
                  "Scales & Grows",
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
              Automated email campaigns that nurture leads, drive sales, and build lasting customer relationships.
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

        {/* Email Marketing Features Section */}
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
              Email Marketing Solutions
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-lg text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Comprehensive email marketing solutions that drive engagement, nurture leads, and boost conversions.
            </motion.p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {EMAIL_FEATURES.map((feature, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Email Types Section */}
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
              Types of Email Campaigns
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-lg text-purple-200 mb-12 text-center max-w-2xl mx-auto leading-relaxed"
            >
              Strategic email campaigns designed for every stage of the customer journey.
            </motion.p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
            >
              {EMAIL_TYPES.map((emailType, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <EmailTypeCard {...emailType} />
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
              Our Email Marketing Process
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-lg text-purple-200 mb-16 max-w-2xl mx-auto"
            >
              A strategic approach to email marketing that ensures your campaigns deliver results.
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
              Why Choose Our Email Marketing
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
              Ready to Boost Your Email Marketing?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-lg mb-10 text-purple-100"
            >
              Let&apos;s discuss your email marketing strategy and create campaigns that drive results and grow your business.
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
