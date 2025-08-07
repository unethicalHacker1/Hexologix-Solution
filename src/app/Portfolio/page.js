"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import {
  Code,
  Users,
  Shield,
  Clock,
  ExternalLink,
  Github,
  Eye,
} from "lucide-react";
import { useState, useEffect } from "react";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

import {
  containerVariants,
  itemVariants,
  cardVariants,
} from "@/lib/animations";

// Portfolio data with enhanced details
const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "E-commerce AI Store",
    category: "Web Development",
    image: "/project1.jpg",
    description: "Smart product filters, AI chatbot, integrated analytics.",
    longDescription:
      "A comprehensive e-commerce platform with AI-powered product recommendations, intelligent search, and automated customer support. Features include real-time inventory management, personalized user experiences, and advanced analytics dashboard.",
    technologies: [
      "Next.js",
      "AI Integration",
      "E-commerce",
      "Stripe",
      "MongoDB",
    ],
    features: [
      "AI-powered product recommendations",
      "Intelligent search and filtering",
      "Automated customer support chatbot",
      "Real-time inventory management",
      "Advanced analytics dashboard",
    ],
    client: "TechRetail Inc.",
    duration: "3 months",
    team: "4 developers",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Custom CRM Automation",
    category: "AI Automation",
    image: "/project2.jpg",
    description: "Workflow automation for lead tracking and reporting.",
    longDescription:
      "A custom CRM system with intelligent workflow automation, lead scoring, and predictive analytics. Streamlines sales processes and provides actionable insights for business growth.",
    technologies: ["Python", "React", "Database", "AI/ML", "AWS"],
    features: [
      "Intelligent lead scoring",
      "Automated workflow triggers",
      "Predictive analytics",
      "Custom reporting dashboard",
      "Integration with existing tools",
    ],
    client: "SalesForce Solutions",
    duration: "4 months",
    team: "3 developers",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "HRMS",
    category: "App Development",
    image: "/project1.jpg",
    description: "Flutter-based app with real-time features and offline sync.",
    longDescription:
      "A feature-rich mobile application built with Flutter for both iOS and Android platforms. Includes real-time messaging, offline data synchronization, and push notifications.",
    technologies: [
      "Flutter",
      "Firebase",
      "Real-time",
      "Push Notifications",
      "Offline Sync",
    ],
    features: [
      "Cross-platform compatibility",
      "Real-time messaging",
      "Offline data synchronization",
      "Push notifications",
      "User authentication",
    ],
    client: "ConnectApp",
    duration: "5 months",
    team: "5 developers",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Modern Dashboard Design",
    category: "UI/UX Design",
    image: "/project2.jpg",
    description: "Comprehensive design system with interactive prototypes.",
    longDescription:
      "A complete design system and interactive dashboard for a financial services company. Includes user research, wireframing, prototyping, and design implementation.",
    technologies: [
      "Figma",
      "Prototyping",
      "Design System",
      "User Research",
      "React",
    ],
    features: [
      "Comprehensive design system",
      "Interactive prototypes",
      "User research and testing",
      "Responsive design",
      "Accessibility compliance",
    ],
    client: "FinanceHub",
    duration: "2 months",
    team: "2 designers",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "AI-Powered Analytics Platform",
    category: "AI Automation",
    image: "/project1.jpg",
    description: "Machine learning platform for business intelligence.",
    longDescription:
      "An advanced analytics platform that uses machine learning to provide business intelligence and predictive insights. Processes large datasets and generates actionable reports.",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker"],
    features: [
      "Machine learning models",
      "Real-time data processing",
      "Predictive analytics",
      "Custom reporting",
      "API integration",
    ],
    client: "DataInsights Corp",
    duration: "6 months",
    team: "6 developers",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Social Media Management Tool",
    category: "Web Development",
    image: "/project2.jpg",
    description: "Comprehensive social media scheduling and analytics.",
    longDescription:
      "A complete social media management platform that allows users to schedule posts, analyze performance, and manage multiple accounts from a single dashboard.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Social APIs", "Analytics"],
    features: [
      "Multi-platform scheduling",
      "Performance analytics",
      "Content calendar",
      "Team collaboration",
      "Automated posting",
    ],
    client: "SocialPro",
    duration: "4 months",
    team: "4 developers",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

// Categories for filtering
const CATEGORIES = [
  "All",
  "Web Development",
  "AI Automation",
  "App Development",
  "UI/UX Design",
];

// Stats data
const STATS = [
  {
    number: "50+",
    label: "Projects Completed",
    icon: <Code className="w-8 h-8" />,
  },
  {
    number: "30+",
    label: "Happy Clients",
    icon: <Users className="w-8 h-8" />,
  },
  {
    number: "95%",
    label: "Client Satisfaction",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    number: "24/7",
    label: "Support Available",
    icon: <Clock className="w-8 h-8" />,
  },
];

export default function PortfolioPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter(
          (project) => project.category === selectedCategory
        );

  function PortfolioCard({ project }) {
    return (
      <motion.div
        variants={cardVariants}
        className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md hover:shadow-purple-700/30 transition-all duration-500 hover:scale-105 focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 focus-within:ring-offset-black"
        tabIndex={0}
        role="article"
        aria-label={`Project: ${project.title}`}
      >
        <div className="relative overflow-hidden rounded-lg mb-4">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 group-focus-within:scale-110"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300" />

          {/* Project links overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
              <button
                onClick={() => setSelectedProject(project)}
                className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="View project details"
              >
                <Eye className="w-5 h-5" />
              </button>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="View live project"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="View source code"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mb-3">
          <span className="inline-block bg-fuchsia-600/20 text-fuchsia-300 text-xs px-2 py-1 rounded-full mb-2">
            {project.category}
          </span>
          {project.featured && (
            <span className="inline-block bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full mb-2 ml-2">
              Featured
            </span>
          )}
        </div>

        <h4 className="text-xl font-semibold mb-2 text-purple-200 group-hover:text-white group-focus-within:text-white transition-colors">
          {project.title}
        </h4>
        <p className="text-sm text-purple-300 mb-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="text-xs bg-purple-900/30 text-purple-200 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs bg-purple-900/30 text-purple-200 px-2 py-1 rounded">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="flex justify-between items-center text-xs text-purple-400">
          <span>{project.duration}</span>
          <span>{project.team}</span>
        </div>
      </motion.div>
    );
  }

  function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gradient-to-br from-[#1a002f] to-black border border-purple-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-purple-300">{project.client}</p>
              </div>
              <button
                onClick={onClose}
                className="text-purple-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Project Overview
                  </h3>
                  <p className="text-purple-200 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-purple-200"
                      >
                        <span className="text-fuchsia-400">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-900/30 text-purple-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  function StatCard({ number, label, icon }) {
    return (
      <motion.div
        variants={itemVariants}
        className="text-center p-6 rounded-2xl border border-purple-800 bg-[#1a001f]/40 backdrop-blur-md"
      >
        <div className="flex justify-center mb-4 text-fuchsia-400">{icon}</div>
        <div className="text-3xl font-bold text-white mb-2">{number}</div>
        <div className="text-sm text-purple-300">{label}</div>
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
          <div
            className="w-[600px] h-[600px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div className="max-w-4xl mx-auto z-10 relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
          >
            Our Portfolio <br />
            <TypeAnimation
              sequence={[
                "Featured Projects",
                2000,
                "Success Stories",
                2000,
                "Innovation Showcase",
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
            Discover how we&apos;ve transformed businesses with our innovative
            solutions and cutting-edge technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-3 mt-6"
          >
            <Link href="/contact#form">
              <Button
                className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-3 text-sm rounded-full hover:scale-105 transition-all"
                aria-label="Get Started with Hexologix"
              >
                Start Your Project
              </Button>
            </Link>
            <Link href="/Portfolio">
              <Button
                className="bg-transparent border-2 border-purple-500 text-purple-300 px-6 py-3 text-sm rounded-full hover:bg-purple-600 hover:text-white transition-all hover:scale-105"
                aria-label="Get Started with Hexologix"
              >
                View All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <SectionWrapper backgroundType="secondary">
        <SectionHeader
          title="Our Impact"
          subtitle="Numbers that tell our story of success and growth"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible" // ✅ no scroll detection needed
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {STATS.map((stat, i) => (
            <motion.div key={i} variants={itemVariants}>
              <StatCard {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Portfolio Section */}
      <SectionWrapper backgroundType="tertiary">
        <SectionHeader
          title="Featured Projects"
          subtitle="Explore our latest work and success stories"
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-fuchsia-600 text-white"
                  : "bg-white/10 text-purple-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, i) => (
            <motion.div key={project.id} variants={itemVariants}>
              <PortfolioCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-purple-300 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper backgroundType="cta">
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-white"
          >
            Ready to Start Your Project?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-lg mb-10 text-purple-100"
          >
            Let&apos;s discuss how we can help bring your vision to life with
            our innovative solutions.
          </motion.p>
          <Link href="/contact#form">
            <Button
              className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-3 text-sm rounded-full hover:scale-105 transition-all"
              aria-label="Get Started with Hexologix"
            >
              Start Your Project
            </Button>
          </Link>
        </div>
      </SectionWrapper>

      <Footer />

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 transform hover:scale-110 hover:shadow-purple-500/50 border border-purple-400/20 backdrop-blur-sm"
          aria-label="Back to top"
          style={{
            boxShadow:
              "0 10px 25px -5px rgba(147, 51, 234, 0.3), 0 4px 6px -2px rgba(147, 51, 234, 0.1)",
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
        </motion.button>
      )}
    </main>
  );
}
