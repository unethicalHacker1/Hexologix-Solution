"use client";

import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import { Star, Award, Users, Target, Heart, Zap, Globe, Code, Smartphone, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { 
  containerVariants, 
  itemVariants, 
  cardVariants, 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight,
  commonAnimationProps 
} from "@/lib/animations";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission");

  const services = [
    { name: "AI Automation", icon: "🤖", desc: "Intelligent process automation solutions" },
    { name: "Web Development", icon: "🌐", desc: "Modern, responsive web applications" },
    { name: "App Development", icon: "📱", desc: "Native and cross-platform mobile apps" },
    { name: "UI/UX Design", icon: "🎨", desc: "User-centered design experiences" },
    { name: "Digital Marketing", icon: "📈", desc: "Data-driven marketing strategies" },
    { name: "Email Marketing", icon: "📧", desc: "Automated email campaigns" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "TechFlow transformed our business with their AI automation solutions. Our efficiency increased by 300%!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, DigitalCraft",
      content: "The team at TechFlow delivered an exceptional website that perfectly captures our brand vision.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "Their digital marketing strategies helped us achieve 150% growth in just 6 months.",
      rating: 5
    }
  ];

  const achievements = [
    { year: "2023", title: "Best AI Solution Provider", org: "Tech Awards 2023" },
    { year: "2022", title: "Top 10 Web Development Companies", org: "Design Weekly" },
    { year: "2021", title: "Innovation Excellence Award", org: "Digital Innovation Summit" },
    { year: "2020", title: "Startup of the Year", org: "TechCrunch" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="pt-20">
        
        {/* 1. Introduction Section */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-fuchsia-400 to-purple-500 text-transparent bg-clip-text">
                  Transforming Ideas
                </span>
                <br />
                <TypeAnimation
                  sequence={[
                    "Into Digital Reality", // first text
                    2000, // wait 2s
                    "Into Smart Solutions",
                    2000,
                    "Into Future Success",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-purple-200"
                />
              </h1>
              <p className="text-xl md:text-2xl text-purple-300 leading-relaxed max-w-4xl mx-auto mb-8">
                We are a team of passionate tech innovators crafting intelligent solutions that drive business growth. 
                At TechFlow, we don't just build software – we build the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 text-lg font-semibold">
                    Start Your Project
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="bg-transparent border-2 border-purple-500 text-purple-300 px-8 py-4 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 text-lg font-semibold">
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Mission & Vision Section */}
        <section className="px-6 py-20 bg-gradient-to-br from-purple-900/20 to-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-purple-300 mb-8">Our Mission & Vision</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-8 rounded-2xl border border-purple-800"
              >
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-fuchsia-400 mr-4" />
                  <h3 className="text-2xl font-bold text-fuchsia-400">Our Mission</h3>
                </div>
                <p className="text-purple-200 text-lg leading-relaxed">
                  To empower businesses with cutting-edge technology solutions that automate, enhance, and accelerate their growth. 
                  We strive to be the catalyst that transforms traditional operations into intelligent, efficient, and scalable digital enterprises.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-8 rounded-2xl border border-purple-800"
              >
                <div className="flex items-center mb-6">
                  <Globe className="w-8 h-8 text-fuchsia-400 mr-4" />
                  <h3 className="text-2xl font-bold text-fuchsia-400">Our Vision</h3>
                </div>
                <p className="text-purple-200 text-lg leading-relaxed">
                  To become the global leader in AI-driven digital transformation, setting new standards for innovation, 
                  quality, and client success. We envision a future where every business operates with intelligent automation at its core.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Values Section */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-purple-300 mb-8">Our Core Values</h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                The principles that guide every decision we make and every solution we deliver
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                { title: "Innovation", desc: "Pushing boundaries with cutting-edge technology", icon: "🚀", color: "from-blue-500 to-cyan-500" },
                { title: "Excellence", desc: "Delivering exceptional quality in everything we do", icon: "⭐", color: "from-yellow-500 to-orange-500" },
                { title: "Collaboration", desc: "Working together to achieve extraordinary results", icon: "🤝", color: "from-green-500 to-emerald-500" },
                { title: "Integrity", desc: "Building trust through honest, transparent relationships", icon: "💎", color: "from-purple-500 to-pink-500" },
                { title: "Customer-Centric", desc: "Putting our clients' success at the heart of everything", icon: "❤️", color: "from-red-500 to-pink-500" },
                { title: "Agility", desc: "Adapting quickly to changing needs and technologies", icon: "⚡", color: "from-indigo-500 to-purple-500" }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-8 rounded-2xl border border-purple-800 text-center hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-6`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-fuchsia-400 mb-4">{value.title}</h3>
                  <p className="text-purple-200">{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. Meet the Team Section */}
        <section className="px-6 py-20 bg-gradient-to-br from-purple-900/20 to-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-purple-300 mb-8">Meet Our Team</h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                The brilliant minds behind every innovative solution we deliver
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  name: "Hanan Mehmood", 
                  role: "AI/Automation Expert", 
                  emoji: "🤖",
                  bio: "Leading our AI initiatives with 8+ years of experience in machine learning and automation",
                  expertise: ["Machine Learning", "Process Automation", "AI Strategy"]
                },
                { 
                  name: "Ali Raza", 
                  role: "Frontend Developer", 
                  emoji: "💻",
                  bio: "Crafting beautiful, responsive user interfaces with modern web technologies",
                  expertise: ["React", "Next.js", "UI/UX"]
                },
                { 
                  name: "Areeba Khan", 
                  role: "UI/UX Designer", 
                  emoji: "🎨",
                  bio: "Creating intuitive and engaging user experiences that users love",
                  expertise: ["User Research", "Prototyping", "Design Systems"]
                },
                { 
                  name: "Usman Tariq", 
                  role: "Backend Developer", 
                  emoji: "⚙️",
                  bio: "Building robust, scalable backend systems that power our applications",
                  expertise: ["Node.js", "Python", "Database Design"]
                },
                { 
                  name: "Sara Naveed", 
                  role: "Marketing Strategist", 
                  emoji: "📈",
                  bio: "Driving growth through data-driven marketing strategies and campaigns",
                  expertise: ["Digital Marketing", "Analytics", "Growth Hacking"]
                },
                { 
                  name: "Ahmed Hassan", 
                  role: "DevOps Engineer", 
                  emoji: "🚀",
                  bio: "Ensuring seamless deployment and infrastructure management",
                  expertise: ["AWS", "Docker", "CI/CD"]
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-6 rounded-2xl border border-purple-800 hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{member.emoji}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                  <p className="text-fuchsia-400 font-medium mb-3">{member.role}</p>
                  <p className="text-purple-200 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-purple-800/30 rounded-full text-xs text-purple-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Services Section */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-purple-300 mb-8">Our Services</h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                Comprehensive solutions designed to solve your business challenges
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-8 rounded-2xl border border-purple-800 hover:scale-105 transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-fuchsia-400 mb-4">{service.name}</h3>
                  <p className="text-purple-200 mb-6">{service.desc}</p>
                  <div className="flex items-center text-purple-300 group-hover:text-fuchsia-400 transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Our Story Section */}
        <section className="px-6 py-20 bg-gradient-to-br from-purple-900/20 to-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-purple-300 mb-8">Our Story</h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                From a small startup to a leading technology company
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-3xl font-bold text-fuchsia-400 mb-6">The Journey Begins</h3>
                <p className="text-purple-200 text-lg leading-relaxed mb-6">
                  Founded in 2020 by a group of passionate developers and designers, TechFlow started as a small team 
                  with a big vision: to make technology accessible and beneficial for businesses of all sizes.
                </p>
                <p className="text-purple-200 text-lg leading-relaxed mb-6">
                  What began as a web development agency quickly evolved into a comprehensive technology partner, 
                  as we recognized the growing need for intelligent automation and AI-driven solutions.
                </p>
                <p className="text-purple-200 text-lg leading-relaxed">
                  Today, we're proud to have helped over 200+ businesses transform their operations and achieve 
                  remarkable growth through our innovative solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-8 rounded-2xl border border-purple-800"
              >
                <h4 className="text-2xl font-bold text-fuchsia-400 mb-6">Key Milestones</h4>
                <div className="space-y-6">
                  {[
                    { year: "2020", title: "Company Founded", desc: "Started with 3 team members" },
                    { year: "2021", title: "First 50 Clients", desc: "Reached our first major milestone" },
                    { year: "2022", title: "AI Division Launch", desc: "Expanded into AI automation" },
                    { year: "2023", title: "200+ Clients", desc: "Served over 200 businesses" }
                  ].map((milestone, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {milestone.year}
                      </div>
                      <div>
                        <h5 className="text-white font-semibold mb-1">{milestone.title}</h5>
                        <p className="text-purple-300 text-sm">{milestone.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. Testimonials Section */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-purple-300 mb-8">What Our Clients Say</h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                Real feedback from businesses we've helped transform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-8 rounded-2xl border border-purple-800"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-purple-200 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-fuchsia-400 text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. What Sets Us Apart Section */}
        <section className="px-6 py-20 bg-gradient-to-br from-purple-900/20 to-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-purple-300 mb-8">What Sets Us Apart</h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                The unique advantages that make us your ideal technology partner
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "AI-First Approach",
                  desc: "We integrate AI into every solution, ensuring maximum efficiency and intelligence",
                  icon: "🧠"
                },
                {
                  title: "Rapid Delivery",
                  desc: "Agile development process that delivers results in weeks, not months",
                  icon: "⚡"
                },
                {
                  title: "24/7 Support",
                  desc: "Round-the-clock technical support and maintenance for all our solutions",
                  icon: "🛡️"
                },
                {
                  title: "Scalable Solutions",
                  desc: "Built to grow with your business, from startup to enterprise",
                  icon: "📈"
                },
                {
                  title: "Industry Expertise",
                  desc: "Deep knowledge across multiple industries and use cases",
                  icon: "🎯"
                },
                {
                  title: "Future-Proof Technology",
                  desc: "Using cutting-edge technologies that stand the test of time",
                  icon: "🔮"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-6 rounded-2xl border border-purple-800"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-fuchsia-400 mb-2">{feature.title}</h3>
                      <p className="text-purple-200">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Company Culture Section */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-purple-300 mb-8">Our Culture</h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                The environment that fuels our creativity and innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-8 rounded-2xl border border-purple-800"
              >
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-6">Work Environment</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-fuchsia-400" />
                    <span className="text-purple-200">Flexible remote-first culture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-fuchsia-400" />
                    <span className="text-purple-200">Collaborative team environment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-fuchsia-400" />
                    <span className="text-purple-200">Continuous learning and growth</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code className="w-5 h-5 text-fuchsia-400" />
                    <span className="text-purple-200">Innovation-driven mindset</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-fuchsia-400 mb-6">How We Work</h3>
                <p className="text-purple-200 text-lg leading-relaxed mb-6">
                  Our culture is built on trust, transparency, and teamwork. We believe in empowering our team members 
                  to take ownership of their work and contribute their unique perspectives to every project.
                </p>
                <p className="text-purple-200 text-lg leading-relaxed mb-6">
                  We foster an environment where creativity thrives, innovation is encouraged, and continuous learning 
                  is a way of life. This culture directly translates into the quality and creativity of solutions we deliver to our clients.
                </p>
                <p className="text-purple-200 text-lg leading-relaxed">
                  From weekly innovation sessions to monthly team building activities, we ensure our team stays motivated, 
                  connected, and inspired to deliver exceptional results.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 10. Achievements & Milestones Section */}
        <section className="px-6 py-20 bg-gradient-to-br from-purple-900/20 to-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-purple-300 mb-8">Achievements & Recognition</h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                Celebrating our milestones and industry recognition
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-6 rounded-2xl border border-purple-800 text-center"
                >
                  <Award className="w-12 h-12 text-fuchsia-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-fuchsia-400 text-sm mb-2">{achievement.org}</p>
                  <p className="text-purple-300 text-lg font-bold">{achievement.year}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 text-center"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-8 rounded-2xl border border-purple-800">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">200+</div>
                  <p className="text-purple-200">Happy Clients</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-8 rounded-2xl border border-purple-800">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">500+</div>
                  <p className="text-purple-200">Projects Completed</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur p-8 rounded-2xl border border-purple-800">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">98%</div>
                  <p className="text-purple-200">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 11. Call to Action Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-purple-300 mb-8">Ready to Transform Your Business?</h2>
              <p className="text-xl text-purple-200 mb-12 leading-relaxed">
                Let's discuss how our innovative technology solutions can help you achieve your business goals 
                and stay ahead of the competition.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link href="/contact">
                  <button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 text-lg font-semibold">
                    Start Your Project
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="bg-transparent border-2 border-purple-500 text-purple-300 px-10 py-4 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 text-lg font-semibold">
                    Schedule a Call
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-6 h-6 text-fuchsia-400" />
                  <span className="text-purple-200">hello@techflow.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6 text-fuchsia-400" />
                  <span className="text-purple-200">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-6 h-6 text-fuchsia-400" />
                  <span className="text-purple-200">San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}