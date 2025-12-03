import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Get in Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? I'm currently available for freelance work and open to new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Email Me</h3>
              <p className="text-muted-foreground mb-2">I'll get back to you within 24 hours.</p>
              <a href="mailto:hello@example.com" className="text-primary hover:underline font-medium">hello@example.com</a>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Call Me</h3>
              <p className="text-muted-foreground mb-2">Available Mon-Fri, 9am - 5pm EST.</p>
              <a href="tel:+1234567890" className="text-primary hover:underline font-medium">+1 (555) 123-4567</a>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Location</h3>
              <p className="text-muted-foreground">San Francisco, CA<br/>Remote Available</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border shadow-lg">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
