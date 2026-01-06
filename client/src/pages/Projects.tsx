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
      
      <main className="pt-24 md:pt-32 pb-16 md:pb-20 container mx-auto px-6">
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-primary font-medium mb-3 block text-sm uppercase tracking-wider">Portfolio</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6">
              Featured Works
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed md:mx-0 mx-auto">
              A comprehensive collection of my work in web development, enterprise solutions, and corporate websites.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col gap-6 mb-12 bg-card/30 backdrop-blur-md p-6 rounded-2xl border border-border/50"
        >
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
            <div className="flex items-center gap-4 flex-wrap w-full lg:w-auto">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">Category:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <Button
                    key={cat}
                    variant={filter === cat ? "default" : "secondary"}
                    size="md"
                    onClick={() => setFilter(cat)}
                    className={`rounded-full transition-all duration-200 border-transparent ${
                      filter === cat 
                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
                        : 'bg-background/50 hover:bg-primary/10 hover:text-primary hover:border-primary/20'
                    }`}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            <div className="relative w-full lg:w-80 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                placeholder="Search projects..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-10 h-11 rounded-full bg-background/50 border-border group-focus-within:border-primary/50 group-focus-within:bg-background transition-all shadow-sm"
              />
              {search && (
                <button 
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-secondary rounded-full transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>

          {(filter !== 'All' || search) && (
            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <span className="text-sm text-muted-foreground">Showing <strong>{filteredProjects.length}</strong> result{filteredProjects.length !== 1 && 's'}</span>
              <Button variant="ghost" size="sm" onClick={clearFilters} className="h-auto py-1.5 px-3 text-xs text-destructive hover:text-destructive hover:bg-destructive/10 rounded-full">
                Clear filters <X className="ml-1.5 h-3 w-3" />
              </Button>
            </div>
          )}
        </motion.div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-24 text-center bg-card/30 rounded-3xl border border-dashed border-border"
          >
            <div className="w-20 h-20 mb-6 rounded-full bg-secondary/50 flex items-center justify-center">
              <Briefcase className="h-9 w-9 text-muted-foreground/50" />
            </div>
            <h3 className="text-2xl font-bold mb-3">No projects found</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We couldn't find any projects matching your criteria. Try selecting a different category or search term.
            </p>
            <Button 
              size="lg"
              onClick={clearFilters}
              className="rounded-full px-8"
            >
              Clear all filters
            </Button>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}