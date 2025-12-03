import { Link } from 'wouter';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <a className="text-2xl font-heading font-bold tracking-tighter mb-4 block">
                Portfolio<span className="text-accent">.</span>
              </a>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Crafting digital experiences with a focus on motion, aesthetics, and performance.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/projects"><a className="text-muted-foreground hover:text-primary transition-colors">Projects</a></Link></li>
              <li><Link href="/about"><a className="text-muted-foreground hover:text-primary transition-colors">About</a></Link></li>
              <li><Link href="/blog"><a className="text-muted-foreground hover:text-primary transition-colors">Blog</a></Link></li>
              <li><Link href="/contact"><a className="text-muted-foreground hover:text-primary transition-colors">Contact</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/admin/login"><a className="hover:text-primary">Admin Login</a></Link>
            <a href="#" className="hover:text-primary">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
