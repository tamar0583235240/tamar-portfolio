"use client"

import { Button } from "@/components/ui/button"
import { Mail, Github, Download } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-in slide-in-from-bottom duration-1000">
          Let's Build Something Amazing
        </h2>

        <p className="text-xl text-white/90 mb-12 animate-in slide-in-from-bottom duration-1000 delay-200">
          Ready to bring your next project to life with clean code and innovative solutions
        </p>

        <div className="flex flex-wrap justify-center gap-6 animate-in slide-in-from-bottom duration-1000 delay-400">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-white/90 hover:scale-105 transition-all duration-200"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=tamarb240@gmail.com",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 bg-transparent hover:scale-105 transition-all duration-200"
            onClick={() => window.open("https://github.com/tamar0583235240", "_blank")}
          >
            <Github className="w-5 h-5 mr-2" />
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 bg-transparent hover:scale-105 transition-all duration-200"
            onClick={() => window.open("/Tamar_Biton_CV_EN.pdf", "_blank")}
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  )
}
