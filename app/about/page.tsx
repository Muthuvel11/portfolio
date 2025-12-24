import { constructMetadata } from "@/lib/metadata";
import { personalInfo } from "@/data/personal";

export const metadata = constructMetadata({
  title: "About | Muthuvel",
  description: "Learn more about Muthuvel, a Full Stack Developer with experience in Angular, NestJS, and SQL.",
});

export default function AboutPage() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {personalInfo.summary}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I specialize in building domain-driven modules and scalable UI components. 
            My approach focuses on clean architecture, robust backend APIs, and optimized database solutions.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-primary mb-2">Location</h3>
            <p className="text-muted-foreground">{personalInfo.location}</p>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-primary mb-2">Experience</h3>
            <p className="text-muted-foreground">2+ Years</p>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-primary mb-2">Education</h3>
            <p className="text-muted-foreground">Diploma in Computer Engineering</p>
          </div>
        </div>
      </div>
    </section>
  );
}
