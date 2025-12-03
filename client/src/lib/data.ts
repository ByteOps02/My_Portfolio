
// Types
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

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

// Mock Data
import heroBg from '@assets/generated_images/abstract_dark_premium_fluid_background_for_hero_section.png';
import project1 from '@assets/generated_images/fintech_dashboard_project_thumbnail.png';
import project2 from '@assets/generated_images/e-commerce_app_project_thumbnail.png';
import project3 from '@assets/generated_images/ai_chat_app_project_thumbnail.png';
import avatar from '@assets/generated_images/professional_developer_avatar.png';

export const ASSETS = {
  heroBg,
  avatar,
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nova Fintech',
    category: 'Web App',
    description: 'A comprehensive financial dashboard for real-time market analysis.',
    fullDescription: 'Nova Fintech represents a leap forward in personal finance management. The problem was users feeling overwhelmed by complex financial data. Our approach was to simplify the visualization using D3.js and React, creating a dashboard that is both powerful and intuitive. The result is a 40% increase in user engagement and a seamless mobile experience.',
    image: project1,
    technologies: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    link: '#',
    repo: '#',
    featured: true,
    date: '2023-11-15',
    images: [project1, project2],
  },
  {
    id: '2',
    title: 'Luxe Commerce',
    category: 'Mobile',
    description: 'Premium fashion e-commerce experience with AR try-on features.',
    fullDescription: 'Luxe Commerce bridges the gap between high-end retail and digital convenience. We integrated WebAR to allow users to visualize products in their space. The clean, minimal UI focuses entirely on the product imagery, resulting in higher conversion rates for luxury items.',
    image: project2,
    technologies: ['React Native', 'Redux', 'Stripe', 'AR.js'],
    link: '#',
    repo: '#',
    featured: true,
    date: '2023-09-20',
    images: [project2, project3],
  },
  {
    id: '3',
    title: 'Aura AI',
    category: 'AI/ML',
    description: 'Next-generation conversational AI interface with voice synthesis.',
    fullDescription: 'Aura AI is more than just a chatbot; it is a digital assistant with personality. Leveraging the latest LLMs, we built a custom interface that supports voice interaction and context-aware responses. The dark, glowing aesthetic was chosen to convey a futuristic yet accessible feel.',
    image: project3,
    technologies: ['Next.js', 'OpenAI API', 'Tailwind', 'WebSpeech API'],
    link: '#',
    repo: '#',
    featured: true,
    date: '2024-01-10',
    images: [project3, project1],
  },
  {
    id: '4',
    title: 'HealthTrack',
    category: 'Web App',
    description: 'Personal health monitoring platform with wearable integration.',
    fullDescription: 'Integrated with FitBit and Apple Health to provide a unified dashboard for health metrics.',
    image: project1,
    technologies: ['Vue.js', 'Firebase', 'Chart.js'],
    link: '#',
    repo: '#',
    featured: false,
    date: '2023-06-05',
    images: [project1],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of React Server Components',
    excerpt: 'How RSC is changing the way we build web applications and why you should care.',
    content: `
# The Future of React Server Components

React Server Components (RSC) represent a paradigm shift in how we think about rendering React applications. By moving component logic to the server, we can reduce bundle sizes and improve initial load performance.

## Key Benefits

1. **Zero Bundle Size**: Components rendered on the server don't add to the JavaScript bundle.
2. **Direct Database Access**: Query your DB directly inside your component.
3. **Automatic Code Splitting**: The framework handles splitting for you.

## Conclusion

RSC is not just a performance optimization; it's a new way to architect apps.
    `,
    date: 'Dec 12, 2023',
    readTime: '5 min read',
    slug: 'react-server-components',
  },
  {
    id: '2',
    title: 'Mastering Tailwind CSS v4',
    excerpt: 'Deep dive into the new configuration-less engine and CSS variables.',
    content: '# Mastering Tailwind CSS v4\n\nTailwind v4 brings a simplified developer experience...',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    slug: 'mastering-tailwind-v4',
  },
  {
    id: '3',
    title: 'Designing for Dark Mode',
    excerpt: 'Best practices for creating accessible and beautiful dark themes.',
    content: '# Designing for Dark Mode\n\nDark mode is more than just inverting colors...',
    date: 'Feb 20, 2024',
    readTime: '6 min read',
    slug: 'designing-dark-mode',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CTO at TechFlow',
    content: 'The attention to detail and animation work transformed our boring dashboard into an experience our users actually love.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Founder of StartUp',
    content: 'Exceptional code quality and design sense. Delivered the project 2 weeks ahead of schedule.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: '3',
    name: 'Jessica Lee',
    role: 'Product Manager',
    content: 'A true professional who understands both the technical and human sides of software development.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

export const SKILLS = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js / Express', level: 85 },
  { name: 'Tailwind CSS', level: 98 },
  { name: 'PostgreSQL / MongoDB', level: 80 },
  { name: 'UI/UX Design', level: 75 },
];

export const EXPERIENCE = [
  {
    year: '2023 - Present',
    role: 'Senior Frontend Engineer',
    company: 'TechCorp',
    description: 'Leading the frontend team in rebuilding the core product using Next.js and RSC.',
  },
  {
    year: '2021 - 2023',
    role: 'Full Stack Developer',
    company: 'Creative Agency',
    description: 'Built award-winning marketing sites and web apps for Fortune 500 clients.',
  },
  {
    year: '2019 - 2021',
    role: 'Junior Developer',
    company: 'StartupInc',
    description: 'Collaborated on the initial MVP launch and scaled the user base to 10k.',
  },
];

export const MOCK_ADMIN_CREDS = {
  username: 'admin',
  password: 'password',
};
