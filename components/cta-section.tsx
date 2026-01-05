"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-teal-gradient text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center ${isVisible ? "animate-fadeIn" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready to Join  Abhishek Arts, Commerce & Science Junior College?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Take the first step towards providing your child with a world-class education. Limited seats available for
            the academic year 2025-26.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-gray-100 font-semibold py-6 px-8 text-lg transform hover:scale-105 transition-transform shadow-medium group">
              Apply Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold py-6 px-8 text-lg transform hover:scale-105 transition-transform"
            >
              Schedule a Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

