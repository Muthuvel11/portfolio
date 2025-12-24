"use client";

import { personalInfo } from "@/data/personal";
import * as gtag from "@/lib/gtag";

export default function Footer() {
  const trackResumeDownload = () => {
    gtag.event({
      action: "resume_download",
      category: "engagement",
      label: "Footer Resume",
    });
    window.open("/Muthuvel_FullStackDeveloper.pdf", "_blank");
  };

  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">Email</a>
          <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          <button 
            onClick={trackResumeDownload}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Resume
          </button>
        </div>
      </div>
    </footer>
  );
}
