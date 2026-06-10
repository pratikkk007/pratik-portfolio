"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaFilePdf,
  FaEnvelope,
} from "react-icons/fa";


export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-20 py-10 overflow-hidden relative">
    
    <header
  className="
  fixed
  top-0
  left-0
  w-full
  z-50
  backdrop-blur-xl
  bg-black/60
  border-b
  border-white/10
  "
>
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    <h1 className="
font-bold
text-xl
bg-gradient-to-r
from-blue-400
to-purple-500
bg-clip-text
text-transparent
">
  Pratik Wani
</h1>

    <nav className="hidden md:flex gap-8 text-sm text-gray-400">

      <a href="#about" className="text-gray-400
hover:text-white
relative
after:absolute
after:left-0
after:-bottom-1
after:w-0
after:h-[2px]
after:bg-blue-400
after:transition-all
hover:after:w-full">
        About
      </a>

      <a href="#experience" className="text-gray-400
hover:text-white
relative
after:absolute
after:left-0
after:-bottom-1
after:w-0
after:h-[2px]
after:bg-blue-400
after:transition-all
hover:after:w-full">
        Experience
      </a>

      <a href="#projects" className="text-gray-400
hover:text-white
relative
after:absolute
after:left-0
after:-bottom-1
after:w-0
after:h-[2px]
after:bg-blue-400
after:transition-all
hover:after:w-full">
        Projects
      </a>

      <a href="#skills" className="text-gray-400
hover:text-white
relative
after:absolute
after:left-0
after:-bottom-1
after:w-0
after:h-[2px]
after:bg-blue-400
after:transition-all
hover:after:w-full">
        Skills
      </a>

      <a href="#contact" className="text-gray-400
hover:text-white
relative
after:absolute
after:left-0
after:-bottom-1
after:w-0
after:h-[2px]
after:bg-blue-400
after:transition-all
hover:after:w-full">
        Contact
      </a>

    </nav>

  </div>
</header>

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full" />

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-32 relative z-10 pt-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-blue-400 font-medium mb-4 tracking-widest uppercase">
  React • Spring Boot • Microservices • Banking • Healthcare
</p>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
  Pratik Wani
</h1>

<h2 className="
mt-2
text-3xl
md:text-5xl
font-bold
text-transparent
bg-clip-text
bg-gradient-to-r
from-blue-400
via-cyan-400
to-purple-500
">
  Full Stack Engineer
</h2>

            <p className="mt-8 text-xl text-gray-400 max-w-2xl leading-relaxed">
  Full Stack Engineer with 4+ years of experience building
  Banking, Healthcare and AI-powered applications using
  React, Spring Boot, Microservices and Cloud technologies.
</p>

            <p className="mt-4 text-gray-400">
              React • Next.js • Spring Boot • TypeScript • Azure • AI Solutions
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">

  <span className="
    px-4 py-2
    rounded-full
    bg-green-500/10
    border
    border-green-500/30
    text-green-400
    text-sm
  ">
    ● Open to Opportunities
  </span>

  <span className="
    px-4 py-2
    rounded-full
    bg-blue-500/10
    border
    border-blue-500/30
    text-blue-400
    text-sm
  ">
    Remote / Hybrid
  </span>

</div>

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="/resume.pdf"
                download
                className="
px-6 py-3
rounded-2xl
bg-white
text-black
font-semibold
hover:scale-105
hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]
transition-all
duration-300
"
              >
                Download Resume
              </a>

              <a
                href="https://github.com/pratikkk007"
                target="_blank"
                className="
flex items-center gap-2
px-6 py-3
rounded-2xl
bg-white/5
backdrop-blur-xl
border border-white/10
hover:border-blue-500/50
hover:bg-white/10
hover:scale-105
transition-all
duration-300
"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/pratik-wani-60073b184/"
                target="_blank"
                className="
flex items-center gap-2
px-6 py-3
rounded-2xl
bg-white/5
backdrop-blur-xl
border border-white/10
hover:border-blue-500/50
hover:bg-white/10
hover:scale-105
transition-all
duration-300
"
              >
                <FaLinkedin />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">

  <div className="absolute w-[350px] h-[350px] bg-blue-500/30 blur-[120px] rounded-full" />

  <img
    src="/profile.jpeg"
    alt="Pratik Wani"
    className="
      relative
      w-[320px]
      h-[420px]
      object-cover
      rounded-[32px]
      border
      border-white/10
      shadow-[0_0_60px_rgba(59,130,246,0.3)]
      hover:scale-105
      transition-all
      duration-500
    "
  />

</div>
        </div>

        <section className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    Key Achievements
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {[
      {
        title: "90%",
        desc: "Performance Improvement"
      },
      {
        title: "40%",
        desc: "Faster Deployments"
      },
      {
        title: "4+ Years",
        desc: "Enterprise Development"
      },
      {
        title: "5+",
        desc: "Industry Certifications"
      },
    ].map((item) => (

      <div
        key={item.title}
        className="
        bg-gradient-to-br
        from-blue-500/10
        to-purple-500/10
        p-8
        rounded-3xl
        border
        border-white/10
        hover:border-blue-500/50
        hover:-translate-y-2
        hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]
        transition-all
        duration-300
        "
      >

        <h3 className="text-5xl font-bold text-blue-400">
          {item.title}
        </h3>

        <p className="mt-3 text-gray-400">
          {item.desc}
        </p>

      </div>

    ))}

  </div>

</section>
      </motion.section>

      {/* FEATURED TECH */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mb-28"
      >
        <h2 className="text-4xl font-bold mb-10">
  Featured Technologies
</h2>

        <div className="grid md:grid-cols-4 gap-5">

          {[
 { name:"React", icon:"⚛️" },
 { name:"Java", icon:"☕" },
 { name:"Next.js", icon:"▲" },
 { name:"Spring Boot", icon:"🍃" },
 { name:"Microservices", icon:"🔗" },
 { name:"TypeScript", icon:"TS" },
 { name:"Node.js", icon:"🟢" },
 { name:"CI/CD", icon:"🚀" },
].map((item) => (
            <div
              key={item.name}
              className="
group
bg-gradient-to-br
from-blue-500/10
to-purple-500/10
p-8
rounded-3xl
border
border-white/10
hover:border-blue-500/50
hover:-translate-y-2
hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]
transition-all
duration-300
"
            >
              <div className="flex items-center gap-3">
  <span className="text-2xl">
    {item.icon}
  </span>

  <span className="font-medium text-lg">
    {item.name}
  </span>
</div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ABOUT */}
      <section id="about" className="mb-28">
        <h2 className="text-3xl font-semibold mb-8">
          About
        </h2>

        <p className="text-gray-400 leading-relaxed text-lg max-w-4xl">
          Full-Stack Software Engineer with 4+ years of experience
          building secure, scalable and high-performance enterprise
          applications across Banking and Healthcare domains.
          Experienced in React.js, Next.js, TypeScript,
          Java, Spring Boot, REST APIs and Microservices architecture.
          Delivered critical digital banking journeys including
          authentication, payments, transfers and approvals while
          contributing to healthcare platforms supporting AI-powered
          provider guidance and care management.
        </p>
      </section>
          
      {/* EXPERIENCE */}
      <section id="experience" className="mb-28">
        <h2 className="text-3xl font-semibold mb-10">
          Experience
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">

          <div
className="
bg-gradient-to-br
from-blue-500/10
to-purple-500/10
p-10
rounded-[32px]
border
border-white/10
hover:border-blue-500/50
hover:-translate-y-2
hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]
transition-all
duration-300
">
            <h3 className="text-3xl font-bold mb-2">
  Irish Banking Client
</h3>

            <p className="text-gray-400 mb-6">
              Dec 2022 – Mar 2026
            </p>

            <ul className="space-y-3 text-gray-300">
              <li>• Built digital banking applications using React.js.</li>
              <li>• Developed Spring Boot microservices.</li>
              <li>• Improved performance by 90%.</li>
              <li>• Reduced deployment time by 40%.</li>
              <li>• Delivered payments and transfer journeys.</li>
            </ul>
          </div>

          <div
className="
bg-gradient-to-br
from-blue-500/10
to-purple-500/10
p-10
rounded-[32px]
border
border-white/10
hover:border-blue-500/50
hover:-translate-y-2
hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]
transition-all
duration-300
">
            <h3 className="text-3xl font-bold mb-2">
  US Healthcare Client
</h3>

            <p className="text-gray-400 mb-6">
              Mar 2026 – Present
            </p>

            <ul className="space-y-3 text-gray-300">
              <li>• Built healthcare portals using React & Next.js.</li>
              <li>• Integrated healthcare REST APIs.</li>
              <li>• Supported AI-powered Care Guide Advisor.</li>
              <li>• Worked with Azure PostgreSQL.</li>
              <li>• Managed production support and releases.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="mb-28">
  <h2 className="text-4xl font-bold mb-10">
    Certifications & Awards
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {[
      {
        title: "AZ-900",
        issuer: "Microsoft Azure Fundamentals",
      },
      {
        title: "DP-900",
        issuer: "Microsoft Data Fundamentals",
      },
      {
        title: "SC-900",
        issuer: "Microsoft Security Fundamentals",
      },
      {
        title: "AI-900",
        issuer: "Microsoft AI Fundamentals",
      },
      {
        title: "GitHub Copilot GH-300",
        issuer: "GitHub & Microsoft",
      },
      {
        title: "Star Performer Award",
        issuer: "Accenture",
      },
    ].map((item) => (

      <div
        key={item.title}
        className="
        group
        bg-gradient-to-br
        from-blue-500/10
        to-purple-500/10
        p-8
        rounded-3xl
        border
        border-white/10
        hover:border-blue-500/50
        hover:-translate-y-2
        hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
        transition-all
        duration-300
        "
      >

        {/* Premium Accent */}
        <div className="
          w-14
          h-1
          bg-gradient-to-r
          from-blue-400
          to-purple-500
          rounded-full
          mb-6
          group-hover:w-20
          transition-all
          duration-300
        "></div>

        <h3 className="
          text-xl
          font-bold
          text-white
          mb-2
        ">
          {item.title}
        </h3>

        <p className="
          text-gray-400
          text-sm
        ">
          {item.issuer}
        </p>

      </div>

    ))}

  </div>
</section>

      {/* PROJECTS */}
      <section id="projects" className="mb-28">
        <h2 className="text-3xl font-semibold mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-1 gap-8">

          <div
className="
bg-gradient-to-br
from-blue-500/10
to-purple-500/10
p-8
rounded-3xl
border
border-white/10
hover:border-blue-500/50
hover:-translate-y-2
hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
transition-all
duration-300
">

          <p className="
text-xs
uppercase
tracking-widest
text-blue-400
mb-3
">
Featured Project
</p>
            <h3 className="text-2xl font-bold">
              AI Fitness Coach
            </h3>

            <p className="mt-4 text-gray-400">
              AI-powered fitness platform featuring JWT Authentication,
              MongoDB Atlas, ExerciseDB Integration, BMI Calculator,
              Calorie Calculator, Nutrition Guidance,
              Personalized Workout Plans, TypeScript Migration,
              and deployment using Vercel & Render.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">

  {[
    "JWT",
    "MongoDB Atlas",
    "Open AI API",
    "ExerciseDB",
    "TypeScript",
    "Node.js",
    "Vercel",
    "Render"
  ].map((tech) => (
    <span
      key={tech}
      className="
      px-3
      py-1
      rounded-full
      bg-blue-500/10
      border
      border-blue-500/20
      text-sm
      "
    >
      {tech}
    </span>
  ))}

</div>

            <div className="flex gap-3 mt-6">

  <a
    href="https://ai-fitness-app-swart.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="
    px-4 py-2
    rounded-xl
    bg-green-500/20
    border border-green-500/30
    hover:bg-green-500/30
    transition
    "
  >
    🚀 Live Demo
  </a>

  <a
    href="https://github.com/pratikkk007/AI-Fitness-App"
    target="_blank"
    rel="noopener noreferrer"
    className="
    px-4 py-2
    rounded-xl
    bg-blue-500/20
    border border-blue-500/30
    hover:bg-blue-500/30
    transition
    "
  >
    💻 GitHub
  </a>

</div>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mb-28">

        <h2 className="text-4xl font-bold mb-10">
  Skills & Technologies
</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="
bg-gradient-to-br
from-blue-500/10
to-purple-500/10
p-6
rounded-3xl
border
border-white/10
hover:border-blue-500/50
hover:-translate-y-2
transition-all
duration-300
">
  <h3 className="font-semibold mb-4 text-xl">
    Frontend
  </h3>

  <div className="flex flex-wrap gap-2">
    {[
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind"
    ].map((skill) => (
      <span
        key={skill}
        className="
        px-3
        py-1
        rounded-full
        bg-blue-500/10
        border
        border-blue-500/20
        text-sm
        "
      >
        {skill}
      </span>
    ))}
  </div>
</div>

          <div className="
bg-gradient-to-br
from-blue-500/10
to-purple-500/10
p-6
rounded-3xl
border
border-white/10
hover:border-blue-500/50
hover:-translate-y-2
transition-all
duration-300
">
  <h3 className="font-semibold mb-4 text-xl">
    Backend
  </h3>

  <div className="flex flex-wrap gap-2">
    {[
      "Java",
      "Spring Boot",
      "Node.js",
      "Express",
      "Microservices"
    ].map((skill) => (
      <span
        key={skill}
        className="
        px-3
        py-1
        rounded-full
        bg-blue-500/10
        border
        border-blue-500/20
        text-sm
        "
      >
        {skill}
      </span>
    ))}
  </div>
</div>

          <div className="
bg-gradient-to-br
from-blue-500/10
to-purple-500/10
p-6
rounded-3xl
border
border-white/10
hover:border-blue-500/50
hover:-translate-y-2
transition-all
duration-300
">
  <h3 className="font-semibold mb-4 text-xl">
    Database
  </h3>

  <div className="flex flex-wrap gap-2">
    {[
      "MongoDB",
      "PostgreSQL",
      "MySQL"
    ].map((skill) => (
      <span
        key={skill}
        className="
        px-3
        py-1
        rounded-full
        bg-blue-500/10
        border
        border-blue-500/20
        text-sm
        "
      >
        {skill}
      </span>
    ))}
  </div>
</div>

          <div className="
bg-gradient-to-br
from-blue-500/10
to-purple-500/10
p-6
rounded-3xl
border
border-white/10
hover:border-blue-500/50
hover:-translate-y-2
transition-all
duration-300
">
  <h3 className="font-semibold mb-4 text-xl">
    Cloud
  </h3>

  <div className="flex flex-wrap gap-2">
    {["Azure"].map((skill) => (
      <span
        key={skill}
        className="
        px-3
        py-1
        rounded-full
        bg-blue-500/10
        border
        border-blue-500/20
        text-sm
        "
      >
        {skill}
      </span>
    ))}
  </div>
</div>

          <div className="
bg-gradient-to-br
from-blue-500/10
to-purple-500/10
p-6
rounded-3xl
border
border-white/10
hover:border-blue-500/50
hover:-translate-y-2
transition-all
duration-300
">
  <h3 className="font-semibold mb-4 text-xl">
    DevOps
  </h3>

  <div className="flex flex-wrap gap-2">
    {[
      "Jenkins",
      "GitHub Actions",
      "CI/CD"
    ].map((skill) => (
      <span
        key={skill}
        className="
        px-3
        py-1
        rounded-full
        bg-blue-500/10
        border
        border-blue-500/20
        text-sm
        "
      >
        {skill}
      </span>
    ))}
  </div>
</div>

          <div className="
bg-gradient-to-br
from-blue-500/10
to-purple-500/10
p-6
rounded-3xl
border
border-white/10
hover:border-blue-500/50
hover:-translate-y-2
transition-all
duration-300
">
  <h3 className="font-semibold mb-4 text-xl">
    Security
  </h3>

  <div className="flex flex-wrap gap-2">
    {[
      "JWT",
      "OAuth",
      "SCA"
    ].map((skill) => (
      <span
        key={skill}
        className="
        px-3
        py-1
        rounded-full
        bg-blue-500/10
        border
        border-blue-500/20
        text-sm
        "
      >
        {skill}
      </span>
    ))}
  </div>
</div>
        </div>
      </section>

      {/* CURRENTLY BUILDING */}
      <section className="mb-28">

  <h2 className="text-3xl font-semibold mb-10">
    Currently Building
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {[
      {
        title: "AI Fitness Coach",
        status: "Live Project",
      },
      {
        title: "Spring Boot Transaction APIs",
        status: "Backend Engineering",
      },
      {
        title: "DSA & System Design",
        status: "Interview Prep",
      },
    ].map((item) => (

      <div
        key={item.title}
        className="
        group
        bg-gradient-to-br
        from-blue-500/10
        to-purple-500/10
        p-6
        rounded-3xl
        border
        border-white/10
        hover:border-blue-500/50
        hover:-translate-y-2
        hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
        transition-all
        duration-300
        "
      >

        <p className="
          text-xs
          uppercase
          tracking-widest
          text-blue-400
          mb-3
        ">
          {item.status}
        </p>

        <h3 className="text-lg font-semibold">
          {item.title}
        </h3>

      </div>

    ))}

  </div>

</section>

      {/* CONTACT */}
      <section id="contact" className="mb-28">
        <h2 className="text-4xl font-bold mb-4">
 Let's Work Together
</h2>

<p className="text-gray-400 max-w-2xl leading-relaxed">
  Building scalable banking platforms,
healthcare applications and AI-powered products.

Available for Full Stack, Frontend and Product
Engineering opportunities.
</p>

<div className="mt-8">
  <a
    href="mailto:wanipratik30@gmail.com"
    className="
    px-6
    py-3
    rounded-2xl
    bg-blue-500
    hover:bg-blue-600
    transition
    font-medium
    "
  >
    Contact Me
  </a>
</div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 pt-8 text-center">

        <div className="flex justify-center gap-6 mb-4">

          <a
  href="https://github.com/pratikkk007"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-blue-400 hover:scale-125 transition-all duration-300"
>
  <FaGithub />
</a>

<a
  href="https://www.linkedin.com/in/pratik-wani-60073b184/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-blue-400 hover:scale-125 transition-all duration-300"
>
  <FaLinkedin />
</a>

<a
  href="/resume.pdf"
  target="_blank"
  className="hover:text-blue-400 hover:scale-125 transition-all duration-300"
>
  <FaFilePdf />
</a>

<a
  href="mailto:your-email@gmail.com"
  className="hover:text-blue-400 hover:scale-125 transition-all duration-300"
>
  <FaEnvelope />
</a>

        </div>

        <p className="text-gray-500">
          © 2026 Pratik Wani
        </p>

      </footer>
    </main>
  );
}