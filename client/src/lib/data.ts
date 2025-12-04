export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  link: string;
  repo: string;
  featured: boolean;
  date: string;
  images: string[];
}

export interface Skill {
  id: string;
  name: string;
  level: number;
}

export interface Experience {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    category: 'Web App',
    description: 'A comprehensive personal finance management application for tracking income, expenses, and budgets with insightful analytics.',
    fullDescription: 'The Expense Tracker is a full-featured financial management solution designed to help users take control of their finances. Built with a focus on user experience, it features an intuitive dashboard with real-time charts and graphs for visualizing spending patterns. Users can categorize transactions, set monthly budgets, and receive smart alerts when approaching spending limits. The application includes recurring transaction support, export functionality for tax preparation, and beautiful visualizations that make financial data easy to understand. The dark mode interface reduces eye strain while the responsive design ensures seamless access across all devices.',
    image: '/images/expense_tracker_app_dashboard.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'LocalStorage'],
    link: 'https://github.com',
    repo: 'https://github.com',
    featured: true,
    date: '2024-01-15',
    images: ['/images/expense_tracker_app_dashboard.png'],
  },
  {
    id: 'visitor-management',
    title: 'Visitor Management System',
    category: 'Enterprise',
    description: 'A modern enterprise solution for managing visitor check-ins, badge printing, and real-time analytics for corporate offices.',
    fullDescription: 'The Visitor Management System revolutionizes how organizations handle guest arrivals and security protocols. This comprehensive solution streamlines the check-in process with QR code scanning, digital signature capture, and instant badge printing. The system includes pre-registration capabilities allowing hosts to register expected visitors in advance. Real-time dashboards provide security teams with instant visibility into who is on-premises. Features include watchlist screening, emergency evacuation lists, visitor photo capture, and detailed analytics on visitor patterns. The system integrates seamlessly with existing access control systems and sends automatic notifications to hosts when their guests arrive.',
    image: '/images/visitor_management_system_ui.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'QR Code'],
    link: 'https://github.com',
    repo: 'https://github.com',
    featured: true,
    date: '2023-11-20',
    images: ['/images/visitor_management_system_ui.png'],
  },
  {
    id: 'snufi-pharma',
    title: 'Snufi Pharma Website',
    category: 'Corporate',
    description: 'A premium pharmaceutical company website showcasing products, research initiatives, and corporate information.',
    fullDescription: 'Snufi Pharma required a world-class digital presence that reflects their commitment to healthcare excellence. The website features a sophisticated design with smooth animations and micro-interactions that enhance user engagement. The product catalog showcases their pharmaceutical offerings with detailed information and elegant presentation. The research section highlights ongoing clinical trials and scientific publications. Built with accessibility in mind, the site achieves WCAG 2.1 AA compliance. The responsive design ensures perfect presentation across all devices, from mobile phones to large desktop displays. Performance optimization techniques ensure lightning-fast page loads, critical for user engagement and SEO.',
    image: '/images/snufi_pharma_website_design.png',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'SEO'],
    link: 'https://github.com',
    repo: 'https://github.com',
    featured: true,
    date: '2024-03-10',
    images: ['/images/snufi_pharma_website_design.png'],
  },
];

export const skills: Skill[] = [
  { id: '1', name: 'React / Next.js', level: 95 },
  { id: '2', name: 'TypeScript', level: 92 },
  { id: '3', name: 'Tailwind CSS', level: 98 },
  { id: '4', name: 'Node.js', level: 85 },
  { id: '5', name: 'MongoDB', level: 88 },
  { id: '6', name: 'Framer Motion', level: 90 },
];

export const experiences: Experience[] = [
  {
    id: '1',
    year: 'Present',
    role: 'Actively seeking opportunities',
    company: 'Web Development & SDE Roles (Internship/Job)',
    description: 'Passionate fresher actively seeking challenging roles in Web Development and Software Development Engineering. Eager to contribute to innovative projects and grow within a dynamic team environment.',
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}

import { Code2, Palette, Rocket, Smartphone } from "lucide-react";

export const services = [
  {
    title: "Frontend Architecture",
    description: "Building scalable, performant, and maintainable user interfaces using modern React patterns and state management.",
    icon: Code2,
  },
  {
    title: "DevOps",
    description: "Implementing robust CI/CD pipelines, automation, and infrastructure as code to ensure seamless deployment and operations.",
    icon: Palette,
  },
  {
    title: "Performance Optimization",
    description: "Auditing and improving application speed, Core Web Vitals, and SEO to ensure lightning-fast experiences.",
    icon: Rocket,
  },
  {
    title: "Web Development",
    description: "Building dynamic and responsive web applications with modern frameworks, ensuring a seamless user experience across all devices.",
    icon: Smartphone,
  },
];

