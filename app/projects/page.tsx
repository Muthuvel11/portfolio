import { projects } from "@/data/projects";
import { constructMetadata } from "@/lib/metadata";
import { Layers } from "lucide-react";

export const metadata = constructMetadata({
  title: "Projects | Muthuvel",
  description: "Explore the enterprise-grade modules and applications built by Muthuvel.",
});

export default function ProjectsPage() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Featured Work</h2>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A collection of enterprise modules and full-stack applications I've developed, 
          focusing on financial systems and process automation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col bg-accent/30 border border-border rounded-3xl p-8 transition-all hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Layers className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Enterprise Module
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
              {project.description}
            </p>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span 
                    key={t} 
                    className="px-3 py-1 text-xs font-semibold bg-background border border-border rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="pt-4 border-t border-border/50">
                <ul className="grid grid-cols-2 gap-2">
                  {project.highlights?.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
