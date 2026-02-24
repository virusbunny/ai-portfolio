import { useState } from "react";

export default function ResumeModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Resume Button */}
      <button
        onClick={() => setOpen(true)}
        className="px-8 py-3 bg-cyan-400 text-black rounded-xl glow hover:scale-105 transition"
      >
        Resume
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <div className="w-[90%] h-[90%] bg-slate-900 rounded-xl p-4 relative">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white"
            >
              ✖
            </button>

            {/* Resume Viewer */}
            <iframe
              src="/resume.pdf"
              className="w-full h-full rounded-lg"
            ></iframe>

            {/* Download */}
            <a
              href="/resume.pdf"
              download
              className="absolute bottom-4 right-4 bg-cyan-400 text-black px-4 py-2 rounded"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </>
  );
}