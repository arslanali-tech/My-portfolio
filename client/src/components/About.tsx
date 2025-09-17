export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="text-about-title">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Modern developer workspace" 
              className="rounded-xl shadow-2xl"
              data-testid="img-workspace"
            />
          </div>
          
          <div className="animate-slide-up space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-intro">
              I'm a passionate <strong className="text-foreground">Computer Science student</strong> currently in my 7th semester at Arid University, specializing in full-stack development and AI integration. My journey combines academic excellence with hands-on experience in building real-world solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-expertise">
              As a <strong className="text-foreground">Bubble.io Developer</strong> and <strong className="text-foreground">Python Developer</strong>, I create scalable web applications, MVPs, and AI-powered tools that solve complex business problems. My expertise spans from no-code platforms to advanced AI chatbots and automation systems.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-card p-6 rounded-lg border border-border" data-testid="card-education">
                <h3 className="font-semibold text-primary mb-2">Education Focus</h3>
                <p className="text-sm text-muted-foreground">BSCS at Arid University<br />7th Semester</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border" data-testid="card-specialization">
                <h3 className="font-semibold text-primary mb-2">Specialization</h3>
                <p className="text-sm text-muted-foreground">AI Integration<br />Full-Stack Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
