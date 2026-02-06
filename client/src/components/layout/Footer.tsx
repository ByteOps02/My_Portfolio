import { memo, useCallback } from 'react';
import { Link } from 'wouter';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = ['Projects', 'About', 'Contact'];
const socialLinks = [
  { icon: Github, href: "https://github.com/ByteOps02", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ram-krishna-419528287/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/krishnarammhd", label: "Twitter" },
  { icon: Mail, href: "mailto:krishnarammhd@gmail.com", label: "Email" },
];

function Footer() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-heading font-bold tracking-tighter mb-4 block hover:opacity-80 transition-opacity">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-purple-500">
                Portfolio
              </span>
              <span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Crafting digital experiences with a focus on motion, aesthetics, and performance. Available for freelance work worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Get in Touch</h4>
            <p className="text-muted-foreground text-sm mb-3">
              Have a project in mind?
            </p>
            <Link href="/contact">
              <Button variant="outline" size="sm" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-purple-500 font-semibold">Portfolio</span><span className="text-primary font-semibold">.</span> Designed & Built with care.
          </p>

          <Button
            size="icon"
            variant="ghost"
            className="rounded-full h-9 w-9 hover:bg-primary/10 hover:scale-110 transition-all"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
