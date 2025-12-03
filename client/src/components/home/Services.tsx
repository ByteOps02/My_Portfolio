import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Frontend Architecture",
    description: "Building scalable, performant, and maintainable user interfaces using modern React patterns and state management.",
    icon: Code2,
  },
  {
    title: "DevOps",
    description: "Implementing robust CI/CD pipelines, automation, and infrastructure as code to ensure seamless deployment and operations.",
    icon: Palette,
  },
  {
    title: "Performance Optimization",
    description: "Auditing and improving application speed, Core Web Vitals, and SEO to ensure lightning-fast experiences.",
    icon: Rocket,
  },
  {
    title: "Web Development",
    description: "Building dynamic and responsive web applications with modern frameworks, ensuring a seamless user experience across all devices.",
    icon: Smartphone,
  },
];

export default function Services() {
  return (
    <section className="py-12 container mx-auto px-6">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-4"
        >
          What I Do
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          I help companies and startups build digital products that stand out.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
