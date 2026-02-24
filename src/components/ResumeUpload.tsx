import { useEffect, useState } from "react";

export default function ResumeUpload() {
  const [resume, setResume] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("ai-portfolio/public/Sush_resume_.pdf");
    if (saved) setResume(saved);
  }, []);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setResume(url);
      localStorage.setItem("resume", url);
    }
  };

  return (
    <div className="glass p-6 rounded-xl space-y-4">
      <h3 className="text-cyan-400 font-bold">Upload Resume</h3>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleUpload}
      />

      {resume && (
        <div className="space-y-3">
          <a
            href={resume}
            target="_blank"
            className="text-cyan-400 underline"
          >
            View Uploaded Resume
          </a>

          <a
            href={resume}
            download
            className="block border border-cyan-400 px-4 py-2 rounded text-center"
          >
            Download Resume
          </a>
        </div>
      )}
    </div>
  );
}