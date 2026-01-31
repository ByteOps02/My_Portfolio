import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import TextReveal from '@/components/ui/TextReveal';
import TypewriterLoop from '@/components/ui/TypewriterLoop';

function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
          bg-[size:24px_24px]
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        />

        <img
          src="/images/abstract_dark_premium_fluid_background_for_hero_section.png"
          alt=""
          loading="eager"
          className="w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 text-center flex-1 flex flex-col items-center justify-center py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            Open to New Opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-8 flex flex-col items-center w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.1] w-full flex flex-col items-center">
            <TextReveal text="Building Digital" className="justify-center" delay={0.2} />
            <TextReveal text="Experiences." className="justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-500 py-2" delay={0.4} />
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I architect <TypewriterLoop
            words={[
              'immersive web experiences',
              'scalable enterprise systems',
              'next-gen digital products',
              'pixel-perfect interfaces'
            ]}
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-500"
          /> that leave a lasting impact.
          <br className="hidden md:block" />
          Meticulously crafted with a focus on motion, performance, and user-centric design.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/projects">
            <Button
              size="lg"
              className="rounded-full px-8 text-base sm:text-lg h-12 sm:h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-200 group"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-base sm:text-lg h-12 sm:h-14 backdrop-blur-sm bg-background/30 border-border hover:bg-background/50"
            >
              Contact Me
            </Button>
          </Link>
        </motion.div>

        {/* Metadata Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>Available for freelance</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span>0 Years Experience (Fresher)</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span>Remote Worldwide as well as OnSite</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll-down arrow */}
      <motion.button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-muted-foreground/60 hover:text-primary transition-colors cursor-pointer p-2"
        aria-label="Scroll down to see more"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.button>
    </section>
  );
}

export default memo(Hero);
