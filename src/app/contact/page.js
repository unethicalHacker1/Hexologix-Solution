

"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Users,
  Globe,
  Zap,
  Shield,
  CheckCircle,
  ChevronDown, // 🔻 NEW: for dropdown arrow
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
} from "@/lib/animations";

// ────────────────────────────────────────────────────────────────
//  Static data
// ────────────────────────────────────────────────────────────────

const CONTACT_METHODS = [
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email Us",
    desc: "Send us a message anytime",
    value: "hexologixsolutions@gmail.com",
    href: "mailto:hexologixsolutions@gmail.com",
    color: "text-fuchsia-400",
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Call Us",
    desc: "Speak with our team",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "text-purple-400",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Visit Us",
    desc: "Our office location",
    value: "San Francisco, CA",
    href: "#",
    color: "text-pink-400",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Business Hours",
    desc: "When we're available",
    value: "Mon‑Fri  9 AM‑6 PM PST",
    href: "#",
    color: "text-blue-400",
  },
];

const SERVICES = [
  "AI Automation",
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Email Marketing",
  "Social Media Marketing",
  "GIS Solutions",
  "Cloud Computing",
  "Other",
];

const FAQ = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on complexity. Simple websites take 2‑4 weeks, while complex applications can take 2‑6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, we offer comprehensive post‑launch support including maintenance, updates, and technical assistance. We also provide training and documentation for your team.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We work with modern technologies including React, Next.js, Python, AI/ML frameworks, Flutter, and cloud platforms like AWS and Azure.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We maintain regular communication through scheduled calls, progress reports, and project management tools. You'll have a dedicated project manager as your main point of contact.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer flexible pricing models including fixed‑price projects, hourly rates, and retainer agreements. Pricing depends on project scope, complexity, and timeline.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely! We serve clients globally and have experience working across different time zones and cultures. We use modern collaboration tools to ensure seamless communication.",
  },
];

// ────────────────────────────────────────────────────────────────
//  Component
// ────────────────────────────────────────────────────────────────

export default function ContactPage() {
  // ── State ────────────────────────────────────────────────────
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // ── Effects ─────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Handlers ────────────────────────────────────────────────
  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setIsSubmitting(false);
    if (res.ok) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", service: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    } else {
      const { error } = await res.json();
      alert(error || "Something went wrong. Please try again.");
    }
  };

  // ── Helpers ─────────────────────────────────────────────────
  const InputStyles =
    "w-full px-4 py-3 bg-white/10 border border-purple-700 rounded-lg text-white \
     placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 \
     focus:border-transparent backdrop-blur-sm";

  // ────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans overflow-x-hidden">
      <Header />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex items-center px-6 py-20 md:py-32 text-center min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black">
        {/* gradient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 left-1/2 w-[800px] h-[800px] -translate-x-1/2 rounded-full bg-fuchsia-700/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] rounded-full bg-purple-800/10 blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            Get In Touch <br />
            <TypeAnimation
              sequence={["Let's Build Together", 2000, "Start Your Project", 2000, "Transform Your Business", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block bg-gradient-to-r from-fuchsia-500 to-purple-400 bg-clip-text text-transparent"
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-base text-purple-200 sm:text-lg"
          >
            Ready to start your next project? Let's discuss how we can help bring your vision to life with our innovative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <CTAButton variant="primary" anchor="form">Start Your Project</CTAButton>
            <CTAButton variant="secondary" anchor="form">Schedule a Call</CTAButton>
          </motion.div>
        </div>
      </section>

      {/* ── Contact methods ──────────────────────────────────── */}
      <SectionWrapper backgroundType="secondary">
        <SectionHeader title="Get In Touch" subtitle="Multiple ways to reach us and start your project" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {CONTACT_METHODS.map((method, i) => (
            <motion.div key={i} variants={itemVariants}>
              <motion.div
                variants={cardVariants}
                className="group rounded-2xl border border-white/20 bg-white/10 p-6 text-white shadow-xl backdrop-blur-lg transition-all duration-300 hover:border-fuchsia-400 hover:shadow-fuchsia-700/30"
              >
                <div className={`mb-4 flex justify-center text-3xl transition-transform duration-300 group-hover:scale-110 drop-shadow-lg ${method.color}`}>{method.icon}</div>
                <h4 className="mb-2 text-lg font-bold tracking-tight text-white/90">{method.title}</h4>
                <p className="mb-3 text-sm text-purple-100">{method.desc}</p>
                <a href={method.href} className="font-medium text-fuchsia-400 transition-colors hover:text-fuchsia-300">
                  {method.value}
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ── Contact form ─────────────────────────────────────── */}
      <SectionWrapper backgroundType="tertiary">
        <SectionHeader title="Start Your Project" subtitle="Tell us about your project and we'll get back to you within 24 hours" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-12 lg:grid-cols-2"
        >
          {/* form */}
          <motion.div variants={itemVariants}>
            <Card className="border border-white/20 bg-white/10 shadow-xl backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Project Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form id="form" onSubmit={handleSubmit} className="space-y-6">
                  {/* name + email */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-purple-200">Name *</label>
                      <input type="text" name="name" required placeholder="Your full name" value={formData.name} onChange={handleInputChange} className={InputStyles} />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-purple-200">Email *</label>
                      <input type="email" name="email" required placeholder="your@email.com" value={formData.email} onChange={handleInputChange} className={InputStyles} />
                    </div>
                  </div>

                  {/* company + service */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-purple-200">Company</label>
                      <input type="text" name="company" placeholder="Your company name" value={formData.company} onChange={handleInputChange} className={InputStyles} />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-purple-200">Service Needed *</label>
                      {/* ── custom dropdown with arrow */}
                      <div className="relative">
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full appearance-none rounded-lg border border-purple-700 bg-gradient-to-br from-black via-[#2c003e] to-black/80 px-4 py-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-400 backdrop-blur-md"
                        >
                          <option disabled value="">
                            Select a service
                          </option>
                          {SERVICES.map((service) => (
                            <option key={service} value={service} className="bg-[#2c003e] text-white">
                              {service}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-purple-300" />
                      </div>
                    </div>
                  </div>

                  {/* message */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-purple-200">Project Details *</label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us about your project, goals, and requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`${InputStyles} resize-none`}
                    />
                  </div>

                  {/* success note */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 text-sm text-green-400">
                      <CheckCircle className="h-4 w-4" /> Thank you! We'll get back to you within 24 hours.
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-600 py-3 text-white transition-all hover:scale-105 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" /> Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* benefits */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="rounded-2xl border border-fuchsia-400/30 bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 p-8">
              <h4 className="mb-6 text-2xl font-semibold text-white">Why Choose Us?</h4>
              <ul className="space-y-4">
                {[
                  "Free consultation and project assessment",
                  "Transparent pricing with no hidden fees",
                  "Dedicated project manager throughout",
                  "Regular progress updates and communication",
                  "Post-launch support and maintenance",
                  "Scalable solutions that grow with your business",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-purple-200">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-fuchsia-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
              <h4 className="text-xl font-semibold mb-4 text-white">What Happens Next?</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-fuchsia-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <span className="text-purple-200">We'll review your project details</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <span className="text-purple-200">Schedule a consultation call</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <span className="text-purple-200">Receive a detailed proposal</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                  <span className="text-purple-200">Start your project journey</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <SectionWrapper backgroundType="secondary">
        <SectionHeader title="Frequently Asked Questions" subtitle="Common questions about working with us" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {FAQ.map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <motion.div
                variants={cardVariants}
                className="rounded-2xl border border-purple-900 bg-white/5 p-6 shadow-md backdrop-blur-xl transition-all duration-500 hover:bg-white/10 hover:shadow-purple-700/30"
              >
                <button className="flex w-full items-center justify-between text-left" onClick={() => setOpen((o) => !o)}>
                  <h4 className="text-lg font-semibold text-purple-200 transition-colors hover:text-white">{item.question}</h4>
                </button>
                <motion.p initial={{ opacity: 0, height: 0 }} whileInView={{ opacity: 1, height: "auto" }} className="mt-4 text-sm leading-relaxed text-purple-300">
                  {item.answer}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <SectionWrapper backgroundType="cta">
        <div className="text-center">
          <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className="mb-8 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Ready to Get Started?
          </motion.h3>
          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true, margin: "-100px" }} className="mb-10 text-lg text-purple-100">
            Let's discuss your project and bring your vision to life with our innovative solutions.
          </motion.p>
          <CTAButton variant="primary" delay={0.4}>
            Start Your Project
          </CTAButton>
        </div>
      </SectionWrapper>

      {/* ── Footer + back‑to‑top ────────────────────────────── */}
      <Footer />
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 rounded-full border border-purple-400/20 bg-gradient-to-r from-purple-600 to-fuchsia-600 p-4 text-white shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:from-purple-700 hover:to-fuchsia-700 hover:shadow-purple-500/50"
          style={{ boxShadow: "0 10px 25px -5px rgba(147 51 234 / 0.3), 0 4px 6px -2px rgba(147 51 234 / 0.1)" }}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </main>
  );
}
