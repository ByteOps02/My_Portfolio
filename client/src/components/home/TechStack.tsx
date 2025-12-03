import { motion } from "framer-motion";

const technologies = [
  "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", 
  "PostgreSQL", "GraphQL", "Docker", "AWS", "Figma", "Redux", "Python"
];

export default function TechStack() {
  return (
    <section className="py-8 overflow-hidden bg-background border-y border-border/50">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">
          Powering Next-Gen Applications
        </p>
      </div>
      
      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="mx-8 text-4xl md:text-6xl font-heading font-bold text-muted-foreground/20 hover:text-primary/50 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
          {technologies.map((tech, index) => (
            <span 
              key={`duplicate-${index}`} 
              className="mx-8 text-4xl md:text-6xl font-heading font-bold text-muted-foreground/20 hover:text-primary/50 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
