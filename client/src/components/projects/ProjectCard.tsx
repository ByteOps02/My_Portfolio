import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { type Project } from '@/lib/data';

export default function ProjectCard({ project }: { project: Project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set((clientX - left) / width - 0.5);
    y.set((clientY - top) / height - 0.5);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  return (
    <Link href={`/project/${project.id}`}>
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className="group relative cursor-pointer rounded-2xl bg-card border border-border overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
      >
        <div style={{ transform: "translateZ(50px)" }} className="relative aspect-[16/10] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
              <ArrowUpRight className="h-5 w-5 text-black" />
            </div>
          </div>
        </div>

        <div style={{ transform: "translateZ(30px)" }} className="p-6 bg-card relative z-20">
          <div className="flex justify-between items-start mb-3">
            <div>
              <Badge variant="outline" className="mb-2 text-primary border-primary/30 bg-primary/5">
                {project.category}
              </Badge>
              <h3 className="text-2xl font-bold font-heading group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="rounded-md font-normal">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="secondary" className="rounded-md font-normal">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
