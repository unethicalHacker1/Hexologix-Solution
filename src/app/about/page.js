"use client";
import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Target,
  Award,
  Globe,
  Code,
  Heart,
  TrendingUp,
  Shield,
  Clock,
  Zap,
  Palette,
  Database,
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

// Team data
const TEAM = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/team1.jpg",
    bio: "Visionary leader with 10+ years in tech innovation",
    expertise: ["AI Strategy", "Business Development", "Product Vision"],
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Michael Chen",
    role: "CTO & Lead Developer",
    image: "/team2.jpg",
    bio: "Full-stack expert specializing in scalable architectures",
    expertise: ["System Architecture", "AI Integration", "Cloud Solutions"],
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "/team3.jpg",
    bio: "Creative director focused on user-centered design",
    expertise: ["UX Research", "Design Systems", "Brand Strategy"],
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "David Kim",
    role: "AI Solutions Architect",
    image: "/team4.jpg",
    bio: "Machine learning specialist with deep automation expertise",
    expertise: ["ML Models", "Automation", "Data Science"],
    linkedin: "#",
    twitter: "#"
  }
];

// Values data
const VALUES = [
  {
    icon: <Heart className="w-12 h-12 text-fuchsia-400" />,
    title: "Passion for Innovation",
    desc: "We're driven by the endless possibilities of technology and its power to transform businesses.",
    details: ["Cutting-edge solutions", "Continuous learning", "Creative problem-solving"]
  },
  {
    icon: <Target className="w-12 h-12 text-purple-400" />,
    title: "Client Success Focus",
    desc: "Your success is our success. We measure our achievements by the impact we create for our clients.",
    details: ["Results-driven approach", "Long-term partnerships", "Measurable outcomes"]
  },
  {
    icon: <Shield className="w-12 h-12 text-pink-400" />,
    title: "Quality & Reliability",
    desc: "We maintain the highest standards in every project, ensuring robust and scalable solutions.",
    details: ["Best practices", "Thorough testing", "Ongoing support"]
  }
];

// Stats data
const STATS = [
  { number: "150+", label: "Projects Completed", icon: <Code className="w-8 h-8" /> },
  { number: "50+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
  { number: "5+", label: "Years Experience", icon: <Clock className="w-8 h-8" /> },
  { number: "99%", label: "Client Satisfaction", icon: <Award className="w-8 h-8" /> }
];

// Timeline data
const TIMELINE = [
  {
    year: "2019",
    title: "Company Founded",
    desc: "Started with a vision to democratize AI and automation for businesses of all sizes."
  },
  {
    year: "2020",
    title: "First Major Client",
    desc: "Successfully delivered our first enterprise AI automation solution."
  },
  {
    year: "2021",
    title: "Team Expansion",
    desc: "Grew our team to 10+ experts and expanded service offerings."
  },
  {
    year: "2022",
    title: "International Reach",
    desc: "Started serving clients globally across multiple industries."
  },
  {
    year: "2023",
    title: "Innovation Hub",
    desc: "Launched our innovation lab for cutting-edge AI research and development."
  },
  {
    year: "2024",
    title: "Future Forward",
    desc: "Continuing to push boundaries with next-generation AI solutions."
  }
];

export default function AboutPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function TeamCard({ name, role, image, bio, expertise, linkedin, twitter }) {
    return (
      <motion.div
        variants={cardVariants}
        className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md hover:shadow-purple-700/30 transition-all duration-500 hover:scale-105 text-center"
      >
        <div className="relative mb-6">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-purple-700/30 group-hover:border-fuchsia-400/50 transition-colors">
            <Image 
              src={image} 
              alt={name} 
              width={96} 
              height={96} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h4 className="text-xl font-semibold mb-2 text-purple-200 group-hover:text-white transition-colors">{name}</h4>
        <p className="text-fuchsia-400 text-sm mb-3 font-medium">{role}</p>
        <p className="text-sm text-purple-300 mb-4 leading-relaxed">{bio}</p>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {expertise.map((skill, idx) => (
            <span key={idx} className="text-xs bg-purple-900/30 text-purple-200 px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex justify-center space-x-3">
          <a href={linkedin} className="text-purple-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href={twitter} className="text-purple-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
      </motion.div>
    );
  }

  function ValueCard({ icon, title, desc, details }) {
    return (
      <motion.div
        variants={cardVariants}
        className="group p-8 rounded-2xl border border-purple-800 bg-[#1a001f]/60 backdrop-blur-md shadow-lg hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 text-center"
      >
        <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h4 className="text-xl font-semibold text-purple-200 mb-3 group-hover:text-white transition-colors">{title}</h4>
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

  function StatCard({ number, label, icon }) {
    return (
      <motion.div
        variants={itemVariants}
        className="text-center p-6 rounded-2xl border border-purple-800 bg-[#1a001f]/40 backdrop-blur-md"
      >
        <div className="flex justify-center mb-4 text-fuchsia-400">
          {icon}
        </div>
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
          <div className="w-[600px] h-[600px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto z-10 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
          >
            About <br />
            <TypeAnimation
              sequence={[
                "Hexologix Solutions",
                2000,
                "Our Mission",
                2000,
                "Our Vision",
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
            We're a team of passionate innovators dedicated to transforming businesses through cutting-edge technology and creative solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-3 mt-6"
          >
            <CTAButton variant="primary">Get Started</CTAButton>
            <CTAButton variant="secondary">View Our Work</CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <SectionWrapper backgroundType="secondary">
        <SectionHeader 
          title="Our Mission & Vision"
          subtitle="Driving innovation and empowering businesses through technology"
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <h4 className="text-2xl font-semibold mb-4 text-fuchsia-400">Our Mission</h4>
              <p className="text-purple-200 leading-relaxed">
                To democratize AI and automation technology, making powerful digital solutions accessible to businesses of all sizes. We believe every company deserves the tools to compete in the digital age.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <h4 className="text-2xl font-semibold mb-4 text-purple-400">Our Vision</h4>
              <p className="text-purple-200 leading-relaxed">
                To be the leading force in AI-driven business transformation, creating a future where technology enhances human potential and drives sustainable growth for organizations worldwide.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-gradient-to-br from-fuchsia-600/20 to-purple-600/20 p-8 rounded-2xl border border-fuchsia-400/30">
              <h4 className="text-2xl font-semibold mb-6 text-white">Why Choose Us?</h4>
              <ul className="space-y-4">
                {[
                  "Expert team with deep technical expertise",
                  "Proven track record of successful projects",
                  "Client-centric approach to every solution",
                  "Cutting-edge technology and methodologies",
                  "Ongoing support and maintenance",
                  "Scalable and future-proof solutions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-purple-200">
                    <span className="text-fuchsia-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper backgroundType="tertiary">
        <SectionHeader 
          title="Our Impact"
          subtitle="Numbers that tell our story of success and growth"
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {STATS.map((stat, i) => (
            <motion.div key={i} variants={itemVariants}>
              <StatCard {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper backgroundType="secondary">
        <SectionHeader 
          title="Our Core Values"
          subtitle="The principles that guide everything we do"
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {VALUES.map((value, i) => (
            <motion.div key={i} variants={itemVariants}>
              <ValueCard {...value} />
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper backgroundType="tertiary">
        <SectionHeader 
          title="Meet Our Team"
          subtitle="The brilliant minds behind our innovative solutions"
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TEAM.map((member, i) => (
            <motion.div key={i} variants={itemVariants}>
              <TeamCard {...member} />
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Timeline Section */}
      <SectionWrapper backgroundType="secondary">
        <SectionHeader 
          title="Our Journey"
          subtitle="Key milestones in our growth and development"
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-fuchsia-400 to-purple-400 hidden md:block"></div>
          
          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className={`flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
              >
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
                    <div className="text-2xl font-bold text-fuchsia-400 mb-2">{item.year}</div>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-purple-200">{item.desc}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-fuchsia-400 rounded-full border-4 border-purple-900 shadow-lg"></div>
                </div>
                
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
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
            Ready to Work Together?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg mb-10 text-purple-100"
          >
            Let's discuss how we can help transform your business with our innovative solutions.
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