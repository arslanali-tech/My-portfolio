import { Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-2" data-testid="text-footer-name">
              Arslan Ali
            </h3>
            <p className="text-muted-foreground" data-testid="text-footer-tagline">
              Full-Stack Developer & AI Enthusiast
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/arslan-ali-041699323" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-2xl"
              data-testid="link-linkedin-footer"
            >
              <Linkedin />
            </a>
            <a 
              href="https://github.com/arslanali-tech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-2xl"
              data-testid="link-github-footer"
            >
              <Github />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p data-testid="text-footer-copyright">
            &copy; 2024 Arslan Ali. Built with modern web technologies and attention to detail.
          </p>
        </div>
      </div>
    </footer>
  );
}
