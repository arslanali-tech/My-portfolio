import { Moon, Sun, Linkedin, Github, Menu } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
        <div className="text-2xl font-bold gradient-text" data-testid="logo">
          Arslan Ali
        </div>
        
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="nav-home"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="nav-about"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="nav-skills"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="nav-projects"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="nav-contact"
          >
            Contact
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="https://www.linkedin.com/in/arslan-ali-041699323" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-linkedin-header"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="https://github.com/arslanali-tech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-github-header"
          >
            <Github className="h-5 w-5" />
          </a>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="bg-muted hover:bg-accent"
            data-testid="button-theme-toggle"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
        </div>
      </nav>
    </header>
  );
}
