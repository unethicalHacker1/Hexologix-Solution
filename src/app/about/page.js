"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Code, Heart, Shield, Clock } from "lucide-react";
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

/** Shared viewport config so items animate as you scroll DOWN */
const inView = { once: false, amount: 0.25, margin: "-10% 0px -10% 0px" };

// Team data
const TEAM = [
  {
    name: "Ateeb Chaudary",
    role: "CEO & Founder",
    image: "/ateeb.png",
    bio: "Visionary leader with a decade of experience driving innovation in AI, automation, and business transformation.",
    expertise: ["AI Strategy", "Business Leadership", "Automation", "Digital Transformation"],
    linkedin: "https://www.linkedin.com/in/ateeb-chaudary-a6a0a0263/",
    github: "https://github.com/Ateeb-333",
  },
  {
    name: "Khubaib Shabbir",
    role: "Co-Founder & Senior Web Developer",
    image: "/khubaib.png",
    bio: "Full-stack web developer with a passion for building scalable, high-performance applications.",
    expertise: ["Full-Stack Development", "Cloud Solutions", "API Integration", "Scalable Architecture"],
    linkedin: "https://www.linkedin.com/in/khubaib-shabbir/",
    github: "https://github.com/KhubaibShabbir4",
  },
  {
    name: "Muhammad Soban",
    role: "Senior Web Developer",
    image: "/Soban.png",
    bio: "Detail-oriented developer delivering modern, user-friendly, and responsive web solutions.",
    expertise: ["Front-End Development", "Back-End Development", "UI/UX Implementation", "Responsive Design"],
    linkedin: "https://www.linkedin.com/in/muhammad-soban-2979a231a/",
    github: "https://github.com/unethicalHacker1",
  },
  {
    name: "Asad Meeran",
    role: "Senior App Developer",
    image: "/asad.png",
    bio: "Specialist in mobile application development with expertise in performance optimization and cross-platform solutions.",
    expertise: ["Mobile App Development", "Flutter", "React Native", "App Performance Optimization"],
    linkedin: "https://www.linkedin.com/in/asad-meeran-b4662b29a/",
    github: "https://github.com/ajasad25",
  },
  {
    name: "Zain Imran",
    role: "Marketing Manager",
    image: "/zain.png",
    bio: "Creative marketing strategist focused on brand growth, digital campaigns, and audience engagement.",
    expertise: ["Digital Marketing", "Brand Strategy", "Social Media Management", "Content Marketing"],
    linkedin: "https://www.linkedin.com/in/zain-imran-347a24251/",
    github: "https://github.com/Zainimran699",
  },
];

// Values data
const VALUES = [
  {
    icon: <Heart className="w-12 h-12 text-fuchsia-400" />,
    title: "Passion for Innovation",
    desc: "We're driven by the endless possibilities of technology and its power to transform businesses.",
    details: ["Cutting-edge solutions", "Continuous learning", "Creative problem-solving"],
  },
  {
    icon: <Target className="w-12 h-12 text-purple-400" />,
    title: "Client Success Focus",
    desc: "Your success is our success. We measure our achievements by the impact we create for our clients.",
    details: ["Results-driven approach", "Long-term partnerships", "Measurable outcomes"],
  },
  {
    icon: <Shield className="w-12 h-12 text-pink-400" />,
    title: "Quality & Reliability",
    desc: "We maintain the highest standards in every project, ensuring robust and scalable solutions.",
    details: ["Best practices", "Thorough testing", "Ongoing support"],
  },
];

// Stats data
const STATS = [
  { number: "150+", label: "Projects Completed", icon: <Code className="w-8 h-8" /> },
  { number: "50+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
  { number: "5+", label: "Years Experience", icon: <Clock className="w-8 h-8" /> },
  { number: "99%", label: "Client Satisfaction", icon: <Award className="w-8 h-8" /> },
];

// Timeline data
const TIMELINE = [
  { year: "2019", title: "Company Founded", desc: "Started with a vision to democratize AI and automation for businesses of all sizes." },
  { year: "2020", title: "First Major Client", desc: "Successfully delivered our first enterprise AI automation solution." },
  { year: "2021", title: "Team Expansion", desc: "Grew our team to 10+ experts and expanded service offerings." },
  { year: "2022", title: "International Reach", desc: "Started serving clients globally across multiple industries." },
  { year: "2023", title: "Innovation Hub", desc: "Launched our innovation lab for cutting-edge AI research and development." },
  { year: "2024", title: "Future Forward", desc: "Continuing to push boundaries with next-generation AI solutions." },
];

export default function AboutPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function TeamCard({ name, role, image, bio, expertise, linkedin, github }) {
    return (
      <motion.div
        variants={cardVariants}
        className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-purple-900 backdrop-blur-xl shadow-md hover:shadow-purple-700/30 transition-all duration-500 hover:scale-105 text-center h-full flex flex-col"
      >
        <div className="relative mb-6">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-purple-700/30 group-hover:border-fuchsia-400/50 transition-colors">
            <Image src={image} alt={name} width={96} height={96} className="w-full h-full object-cover" />
          </div>
        </div>

        <h4 className="text-xl font-semibold mb-2 text-purple-200 group-hover:text-white transition-colors">
          {name}
        </h4>
        <p className="text-fuchsia-400 text-sm mb-3 font-medium">{role}</p>

        {/* flex-grow keeps heights equal */}
        <p className="text-sm text-purple-300 mb-4 leading-relaxed flex-grow">{bio}</p>

        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {expertise.map((skill, idx) => (
            <span key={idx} className="text-xs bg-purple-900/30 text-purple-200 px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-auto" />

        <div className="flex justify-center space-x-3 pt-2">
          <a href={linkedin} className="text-purple-400 hover:text-white transition-colors" aria-label={`${name} on LinkedIn`}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* GitHub icon (replaces Twitter) */}
          <a href={github} className="text-purple-400 hover:text-white transition-colors" aria-label={`${name} on GitHub`}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.206 11.387.6.113.82-.262.82-.58 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.758-1.333-1.758-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23 1.02-.284 2.11-.427 3.2-.404 1.09-.023 2.18.12 3.2.404 2.29-1.552 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.902-.015 3.297 0 .32.216.698.825.58C20.565 21.796 24 17.297 24 12 24 5.37 18.63 0 12 0Z" />
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
        className="group p-8 rounded-2xl border border-purple-800 bg-[#1a001f]/60 backdrop-blur-md shadow-lg hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 text-center h-full flex flex-col"
      >
        <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h4 className="text-xl font-semibold text-purple-200 mb-3 group-hover:text-white transition-colors">
          {title}
        </h4>
        <p className="text-sm text-purple-400 mb-4 flex-grow">{desc}</p>
        <ul className="text-xs text-purple-300 space-y-1 mt-auto">
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
            About <br />
            <TypeAnimation
              sequence={["Hexologix Solutions", 2000, "Our Mission", 2000, "Our Vision", 2000]}
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
            We are a team of passionate innovators dedicated to transforming
            businesses through cutting-edge technology and creative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-3 mt-6"
          >
            <Link href="/contact#form">
              <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-3 text-sm rounded-full hover:scale-105 transition-all" aria-label="Get Started with Hexologix">
                Get Started
              </Button>
            </Link>

            <Link href="/Portfolio">
              <Button className="bg-transparent border-2 border-purple-500 text-purple-300 px-6 py-3 text-sm rounded-full hover:bg-purple-600 hover:text-white transition-all hover:scale-105" aria-label="View Our Work">
                View Our Work
              </Button>
            </Link>
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
          viewport={inView}
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
                  "Scalable and future-proof solutions",
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
          viewport={inView}
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
          viewport={inView}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {VALUES.map((value, i) => (
            <motion.div key={i} variants={itemVariants} className="h-full">
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
          viewport={inView}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {TEAM.map((member, i) => {
            const isZain = member.name === "Zain Imran";
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`h-full ${isZain ? "lg:col-span-2 lg:col-start-2" : ""}`}
              >
                <TeamCard {...member} />
              </motion.div>
            );
          })}
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
          viewport={inView}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-fuchsia-400 to-purple-400 hidden md:block"></div>

          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`flex items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:gap-8`}
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
            viewport={inView}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-white"
          >
            Ready to Work Together?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={inView}
            className="text-lg mb-10 text-purple-100"
          >
            Let&apos;s discuss how we can help transform your business with our
            innovative solutions.
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
      <WhatsAppButton />

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
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </main>
  );
}
