import { useRoute, Link } from 'wouter';
import { getProject, projects } from '@/lib/data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, ExternalLink, ArrowRight, Calendar, User, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProjectDetail() {
  const [, params] = useRoute('/project/:id');
  const project = params?.id ? getProject(params.id) : undefined;

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  const currentIndex = projects.findIndex(p => p.id === params?.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-muted/50 flex items-center justify-center">
            <Layers className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Link href="/projects">
            <Button variant="outline" className="rounded-full" size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="relative h-[75vh] min-h-[600px] w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20 container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/projects">
              <Button variant="ghost" className="mb-8 text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm rounded-full">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex gap-3 mb-6">
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-1.5 text-sm rounded-full backdrop-blur-md shadow-lg">
                {project.category}
              </Badge>
              {project.featured && (
                <Badge variant="secondary" className="backdrop-blur-md bg-white/20 text-white hover:bg-white/30 px-5 py-1.5 text-sm rounded-full">
                  Featured
                </Badge>
              )}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 text-white tracking-tight drop-shadow-xl">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full shadow-xl shadow-primary/30 h-14 px-8">
                  View Live <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="rounded-full backdrop-blur-md bg-white/90 hover:bg-white text-black border-0 shadow-lg h-14 px-8">
                  Source Code <Github className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8 space-y-20">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-[2px] bg-primary block rounded-full" /> 
                The Challenge
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-[2px] bg-primary block rounded-full" /> 
                The Solution
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-10 h-[2px] bg-primary block rounded-full" />
                Project Gallery
              </h2>
              <div className="grid gap-8">
                {project.images.map((img, idx) => (
                  <motion.div 
                    key={idx} 
                    className="group relative overflow-hidden rounded-2xl border border-border shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <img 
                      src={img} 
                      alt={`${project.title} screenshot ${idx + 1}`} 
                      className="w-full transition-transform duration-700 group-hover:scale-105" 
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="p-8 rounded-3xl bg-card border border-border shadow-xl"
              >
                <h3 className="font-bold mb-6 text-xl">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="secondary" className="rounded-lg px-4 py-2 text-sm">{tech}</Badge>
                  ))}
                </div>

                <div className="space-y-5">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Date</span>
                      <p className="font-semibold">{project.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Role</span>
                      <p className="font-semibold">Lead Developer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Layers className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Category</span>
                      <p className="font-semibold">{project.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <Link href={`/project/${nextProject.id}`}>
                <motion.div 
                  className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 cursor-pointer hover:from-primary/15 hover:to-primary/10 transition-all duration-300 group"
                  whileHover={{ y: -4 }}
                >
                  <h4 className="text-sm text-muted-foreground mb-2">Next Project</h4>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-xl group-hover:text-primary transition-colors">{nextProject.title}</span>
                    <ArrowRight className="h-6 w-6 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
