import { 
  type Project, type InsertProject, 
  type Message, type InsertMessage, 
  type Skill, type InsertSkill, type Experience, type InsertExperience, 
  type Testimonial, type InsertTestimonial,
  projects, messages, skills, experiences, testimonials
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: string, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: string): Promise<void>;

  createMessage(message: InsertMessage): Promise<Message>;
  getMessages(): Promise<Message[]>;
  
  getSkills(): Promise<Skill[]>;
  getExperiences(): Promise<Experience[]>;
  getTestimonials(): Promise<Testimonial[]>;
}

export class MemStorage implements IStorage {
  private projects: Map<string, Project>;
  private messages: Map<string, Message>;
  private skills: Map<string, Skill>;
  private experiences: Map<string, Experience>;
  private testimonials: Map<string, Testimonial>;

  constructor() {
    this.projects = new Map();
    this.messages = new Map();
    this.skills = new Map();
    this.experiences = new Map();
    this.testimonials = new Map();
    
    this.seedData();
  }

  private seedData() {
    // Seed Projects
    const seedProjects: InsertProject[] = [
      {
        title: 'Nova Fintech',
        category: 'Web App',
        description: 'A comprehensive financial dashboard for real-time market analysis.',
        fullDescription: 'Nova Fintech represents a leap forward in personal finance management. The problem was users feeling overwhelmed by complex financial data. Our approach was to simplify the visualization using D3.js and React, creating a dashboard that is both powerful and intuitive. The result is a 40% increase in user engagement and a seamless mobile experience.',
        image: '/images/fintech_dashboard_project_thumbnail.png',
        technologies: ['React', 'TypeScript', 'D3.js', 'Node.js'],
        link: 'https://github.com',
        repo: 'https://github.com',
        featured: true,
        date: '2023-11-15',
        images: ['/images/fintech_dashboard_project_thumbnail.png', '/images/e-commerce_app_project_thumbnail.png'],
      },
      {
        title: 'Luxe Commerce',
        category: 'Mobile',
        description: 'Premium fashion e-commerce experience with AR try-on features.',
        fullDescription: 'Luxe Commerce bridges the gap between high-end retail and digital convenience. We integrated WebAR to allow users to visualize products in their space. The clean, minimal UI focuses entirely on the product imagery, resulting in higher conversion rates for luxury items.',
        image: '/images/e-commerce_app_project_thumbnail.png',
        technologies: ['React Native', 'Redux', 'Stripe', 'AR.js'],
        link: 'https://github.com',
        repo: 'https://github.com',
        featured: true,
        date: '2023-09-20',
        images: ['/images/e-commerce_app_project_thumbnail.png', '/images/ai_chat_app_project_thumbnail.png'],
      },
      {
        title: 'Aura AI',
        category: 'AI/ML',
        description: 'Next-generation conversational AI interface with voice synthesis.',
        fullDescription: 'Aura AI is more than just a chatbot; it is a digital assistant with personality. Leveraging the latest LLMs, we built a custom interface that supports voice interaction and context-aware responses. The dark, glowing aesthetic was chosen to convey a futuristic yet accessible feel.',
        image: '/images/ai_chat_app_project_thumbnail.png',
        technologies: ['Next.js', 'OpenAI API', 'Tailwind', 'WebSpeech API'],
        link: 'https://github.com',
        repo: 'https://github.com',
        featured: true,
        date: '2024-01-10',
        images: ['/images/ai_chat_app_project_thumbnail.png', '/images/fintech_dashboard_project_thumbnail.png'],
      },
    ];
    seedProjects.forEach(p => this.createProject(p));

    // Seed Skills
    const seedSkills: InsertSkill[] = [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Node.js / Express', level: 85 },
      { name: 'Tailwind CSS', level: 98 },
      { name: 'PostgreSQL / MongoDB', level: 80 },
      { name: 'UI/UX Design', level: 75 },
    ];
    seedSkills.forEach(s => {
        const id = randomUUID();
        this.skills.set(id, { ...s, id });
    });

    // Seed Experiences
    const seedExperiences: InsertExperience[] = [
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
    ];
    seedExperiences.forEach(e => {
        const id = randomUUID();
        this.experiences.set(id, { ...e, id });
    });
    
    // Seed Testimonials
    const seedTestimonials: InsertTestimonial[] = [
       {
        name: 'Sarah Jenkins',
        role: 'CTO at TechFlow',
        content: 'The attention to detail and animation work transformed our boring dashboard into an experience our users actually love.',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      {
        name: 'Michael Chen',
        role: 'Founder of StartUp',
        content: 'Exceptional code quality and design sense. Delivered the project 2 weeks ahead of schedule.',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      }, 
    ];
    seedTestimonials.forEach(t => {
        const id = randomUUID();
        this.testimonials.set(id, { ...t, id });
    });
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const id = randomUUID();
    const newProject: Project = { ...project, id } as Project;
    this.projects.set(id, newProject);
    return newProject;
  }
  
  async updateProject(id: string, project: Partial<InsertProject>): Promise<Project | undefined> {
    const existing = this.projects.get(id);
    if (!existing) return undefined;
    const updated: Project = { ...existing, ...project } as Project;
    this.projects.set(id, updated);
    return updated;
  }

  async deleteProject(id: string): Promise<void> {
    this.projects.delete(id);
  }

  async createMessage(message: InsertMessage): Promise<Message> {
    const id = randomUUID();
    const newMessage: Message = { 
      ...message, 
      id, 
      createdAt: new Date().toISOString() 
    };
    this.messages.set(id, newMessage);
    return newMessage;
  }

  async getMessages(): Promise<Message[]> {
    return Array.from(this.messages.values());
  }
  
  async getSkills(): Promise<Skill[]> {
    return Array.from(this.skills.values());
  }
  
  async getExperiences(): Promise<Experience[]> {
    return Array.from(this.experiences.values());
  }
  
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
}

export const storage = new MemStorage();
