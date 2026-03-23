"use client";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-20 py-10 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* HERO */}
      <section className="mb-28 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Pratik Wani
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-2xl">
          Building high-performance, secure digital products that scale to millions of users.
        </p>

        <p className="mt-3 text-blue-400">
          3+ Years • Banking Systems • Microservices • AI Apps
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">
          <a href="/resume.pdf" download className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Download Resume
          </a>

          <a href="#contact" className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-gray-800 transition">
            Contact Me
          </a>
        </div>

        {/* METRICS */}
        <div className="mt-12 flex gap-10">
          <div className="hover:scale-110 transition">
            <p className="text-4xl font-bold text-blue-400">90%</p>
            <p className="text-gray-500 text-sm">Performance Improvement</p>
          </div>
          <div className="hover:scale-110 transition">
            <p className="text-4xl font-bold text-purple-400">40%</p>
            <p className="text-gray-500 text-sm">Faster Deployments</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mb-28 max-w-3xl relative z-10">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p className="text-gray-400 leading-relaxed text-lg">
          Full-Stack Software Engineer with 3+ years of experience designing and delivering scalable, secure, and high-performance web applications in the digital banking domain.
          Proficient in React.js, Next.js, Node.js, and modern JavaScript (ES6+), with strong backend expertise in Java and Spring Boot-based microservices architecture.
          Experienced in building customer-centric, responsive user interfaces and integrating them with robust RESTful APIs.
          Demonstrated ability to optimize system performance, enhance authentication security, and streamline CI/CD pipelines while working in Agile environments.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="mb-28 relative z-10">
        <h2 className="text-3xl font-semibold mb-10">Experience</h2>

        <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-xl hover:shadow-blue-500/20 transition hover:scale-[1.02]">

          <h3 className="text-2xl font-semibold">Accenture</h3>
          <p className="text-gray-400 mb-6">
            Advanced Application Development Analyst • Dec 2022 – Present
          </p>

          <div className="space-y-4 text-gray-300 text-[15px] leading-relaxed">

            <p>• Engineered and delivered scalable, customer-facing digital banking applications using React.js and modern JavaScript (ES6+), improving user experience across authentication, onboarding, and payment journeys.</p>

            <p>• Designed and developed secure, high-performance RESTful APIs and microservices using Node.js and Spring Boot, enabling seamless integration with core banking systems.</p>

            <p>• Modernized authentication systems by implementing JWT-based security, biometrics, and Strong Customer Authentication (SCA), significantly enhancing platform security.</p>

            <p>• Translated UX wireframes (Figma) into reusable, modular, and accessible UI components following modern frontend architecture and best practices.</p>

            <p>• Improved application performance by ~90% through API optimization, efficient state management, and reduction of redundant network calls.</p>

            <p>• Automated CI/CD pipelines using Jenkins, reducing deployment time by ~40% and improving release reliability.</p>

            <p>• Collaborated with architects and cross-functional teams to design scalable microservices-based solutions and drive technical decision-making.</p>

            <p>• Delivered and maintained critical financial modules including payments, international transfers, and card transaction flows, ensuring high availability and reliability.</p>

            <p>• Provided production support, performed incident analysis, and resolved issues to maintain system stability and meet SLA requirements.</p>

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-28 relative z-10">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/20 transition">
            <h3 className="text-xl font-semibold">AI Fitness Coach</h3>
            <p className="text-gray-400 mt-3 text-sm">
              AI-powered fitness app with personalized recommendations using OpenAI APIs.
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              React • Node • OpenAI • MongoDB
            </p>
            <a href="https://github.com/pratikkk007/AI-Fitness-App" target="_blank" className="text-blue-400 text-sm mt-3 block hover:underline">
              View Code →
            </a>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:scale-105 hover:border-purple-500 hover:shadow-purple-500/20 transition">
            <h3 className="text-xl font-semibold">AI Finance Dashboard</h3>
            <p className="text-gray-400 mt-3 text-sm">
              Finance tracking app with JWT auth and AI-powered insights.
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              React • Node • SQL • JWT
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="mb-28 relative z-10">
        <h2 className="text-3xl font-semibold mb-10">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "React.js","Next.js","Node.js","Java","Spring Boot",
            "Microservices","REST APIs","JWT","SQL","Tailwind CSS",
            "CI/CD","JavaScript (ES6+)"
          ].map((skill) => (
            <span key={skill} className="bg-white/10 px-4 py-2 rounded-full text-sm hover:bg-blue-500/20 transition">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mb-20 max-w-xl relative z-10">
        <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>

        <p className="text-gray-400 mb-6">
          Have an opportunity or want to collaborate? Let’s build something impactful together.
        </p>

        <form
          action="https://formspree.io/f/xjgaqjdv"
          method="POST"
          className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-lg"
        >
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-lg bg-black/50 border border-white/20" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-lg bg-black/50 border border-white/20" />
          <textarea name="message" placeholder="Your Message" required className="w-full p-3 rounded-lg bg-black/50 border border-white/20" />
          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Send Message 🚀
          </button>
        </form>
      </section>

      <footer className="text-gray-500 text-sm text-center mt-20">
        © 2026 Pratik Wani
      </footer>

    </main>
  );
}