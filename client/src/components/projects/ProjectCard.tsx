import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/lib/data';

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

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

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
        className="group relative cursor-pointer rounded-xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
      >
        <div style={{ transform: "translateZ(50px)" }} className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div style={{ transform: "translateZ(20px)" }} className="p-6 bg-card relative z-20">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm font-medium text-primary mb-1">{project.category}</p>
              <h3 className="text-2xl font-bold font-heading group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </div>
            <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="rounded-md">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="secondary" className="rounded-md">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
