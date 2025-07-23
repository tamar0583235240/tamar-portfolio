"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Linkedin } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "education", label: "Education", href: "#education" },
    { id: "contact", label: "Contact", href: "#contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 200
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-400">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-in slide-in-from-bottom duration-1000">
            About Me
          </h2>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-white animate-in slide-in-from-bottom duration-1000 delay-200 hover:bg-white/15 transition-all duration-300">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Full Stack Developer with strong analytical skills, professional curiosity, and a proven ability to
              self-learn. Experienced in developing modern Web and Desktop applications, with a strong emphasis on
              frontend development using React, Angular, JavaScript, TypeScript, and responsive design principles.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Committed to writing clean, maintainable code following SOLID principles and a clear architectural
              understanding. Brings a proactive mindset, strong UX awareness, and a drive to grow and succeed in every
              challenge.
            </p>
          </div>
        </div>
      </section>

      <SkillsSection />
      <ProjectsSection />

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-in slide-in-from-bottom duration-1000">
            Education & Certifications
          </h2>

          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 hover:scale-[1.02] transition-all duration-500 animate-in slide-in-from-left duration-1000">
              <CardHeader>
                <CardTitle className="text-2xl">Practical Engineer Diploma in Software Engineering</CardTitle>
                <CardDescription className="text-cyan-200 text-lg">
                  Mahat (Israeli Ministry of Labor) • 2023–2025
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 hover:scale-[1.02] transition-all duration-500 animate-in slide-in-from-right duration-1000 delay-200">
              <CardHeader>
                <CardTitle className="text-2xl">Advanced Computer Science Courses</CardTitle>
                <CardDescription className="text-cyan-200 text-lg">UltraCode • 2023-2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 text-lg">
                  Data Structures, Algorithms, Operating Systems, and Linear Algebra
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Left side - Copyright */}
            <div>
              <p className="text-white/70 text-sm">© 2025 Tamar Biton. All rights reserved</p>
            </div>

            {/* Right side - Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tamarb240@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-200 rounded-full p-2 inline-flex"
              >
                <Mail className="w-4 h-4" />
              </a>
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-200 rounded-full p-2"
                onClick={() => window.open("tel:058-3235240")}
              >
                <Phone className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-200 rounded-full p-2"
                onClick={() => window.open("https://github.com/tamar0583235240", "_blank")}
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-200 rounded-full p-2"
                onClick={() => window.open("https://www.linkedin.com/in/tamar-biton/", "_blank")}
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
