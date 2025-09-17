import { GraduationCap, Laptop, Code, ChartGantt } from "lucide-react";

export function Timeline() {
  const timelineItems = [
    {
      id: "education",
      icon: GraduationCap,
      title: "BSCS - Computer Science",
      organization: "Arid University",
      period: "Currently in 7th Semester | Burewala",
      description: "Focusing on software engineering, AI/ML, distributed systems, and computer architecture. Active in academic projects involving modern web development and AI integration.",
      side: "left",
      color: "primary"
    },
    {
      id: "freelance",
      icon: Laptop,
      title: "Freelance Bubble.io Developer",
      organization: "Independent Contractor",
      period: "2023 - Present",
      description: "Building modern, scalable web applications, MVPs, and SaaS products using Bubble.io platform. Specializing in no-code solutions with complex logic and third-party integrations.",
      side: "right",
      color: "accent"
    },
    {
      id: "python-dev",
      icon: Code,
      title: "Python Developer",
      organization: "Automation & AI Solutions",
      period: "2022 - Present",
      description: "Extensive experience in automation, AI-powered tools, web scraping, and API integration. Built multiple production-ready applications with modern Python frameworks.",
      side: "left",
      color: "primary"
    },
    {
      id: "student-projects",
      icon: ChartGantt,
      title: "Student Developer",
      organization: "Academic Projects",
      period: "2021 - Present",
      description: "Hands-on experience with C#, ASP.NET Core APIs, distributed systems, and AI integration through comprehensive academic projects and coursework.",
      side: "right",
      color: "accent"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="text-timeline-title">
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">My academic journey and professional growth</p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent"></div>
          
          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="relative mb-12" data-testid={`timeline-item-${item.id}`}>
                <div className="flex items-center justify-center">
                  <div className={`bg-${item.color} text-${item.color}-foreground w-12 h-12 rounded-full flex items-center justify-center z-10`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className={item.side === "left" ? "md:text-right" : ""}>
                    {item.side === "left" && (
                      <div className="bg-card p-6 rounded-xl border border-border">
                        <h3 className="text-2xl font-bold mb-2 text-card-foreground" data-testid={`text-timeline-title-${item.id}`}>
                          {item.title}
                        </h3>
                        <p className={`text-${item.color} font-semibold mb-2`} data-testid={`text-timeline-org-${item.id}`}>
                          {item.organization}
                        </p>
                        <p className="text-muted-foreground mb-4" data-testid={`text-timeline-period-${item.id}`}>
                          {item.period}
                        </p>
                        <p className="text-sm text-muted-foreground" data-testid={`text-timeline-description-${item.id}`}>
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                  <div>
                    {item.side === "right" && (
                      <div className="bg-card p-6 rounded-xl border border-border">
                        <h3 className="text-2xl font-bold mb-2 text-card-foreground" data-testid={`text-timeline-title-${item.id}`}>
                          {item.title}
                        </h3>
                        <p className={`text-${item.color} font-semibold mb-2`} data-testid={`text-timeline-org-${item.id}`}>
                          {item.organization}
                        </p>
                        <p className="text-muted-foreground mb-4" data-testid={`text-timeline-period-${item.id}`}>
                          {item.period}
                        </p>
                        <p className="text-sm text-muted-foreground" data-testid={`text-timeline-description-${item.id}`}>
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
