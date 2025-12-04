import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data"; // Import experiences from data.ts

export default function Experience() {
  return (
    <section className="py-12 container mx-auto px-6">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-4"
        >
          Career Outlook
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          My journey and aspirations in the tech industry.
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
            className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border hover:border-primary transition-colors"
          >
            <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-[9px] shadow-lg shadow-primary/30" />
            <span className="text-sm text-primary font-medium">{exp.year}</span>
            <h3 className="text-xl font-bold mt-2">{exp.role}</h3>
            <p className="text-muted-foreground font-medium">{exp.company}</p>
            <p className="text-muted-foreground mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
