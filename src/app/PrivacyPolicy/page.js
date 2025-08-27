"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { cardVariants } from "@/lib/animations";

export default function PrivacyPolicyPage() {
  // Show the back-to-top button only after user starts scrolling
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 40);
    onScroll(); // set initial state on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Section = ({ id, title, children }) => (
    <motion.section
      id={id}
      variants={cardVariants}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      className="rounded-2xl border border-purple-900 bg-white/5 backdrop-blur-xl p-6 sm:p-8 text-purple-100"
    >
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">{title}</h3>
      <div className="space-y-3 leading-relaxed text-sm sm:text-base">{children}</div>
    </motion.section>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#2c003e] to-black text-white font-sans overflow-x-hidden">
      <Head>
        <title>Privacy Policy | Hexologix</title>
        <meta
          name="description"
          content="Hexologix Privacy Policy: how we collect, use, and protect your data."
        />
        <meta property="og:title" content="Privacy Policy | Hexologix" />
        <meta
          property="og:description"
          content="Hexologix Privacy Policy: how we collect, use, and protect your data."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Header />

      {/* Hero */}
      <section className="relative text-center px-4 sm:px-6 lg:px-8 py-20 md:py-28 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-[800px] h-[800px] bg-fuchsia-700/10 blur-3xl rounded-full absolute -top-24 left-1/2 -translate-x-1/2 animate-pulse" />
          <div
            className="w-[600px] h-[600px] bg-purple-800/10 blur-2xl rounded-full absolute bottom-0 right-1/3 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-4xl mx-auto z-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight"
          >
            Privacy Policy
            <br />
            <TypeAnimation
              sequence={[
                "Your data. Your control.", 2200,
                "Secure. Transparent. Fair.", 2200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-fuchsia-500 to-purple-400 text-transparent bg-clip-text inline-block"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-purple-200 max-w-2xl mx-auto"
          >
            This Privacy Policy explains how Hexologix (“we”, “us”, “our”) collects, uses, and
            protects your information when you visit our website, contact us, or use our services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <Link href="/contact#form">
              <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-3 text-sm rounded-full hover:scale-105 transition-all">
                Contact Us
              </Button>
            </Link>
            <a href="#your-rights">
              <Button className="bg-transparent border-2 border-purple-500 text-purple-300 px-6 py-3 text-sm rounded-full hover:bg-purple-600 hover:text-white transition-all hover:scale-105">
                Your Rights
              </Button>
            </a>
          </motion.div>

          <p className="mt-6 text-xs text-purple-400">Last updated: 10 Aug 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6">
            <Section id="information-we-collect" title="Information We Collect">
              <p>
                We collect information that you provide directly (e.g., name, email, company, and message details) when you submit forms, book a call, or engage our services. We also collect limited technical data automatically, such as IP address, device type, browser, pages visited, and timestamps.
              </p>
              <ul className="list-disc pl-6 marker:text-fuchsia-400">
                <li>Contact details and business context you share with us</li>
                <li>Project files you voluntarily upload for scoping</li>
                <li>Usage analytics (aggregated and non-identifying)</li>
              </ul>
            </Section>

            <Section id="how-we-use" title="How We Use Information">
              <ul className="list-disc pl-6 marker:text-fuchsia-400">
                <li>Provide, operate, and improve our website and services</li>
                <li>Respond to inquiries, proposals, and support requests</li>
                <li>Send transactional updates (e.g., meeting links, invoices)</li>
                <li>Perform analytics to enhance performance and user experience</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>
            </Section>

            <Section id="cookies-tracking" title="Cookies & Tracking">
              <p>
                We use essential cookies for site functionality and may use analytics cookies to
                understand traffic and improve the experience. You can manage cookies via your
                browser settings. Disabling certain cookies may affect site features.
              </p>
            </Section>

            <Section id="data-sharing" title="Data Sharing & Third Parties">
              <p>
                We do not sell your personal data. We may share limited information with service
                providers who help us operate (e.g., hosting, analytics, communications) under
                contracts that require appropriate safeguards. We may disclose information if
                required by law, to protect our rights, or during a business transfer.
              </p>
            </Section>

            <Section id="data-retention" title="Data Retention">
              <p>
                We retain personal information only as long as necessary for the purposes described
                in this Policy, to comply with legal obligations, resolve disputes, and enforce our
                agreements. When no longer needed, we securely delete or anonymize it.
              </p>
            </Section>

            <Section id="security" title="Security">
              <p>
                We apply reasonable technical and organizational measures—such as encryption in
                transit, access controls, and least-privilege practices—to protect your data.
                However, no method of transmission or storage is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </Section>

            <Section id="your-rights" title="Your Rights & Choices">
              <p>
                Depending on your location, you may have rights to access, correct, update, or
                delete personal information; object to or restrict processing; and request data
                portability. You can also opt out of non-essential communications.
              </p>
              <p>
                To exercise rights, contact us at{" "}
                <a href="mailto:info@hexologixsolutions.com" className="text-fuchsia-300 underline">
                  info@hexologixsolutions.com
                </a>
                . We may need to verify your identity to process certain requests.
              </p>
            </Section>

            <Section id="children" title="Children’s Privacy">
              <p>
                Our website and services are not directed to children under 13 (or the relevant age
                of consent in your jurisdiction). We do not knowingly collect personal information
                from children. If you believe a child has provided us data, please contact us and we
                will take appropriate steps to remove it.
              </p>
            </Section>

            <Section id="international" title="International Data Transfers">
              <p>
                If you access our services from outside our hosting region, your information may be
                processed in countries with different data protection laws. Where required, we use
                appropriate safeguards for such transfers.
              </p>
            </Section>

            <Section id="changes" title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. The “Last updated” date at the
                top reflects the latest revision. Significant changes will be posted on this page;
                continued use of our site after changes indicates acceptance.
              </p>
            </Section>

            <Section id="contact" title="Contact Us">
              <p>
                Questions or requests? Reach us at{" "}
                <a href="mailto:hexologixsolutions@gmail.com" className="text-fuchsia-300 underline">
                  hexologixsolutions@gmail.com
                </a>{" "}
                or via our{" "}
                <Link href="/contact#form" className="text-fuchsia-300 underline">
                  contact form
                </Link>
                .
              </p>
            </Section>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/contact#form">
                <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-3 text-sm rounded-full hover:scale-105 transition-all">
                  Request Data / Ask a Question
                </Button>
              </Link>
              <Link href="/">
                <Button className="bg-transparent border-2 border-purple-500 text-purple-300 px-6 py-3 text-sm rounded-full hover:bg-purple-600 hover:text-white transition-all hover:scale-105">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-fuchsia-800 via-purple-700 to-black text-white text-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="w-[700px] h-[700px] bg-fuchsia-500/20 blur-3xl rounded-full absolute -top-48 left-1/2 -translate-x-1/2 animate-pulse" />
          <div className="w-[400px] h-[400px] bg-white/5 rounded-full blur-2xl absolute bottom-0 left-1/3" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent)] opacity-50" />
        </div>
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl font-extrabold mb-6"
          >
            Need more details?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-purple-100 mb-8"
          >
            We’re happy to explain how we handle data on projects, audits, and ongoing support.
          </motion.p>
          <Link href="/contact#form">
            <Button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-3 text-sm rounded-full hover:scale-105 transition-all">
              Talk to Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      {/* Back to Top Button — appears after scrolling */}
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </main>
  );
}
