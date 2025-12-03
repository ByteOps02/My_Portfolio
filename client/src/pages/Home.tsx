import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import TechStack from '@/components/home/TechStack';
import Services from '@/components/home/Services';
import Experience from '@/components/home/Experience';
import ProjectCard from '@/components/projects/ProjectCard';
import ScrollVelocity from '@/components/home/ScrollVelocity';
import { useQuery } from '@tanstack/react-query';
import { type Project } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import Magnetic from '@/components/ui/Magnetic';
import ScrollProgress from '@/components/ui/ScrollProgress';

export default function Home() {
  const { data: projects } = useQuery<Project[]>({ queryKey: ['/api/projects'] });
  const featuredProjects = projects?.filter(p => p.featured).slice(0, 3) || [];

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
      
      {/* Featured Projects */}
      <section className="py-5 container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Selected Work</h2>
            <p className="text-muted-foreground max-w-md">
              A curated selection of my most recent and impactful projects.
            </p>
          </div>
          <Magnetic strength={20}>
            <Link href="/projects">
              <Button variant="ghost" className="hidden md:flex group">
                View All <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </Magnetic>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/projects">
            <Button className="w-full">View All Projects</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
