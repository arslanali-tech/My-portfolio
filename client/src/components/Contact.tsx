import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Code, Briefcase, Handshake, MessageSquare, Linkedin, Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ email: "", message: "" });
  };

  const opportunities = [
    {
      icon: Code,
      title: "Freelance Projects",
      description: "Web apps, MVPs, and AI integration"
    },
    {
      icon: Briefcase,
      title: "Internship Opportunities",
      description: "Remote or hybrid positions"
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "Open source and academic projects"
    },
    {
      icon: MessageSquare,
      title: "Consulting",
      description: "AI integration and automation solutions"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="text-contact-title">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">Let's discuss your next project or collaboration opportunity</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6" data-testid="text-available-for">Available for</h3>
            <div className="space-y-4">
              {opportunities.map((opportunity) => {
                const Icon = opportunity.icon;
                return (
                  <div 
                    key={opportunity.title}
                    className="flex items-center"
                    data-testid={`opportunity-${opportunity.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    <div className="text-primary text-xl mr-4">
                      <Icon />
                    </div>
                    <div>
                      <p className="font-semibold">{opportunity.title}</p>
                      <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6" data-testid="text-connect-with-me">Connect With Me</h3>
            <div className="space-y-6">
              <a 
                href="https://www.linkedin.com/in/arslan-ali-041699323" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-card rounded-xl border border-border hover:border-primary transition-all group"
                data-testid="link-linkedin-contact"
              >
                <div className="text-primary text-2xl mr-4 group-hover:scale-110 transition-transform">
                  <Linkedin />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Professional network & updates</p>
                </div>
                <div className="ml-auto text-muted-foreground group-hover:text-primary">
                  <ExternalLink className="h-4 w-4" />
                </div>
              </a>
              
              <a 
                href="https://github.com/arslanali-tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-card rounded-xl border border-border hover:border-accent transition-all group"
                data-testid="link-github-contact"
              >
                <div className="text-accent text-2xl mr-4 group-hover:scale-110 transition-transform">
                  <Github />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">GitHub</p>
                  <p className="text-sm text-muted-foreground">Source code & repositories</p>
                </div>
                <div className="ml-auto text-muted-foreground group-hover:text-accent">
                  <ExternalLink className="h-4 w-4" />
                </div>
              </a>
              
              <div className="bg-card p-6 rounded-xl border border-border" data-testid="form-contact">
                <h4 className="font-semibold mb-4">Send me a message</h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    type="email" 
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    data-testid="input-email"
                  />
                  <Textarea 
                    placeholder="Your Message" 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    data-testid="textarea-message"
                  />
                  <Button 
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    data-testid="button-send-message"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
