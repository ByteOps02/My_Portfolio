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
import Magnetic from '@/components/ui/Magnetic';
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
      
      <section className="py-20 container mx-auto px-6">
        <motion.div 
          className="flex justify-between items-end mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-primary font-medium mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">Selected Work</h2>
            <p className="text-muted-foreground max-w-md text-lg">
              A curated selection of my most impactful projects showcasing expertise in modern web development.
            </p>
          </div>
          <Magnetic strength={20}>
            <Link href="/projects">
              <Button variant="ghost" className="hidden md:flex group text-lg">
                View All <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </Magnetic>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/projects">
            <Button className="w-full rounded-full" size="lg">View All Projects</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
