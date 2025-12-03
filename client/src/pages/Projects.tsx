import { useState } from 'react';
import { PROJECTS } from '@/lib/data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectCard from '@/components/projects/ProjectCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  const filteredProjects = PROJECTS.filter(project => {
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
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">All Projects</h1>
          <p className="text-muted-foreground max-w-2xl text-lg mb-8">
            A collection of my best work in web development, mobile apps, and UI design.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            {/* Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={filter === cat ? "default" : "outline"}
                  onClick={() => setFilter(cat)}
                  className="rounded-full"
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search projects..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 rounded-full bg-background"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
            <Button 
              variant="link" 
              onClick={() => { setFilter('All'); setSearch(''); }}
              className="mt-2"
            >
              Clear filters
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
