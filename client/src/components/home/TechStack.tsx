import { motion } from "framer-motion";

const technologies = [
  "React", "TypeScript", "Node.js", "Express.js", "Tailwind CSS",
  "PostgreSQL", "Drizzle ORM", "Docker", "Git", "Supabase", "MongoDB"
];

export default function TechStack() {
  return (
    <section className="py-12 md:py-16 overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background border-y border-border/50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 mb-8 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground font-medium uppercase tracking-widest"
        >
          Crafting Applications While Continuously Learning
        </motion.p>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="mx-8 text-3xl md:text-6xl font-heading font-bold text-muted-foreground/20 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:via-purple-500 hover:to-blue-500 transition-all duration-300 cursor-default hover:scale-110"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
          {technologies.map((tech, index) => (
            <span
              key={`duplicate-${index}`}
              className="mx-8 text-3xl md:text-6xl font-heading font-bold text-muted-foreground/20 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:via-purple-500 hover:to-blue-500 transition-all duration-300 cursor-default hover:scale-110"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
