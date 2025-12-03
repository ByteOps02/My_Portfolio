import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Download, GraduationCap, Github, Linkedin } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { type Skill } from '@shared/schema';
import { motion } from 'framer-motion';

export default function About() {
  const { data: skills = [] } = useQuery<Skill[]>({ queryKey: ['/api/skills'] });

  const CircularProgress = ({ value, label }: { value: number, label: string }) => {
    const circumference = 2 * Math.PI * 40; // radius 40
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
      <div className="flex flex-col items-center gap-4 group">
        <div className="relative w-32 h-32">
           {/* Background Circle */}
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-muted/20"
            />
            {/* Progress Circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              className="text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.5)]"
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
        <span className="font-medium text-lg text-center group-hover:text-primary transition-colors">{label}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <main className="pt-20 container mx-auto px-6">
        
        {/* Intro Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border/50 shadow-2xl relative z-10">
              <img src="/images/professional_developer_avatar.png" alt="Developer Portrait" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border border-primary/20 rounded-3xl" />
            <div className="absolute -z-20 -bottom-10 -right-10 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
              More than just <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Code.</span>
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Design Engineer based in San Francisco. With over 5 years of experience, I bridge the gap between engineering and design, ensuring that every pixel serves a purpose.
              </p>
              <p>
                My philosophy is simple: software should not only function perfectly but also feel human. I specialize in building accessible, performant, and beautiful web applications using the modern stack.
              </p>
            </div>
            <div className="flex gap-4 mt-10">
              <Button size="lg" className="rounded-full h-14 px-8 shadow-lg shadow-primary/20">
                Download Resume <Download className="ml-2 h-5 w-5" />
              </Button>
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8">
                  <Github className="mr-2 h-5 w-5" /> GitHub
                </Button>
              </a>
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8">
                  <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </Button>
              </a>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Technical Arsenal</h2>
             <p className="text-muted-foreground">The tools I use to bring ideas to life.</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 justify-items-center">
            {skills.map((skill) => (
              <CircularProgress key={skill.id} value={skill.level} label={skill.name} />
            ))}
          </div>
        </section>



      </main>
      
      <Footer />
    </div>
  );
}
