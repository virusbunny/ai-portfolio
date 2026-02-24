import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center relative">

      {/* Glow background */}
      <div className="absolute w-96 h-96 bg-cyan-500 blur-[120px] opacity-30 rounded-full"></div>

      <div className="z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Hi, I'm <span className="text-cyan-400">Shushant Kumar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-lg text-gray-300"
        >
          AI Engineer | Full Stack Developer | MCA Final Year
        </motion.p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-6 flex-wrap">

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="primary-btn"
          >
            Resume
          </a>

          {/* Contact */}
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="outline-btn"
          >
            Contact Me
          </button>

        </div>
      </div>
    </section>
  );
}