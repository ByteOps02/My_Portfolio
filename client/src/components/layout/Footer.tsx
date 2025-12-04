import { Link } from 'wouter';
import { Github, Linkedin, Twitter, Mail, ArrowRight, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-12 bg-background pt-12 pb-8 overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">


        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 mb-16 border-t border-white/5 pt-16">
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="text-3xl font-heading font-bold tracking-tighter mb-6 block hover:opacity-80 transition-opacity">
              Portfolio<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-6">
              Crafting digital experiences with a focus on motion, aesthetics, and performance. Based in San Francisco, working globally.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:your-email@example.com" className="p-2 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 md:col-start-7">
            <h4 className="font-bold mb-6 text-foreground/90">Explore</h4>
            <ul className="space-y-4 text-sm">
              {['Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 md:col-start-9">
             <h4 className="font-bold mb-6 text-foreground/90">Legal</h4>
             <ul className="space-y-4 text-sm">
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/5">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Dev. All rights reserved.
          </p>
          
          <Button 
            size="icon" 
            variant="outline" 
            className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
