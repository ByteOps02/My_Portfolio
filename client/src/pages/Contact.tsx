import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, MapPin, Phone, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: Mail,
    title: "Email Me",
    description: "I'll get back to you within 24 hours.",
    value: "krishnarammhd@gmail.com",
    href: "mailto:krishnarammhd@gmail.com"
  },
  {
    icon: Phone,
    title: "Call Me",
    description: "Available Mon-Fri, 9am - 5pm IST.",
    value: "+91 92440 88448",
    href: "tel:+919244088448"
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Nagpur, Maharashtra",
    value: "Remote Available",
    href: null
  }
];

const trustSignals = [
  { icon: Clock, text: "Response within 24 hours" },
  { icon: MessageSquare, text: "Free initial consultation" },
  { icon: CheckCircle2, text: "100% satisfaction guaranteed" },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-28 md:pt-32 pb-16 container mx-auto px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-primary font-medium mb-3 block text-sm uppercase tracking-wider">Contact</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            Have a project in mind or just want to say hi? I'm currently available for freelance work and open to new opportunities.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <signal.icon className="h-4 w-4 text-primary" />
              <span>{signal.text}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div 
            className="lg:col-span-1 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-1">{item.description}</p>
                    {item.href ? (
                      <a href={item.href} className="text-primary hover:underline text-sm font-medium break-all">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-primary">{item.value}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <h3 className="font-semibold mb-2">Prefer a quick chat?</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Schedule a free 15-minute call to discuss your project.
              </p>
              <a 
                href="mailto:krishnarammhd@gmail.com?subject=Schedule%20a%20Call" 
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Book a call <span className="ml-1">→</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-2 p-6 md:p-8 rounded-2xl bg-card border border-border"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-6">Send me a message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
