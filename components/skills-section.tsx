"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Cloud } from "lucide-react"

export function SkillsSection() {
  const skills = {
    frontend: ["React", "Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Redux"],
    backend: ["Python", "Java", "C#", "Node.js", ".NET", ".NET Core", "Express"],
    databases: ["SQL", "MongoDB"],
    cloud: ["AWS"],
    tools: ["Git", "GitHub", "Bitbucket", "Windows", "Linux"],
  }

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-in slide-in-from-bottom duration-1000">
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 hover:scale-105 transition-all duration-300 animate-in slide-in-from-left duration-1000">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-300" />
                Frontend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-gradient-to-r from-pink-500/30 to-purple-500/30 text-white border-white/30 hover:from-pink-500/40 hover:to-purple-500/40 transition-all duration-200 animate-in slide-in-from-bottom duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom duration-1000 delay-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-purple-300" />
                Backend & Databases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.backend.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-gradient-to-r from-purple-500/30 to-cyan-500/30 text-white border-white/30 hover:from-purple-500/40 hover:to-cyan-500/40 transition-all duration-200 animate-in slide-in-from-bottom duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-gradient-to-r from-cyan-500/30 to-pink-500/30 text-white border-white/30 hover:from-cyan-500/40 hover:to-pink-500/40 transition-all duration-200 animate-in slide-in-from-bottom duration-500"
                    style={{ animationDelay: `${(skills.backend.length + index) * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 hover:scale-105 transition-all duration-300 animate-in slide-in-from-right duration-1000 delay-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-pink-300" />
                Cloud & Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.cloud.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-gradient-to-r from-pink-500/30 to-cyan-500/30 text-white border-white/30 hover:from-pink-500/40 hover:to-cyan-500/40 transition-all duration-200 animate-in slide-in-from-bottom duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-white border-white/30 hover:from-cyan-500/40 hover:to-purple-500/40 transition-all duration-200 animate-in slide-in-from-bottom duration-500"
                    style={{ animationDelay: `${(skills.cloud.length + index) * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
