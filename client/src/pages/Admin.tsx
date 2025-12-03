import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { PROJECTS, TESTIMONIALS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Edit } from 'lucide-react';

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  useEffect(() => {
    if (!isAdmin) {
      setLocation('/admin/login');
    }
  }, [isAdmin, setLocation]);

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-muted/30 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your projects and content.</p>
          </div>
          <Button variant="outline" onClick={() => {
            localStorage.removeItem('isAdmin');
            setLocation('/admin/login');
          }}>Logout</Button>
        </div>

        <Tabs defaultValue="projects">
          <TabsList className="mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-4">
            <div className="flex justify-end">
              <Button><Plus className="mr-2 h-4 w-4" /> Add Project</Button>
            </div>
            <div className="grid gap-4">
              {PROJECTS.map(project => (
                <Card key={project.id}>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src={project.image} alt={project.title} className="w-16 h-16 rounded object-cover" />
                      <div>
                        <h3 className="font-bold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.category}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost"><Edit className="h-4 w-4" /></Button>
                      <Button size="icon" variant="ghost" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages">
             <Card>
               <CardHeader>
                 <CardTitle>Recent Messages</CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-muted-foreground py-8 text-center">No new messages.</p>
               </CardContent>
             </Card>
          </TabsContent>

           <TabsContent value="blog">
             <Card>
               <CardHeader>
                 <CardTitle>Blog Posts</CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-muted-foreground py-8 text-center">Manage your markdown posts here.</p>
               </CardContent>
             </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
