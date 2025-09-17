import { Button } from "@/components/ui/button";
import { Stethoscope, MapPin, TrendingUp, GitBranch, Github, ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      id: "ai-medical-chatbot",
      title: "AI-Powered Medical Chatbot",
      icon: Stethoscope,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      description: "My Final Year Project featuring an intelligent medical assistant that facilitates doctor-patient interactions. Built with Python, Streamlit, and LangChain, it includes appointment booking and stores interaction history in SQLite.",
      technologies: ["Python", "Streamlit", "LangChain", "OpenAI API", "SQLite"],
      color: "primary"
    },
    {
      id: "google-maps-scraper",
      title: "Google Maps Business Scraper",
      icon: MapPin,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      description: "Automated business data extraction tool that scrapes Google Maps for business information including names, contacts, and locations. Features Tkinter UI and Excel export functionality with Gemini API integration.",
      technologies: ["Python", "Playwright", "Gemini API", "Tkinter", "Excel"],
      color: "accent"
    },
    {
      id: "salesapp-mvp",
      title: "SalesApp MVP",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      description: "AI-powered sales assistant that provides real-time competitive intelligence during live sales calls. Helps sales representatives with instant insights and data-driven recommendations for better conversion rates.",
      technologies: ["Python", "AI Integration", "Real-time Analysis", "MVP"],
      color: "primary"
    },
    {
      id: "api-projects",
      title: "Minimal API Projects",
      icon: GitBranch,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      description: "Collection of ASP.NET Core Minimal APIs including Wanderlust Log (travel experiences) and The Blog Site API (content management). Built with modern C# practices and Entity Framework Core.",
      technologies: ["C#", "ASP.NET Core", "EF Core", "Minimal API"],
      color: "accent"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">Showcasing my latest work and innovations</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div 
                key={project.id}
                className="bg-card p-8 rounded-xl border border-border card-hover group"
                data-testid={`card-project-${project.id}`}
              >
                <img 
                  src={project.image}
                  alt={`${project.title} Interface`}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                  data-testid={`img-project-${project.id}`}
                />
                
                <div className="flex items-center mb-4">
                  <div className={`text-2xl text-${project.color} mr-3`}>
                    <Icon />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className={`px-3 py-1 bg-${project.color}/10 text-${project.color} rounded-full text-sm`}
                      data-testid={`tech-${project.id}-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    className={`flex items-center px-4 py-2 bg-${project.color} text-${project.color}-foreground rounded-lg hover:bg-${project.color}/90 transition-colors`}
                    data-testid={`button-view-code-${project.id}`}
                  >
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </Button>
                  <Button 
                    variant="outline"
                    className={`flex items-center px-4 py-2 border border-${project.color} text-${project.color} rounded-lg hover:bg-${project.color} hover:text-${project.color}-foreground transition-colors`}
                    data-testid={`button-demo-${project.id}`}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> 
                    {project.id === "api-projects" ? "Documentation" : project.id === "salesapp-mvp" ? "Learn More" : "Live Demo"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
