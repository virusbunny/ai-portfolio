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
            kumarshudhant90@gmail.com
          </a>
        </p>

        <p>
          📱 Phone:
          <span className="ml-2">+91 7319726998</span>
        </p>

        <p>
          💼 LinkedIn:
          <a
            href="https://www.linkedin.com/in/shushant-kumar-81529b229/"
            target="_blank"
            className="text-cyan-400 ml-2"
          >
            View Profile
          </a>
        </p>

        <p>
          💻 GitHub:
          <a
            href="https://github.com/virusbunny"
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
