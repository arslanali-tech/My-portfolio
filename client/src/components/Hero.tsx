import { Button } from "@/components/ui/button";
import profileImage from "@assets/profile_1758081070881.jpg";

export function Hero() {
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
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
        <div className="animate-fade-in">
          <img 
            src={profileImage} 
            alt="Arslan Ali - Professional Photo" 
            className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-primary/30 shadow-2xl object-cover ring-4 ring-primary/10 hover:ring-primary/20 transition-all duration-300"
            data-testid="img-profile"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="text-hero-title">
            Hi, I'm <span className="gradient-text">Arslan Ali</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-hero-subtitle">
            Full-Stack Developer, AI Enthusiast & Computer Science Student<br />
            <span className="text-lg">Building modern, intelligent applications with Python, Bubble.io & AI</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
              data-testid="button-view-work"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="text-muted-foreground" data-testid="text-current-status">
            <p className="mb-2">Currently in 7th Semester BSCS at Arid University</p>
            <p>Available for freelance projects and internship opportunities</p>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
}
