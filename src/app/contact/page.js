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

// Contact methods data
const CONTACT_METHODS = [
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email Us",
    desc: "Send us a message anytime",
    value: "hexologixsolutions@gmail.com",
    href: "mailto:hexologixsolutions@gmail.com",
    color: "text-fuchsia-400"
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Call Us",
    desc: "Speak with our team",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "text-purple-400"
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Visit Us",
    desc: "Our office location",
    value: "San Francisco, CA",
    href: "#",
    color: "text-pink-400"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Business Hours",
    desc: "When we're available",
    value: "Mon-Fri: 9AM-6PM PST",
    href: "#",
    color: "text-blue-400"
  }
];

// Services data for contact form
const SERVICES = [
  "AI Automation",
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Email Marketing",
  "Social Media Marketing",
  "GIS Solutions",
  "Cloud Computing",
  "Other"
];

// FAQ data
const FAQ = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, and technical assistance. We also provide training and documentation for your team."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We work with modern technologies including React, Next.js, Python, AI/ML frameworks, Flutter, and cloud platforms like AWS and Azure."
  },
  {
    question: "How do you handle project communication?",
    answer: "We maintain regular communication through scheduled calls, progress reports, and project management tools. You'll have a dedicated project manager as your main point of contact."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, complexity, and timeline."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! We serve clients globally and have experience working across different time zones and cultures. We use modern collaboration tools to ensure seamless communication."
  }
];

export default function ContactPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    setIsSubmitting(false);

    if (res.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } else {
      const { error } = await res.json();
      alert(error || 'Something went wrong. Please try again.');
    }
  };


  function ContactMethodCard({ icon, title, desc, value, href, color }) {
    return (
      <motion.div
        variants={cardVariants}
        className="group bg-white/10 backdrop-blur-lg p-6 border border-white/20 text-white shadow-xl hover:shadow-fuchsia-700/30 hover:border-fuchsia-400 transition-all duration-300 rounded-2xl"
      >
        <div className={`mb-4 flex justify-center text-3xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg ${color}`}>
          {icon}
        </div>
        <h4 className="text-lg font-bold mb-2 tracking-tight text-white/90">{title}</h4>
        <p className="text-sm text-purple-100 mb-3">{desc}</p>
        <a
          href={href}
          className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors font-medium"
        >
          {value}
        </a>
      </motion.div>
    );
  }

  function FAQCard({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <motion.div
        variants={cardVariants}
        className="bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md hover:shadow-purple-700/30 transition-all duration-500"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left flex justify-between items-center"
        >
          <h4 className="text-lg font-semibold text-purple-200 hover:text-white transition-colors">
            {question}
          </h4>
          <span className={`text-fuchsia-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        {isOpen && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm text-purple-300 mt-4 leading-relaxed"
          >
            {answer}
          </motion.p>
        )}
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
            Get In Touch <br />
            <TypeAnimation
              sequence={[
                "Let's Build Together",
                2000,
                "Start Your Project",
                2000,
                "Transform Your Business",
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
            Ready to start your next project? Let's discuss how we can help bring your vision to life with our innovative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-3 mt-6"
          >
            <CTAButton variant="primary">Start Your Project</CTAButton>
            <CTAButton variant="secondary">Schedule a Call</CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <SectionWrapper backgroundType="secondary">
        <SectionHeader
          title="Get In Touch"
          subtitle="Multiple ways to reach us and start your project"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CONTACT_METHODS.map((method, i) => (
            <motion.div key={i} variants={itemVariants}>
              <ContactMethodCard {...method} />
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Contact Form Section */}
      <SectionWrapper backgroundType="tertiary">
        <SectionHeader
          title="Start Your Project"
          subtitle="Tell us about your project and we'll get back to you within 24 hours"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Project Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-purple-200 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-purple-700 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent backdrop-blur-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-purple-200 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-purple-700 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent backdrop-blur-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-purple-200 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-purple-700 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent backdrop-blur-sm"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-purple-200 mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-purple-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent backdrop-blur-sm"
                      >
                        <option value="">Select a service</option>
                        {SERVICES.map((service, i) => (
                          <option key={i} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-purple-200 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-purple-700 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent backdrop-blur-sm resize-none"
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      Thank you! We'll get back to you within 24 hours.
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white py-3 rounded-lg hover:scale-105 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Benefits */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 p-8 rounded-2xl border border-fuchsia-400/30">
              <h4 className="text-2xl font-semibold mb-6 text-white">Why Choose Us?</h4>
              <ul className="space-y-4">
                {[
                  "Free consultation and project assessment",
                  "Transparent pricing with no hidden fees",
                  "Dedicated project manager throughout",
                  "Regular progress updates and communication",
                  "Post-launch support and maintenance",
                  "Scalable solutions that grow with your business"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-purple-200">
                    <CheckCircle className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
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

      {/* FAQ Section */}
      <SectionWrapper backgroundType="secondary">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Common questions about working with us"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {FAQ.map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <FAQCard {...item} />
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
            Ready to Get Started?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg mb-10 text-purple-100"
          >
            Let's discuss your project and bring your vision to life with our innovative solutions.
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
