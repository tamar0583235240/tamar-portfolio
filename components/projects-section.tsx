"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Technical Interview Simulation System",
      year: "2025",
      type: "Practicum",
      description: "Interactive web app simulating end-to-end technical interviews with AI-based analysis",
      technologies: ["React", "TypeScript", "Node.js", "Express", "Supabase", "OpenAI"],
      highlights: [
        "Built with Agile methodology and daily standups",
        "AI-powered answer analysis and personalized feedback",
        "Implemented CI/CD with automated testing",
        "Clean Architecture with security emphasis",
      ],
      githubUrl: "https://github.com/tamar0583235240/NodeProject",
      liveUrl: undefined,
    },
    {
      title: "Inventory Management System",
      year: "2025",
      type: "Desktop Application",
      description: "Desktop application built with C# and .NET Framework",
      technologies: ["C#", ".NET Framework", "WinForms", "XML"],
      highlights: ["3-layer architecture (UI, BL, DAL)", "Design Patterns implementation", "XML-based data storage"],
      githubUrl: "https://github.com/tamar0583235240/inquiryManagement",
      liveUrl: undefined,
    },
    {
      title: "Project Management Website",
      year: "2025",
      type: "Full Stack Web App",
      description: "Complete project management solution with role-based access control",
      technologies: ["React", "TypeScript", "Redux", "Node.js", "Express", "MongoDB"],
      highlights: ["Redux for state management", "Role-based access control", "RESTful API design"],
      githubUrl: "https://github.com/tamar0583235240/ProjectManagement",
      liveUrl: undefined,
    },
    {
      title: "Support Ticket Management System",
      year: "2025",
      type: "Enterprise System",
      description: "End-to-end support system with advanced multithreading",
      technologies: ["Java", "Multithreading", "Bitbucket"],
      highlights: [
        "Singleton pattern implementation",
        "Advanced data structures for queue management",
        "OOP principles and modular architecture",
      ],
      githubUrl: "https://github.com/tamar0583235240/LingoPrep",
      liveUrl: undefined,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-in slide-in-from-bottom duration-1000">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant="outline" className="border-white/30 text-white animate-pulse">
                    {project.year}
                  </Badge>
                </div>
                <CardDescription className="text-cyan-200">{project.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-white/90">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-gradient-to-r from-pink-500/30 to-cyan-500/30 text-white border-white/30 text-xs hover:from-pink-500/40 hover:to-cyan-500/40 transition-all duration-200 animate-in slide-in-from-right duration-500"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Key Highlights</h4>
                  <ul className="text-sm space-y-1 text-white/80">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 animate-in slide-in-from-left duration-500"
                        style={{ animationDelay: `${idx * 150}ms` }}
                      >
                        <span className="text-cyan-300 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-2">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-200"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-200"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
