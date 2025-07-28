"use client";

import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  Smartphone,
  Mail,
  Users,
  Zap,
  Globe,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans overflow-x-hidden">
      <div className="min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans overflow-x-hidden">
        <Header />

        {/* Hero Section */}
        <section
          id="home"
          className="relative text-center px-6 py-20 md:py-32 bg-gradient-to-br from-black via-[#2c003e] to-black text-white min-h-screen flex items-center"
        >
          <div className="max-w-4xl mx-auto z-10 relative">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white animate-fade-in-up">
              Empowering Brands with <br />
              <TypeAnimation
                sequence={[
                  "Smart AI & Stunning Tech", // first text
                  2000, // wait 2s
                  "AI Automations & Web Apps",
                  2000,
                  "Conversion-Focused Designs",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text inline-block"
              />
            </h2>

            <p className="text-xl text-purple-200 mb-8 animate-fade-in-up-delay">
              We build automation-driven websites, apps, and solutions that
              scale your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up-delay-2">
              <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-8 py-4 text-lg rounded-full hover:scale-105 transition-all">
                Get Started
              </Button>
              <Button className="bg-transparent border-2 border-purple-500 text-purple-300 px-8 py-4 text-lg rounded-full hover:bg-purple-600 hover:text-white transition-all hover:scale-105">
                Book a Call
              </Button>
            </div>
          </div>
        </section>

        {/* Services Snapshot */}
        <section id="services" className="px-6 py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <h3
              className={`text-4xl font-bold text-center mb-12 text-purple-300 transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
            >
              Our Core Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example cards — repeat as needed */}
              {[
                {
                  title: "AI Automations",
                  desc: "Custom workflows for CRM, leads, and business ops.",
                  icon: <Zap className="w-8 h-8" />,
                },
                {
                  title: "Web Development",
                  desc: "Next.js, WordPress & Shopify sites that convert.",
                  icon: <Globe className="w-8 h-8" />,
                },
                {
                  title: "App Development",
                  desc: "Flutter & React Native for iOS & Android.",
                  icon: <Smartphone className="w-8 h-8" />,
                },
              ].map((s, i) => (
                <Card
                  key={i}
                  className={`bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-4 sm:p-6 border border-purple-800 text-white hover:scale-105 transition-all duration-500 ${
                    isVisible
                      ? "animate-fade-in-up"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  <CardHeader>
                    <div className="mb-4">{s.icon}</div>
                    <CardTitle>{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent>{s.desc}</CardContent>
                </Card>
              ))}
            </div>
            <div
              className={`text-center mt-12 transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: "600ms" }}
            >
              <a
                href="/services"
                className="text-purple-400 underline hover:text-purple-200 transition-colors"
              >
                View all services →
              </a>
            </div>
          </div>
        </section>

        {/* Portfolio Highlights */}
        <section
          id="portfolio"
          className="py-24 px-6 bg-gradient-to-bl from-[#0d001b] via-[#1b0035] to-black relative text-white"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-[600px] h-[600px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-20 left-1/4 -z-10"></div>
            <div className="w-[500px] h-[500px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 -z-10"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h3
              className={`text-4xl font-bold mb-16 text-purple-300 transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
            >
              Featured Work
            </h3>
            <div className="grid md:grid-cols-2 gap-10">
              {/* Card 1 */}
              <div
                className={`bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md hover:shadow-purple-700/30 transition-all duration-500 hover:scale-105 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: "200ms" }}
              >
                <img
                  src="/project1.png"
                  alt="Project 1"
                  className="rounded-lg mb-4 w-full h-auto object-cover"
                />
                <h4 className="text-xl font-semibold mb-2 text-purple-200">
                  E-commerce AI Store
                </h4>
                <p className="text-sm text-purple-300">
                  Smart product filters, AI chatbot, integrated analytics.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className={`bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md hover:shadow-purple-700/30 transition-all duration-500 hover:scale-105 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: "400ms" }}
              >
                <img
                  src="/project2.png"
                  alt="Project 2"
                  className="rounded-lg mb-4 w-full h-auto object-cover"
                ></img>
                <h4 className="text-xl font-semibold mb-2 text-purple-200">
                  Custom CRM Automation
                </h4>
                <p className="text-sm text-purple-300">
                  Workflow automation for lead tracking and reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-24 px-6 bg-gradient-to-br from-[#1a002f] via-[#2c003e] to-black relative text-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-96 h-96 bg-purple-900/20 rounded-full blur-3xl absolute top-0 left-1/2 -translate-x-1/2 -z-10"></div>
            <div className="w-80 h-80 bg-fuchsia-800/10 rounded-full blur-2xl absolute bottom-0 right-1/3 -z-10"></div>
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h3
              className={`text-4xl font-bold text-purple-300 mb-16 transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
            >
              Our Process
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
              {/* Step 1 */}
              <div
                className={`p-6 rounded-2xl border border-purple-800 bg-[#1a001f]/60 backdrop-blur-md shadow-lg hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: "200ms" }}
              >
                <div className="text-4xl mb-4">🔍</div>
                <h4 className="text-xl font-semibold text-purple-200 mb-2">
                  Discover
                </h4>
                <p className="text-sm text-purple-400">
                  We analyze your goals and uncover opportunities to automate
                  and innovate.
                </p>
              </div>

              {/* Step 2 */}
              <div
                className={`p-6 rounded-2xl border border-purple-800 bg-[#1a001f]/60 backdrop-blur-md shadow-lg hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: "400ms" }}
              >
                <div className="text-4xl mb-4">🛠</div>
                <h4 className="text-xl font-semibold text-purple-200 mb-2">
                  Build
                </h4>
                <p className="text-sm text-purple-400">
                  Our expert team designs, codes, and integrates smart solutions
                  tailored to you.
                </p>
              </div>

              {/* Step 3 */}
              <div
                className={`p-6 rounded-2xl border border-purple-800 bg-[#1a001f]/60 backdrop-blur-md shadow-lg hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: "600ms" }}
              >
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-semibold text-purple-200 mb-2">
                  Launch
                </h4>
                <p className="text-sm text-purple-400">
                  We deploy with precision and support your journey post-launch
                  for continued growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials (Slider) */}
        <section className="px-6 py-24 bg-gradient-to-br from-black via-[#150022] to-black text-white relative">
          <div className="max-w-4xl mx-auto text-center">
            <h3
              className={`text-4xl font-bold mb-12 text-purple-300 transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
            >
              What Our Clients Say
            </h3>

            <div
              className={`transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: "200ms" }}
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                className="w-full max-w-3xl swiper-custom"
              >
                <SwiperSlide>
                  <blockquote className="text-xl italic text-purple-200 leading-relaxed">
                    "TechFlow delivered exactly what we needed. Their AI
                    integration saved us hours every day."
                  </blockquote>
                  <p className="text-sm text-purple-400 mt-4">
                    — CEO, NextGen Corp
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <blockquote className="text-xl italic text-purple-200 leading-relaxed">
                    "Hexologix redesigned our entire frontend and boosted our
                    conversions by 30%."
                  </blockquote>
                  <p className="text-sm text-purple-400 mt-4">
                    — Sarah Malik, Product Manager
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <blockquote className="text-xl italic text-purple-200 leading-relaxed">
                    "Exceptional team. Delivered on time and exceeded
                    expectations on every milestone."
                  </blockquote>
                  <p className="text-sm text-purple-400 mt-4">
                    — Jonathan A., CTO at FinLogic
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Custom Swiper styles */}
            <style jsx global>{`
              .swiper-pagination {
                bottom: -30px !important;
                text-align: center !important;
              }

              .swiper-pagination-bullet-active {
                background: #c084fc; /* Tailwind's purple-400 */
              }

              .swiper-pagination {
                bottom: -30px !important;
              }
            `}</style>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-28 px-6 bg-gradient-to-br from-fuchsia-800 via-purple-700 to-black text-white text-center overflow-hidden">
          {/* ✨ Animated Glow Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="w-[700px] h-[700px] bg-fuchsia-500/20 blur-3xl rounded-full absolute -top-48 left-1/2 -translate-x-1/2 animate-pulse" />
            <div className="w-[400px] h-[400px] bg-white/5 rounded-full blur-2xl absolute bottom-0 left-1/3" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent)] opacity-50" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <h3
              className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-white transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
            >
              Let`s Build Something
              <br className="hidden sm:inline" /> Amazing Together
            </h3>
            <p
              className={`text-lg mb-10 text-purple-100 transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: "200ms" }}
            >
              Schedule a call or send us your ideas. We`ll bring them to life
              with precision.
            </p>
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: "400ms" }}
            >
              <Button className="bg-white text-purple-800 px-8 py-4 text-lg font-semibold rounded-full hover:scale-110 transition-transform duration-300 animate-pulse-slow">
                Get Started
              </Button>
            </div>
          </div>

          {/* Custom Animation */}
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

            .animate-fade-in-up-delay {
              animation: fadeInUp 1s ease-out forwards;
              animation-delay: 0.3s;
            }

            .animate-fade-in-up-delay-2 {
              animation: fadeInUp 1s ease-out forwards;
              animation-delay: 0.6s;
            }

            .animate-pulse-slow {
              animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
          `}</style>
        </section>
        <Footer />
      </div>
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-purple-700 hover:bg-fuchsia-700 text-white p-3 rounded-full shadow-lg z-50 transition-transform transform hover:scale-110"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </main>
  );
}
