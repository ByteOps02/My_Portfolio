import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { type Project } from '@shared/schema';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectCard from '@/components/projects/ProjectCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const { data: projects = [] } = useQuery<Project[]>({ 
    queryKey: ['/api/projects'] 
  });

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                          project.description.toLowerCase().includes(search.toLowerCase()) ||
                          project.technologies.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 container mx-auto px-6">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
              All Projects
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg mb-12">
              A collection of my best work in web development, mobile apps, and UI design.
              Each project represents a unique challenge and solution.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center bg-card/30 p-2 rounded-2xl border border-border/50 backdrop-blur-sm">
            {/* Filter */}
            <div className="flex flex-wrap gap-2 p-1">
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={filter === cat ? "secondary" : "ghost"}
                  onClick={() => setFilter(cat)}
                  className={`rounded-xl transition-all duration-300 ${filter === cat ? 'bg-background shadow-sm' : 'hover:bg-background/50'}`}
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search projects..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 rounded-xl bg-background/50 border-transparent focus:bg-background transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32"
          >
            <p className="text-muted-foreground text-lg mb-4">No projects found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => { setFilter('All'); setSearch(''); }}
              className="rounded-full"
            >
              Clear filters
            </Button>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}
