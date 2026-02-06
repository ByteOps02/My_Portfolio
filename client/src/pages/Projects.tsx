import { useState, useMemo, useCallback } from 'react';
import { projects } from '@/lib/data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectCard from '@/components/projects/ProjectCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X, Briefcase, Code2, Globe, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientOrb from '@/components/ui/GradientOrb';

const categoryIcons: Record<string, any> = {
  'Web App': Code2,
  'Enterprise': Building2,
  'Corporate': Globe,
  'All': Briefcase,
};

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

      <main className="pt-24 md:pt-32 pb-16 md:pb-20">
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden mb-16 md:mb-20">
          {/* Background with gradients and orbs */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Floating Gradient Orbs */}
            <GradientOrb color="primary" size="lg" className="top-10 -left-20" delay={0} />
            <GradientOrb color="purple" size="md" className="top-20 right-10" delay={1} />
            <GradientOrb color="blue" size="sm" className="bottom-10 left-1/3" delay={2} />
          </div>

          <div className="container mx-auto px-6 py-12 md:py-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge className="mb-4 px-4 py-1.5 bg-primary/10 text-primary border-primary/20 pulse-glow">
                <Briefcase className="h-3 w-3 mr-1.5" />
                {projects.length} Projects
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-500">Works</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A comprehensive collection of my work in web development, enterprise solutions, and corporate websites.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-6">
          {/* Enhanced Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-12 bg-card/50 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-border/50 shadow-lg relative overflow-hidden group"
          >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
                <div className="flex items-start gap-4 flex-wrap w-full lg:w-auto">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground pt-2">
                    <Filter className="h-4 w-4 text-primary" />
                    <span>Filter by:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(cat => {
                      const Icon = categoryIcons[cat] || Briefcase;
                      return (
                        <Button
                          key={cat}
                          variant={filter === cat ? "default" : "secondary"}
                          size="sm"
                          onClick={() => setFilter(cat)}
                          className={`rounded-full transition-all duration-300 relative overflow-hidden group/btn ${filter === cat
                            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                            : 'bg-background/50 hover:bg-primary/10 hover:text-primary border border-border hover:border-primary/30'
                            }`}
                        >
                          {filter === cat && (
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-blue-500 opacity-20" />
                          )}
                          <span className="relative z-10 flex items-center gap-1.5">
                            <Icon className="h-4 w-4" />
                            <span>{cat}</span>
                          </span>
                        </Button>
                      );
                    })}
                  </div>
                </div>

                <div className="relative w-full lg:w-80 group/search">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within/search:text-primary transition-colors" />
                  <Input
                    placeholder="Search projects..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10 pr-10 h-11 rounded-full bg-background border-border focus:border-primary/50 focus:bg-background transition-all shadow-sm"
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
                  <span className="text-sm text-muted-foreground">
                    Showing <strong className="text-primary">{filteredProjects.length}</strong> result{filteredProjects.length !== 1 && 's'}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="h-auto py-1.5 px-3 text-xs text-destructive hover:text-destructive hover:bg-destructive/10 rounded-full"
                  >
                    Clear filters <X className="ml-1.5 h-3 w-3" />
                  </Button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-24 text-center bg-card/30 rounded-3xl border-2 border-dashed border-border relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_70%)]" />

              <div className="relative z-10">
                <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mx-auto">
                  <Briefcase className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">No projects found</h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  We couldn't find any projects matching your criteria. Try selecting a different category or search term.
                </p>
                <Button
                  size="lg"
                  onClick={clearFilters}
                  className="rounded-full px-8 shadow-lg shadow-primary/20"
                >
                  Clear all filters
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
