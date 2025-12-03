import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import ProjectCard from '@/components/projects/ProjectCard';
import { PROJECTS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Home() {
  const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      
      {/* Featured Projects */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Selected Work</h2>
            <p className="text-muted-foreground max-w-md">
              A curated selection of my most recent and impactful projects.
            </p>
          </div>
          <Link href="/projects">
            <Button variant="ghost" className="hidden md:flex group">
              View All <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
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

      <Testimonials />

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Let's collaborate to create something exceptional. I'm currently accepting new projects for Q2.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg shadow-2xl hover:scale-105 transition-transform">
              Let's Talk
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
