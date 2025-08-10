"use client";
import { motion } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";
import Head from "next/head";
import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Smartphone,
  Zap,
  Globe,
  Code,
  Database,
  Palette,
  Mail,
  MapPin,
  TrendingUp,
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
} from "@/lib/animations";

// Enhanced service data with more details and features
const SERVICES = [
  {
    title: "AI Automations",
    desc: "Custom workflows for CRM, leads, and business ops.",
    icon: <Zap className="w-8 h-8" />,
    features: ["CRM Integration", "Lead Automation", "Workflow Optimization"],
    href: "/inside-services/AI-Automation",
    comingSoon: false,
  },
  {
    title: "Web Development",
    desc: "Next.js, WordPress & Shopify sites that convert.",
    icon: <Globe className="w-8 h-8" />,
    features: ["Responsive Design", "SEO Optimization", "Performance Focused"],
    href: "/inside-services/WebDevelopment",
    comingSoon: false,
  },
  {
    title: "App Development",
    desc: "Flutter & React Native for iOS & Android.",
    icon: <Smartphone className="w-8 h-8" />,
    features: ["Cross-platform", "Native Performance", "App Store Ready"],
    href: "/inside-services/AppDevelopment",
    comingSoon: false,
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interfaces that users love.",
    icon: <Palette className="w-8 h-8" />,
    features: ["User Research", "Prototyping", "Design Systems"],
    href: "/inside-services/UI-Design",
    comingSoon: false,
  },
  {
    title: "Email Marketing",
    desc: "Automated campaigns that drive engagement and sales.",
    icon: <Mail className="w-8 h-8" />,
    features: ["Automation", "Analytics", "A/B Testing"],
    href: "/inside-services/EmailMarketing",
    comingSoon: false,
  },
  {
    title: "GIS Solutions",
    desc: "Geographic information systems for data visualization.",
    icon: <MapPin className="w-8 h-8" />,
    features: ["Spatial Analysis", "Interactive Maps", "Data Integration"],
    href: "/inside-services/GIS",
    comingSoon: false,
  },
];

// Enhanced portfolio data with more projects
const PORTFOLIO = [
  {
    src: "/project1.jpg",
    alt: "E-commerce AI Store screenshot",
    title: "E-commerce AI Store",
    desc: "Smart product filters, AI chatbot, integrated analytics.",
    category: "Web Development",
    tech: ["Next.js", "AI Integration", "E-commerce"],
  },
  {
    src: "/project2.jpg",
    alt: "Custom CRM Automation dashboard",
    title: "Custom CRM Automation",
    desc: "Workflow automation for lead tracking and reporting.",
    category: "AI Automation",
    tech: ["Python", "React", "Database"],
  },
  {
    src: "/project1.jpg",
    alt: "Mobile App Development",
    title: "Cross-Platform Mobile App",
    desc: "Flutter-based app with real-time features and offline sync.",
    category: "App Development",
    tech: ["Flutter", "Firebase", "Real-time"],
  },
  {
    src: "/project2.jpg",
    alt: "UI/UX Design Project",
    title: "Modern Dashboard Design",
    desc: "Comprehensive design system with interactive prototypes.",
    category: "UI/UX Design",
    tech: ["Figma", "Prototyping", "Design System"],
  },
];

// Enhanced process data with better descriptions
const PROCESS = [
  {
    icon: <Code className="w-12 h-12 text-fuchsia-400" />,
    title: "Discover",
    desc: "We analyze your goals and uncover opportunities to automate and innovate.",
    details: ["Requirements gathering", "Market research", "Strategy planning"],
  },
  {
    icon: <Database className="w-12 h-12 text-purple-400" />,
    title: "Build",
    desc: "Our expert team designs, codes, and integrates smart solutions tailored to you.",
    details: ["Design & prototyping", "Development", "Testing & QA"],
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-pink-400" />,
    title: "Launch",
    desc: "We deploy with precision and support your journey post-launch for continued growth.",
    details: ["Deployment", "Monitoring", "Ongoing support"],
  },
];

export default function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** ---------- Services Card (equal height) ---------- */
  function ServiceCard({ title, desc, icon, href, comingSoon, features }) {
    const cardContent = (
      <Card
        className="relative group bg-white/10 backdrop-blur-lg p-6 border border-white/20 text-white shadow-xl hover:shadow-fuchsia-700/30 hover:border-fuchsia-400 transition-all duration-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-fuchsia-400 h-full flex flex-col"
        tabIndex={0}
        role="button"
        aria-label={title}
      >
        {comingSoon && (
          <span className="absolute top-3 right-3 bg-fuchsia-700/90 text-xs px-2 py-0.5 rounded-full font-semibold text-white shadow">
            Coming Soon
          </span>
        )}

        <CardHeader className="pb-3">
          <div className="mb-3 flex justify-center text-3xl group-hover:scale-110 group-hover:text-fuchsia-400 transition-transform duration-300 drop-shadow-lg">
            {icon}
          </div>
          <CardTitle className="text-lg font-bold mb-2 tracking-tight text-white/90 text-center">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          <p className="text-sm text-purple-100 mb-3 text-center">{desc}</p>
          {features && (
            <ul className="text-xs text-purple-200 space-y-1 text-left mx-auto">
              {features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-fuchsia-400">•</span> {f}
                </li>
              ))}
            </ul>
          )}
        </CardContent>

        {href && (
          <div className="mt-4 flex justify-center">
            <span className="inline-flex items-center gap-2 bg-fuchsia-600/90 text-white px-4 py-1.5 rounded-full font-semibold text-xs shadow hover:bg-fuchsia-700/90 transition group-hover:translate-x-1">
              Learn More
              <svg
                className="w-3 h-3 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        )}
      </Card>
    );

    return href ? (
      <Link href={href} className="block h-full focus:outline-none focus:ring-2 focus:ring-fuchsia-400">
        {cardContent}
      </Link>
    ) : (
      <div className="h-full">{cardContent}</div>
    );
  }

  function PortfolioCard({ src, alt, title, desc, category, tech }) {
    return (
      <motion.div
        variants={cardVariants}
        className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md hover:shadow-purple-700/30 transition-all duration-500 hover:scale-105 focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 focus-within:ring-offset-black"
        tabIndex={0}
        role="article"
        aria-label={`Project: ${title}`}
      >
        <div className="relative overflow-hidden rounded-lg mb-4">
          <Image
            src={src}
            alt={alt}
            width={600}
            height={400}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 group-focus-within:scale-110"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="mb-3">
          <span className="inline-block bg-fuchsia-600/20 text-fuchsia-300 text-xs px-2 py-1 rounded-full mb-2">
            {category}
          </span>
        </div>
        <h4 className="text-xl font-semibold mb-2 text-purple-200 group-hover:text-white group-focus-within:text-white transition-colors">
          {title}
        </h4>
        <p className="text-sm text-purple-300 mb-3 leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-1">
          {tech.map((item, idx) => (
            <span key={idx} className="text-xs bg-purple-900/30 text-purple-200 px-2 py-1 rounded">
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    );
  }

  function ProcessStep({ icon, title, desc, details }) {
    return (
      <motion.div
        variants={cardVariants}
        className="group p-8 rounded-2xl border border-purple-800 bg-[#1a001f]/60 backdrop-blur-md shadow-lg hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 text-center"
      >
        <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h4 className="text-xl font-semibold text-purple-200 mb-3 group-hover:text-white transition-colors">
          {title}
        </h4>
        <p className="text-sm text-purple-400 mb-4">{desc}</p>
        <ul className="text-xs text-purple-300 space-y-1">
          {details.map((detail, idx) => (
            <li key={idx} className="flex items-center justify-center gap-2">
              <span className="text-fuchsia-400">✓</span> {detail}
            </li>
          ))}
        </ul>
      </motion.div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans overflow-x-hidden">
      <Head>
        <title>Hexologix | AI Automations & Web Apps</title>
        <meta name="description" content="We build automation-driven websites, apps, and solutions that scale your business." />
        <meta property="og:title" content="Hexologix | AI Automations & Web Apps" />
        <meta property="og:description" content="We build automation-driven websites, apps, and solutions that scale your business." />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans overflow-x-hidden">
        <Header />

        {/* Hero */}
        <section
          id="home"
          className="relative text-center px-6 py-20 md:py-32 bg-gradient-to-br from-black via-[#2c003e] to-black text-white min-h-screen flex items-center"
        >
          <div className="max-w-4xl mx-auto z-10 relative">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
            >
              Empowering Brands with <br />
              <TypeAnimation
                sequence={["Smart AI & Stunning Tech", 2000, "AI Automations & Web Apps", 2000, "Conversion-Focused Designs", 2000]}
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
              We build automation-driven websites, apps, and solutions that scale your business.
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

        {/* Our Services */}
        <section id="services" className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-[#1a002f] via-[#2c003e] to-black text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-[800px] h-[800px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/2 -translate-x-1/2 animate-pulse"></div>
            <div className="w-[600px] h-[600px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0 }} className="text-4xl sm:text-5xl font-bold mb-6 text-white/90 tracking-tight">
              Our Services
            </motion.h3>

            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: false, amount: 0 }} className="text-lg text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Accelerate your business with our modern, AI-powered solutions and creative development expertise.
            </motion.p>

            {/* ✅ Equal-height grid */}
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-stretch">
              {SERVICES.map((service, i) => (
                <motion.div key={i} variants={itemVariants} className="h-full">
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: false, amount: 0 }} className="mt-12">
              <Link href="/Portfolio">
                <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-8 py-3 text-base rounded-full hover:scale-105 transition-all">
                  View All Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Featured Work */}
        <section id="portfolio" className="py-20 px-4 sm:px-6 bg-gradient-to-bl from-[#0d001b] via-[#1b0035] to-black relative text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-[500px] h-[500px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/4 -z-10 animate-pulse"></div>
            <div className="w-[400px] h-[400px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 -z-10 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0 }} className="text-4xl sm:text-5xl font-bold mb-6 text-purple-300 tracking-tight text-center">
              Featured Work
            </motion.h3>

            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: false, amount: 0 }} className="text-lg text-purple-200 mb-12 text-center max-w-2xl mx-auto leading-relaxed">
              Discover how we&apos;ve transformed businesses with our innovative solutions and cutting-edge technology.
            </motion.p>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0 }} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {PORTFOLIO.map((project, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <PortfolioCard {...project} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: false, amount: 0 }} className="text-center mt-12">
              <Link href="/Portfolio">
                <Button className="bg-transparent border-2 border-purple-500 text-purple-300 px-8 py-3 text-base rounded-full hover:bg-purple-600 hover:text-white transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black">
                  View All Projects
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-6 bg-gradient-to-br from-[#1a002f] via-[#2c003e] to-black relative text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-96 h-96 bg-purple-900/20 rounded-full blur-3xl absolute top-0 left-1/2 -translate-x-1/2 -z-10 animate-pulse"></div>
            <div className="w-80 h-80 bg-fuchsia-800/10 rounded-full blur-2xl absolute bottom-0 right-1/3 -z-10 animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: false, amount: 0 }} className="text-4xl sm:text-5xl font-bold text-purple-300 mb-6">
              Our Process
            </motion.h3>

            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: false, amount: 0 }} className="text-lg text-purple-200 mb-16 max-w-2xl mx-auto">
              We follow a proven methodology that ensures your project&apos;s success from concept to launch.
            </motion.p>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0 }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PROCESS.map((step, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <ProcessStep {...step} />
                </motion.div>
              ))}
            </motion.div>

            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent -z-10" style={{ top: "60%" }}></div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-6 py-24 bg-gradient-to-br from-black via-[#150022] to-black text-white relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: false, amount: 0 }} className="text-4xl font-bold mb-12 text-purple-300">
              What Our Clients Say
            </motion.h3>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: false, amount: 0 }}>
              <Swiper modules={[Pagination, Autoplay]} spaceBetween={50} slidesPerView={1} loop pagination={{ clickable: true }} autoplay={{ delay: 5000 }} className="w-full max-w-3xl swiper-custom">
                <SwiperSlide>
                  <blockquote className="text-xl italic text-purple-200 leading-relaxed">
                    &quot;TechFlow delivered exactly what we needed. Their AI integration saved us hours every day.&quot;
                  </blockquote>
                  <p className="text-sm text-purple-400 mt-4">— CEO, NextGen Corp</p>
                </SwiperSlide>
                <SwiperSlide>
                  <blockquote className="text-xl italic text-purple-200 leading-relaxed">
                    &quot;Hexologix redesigned our entire frontend and boosted our conversions by 30%.&quot;
                  </blockquote>
                  <p className="text-sm text-purple-400 mt-4">— Sarah Malik, Product Manager</p>
                </SwiperSlide>
                <SwiperSlide>
                  <blockquote className="text-xl italic text-purple-200 leading-relaxed">
                    &quot;Exceptional team. Delivered on time and exceeded expectations on every milestone.&quot;
                  </blockquote>
                  <p className="text-sm text-purple-400 mt-4">— Jonathan A., CTO at FinLogic</p>
                </SwiperSlide>
              </Swiper>
            </motion.div>
            <style jsx global>{`
              .swiper-pagination {
                bottom: -30px !important;
                text-align: center !important;
              }
              .swiper-pagination-bullet-active {
                background: #c084fc;
              }
            `}</style>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-28 px-6 bg-gradient-to-br from-fuchsia-800 via-purple-700 to-black text-white text-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="w-[700px] h-[700px] bg-fuchsia-500/20 blur-3xl rounded-full absolute -top-48 left-1/2 -translate-x-1/2 animate-pulse" />
            <div className="w-[400px] h-[400px] bg-white/5 rounded-full blur-2xl absolute bottom-0 left-1/3" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent)] opacity-50" />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: false, amount: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-white">
              Let&apos;s Build Something
              <br className="hidden sm:inline" /> Amazing Together
            </motion.h3>
            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: false, amount: 0 }} className="text-lg mb-10 text-purple-100">
              Schedule a call or send us your ideas. We&apos;ll bring them to life with precision.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: false, amount: 0 }}>
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
          style={{ boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.3), 0 4px 6px -2px rgba(147, 51, 234, 0.1)" }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </main>
  );
}
