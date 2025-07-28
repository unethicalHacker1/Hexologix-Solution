"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Smartphone, Mail, Users, Zap, Globe, ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { 
      title: "AI Automations", 
      desc: "Streamline CRM, lead flows & tasks with intelligent automation that adapts to your business needs.",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      title: "Web Development", 
      desc: "Responsive websites, landing pages & eCommerce solutions built with cutting-edge technologies.",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      title: "App Development", 
      desc: "Cross-platform mobile apps using Flutter or React Native for seamless user experiences.",
      icon: <Smartphone className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      title: "Email Marketing", 
      desc: "Cold outreach, campaigns, and smart automations that convert prospects into customers.",
      icon: <Mail className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500"
    },
    { 
      title: "Social Media Marketing", 
      desc: "Content strategy, targeted ads & audience growth across all major platforms.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      title: "Custom Solutions", 
      desc: "Tailored technology solutions designed specifically for your unique business challenges.",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const features = [
    "Custom AI Solutions",
    "Scalable Architecture",
    "24/7 Support",
    "Agile Development",
    "Performance Optimization",
    "Security First"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-900 font-sans overflow-x-hidden">
      {/* Navbar */}
      <header className={`w-full py-4 px-4 md:px-12 flex justify-between items-center sticky top-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-transparent'
      }`}>
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Code className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            TechFlow
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#services" className="hover:text-blue-600 transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </a>
          <a href="#about" className="hover:text-blue-600 transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </a>
        </nav>

        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative text-center px-6 py-20 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-sm font-medium mb-8 animate-pulse">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Solutions
          </div>

          <h2 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 text-transparent bg-clip-text">
              Transform Your Business
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              with AI & Technology
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
            We craft intelligent solutions that automate processes, enhance user experiences, and drive exponential growth for forward-thinking businesses.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="group text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-full">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6 border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 rounded-full">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 text-gray-400 animate-bounce" />
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-24 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-blue-800 text-transparent bg-clip-text">
                Our Services
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-base leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-purple-600 transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-blue-800 text-transparent bg-clip-text">
                  Why Choose TechFlow?
                </span>
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that don`t just meet your needs – they exceed your expectations.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-6 text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-full">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Lightning Fast</h4>
                      <p className="text-blue-100">Optimized for performance</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Expert Team</h4>
                      <p className="text-blue-100">5+ years of experience</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Global Reach</h4>
                      <p className="text-blue-100">Serving clients worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed">
            Let`s discuss your project and explore how we can help you achieve extraordinary results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              asChild
              className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300 rounded-full shadow-lg"
            >
              <a href="mailto:hello@techflow.com" className="flex items-center">
                <Mail className="mr-2 w-5 h-5" />
                Contact Us Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300 rounded-full"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold">TechFlow</h4>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Transforming businesses through innovative AI solutions and cutting-edge technology.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Automations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">App Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-gray-400">
                <li>hello@techflow.com</li>
                <li>+1 (555) 123-4567</li>
                <li>24/7 Support</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} TechFlow. All rights reserved. Built with ❤️ for innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}