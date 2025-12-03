import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Magnetic from '@/components/ui/Magnetic';
import TextReveal from '@/components/ui/TextReveal';

import TypewriterLoop from '@/components/ui/TypewriterLoop';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Parallax - Enhanced with grid */}
      <motion.div 
        style={{ y: y1, opacity: 0.6 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <img 
          src="/images/abstract_dark_premium_fluid_background_for_hero_section.png"
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-60 mix-blend-screen dark:mix-blend-lighten"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20 backdrop-blur-sm">
            Open to New Opportunities
          </span>
        </motion.div>

        <div className="mb-6 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60 leading-[1.1]">
            <TextReveal text="Building Digital" className="justify-center" delay={0.4} />
            <TextReveal text="Experiences." className="justify-center text-primary" delay={0.6} />
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft <TypewriterLoop words={["premium web applications", "scalable cloud systems", "interactive digital products"]} className="font-semibold text-foreground" /> with modern technologies. 
          Focusing on motion, accessibility, and user-centric design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Magnetic strength={30}>
            <Link href="/projects">
              <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Magnetic>
          
          <Magnetic strength={30}>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 backdrop-blur-sm bg-background/20 border-foreground/10 hover:bg-background/40">
                Contact Me
              </Button>
            </Link>
          </Magnetic>
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
