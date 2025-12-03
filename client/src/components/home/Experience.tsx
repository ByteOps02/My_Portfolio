import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Ltd.",
    location: "San Francisco, CA (Remote)",
    period: "2022 - Present",
    description: "Leading a team of 5 developers in building enterprise-scale React applications. Implemented CI/CD pipelines reducing deployment time by 40%.",
    skills: ["React", "Node.js", "AWS", "TypeScript"],
    type: "Full-time"
  },
  {
    title: "Frontend Developer",
    company: "Creative Solutions Agency",
    location: "New York, NY",
    period: "2020 - 2022",
    description: "Developed responsive websites for high-profile clients. Collaborated with designers to implement complex animations and interactive 3D elements.",
    skills: ["Next.js", "Three.js", "GSAP", "Tailwind"],
    type: "Contract"
  },
  {
    title: "Web Developer",
    company: "Digital StartUp",
    location: "Austin, TX",
    period: "2018 - 2020",
    description: "Built MVP products for early-stage startups. Managed database schema design and API development using Express.js.",
    skills: ["Vue.js", "Firebase", "Python", "Docker"],
    type: "Full-time"
  }
];

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
          Work Experience
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          My professional journey and the value I've delivered.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-1/2 top-6 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background transform md:-translate-x-1/2 z-10" />

              {/* Date for Desktop */}
              <div className={`hidden md:block w-1/2 pt-4 ${
                index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"
              }`}>
                <div className="flex items-center gap-2 text-muted-foreground justify-end">
                   <span className="font-medium">{exp.period}</span>
                </div>
              </div>

              {/* Content Card */}
              <div className="w-full md:w-1/2 pl-6 md:pl-0">
                 <div className={`${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <Card className="relative bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
                    <CardHeader>
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <div>
                          <CardTitle className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                            {exp.title}
                          </CardTitle>
                          <h4 className="text-lg font-semibold mt-1">{exp.company}</h4>
                        </div>
                        <Badge variant="secondary" className="shrink-0">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      {/* Mobile Date & Location */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground md:hidden">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
