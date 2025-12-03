import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const posts = [
  {
    id: 1,
    title: "The Future of React: Server Components Explained",
    excerpt: "Understanding how React Server Components are reshaping the way we build modern web applications and improved performance.",
    date: "Oct 24, 2024",
    readTime: "5 min read",
    category: "Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    author: {
      name: "Dev",
      avatar: "/images/professional_developer_avatar.png"
    }
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS for Large Scale Applications",
    excerpt: "Best practices, architecture patterns, and tips for maintaining a scalable CSS codebase using Tailwind in enterprise projects.",
    date: "Nov 12, 2024",
    readTime: "8 min read",
    category: "Design System",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
    author: {
      name: "Dev",
      avatar: "/images/professional_developer_avatar.png"
    }
  },
  {
    id: 3,
    title: "Building Accessible Web Apps: A Complete Guide",
    excerpt: "Why accessibility matters and how to implement ARIA roles, keyboard navigation, and semantic HTML correctly.",
    date: "Dec 05, 2024",
    readTime: "6 min read",
    category: "Accessibility",
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2788&auto=format&fit=crop",
    author: {
      name: "Dev",
      avatar: "/images/professional_developer_avatar.png"
    }
  },
  {
    id: 4,
    title: "Optimizing Next.js Performance",
    excerpt: "Deep dive into Core Web Vitals, image optimization, and lazy loading strategies to achieve a 100 Lighthouse score.",
    date: "Jan 15, 2025",
    readTime: "10 min read",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
    author: {
      name: "Dev",
      avatar: "/images/professional_developer_avatar.png"
    }
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Thoughts & <span className="text-primary">Insights</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Sharing my journey, tutorials, and perspectives on software engineering and design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group hover:shadow-2xl transition-shadow duration-300 border-border/50">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background/90">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
                
                <CardFooter className="pt-0 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback>D</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{post.author.name}</span>
                  </div>
                  <Button variant="ghost" className="group/btn">
                    Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
