import { skills } from "@/data/skills";
import { Code2, Database, Terminal, ShieldCheck, Wrench } from "lucide-react";

const iconMap: Record<string, any> = {
  frontend: Code2,
  backend: Terminal,
  database: Database,
  testing: ShieldCheck,
  tools: Wrench,
};

export default function SkillGrid() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Technical Toolkit</h2>
        <p className="text-muted-foreground max-w-2xl">
          A comprehensive list of technologies and tools I use to build robust enterprise applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items]) => {
          const Icon = iconMap[category] || Code2;
          return (
            <div 
              key={category}
              className="p-8 rounded-3xl bg-accent/30 border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold capitalize">{category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-background border border-border rounded-xl font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
