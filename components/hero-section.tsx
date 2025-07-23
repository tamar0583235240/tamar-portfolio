"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="absolute inset-0 opacity-10">
        <Image src="/github-pattern.png" alt="Background pattern" fill className="object-cover" />
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto animate-in fade-in duration-1000">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/30 hover:scale-110 transition-transform duration-300">
            <Image
              src="/github-single.png"
              alt="Tamar Biton"
              width={128}
              height={128}
              className="w-full h-full object-cover bg-white/20"
            />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent animate-in slide-in-from-bottom duration-1000 delay-200">
          Tamar Biton
        </h1>

        <p className="text-2xl md:text-3xl mb-8 font-light animate-in slide-in-from-bottom duration-1000 delay-400">
          Full Stack Developer
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-in slide-in-from-bottom duration-1000 delay-600">
          <Button
            variant="outline"
            size="lg"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-200"
            onClick={() => window.open("tel:058-3235240")}
          >
            <Phone className="w-4 h-4 mr-2" />
            058-3235240
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-200"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=tamarb240@gmail.com",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <Mail className="w-4 h-4 mr-2" />
            tamarb240@gmail.com
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-200"
            onClick={() => window.open("https://github.com/tamar0583235240", "_blank")}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-200"
            onClick={() => window.open("https://www.linkedin.com/in/tamar-biton/", "_blank")}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  )
}
