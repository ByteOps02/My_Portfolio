import React, { Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollToTop from "@/components/ui/ScrollToTop";

const Home = React.lazy(() => import("@/pages/Home"));
const Projects = React.lazy(() => import("@/pages/Projects"));
const ProjectDetail = React.lazy(() => import("@/pages/ProjectDetail"));
const About = React.lazy(() => import("@/pages/About"));
const Contact = React.lazy(() => import("@/pages/Contact"));
const NotFound = React.lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/project/:id" component={ProjectDetail} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ScrollToTop />
          <CustomCursor />
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
