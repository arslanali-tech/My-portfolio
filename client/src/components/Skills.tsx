import { Code, Layers, Bot, MessageSquare, Worm, TrendingUp, Network } from "lucide-react";

export function Skills() {
  const programmingSkills = [
    "Python", "C#", "JavaScript", "SQL", "NumPy", "Pandas", "Scikit-learn", "LangChain", "Flask"
  ];

  const frameworkSkills = [
    "Bubble.io", "Streamlit", "Dash", "Tkinter", "ASP.NET Core", "EF Core"
  ];

  const aiTools = [
    "OpenAI API", "Gemini API", "Google Maps API", "Speech-to-Text", "Playwright", "SQLite", "ChromaDB", "PostgreSQL"
  ];

  const specializations = [
    { icon: MessageSquare, title: "AI-powered Chatbots" },
    { icon: Worm, title: "Web Scraping & Automation" },
    { icon: TrendingUp, title: "Competitive Intelligence" },
    { icon: Network, title: "Distributed Systems" }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="text-skills-title">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">Technologies and tools I work with</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-card p-8 rounded-xl border border-border card-hover" data-testid="card-programming">
            <div className="text-primary text-4xl mb-4">
              <Code />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Programming</h3>
            <div className="flex flex-wrap gap-2">
              {programmingSkills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  data-testid={`skill-programming-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Frameworks & Platforms */}
          <div className="bg-card p-8 rounded-xl border border-border card-hover" data-testid="card-frameworks">
            <div className="text-accent text-4xl mb-4">
              <Layers />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Frameworks & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {frameworkSkills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  data-testid={`skill-framework-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* AI & Tools */}
          <div className="bg-card p-8 rounded-xl border border-border card-hover" data-testid="card-ai-tools">
            <div className="text-primary text-4xl mb-4">
              <Bot />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">AI Tools & APIs</h3>
            <div className="flex flex-wrap gap-2">
              {aiTools.map((tool) => (
                <span 
                  key={tool}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  data-testid={`skill-ai-${tool.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Specialized Knowledge */}
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-xl" data-testid="section-specializations">
          <h3 className="text-2xl font-bold mb-6 text-center">Specialized Knowledge</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {specializations.map(({ icon: Icon, title }) => (
              <div key={title} className="text-center" data-testid={`specialization-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                <div className="text-3xl mb-2">
                  <Icon className="mx-auto" />
                </div>
                <p className="font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
