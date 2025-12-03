import { useRoute, Link } from 'wouter';
import { PROJECTS } from '@/lib/data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export default function ProjectDetail() {
  const [, params] = useRoute('/project/:id');
  const project = PROJECTS.find(p => p.id === params?.id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl mb-4">Project not found</p>
        <Link href="/projects"><Button>Back to Projects</Button></Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 container mx-auto">
          <Link href="/projects">
            <Button variant="ghost" className="mb-6 hover:bg-background/20 text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90">{project.category}</Badge>
            <h1 className="text-4xl md:text-7xl font-heading font-bold mb-4">{project.title}</h1>
            <div className="flex gap-4">
              <Button>
                View Live <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Source Code <Github className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Gallery</h2>
              <div className="grid gap-6">
                {project.images.map((img, idx) => (
                  <img 
                    key={idx} 
                    src={img} 
                    alt={`Project shot ${idx + 1}`} 
                    className="rounded-xl border border-border shadow-lg w-full" 
                  />
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
             <div className="p-6 rounded-xl bg-card border border-border sticky top-32">
               <h3 className="font-bold mb-4 text-lg">Technologies</h3>
               <div className="flex flex-wrap gap-2 mb-8">
                 {project.technologies.map(tech => (
                   <Badge key={tech} variant="secondary">{tech}</Badge>
                 ))}
               </div>

               <h3 className="font-bold mb-4 text-lg">Project Info</h3>
               <div className="space-y-4 text-sm">
                 <div className="flex justify-between border-b border-border pb-2">
                   <span className="text-muted-foreground">Date</span>
                   <span>{project.date}</span>
                 </div>
                 <div className="flex justify-between border-b border-border pb-2">
                   <span className="text-muted-foreground">Client</span>
                   <span>Confidential</span>
                 </div>
                 <div className="flex justify-between border-b border-border pb-2">
                   <span className="text-muted-foreground">Role</span>
                   <span>Lead Developer</span>
                 </div>
               </div>
             </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
