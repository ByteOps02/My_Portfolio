import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import TechStack from '@/components/home/TechStack';
import Services from '@/components/home/Services';
import Experience from '@/components/home/Experience';
import ProjectCard from '@/components/projects/ProjectCard';
import ScrollVelocity from '@/components/home/ScrollVelocity';
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
      <Hero />
      <TechStack />
      <Services />
      <Experience />
      <ScrollVelocity />
      <Stats />
      
      <section className="py-16 md:py-24 container mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <span className="text-primary font-medium mb-3 block text-sm uppercase tracking-wider">Portfolio</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3">Selected Work</h2>
            <p className="text-muted-foreground max-w-lg text-base md:text-lg">
              A curated selection of my most impactful projects showcasing expertise in modern web development.
            </p>
          </div>
          <Link href="/projects">
            <Button variant="outline" className="hidden md:flex group rounded-full px-6">
              View All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link href="/projects">
            <Button className="rounded-full px-8" size="lg">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
