import ReactMarkdown from 'react-markdown';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BLOG_POSTS } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Thoughts & Insights</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Writing about web development, design patterns, and the future of tech.
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {BLOG_POSTS.map(post => (
            <Card key={post.id} className="bg-card hover:bg-card/80 transition-colors cursor-pointer border-border">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <Badge variant="secondary">{post.readTime}</Badge>
                </div>
                <CardTitle className="text-2xl font-bold">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <span className="text-primary font-medium hover:underline">Read more →</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
