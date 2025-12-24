import { constructMetadata } from "@/lib/metadata";
import { experience, education } from "@/data/experience";
import { Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";

export const metadata = constructMetadata({
  title: "Experience | Muthuvel",
  description: "Professional journey and work experience of Muthuvel as a Full Stack Developer.",
});

export default function ExperiencePage() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <div className="space-y-12">
        {/* Experience Section */}
        <div>
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" />
            Professional Experience
          </h2>
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-xl text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="px-4 py-1 rounded-full bg-accent text-sm font-semibold">
                    {exp.from} — {exp.to}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-3 text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            Education
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="p-6 rounded-2xl bg-accent/30 border border-border">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{edu.year}</p>
                    <p className="text-sm text-muted-foreground">{edu.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
