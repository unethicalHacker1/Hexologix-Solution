"use client";

import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Users,
  Globe,
  Zap,
  CheckCircle,
  Star
} from "lucide-react";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import { 
  containerVariants, 
  itemVariants, 
  cardVariants, 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight,
  commonAnimationProps 
} from "@/lib/animations";

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: ""
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "hello@techflow.com",
      description: "Get in touch for project inquiries"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "New York, NY",
      description: "Remote-first, global reach"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      details: "< 24 hours",
      description: "We'll get back to you quickly"
    }
  ];

  const services = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI Automation",
      description: "Custom workflows and intelligent systems"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development",
      description: "Modern, scalable web applications"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "App Development",
      description: "Cross-platform mobile solutions"
    }
  ];

  const testimonials = [
    {
      quote: "TechFlow delivered our project on time and exceeded expectations. Their AI integration saved us hours every day.",
      author: "Sarah Johnson",
      role: "CEO, NextGen Corp",
      rating: 5
    },
    {
      quote: "Exceptional team with deep technical expertise. They transformed our business with smart automation solutions.",
      author: "Michael Chen",
      role: "CTO, FinLogic",
      rating: 5
    },
    {
      quote: "Professional, responsive, and results-driven. Our conversion rates increased by 40% after their redesign.",
      author: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      rating: 5
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative text-center px-6 py-20 md:py-32 bg-gradient-to-br from-black via-[#2c003e] to-black text-white min-h-screen flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-[600px] h-[600px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/4 -z-10"></div>
          <div className="w-[500px] h-[500px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 -z-10"></div>
        </div>

        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Let's Build Something <br />
            <TypeAnimation
              sequence={[
                "Amazing Together", // first text
                2000, // wait 2s
                "Innovative Solutions",
                2000,
                "Future-Ready Apps",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text inline-block"
            />
          </h1>
          <p className="text-xl text-purple-200 mb-8">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss your project and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-8 py-4 text-lg rounded-full hover:scale-105 transition-all">
              Start Your Project
            </Button>
            <Button className="bg-transparent border-2 border-purple-500 text-purple-300 px-8 py-4 text-lg rounded-full hover:bg-purple-600 hover:text-white transition-all hover:scale-105">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-6 py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 text-purple-300 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}>
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-6 border border-purple-800 text-white hover:scale-105 transition-all duration-500 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="mb-4 text-purple-300">{info.icon}</div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-semibold text-purple-200 mb-2">{info.details}</p>
                  <p className="text-sm text-purple-400">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Services */}
      <section className="px-6 py-24 bg-gradient-to-bl from-[#0d001b] via-[#1b0035] to-black relative text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-[600px] h-[600px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/4 -z-10"></div>
          <div className="w-[500px] h-[500px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 -z-10"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}>
              <h3 className="text-3xl font-bold mb-8 text-purple-300">Start Your Project</h3>
              <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur border border-purple-800">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-purple-200 mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-purple-900/30 border border-purple-700 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-purple-500 transition-colors"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-purple-200 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-purple-900/30 border border-purple-700 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-purple-500 transition-colors"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-purple-200 mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-purple-900/30 border border-purple-700 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-purple-500 transition-colors"
                          placeholder="Your company"
                        />
                      </div>
                                             <div>
                         <label className="block text-purple-200 mb-2">Project Type</label>
                         <select
                           name="projectType"
                           value={formData.projectType}
                           onChange={handleInputChange}
                           className="w-full px-4 py-3 bg-purple-900/30 border border-purple-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer"
                           style={{
                             backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a855f7' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                             backgroundPosition: 'right 0.5rem center',
                             backgroundRepeat: 'no-repeat',
                             backgroundSize: '1.5em 1.5em',
                             paddingRight: '2.5rem'
                           }}
                         >
                           <option value="" className="text-purple-400">Select project type</option>
                           <option value="web" className="text-white bg-purple-900 hover:bg-purple-800">Web Development</option>
                           <option value="mobile" className="text-white bg-purple-900 hover:bg-purple-800">Mobile App</option>
                           <option value="ai" className="text-white bg-purple-900 hover:bg-purple-800">AI Automation</option>
                           <option value="design" className="text-white bg-purple-900 hover:bg-purple-800">UI/UX Design</option>
                           <option value="other" className="text-white bg-purple-900 hover:bg-purple-800">Other</option>
                         </select>
                       </div>
                    </div>
                                         <div>
                       <label className="block text-purple-200 mb-2">Budget Range</label>
                       <select
                         name="budget"
                         value={formData.budget}
                         onChange={handleInputChange}
                         className="w-full px-4 py-3 bg-purple-900/30 border border-purple-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer"
                         style={{
                           backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a855f7' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                           backgroundPosition: 'right 0.5rem center',
                           backgroundRepeat: 'no-repeat',
                           backgroundSize: '1.5em 1.5em',
                           paddingRight: '2.5rem'
                         }}
                       >
                         <option value="" className="text-purple-400">Select budget range</option>
                         <option value="5k-10k" className="text-white bg-purple-900 hover:bg-purple-800">$5K - $10K</option>
                         <option value="10k-25k" className="text-white bg-purple-900 hover:bg-purple-800">$10K - $25K</option>
                         <option value="25k-50k" className="text-white bg-purple-900 hover:bg-purple-800">$25K - $50K</option>
                         <option value="50k+" className="text-white bg-purple-900 hover:bg-purple-800">$50K+</option>
                       </select>
                     </div>
                    <div>
                      <label className="block text-purple-200 mb-2">Project Details *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 bg-purple-900/30 border border-purple-700 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                        placeholder="Tell us about your project, goals, and requirements..."
                        required
                      ></textarea>
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white py-4 text-lg rounded-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Services & Info */}
            <div className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`} style={{ animationDelay: "400ms" }}>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-purple-300">Our Services</h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <Card
                      key={index}
                      className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur border border-purple-800 hover:scale-105 transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="text-purple-300 mt-1">{service.icon}</div>
                          <div>
                            <h4 className="text-lg font-semibold text-purple-200 mb-2">{service.title}</h4>
                            <p className="text-purple-400 text-sm">{service.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-6 text-purple-300">Why Choose Us</h3>
                <div className="space-y-4">
                  {[
                    "Fast response time (< 24 hours)",
                    "Transparent pricing & timelines",
                    "Ongoing support & maintenance",
                    "Modern tech stack & best practices",
                    "Scalable & future-proof solutions"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-purple-200">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 text-purple-300 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}>
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur border border-purple-800 text-white hover:scale-105 transition-all duration-500 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg italic text-purple-200 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-purple-300">{testimonial.author}</p>
                    <p className="text-sm text-purple-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
          <h3 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-white transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}>
            Ready to Transform
            <br className="hidden sm:inline" /> Your Business?
          </h3>
          <p className={`text-lg mb-10 text-purple-100 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`} style={{ animationDelay: "200ms" }}>
            Let's discuss your project and create something extraordinary together.
          </p>
          <div className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`} style={{ animationDelay: "400ms" }}>
            <Button className="bg-white text-purple-800 px-8 py-4 text-lg font-semibold rounded-full hover:scale-110 transition-transform duration-300 animate-pulse-slow">
              Start Your Project
            </Button>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
          }

          .animate-pulse-slow {
            animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>
      </section>

      <Footer />

      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 transform hover:scale-110 hover:shadow-purple-500/50 border border-purple-400/20 backdrop-blur-sm"
          aria-label="Back to top"
          style={{
            boxShadow: '0 10px 25px -5px rgba(147, 51, 234, 0.3), 0 4px 6px -2px rgba(147, 51, 234, 0.1)'
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
        </button>
      )}
    </main>
  );
}
