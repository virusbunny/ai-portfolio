export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-cyan-400 mb-8">
        Contact Me
      </h2>

      <div className="glass p-8 rounded-xl space-y-6">

        <p>
          📧 Email:
          <a
            href="mailto:shushantkumar@gmail.com"
            className="text-cyan-400 ml-2"
          >
            shushantkumar@gmail.com
          </a>
        </p>

        <p>
          📱 Phone:
          <span className="ml-2">+91 XXXXX XXXXX</span>
        </p>

        <p>
          💼 LinkedIn:
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="text-cyan-400 ml-2"
          >
            View Profile
          </a>
        </p>

        <p>
          💻 GitHub:
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-cyan-400 ml-2"
          >
            View Projects
          </a>
        </p>
      </div>
    </section>
  );
}