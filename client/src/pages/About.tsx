import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Twitter, Mail, Code2, Palette, Zap } from 'lucide-react';
import { skills, experiences } from '@/lib/data';
import { motion } from 'framer-motion';

export default function About() {
  const CircularProgress = ({ value, label }: { value: number, label: string }) => {
    const circumference = 2 * Math.PI * 40;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
      <motion.div 
        className="flex flex-col items-center gap-4 group"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-28 h-28 md:w-32 md:h-32">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              className="text-muted/20"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.4)]"
              initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
            {value}%
          </div>
        </div>
        <span className="font-medium text-sm md:text-base text-center group-hover:text-primary transition-colors">{label}</span>
      </motion.div>
    );
  };

  const services = [
    { icon: Code2, title: 'Web Development', desc: 'Building fast, responsive web applications with modern frameworks' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Creating intuitive and beautiful user interfaces' },
    { icon: Zap, title: 'Performance', desc: 'Optimizing applications for speed and efficiency' },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <main className="pt-24 container mx-auto px-6">
        
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border/50 shadow-2xl relative z-10">
              <img src="/images/professional_developer_avatar.png" alt="Developer Portrait" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute -z-10 top-8 -left-8 w-full h-full border-2 border-primary/30 rounded-3xl" />
            <div className="absolute -z-20 -bottom-10 -right-10 w-72 h-72 bg-primary/20 blur-[120px] rounded-full" />
            <div className="absolute -z-20 top-0 left-0 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-medium mb-4 block">About Me</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
              More than just <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">Code.</span>
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer with expertise in building modern web applications. 
                With a strong foundation in React, TypeScript, and Node.js, I create solutions that are both 
                functional and beautiful.
              </p>
              <p>
                My philosophy is simple: software should not only function perfectly but also provide an 
                exceptional user experience. I specialize in building accessible, performant, and visually 
                stunning applications.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-10">
              <Button size="lg" className="rounded-full h-14 px-8 shadow-lg shadow-primary/20">
                Download Resume <Download className="ml-2 h-5 w-5" />
              </Button>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full h-14 w-14 p-0">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full h-14 w-14 p-0">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full h-14 w-14 p-0">
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </motion.div>
        </section>

        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium mb-4 block">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Technical Skills</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The technologies and tools I use to bring ideas to life.</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CircularProgress value={skill.level} label={skill.name} />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium mb-4 block">What I Do</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Services</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium mb-4 block">Journey</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Experience</h2>
          </motion.div>
          
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

      </main>
      
      <Footer />
    </div>
  );
}
