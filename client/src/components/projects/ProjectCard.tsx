import { memo } from 'react';
import { Link } from 'wouter';
import { ArrowUpRight, Calendar, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { type Project } from '@/lib/data';

function ProjectCard({ project }: { project: Project }) {
  const formattedDate = new Date(project.date).toLocaleDateString('en-US', { 
    month: 'short', 
    year: 'numeric' 
  });

  return (
    <Link href={`/project/${project.id}`}>
      <article className="group relative cursor-pointer rounded-2xl bg-card border border-border overflow-hidden shadow-md hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300">
        <div className="relative aspect-[16/10] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 z-20">
            <Badge className="bg-background/90 text-foreground backdrop-blur-sm border-0 shadow-sm">
              {project.category}
            </Badge>
          </div>
          <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <ExternalLink className="h-4 w-4" />
              <span>View Case Study</span>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <Calendar className="h-3.5 w-3.5" />
            <span>{formattedDate}</span>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold font-heading group-hover:text-primary transition-colors duration-200 mb-2">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground text-sm sm:text-base mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="rounded-full text-xs font-normal px-2.5 py-0.5">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="rounded-full text-xs font-normal px-2.5 py-0.5">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}

export default memo(ProjectCard);
