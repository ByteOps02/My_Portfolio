import { useState, useMemo, useCallback } from 'react';
import { projects } from '@/lib/data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectCard from '@/components/projects/ProjectCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, X, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = useMemo(() => 
    ['All', ...Array.from(new Set(projects.map(p => p.category)))],
    []
  );

  const filteredProjects = useMemo(() => 
    projects.filter(project => {
      const matchesCategory = filter === 'All' || project.category === filter;
      const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                            project.description.toLowerCase().includes(search.toLowerCase()) ||
                            project.technologies.some(t => t.toLowerCase().includes(search.toLowerCase()));
      return matchesCategory && matchesSearch;
    }),
    [filter, search]
  );

  const clearFilters = useCallback(() => {
    setFilter('All');
    setSearch('');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-28 md:pt-32 pb-16 md:pb-20 container mx-auto px-6">
        <div className="mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-primary font-medium mb-3 block text-sm uppercase tracking-wider">My Work</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
              All Projects
            </h1>
            <p className="text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed">
              A comprehensive collection of my work in web development, enterprise solutions, and corporate websites.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col gap-4 mb-10"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">Filter:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <Button
                    key={cat}
                    variant={filter === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter(cat)}
                    className={`rounded-full transition-all duration-200 ${
                      filter === cat 
                        ? 'bg-primary text-primary-foreground shadow-md' 
                        : 'hover:bg-secondary'
                    }`}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search projects..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-10 h-10 rounded-full bg-secondary/50 border-border focus:bg-background focus:border-primary transition-all"
              />
              {search && (
                <button 
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {(filter !== 'All' || search) && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Showing {filteredProjects.length} of {projects.length} projects</span>
              <Button variant="ghost" size="sm" onClick={clearFilters} className="h-auto py-1 px-2 text-primary">
                Clear all
              </Button>
            </div>
          )}
        </motion.div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 md:py-32"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center">
              <Briefcase className="h-7 w-7 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <Button 
              variant="outline" 
              onClick={clearFilters}
              className="rounded-full px-6"
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
