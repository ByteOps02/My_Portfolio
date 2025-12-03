import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ASSETS } from '@/lib/data';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Parallax */}
      <motion.div 
        style={{ y: y1, opacity: 0.6 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={ASSETS.heroBg} 
          alt="Abstract Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Available for freelance work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60"
        >
          Building Digital <br />
          <span className="text-primary">Experiences.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft premium web applications with modern technologies. 
          Focusing on motion, accessibility, and user-centric design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/projects">
            <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300">
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 backdrop-blur-sm bg-background/20 border-foreground/10 hover:bg-background/40">
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}
