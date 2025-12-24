"use client";

import { personalInfo } from "@/data/personal";
import * as gtag from "@/lib/gtag";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const trackClick = (label: string) => {
    gtag.event({
      action: "button_click",
      category: "engagement",
      label: label,
    });
  };

  const handleNavigate = (href: string, label: string) => {
    trackClick(label);
    router.push(href);
  };

  const handleDownload = () => {
    gtag.event({
      action: "resume_download",
      category: "engagement",
      label: "Hero Resume",
    });
    window.open("/Muthuvel_FullStackDeveloper.pdf", "_blank");
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-6 max-w-6xl mx-auto">
      <div className="space-y-2">
        <p className="text-primary font-semibold tracking-wider uppercase text-sm">
          Available for new opportunities
        </p>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight">
          I'm {personalInfo.name} <span className="inline-block animate-bounce">🚀</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-muted-foreground">
          {personalInfo.role}
        </h2>
      </div>

      <p className="mt-8 text-xl text-muted-foreground max-w-3xl leading-relaxed">
        {personalInfo.summary}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <button 
          onClick={() => handleNavigate("/projects", "Hero Projects")}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 cursor-pointer"
        >
          View My Work
        </button>
        <button 
          onClick={handleDownload}
          className="px-8 py-4 border-2 border-border rounded-full font-semibold transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
        >
          Download Resume
        </button>
        <button 
          onClick={() => handleNavigate("/contact", "Hero Contact")}
          className="px-8 py-4 text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
        >
          Get In Touch →
        </button>
      </div>
    </section>
  );
}
