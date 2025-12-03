import { ASSETS, EXPERIENCE, SKILLS } from '@/lib/data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 container mx-auto px-6">
        
        {/* Intro Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative order-2 md:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src={ASSETS.avatar} alt="Developer Portrait" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -z-10 inset-0 bg-primary/20 blur-3xl -translate-x-4 translate-y-4 rounded-full" />
          </div>
          
          <div className="order-1 md:order-2">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              More than just <br /> <span className="text-primary">Code.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Design Engineer based in San Francisco. With over 5 years of experience, I bridge the gap between engineering and design.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My philosophy is simple: software should not only function perfectly but also feel human. I specialize in building accessible, performant, and beautiful web applications using the modern stack.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full">
                Download Resume <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Technical Arsenal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Journey</h2>
          <div className="space-y-8">
            {EXPERIENCE.map((exp, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium text-secondary-foreground">
                      {exp.year}
                    </span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <div className="text-primary font-medium mb-4 flex items-center gap-2">
                      {exp.company} <ExternalLink className="h-3 w-3" />
                    </div>
                    <p className="text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
