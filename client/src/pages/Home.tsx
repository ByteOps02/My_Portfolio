import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import TechStack from '@/components/home/TechStack';
import Services from '@/components/home/Services';
import Experience from '@/components/home/Experience';
import ProjectCard from '@/components/projects/ProjectCard';

import { getFeaturedProjects } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import ScrollProgress from '@/components/ui/ScrollProgress';
import { motion } from 'framer-motion';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Hero />
        <TechStack />
        <Services />
        <Experience />

        <Stats />

        <section className="py-20 md:py-32 container mx-auto px-6 relative">
          {/* Background Decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          </div>

          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <span className="text-primary font-semibold mb-4 block text-sm uppercase tracking-widest">Portfolio</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-purple-500">
                  Featured
                </span>{" "}
                <span className="text-foreground">Works</span>
                <span className="text-primary">.</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed">
                A curated selection of my most impactful projects showcasing expertise in modern web development and innovative solutions.
              </p>
            </div>
            <Link href="/projects">
              <Button variant="outline" className="hidden md:flex group rounded-full px-6 hover:bg-primary hover:text-primary-foreground transition-all">
                View All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/projects">
              <Button className="rounded-full px-8 shadow-lg shadow-primary/20" size="lg">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </motion.div>

      <Footer />
    </div>
  );
}
