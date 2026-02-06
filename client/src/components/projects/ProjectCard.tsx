import { memo, useState, useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowUpRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Project } from "@/lib/data";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

function ProjectCard({ project }: { project: Project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (project.images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % project.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isHovered) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateXValue = ((e.clientY - centerY) / rect.height) * -10;
    const rotateYValue = ((e.clientX - centerX) / rect.width) * 10;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <Link href={`/project/${project.id}`}>
      <motion.article
        className="group relative cursor-pointer rounded-2xl bg-card border border-border overflow-hidden shadow-md hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-purple-500 to-blue-500 opacity-50 blur-sm" />
        </div>

        <div className="relative h-60 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10" />
          <AnimatePresence initial={false}>
            <motion.img
              key={activeIndex}
              src={project.images[activeIndex]}
              alt={project.title}
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
            />
          </AnimatePresence>
          <div className="absolute top-4 left-4 z-20">
            <Badge className="bg-background/90 text-foreground backdrop-blur-sm border-0 shadow-sm">
              {project.category}
            </Badge>
          </div>
          <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-1">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-1">
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <ExternalLink className="h-4 w-4" />
              <span>View Case Study</span>
            </div>
          </div>
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-1 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-1 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {project.images.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-white w-6" : "bg-white/50"
                      }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-5 sm:p-6 relative bg-card">
          <h3 className="text-xl sm:text-2xl font-bold font-heading group-hover:text-primary transition-colors duration-200 mb-2">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm sm:text-base mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="rounded-full text-xs font-normal px-2.5 py-0.5 hover:bg-primary/20 hover:scale-110 transition-all duration-200"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge
                variant="outline"
                className="rounded-full text-xs font-normal px-2.5 py-0.5"
              >
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          <div className="mt-6 flex justify-end">
            <Button variant="outline" size="sm" className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              View Project <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export default memo(ProjectCard);
