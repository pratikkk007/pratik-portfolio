"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-20 py-10">

      {/* HERO */}
      <section className="mb-28">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Pratik Wani
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-2xl">
          Full-Stack Software Engineer crafting scalable, secure and high-performance web applications.
        </p>

        <p className="mt-4 text-gray-500 max-w-2xl">
          React • Next.js • Node.js • Java • Microservices • AI-driven systems
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">
          <a href="/resume.pdf" download className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Download Resume
          </a>

          <a href="#contact" className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-gray-800 transition">
            Contact Me
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mb-28 max-w-3xl">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p className="text-gray-400 leading-relaxed text-lg">
          Full-Stack Software Engineer with 3+ years of experience designing and delivering scalable, secure, and high-performance applications in the digital banking domain.
          I specialize in building modern frontend systems with React and Next.js, backed by robust microservices using Node.js and Java Spring Boot.
          I focus on performance optimization, clean architecture, and creating seamless user experiences that scale.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="mb-28">
        <h2 className="text-3xl font-semibold mb-10">Experience</h2>

        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl hover:scale-[1.02] transition">

          <h3 className="text-2xl font-semibold">Accenture</h3>
          <p className="text-gray-400 mb-6">Advanced Application Development Analyst • Dec 2022 – Present</p>

          <div className="space-y-4 text-gray-300 text-[15px] leading-relaxed">
            <p>• Engineered scalable, customer-facing digital banking applications using React.js and modern JavaScript (ES6+), improving user journeys across authentication, onboarding, and payments.</p>

            <p>• Built secure, high-performance REST APIs and microservices using Node.js and Spring Boot, enabling seamless integration with core banking systems.</p>

            <p>• Modernized authentication systems by implementing JWT-based security, biometrics, and Strong Customer Authentication (SCA), significantly enhancing platform security.</p>

            <p>• Translated Figma designs into reusable, modular UI components following modern frontend architecture and accessibility standards.</p>

            <p>• Boosted application performance by ~90% through API optimization, efficient state handling, and reducing unnecessary network calls.</p>

            <p>• Automated CI/CD pipelines using Jenkins, reducing deployment time by ~40% and improving release reliability.</p>

            <p>• Collaborated with architects and cross-functional teams to design scalable microservices architecture and drive technical decisions.</p>

            <p>• Delivered mission-critical modules including payments, transfers, and card flows, ensuring high availability and reliability.</p>

            <p>• Handled production incidents, debugging, and system monitoring to maintain stability and meet SLA requirements.</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-28">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold">AI Fitness Coach</h3>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              Built a full-stack AI-powered fitness platform with authentication, dashboards, and personalized recommendations using OpenAI APIs. Designed modular React UI and scalable backend services.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold">AI Finance Dashboard</h3>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              Developed a secure finance tracking app with JWT authentication, expense management, and AI-powered insights for personalized financial recommendations.
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="mb-28">
        <h2 className="text-3xl font-semibold mb-10">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "React.js",
            "Next.js",
            "Node.js",
            "Java",
            "Spring Boot",
            "Microservices",
            "REST APIs",
            "JWT",
            "SQL",
            "Tailwind CSS",
            "CI/CD",
            "Jenkins",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-white/10 px-4 py-2 rounded-full text-sm hover:bg-white/20 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mb-20 max-w-xl">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <form
          action="https://formspree.io/f/YOUR_ID"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
          />

          <button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-gray-500 text-sm text-center mt-20">
        © 2026 Pratik Wani — Built with precision ⚡
      </footer>

    </main>
  );
}