"use client";

import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ExternalLink, Github, Calendar, Tag, Star
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  containerVariants, 
  itemVariants, 
  cardVariants, 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight,
  commonAnimationProps 
} from "@/lib/animations";

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-commerce AI Store",
      category: "web",
      description: "A modern e-commerce platform with AI-powered product recommendations, smart search, and automated inventory management.",
      image: "/project1.png",
      technologies: ["Next.js", "AI/ML", "Stripe", "PostgreSQL"],
      year: "2024",
      rating: 5,
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: {
        users: "10K+",
        revenue: "$500K+",
        conversion: "15%"
      }
    },
    {
      id: 2,
      title: "Custom CRM Automation",
      category: "automation",
      description: "Workflow automation system for lead tracking, customer management, and sales reporting with AI insights.",
      image: "/project2.png",
      technologies: ["Python", "FastAPI", "React", "MongoDB"],
      year: "2024",
      rating: 5,
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: {
        leads: "5K+",
        efficiency: "80%",
        timeSaved: "20hrs/week"
      }
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      category: "mobile",
      description: "Cross-platform fitness tracking app with personalized workout plans and progress analytics.",
      image: "/project3.png",
      technologies: ["Flutter", "Firebase", "Node.js", "TensorFlow"],
      year: "2023",
      rating: 4,
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: {
        downloads: "50K+",
        activeUsers: "15K+",
        rating: "4.8"
      }
    },
    {
      id: 4,
      title: "AI Content Generator",
      category: "ai",
      description: "AI-powered content creation tool for marketing teams with SEO optimization and brand voice consistency.",
      image: "/project4.png",
      technologies: ["OpenAI", "React", "Express", "Redis"],
      year: "2023",
      rating: 5,
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: {
        content: "10K+",
        timeSaved: "90%",
        accuracy: "95%"
      }
    },
    {
      id: 5,
      title: "Real Estate Platform",
      category: "web",
      description: "Comprehensive real estate platform with virtual tours, mortgage calculator, and agent matching.",
      image: "/project5.png",
      technologies: ["Vue.js", "Django", "PostgreSQL", "AWS"],
      year: "2023",
      rating: 4,
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: {
        properties: "25K+",
        agents: "500+",
        transactions: "2K+"
      }
    },
    {
      id: 6,
      title: "Supply Chain Dashboard",
      category: "automation",
      description: "Real-time supply chain monitoring and optimization system with predictive analytics.",
      image: "/project6.png",
      technologies: ["React", "Python", "Kafka", "Elasticsearch"],
      year: "2023",
      rating: 5,
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: {
        efficiency: "40%",
        costReduction: "25%",
        accuracy: "99%"
      }
    }
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "web", name: "Web Development", count: projects.filter(p => p.category === "web").length },
    { id: "mobile", name: "Mobile Apps", count: projects.filter(p => p.category === "mobile").length },
    { id: "ai", name: "AI Solutions", count: projects.filter(p => p.category === "ai").length },
    { id: "automation", name: "Automation", count: projects.filter(p => p.category === "automation").length }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Add CSS animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
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
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans overflow-x-hidden">
      <Header/>
      {/* Hero Section */}
      <section className="relative text-center px-6 py-20 md:py-32 bg-gradient-to-br from-black via-[#2c003e] to-black text-white">
        <div className="max-w-4xl mx-auto z-10 relative">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Our <br />
            <TypeAnimation
              sequence={[
                "Portfolio of Innovation", // first text
                2000, // wait 2s
                "Portfolio of Excellence",
                2000,
                "Portfolio of Success",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text inline-block"
            />
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Discover our latest projects and innovative solutions that drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <div key={category.id} className="relative">
                <button
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full transition-colors duration-300 ease-in-out h-12 flex items-center justify-center border ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white border-purple-500'
                      : 'bg-purple-900/30 border-purple-700 text-purple-300 hover:bg-purple-800/50 hover:border-purple-500'
                  }`}
                  style={{
                    minHeight: '48px',
                    minWidth: '120px'
                  }}
                >
                  {category.name} ({category.count})
                </button>
                {activeFilter === category.id && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 opacity-20 pointer-events-none"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="px-6 py-24 bg-gradient-to-r from-[#1a001f] via-[#2c003e] to-black text-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-purple-300 transition-all duration-500">
            {activeFilter === "all" 
              ? "All Projects" 
              : categories.find(cat => cat.id === activeFilter)?.name || "All Projects"
            }
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur border border-purple-800 text-white hover:scale-105 transition-all duration-500 ease-in-out group"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 flex items-center justify-center">
                    <div className="text-4xl">💻</div>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" className="bg-purple-600/80 hover:bg-purple-500 text-white">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-purple-600/80 hover:bg-purple-500 text-white">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Featured
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="flex items-center gap-1 text-yellow-400">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-purple-200 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-purple-800/50 border border-purple-700 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-purple-800/50 border border-purple-700 rounded-full text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-purple-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {project.category}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-purple-300">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.filter(p => p.featured).map((project) => (
              <Card key={project.id} className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur border border-purple-800 text-white hover:scale-105 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="w-full h-64 bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 flex items-center justify-center">
                    <div className="text-6xl">🚀</div>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="sm" className="bg-purple-600/80 hover:bg-purple-500 text-white">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-purple-600/80 hover:bg-purple-500 text-white">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Featured
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <div className="flex items-center gap-1 text-yellow-400">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-purple-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-800/50 border border-purple-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="bg-purple-800/30 rounded-lg p-3">
                        <div className="text-lg font-bold text-purple-300">{value}</div>
                        <div className="text-xs text-purple-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black text-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-purple-300 mb-12">Our Impact</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-800">
              <div className="text-4xl font-bold text-purple-300 mb-2">50+</div>
              <div className="text-purple-200">Projects Delivered</div>
            </div>
            <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-800">
              <div className="text-4xl font-bold text-purple-300 mb-2">100K+</div>
              <div className="text-purple-200">Users Reached</div>
            </div>
            <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-800">
              <div className="text-4xl font-bold text-purple-300 mb-2">$2M+</div>
              <div className="text-purple-200">Revenue Generated</div>
            </div>
            <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-800">
              <div className="text-4xl font-bold text-purple-300 mb-2">98%</div>
              <div className="text-purple-200">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-fuchsia-800 via-purple-700 to-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h3>
          <p className="text-lg mb-8 text-purple-100">Let`s create something amazing together. Get in touch to discuss your ideas.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-white text-purple-800 px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all">
                Start a Project
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg rounded-full hover:bg-white hover:text-purple-800 transition-all">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer/>

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