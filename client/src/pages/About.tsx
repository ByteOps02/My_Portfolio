import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Twitter, Heart, Zap, Users, Target } from 'lucide-react';
import { skills, experiences } from '@/lib/data';
import { motion } from 'framer-motion';
import Services from '@/components/home/Services';

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <motion.div 
      className="group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-sm group-hover:text-primary transition-colors">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
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
      
      <main className="pt-28 md:pt-32 container mx-auto px-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-border shadow-xl relative z-10">
              <img src="/images/professional_developer_avatar.png" alt="Developer Portrait" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -z-10 top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-2xl hidden lg:block" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-medium mb-3 block text-sm uppercase tracking-wider">About Me</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              More than just <span className="text-primary">Code.</span>
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer with <strong className="text-foreground">3+ years of experience</strong> building modern web applications. 
                With a strong foundation in React, TypeScript, and Node.js, I create solutions that are both functional and beautiful.
              </p>
              <p>
                My philosophy is simple: software should not only function perfectly but also provide an exceptional user experience. 
                I specialize in building <strong className="text-foreground">accessible, performant, and visually stunning</strong> applications.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button size="lg" className="rounded-full h-12 px-6 shadow-lg shadow-primary/20">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
              <div className="flex gap-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="rounded-full h-12 w-12 p-0">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="rounded-full h-12 w-12 p-0">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="rounded-full h-12 w-12 p-0">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium mb-3 block text-sm uppercase tracking-wider">What Drives Me</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3">My Values</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">The principles that guide my work and collaboration.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium mb-3 block text-sm uppercase tracking-wider">Expertise</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3">Technical Skills</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">The technologies and tools I use to bring ideas to life.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <SkillBar key={skill.id} name={skill.name} level={skill.level} />
            ))}
          </div>
        </section>
        
        <section className="mb-20 md:mb-28">
          <Services />
        </section>
        
        <section className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium mb-3 block text-sm uppercase tracking-wider">Journey</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3">Career Path</h2>
          </motion.div>
          
          <div className="max-w-2xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-10 last:pb-0 border-l-2 border-border hover:border-primary transition-colors"
              >
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-[7px] shadow-lg shadow-primary/30" />
                <span className="text-xs text-primary font-medium uppercase tracking-wider">{exp.year}</span>
                <h3 className="text-lg font-bold mt-1">{exp.role}</h3>
                <p className="text-muted-foreground text-sm font-medium">{exp.company}</p>
                <p className="text-muted-foreground text-sm mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
