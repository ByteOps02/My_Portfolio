import { useRoute, Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { type Project } from '@shared/schema';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProjectDetail() {
  const [, params] = useRoute('/project/:id');
  const { data: project, isLoading } = useQuery<Project>({ 
    queryKey: [`/api/projects/${params?.id}`],
    enabled: !!params?.id
  });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  if (isLoading) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-8 w-32 bg-muted rounded mb-4"></div>
              <div className="h-4 w-48 bg-muted rounded"></div>
            </div>
        </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <p className="text-xl mb-4 text-muted-foreground">Project not found</p>
        <Link href="/projects"><Button variant="outline">Back to Projects</Button></Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Parallax Header */}
      <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20 container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
             <Link href="/projects">
                <Button variant="ghost" className="mb-8 text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm">
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
              <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-1 text-sm rounded-full backdrop-blur-md shadow-lg">
                {project.category}
              </Badge>
              {project.featured && (
                <Badge variant="secondary" className="backdrop-blur-md bg-white/20 text-white hover:bg-white/30 px-4 py-1 text-sm rounded-full">
                  Featured
                </Badge>
              )}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 text-white tracking-tight drop-shadow-xl">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button size="default" className="rounded-full shadow-xl shadow-primary/20">
                  View Live <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <Button size="default" variant="secondary" className="rounded-full backdrop-blur-md bg-background/80 hover:bg-background/90 border border-border/50 text-foreground shadow-sm">
                  Source Code <Github className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-8 space-y-20">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-primary block" /> 
                The Challenge
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                {project.description}
              </p>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-primary block" /> 
                The Solution
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                {project.fullDescription}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
              <div className="grid gap-8">
                {project.images.map((img, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-2xl border border-border shadow-2xl">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={img} 
                      alt={`Project shot ${idx + 1}`} 
                      className="w-full transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column: Meta Info */}
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
                     <Badge key={tech} variant="secondary" className="rounded-md px-3 py-1">{tech}</Badge>
                   ))}
                 </div>

                 <div className="space-y-6">
                   <div className="flex justify-between items-center border-b border-border pb-4">
                     <span className="text-muted-foreground font-medium">Date</span>
                     <span className="font-semibold">{project.date}</span>
                   </div>
                   <div className="flex justify-between items-center border-b border-border pb-4">
                     <span className="text-muted-foreground font-medium">Client</span>
                     <span className="font-semibold">Confidential</span>
                   </div>
                   <div className="flex justify-between items-center border-b border-border pb-4">
                     <span className="text-muted-foreground font-medium">Role</span>
                     <span className="font-semibold">Lead Developer</span>
                   </div>
                 </div>
               </motion.div>

               {/* Next Project Teaser (Mock) */}
               <Link href="/projects">
                 <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 cursor-pointer hover:bg-primary/10 transition-colors group">
                    <h4 className="text-sm text-muted-foreground mb-2">Ready for more?</h4>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg group-hover:text-primary transition-colors">Browse all projects</span>
                      <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                 </div>
               </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
