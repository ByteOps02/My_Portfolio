import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Twitter, Heart, Zap, Users, Target } from 'lucide-react';
import { skillCategories, experiences } from '@/lib/data';
import { motion } from 'framer-motion';
import Services from '@/components/home/Services';
import { Badge } from '@/components/ui/badge';

function SkillCard({ title, skills }: { title: string; skills: { name: string; level: number }[] }) {
  return (
    <motion.div
      className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold mb-6 text-primary">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-center mb-1.5">
              <span className="font-medium text-sm group-hover:text-foreground transition-colors text-muted-foreground">{skill.name}</span>
              <span className="text-xs text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const values = [
  { icon: Heart, title: "Passion-Driven", description: "I genuinely love what I do. Every project is an opportunity to create something meaningful." },
  { icon: Zap, title: "Performance First", description: "Fast, efficient code isn't optional—it's the foundation of great user experience." },
  { icon: Users, title: "Collaboration", description: "The best solutions come from open communication and teamwork." },
  { icon: Target, title: "Attention to Detail", description: "The little things matter. Pixel-perfect designs and clean code are my standards." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <main className="pt-24 md:pt-32 container mx-auto px-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-border shadow-xl relative z-10 group">
              <img
                src="/images/professional_dev_avatar.jpeg"
                alt="Developer Portrait"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute -z-10 top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-2xl hidden lg:block" />
            <div className="absolute -z-20 -bottom-6 -right-6 w-2/3 h-2/3 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs uppercase tracking-widest font-semibold text-primary bg-primary/10 hover:bg-primary/20 border-transparent">
              About Me
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              More than just <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Code.</span>
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate <strong className="text-foreground font-semibold">Full Stack Developer</strong> with a knack for building robust and scalable web applications.
                With deep expertise in the modern JavaScript ecosystem, I transform complex requirements into elegant digital solutions.
              </p>
              <p>
                My philosophy centers on the intersection of <strong className="text-foreground font-semibold">design and functionality</strong>.
                I believe that great software should not only run flawlessly but also provide an intuitive and delightful experience for every user.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-10">
              <a href="/client/public/Ram Krishna.pdf.pdf" download>
                <Button size="lg" className="rounded-full h-12 px-8 text-base font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </a>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/ByteOps02" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ram-krishna-419528287/" },
                  { icon: Twitter, href: "https://x.com/krishnarammhd" }
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="rounded-full h-12 w-12 p-0 border-border hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300">
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mb-24 md:mb-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-primary/5 blur-[100px] -z-10 rounded-full" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Values</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">What Drives Me</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">The core principles that guide my work, code, and collaboration.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Expertise</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">Technical Skills</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">The technologies and tools I leverage to build world-class applications.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCard key={category.title} title={category.title} skills={category.skills} />
            ))}
          </div>
        </section>

        <section className="mb-24 md:mb-32">
          <Services />
        </section>

        <section className="mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Path</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">Career Journey</h2>
          </motion.div>

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
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}