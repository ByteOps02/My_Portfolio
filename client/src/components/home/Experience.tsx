import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section className="py-16 md:py-24 container mx-auto px-6">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-4"
        >
          Career Journey
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto text-lg"
        >
          My path in the tech industry and professional milestones.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-10 pb-12 last:pb-0 border-l-2 border-border/50 hover:border-primary transition-colors group"
          >
            <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-[9px] group-hover:scale-125 group-hover:bg-primary transition-all duration-300 shadow-lg shadow-primary/20" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full">{exp.year}</span>
            <h3 className="text-2xl font-bold mt-4 mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
            <p className="text-lg text-foreground/80 font-medium mb-3">{exp.company}</p>
            <p className="text-muted-foreground leading-relaxed text-base">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}