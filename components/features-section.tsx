"use client"

import { useRef, useEffect, useState } from "react"
import { BookOpen, Users, Trophy, Globe, Lightbulb, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Academic Excellence",
    description: "Comprehensive curriculum designed to nurture critical thinking and creativity.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Experienced Faculty",
    description: "Dedicated teachers committed to bringing out the best in every student.",
  },
  {
    icon: <Trophy className="h-10 w-10 text-primary" />,
    title: "Sports & Activities",
    description: "Wide range of sports and extracurricular activities for holistic development.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Innovation & Technology",
    description: "Modern teaching methodologies and state-of-the-art technology integration.",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Global Perspective",
    description: "International curriculum preparing students for a global future.",
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "Arts & Creativity",
    description: "Programs that foster creative expression and artistic talents.",
  },
]

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [animatedItems, setAnimatedItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the index from the data attribute
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setAnimatedItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    const featureElements = document.querySelectorAll(".feature-card")
    featureElements.forEach((el) => {
      observer.observe(el)
    })

    return () => {
      featureElements.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-smoke relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots bg-[length:20px_20px] opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-secondary">
            Why Choose <span className="text-primary"> Abhishek Arts, Commerce & Science Junior College</span>
          </h2>
          <p className="text-body text-lg">
            We provide a nurturing environment where students can excel academically, develop character, and discover
            their unique potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-card bg-white p-8 rounded-lg shadow-soft hover:shadow-3d transition-all duration-500 transform ${
                animatedItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              } hover:-translate-y-2 border-t-4 border-primary`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 p-4 bg-smoke rounded-full inline-block">{feature.icon}</div>
              <h3 className="text-xl font-semibold font-heading mb-3 text-secondary">{feature.title}</h3>
              <p className="text-body mb-4">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-primary hover:bg-primary-600 text-white px-8 py-6 rounded-md text-lg font-medium shadow-teal-glow">
            Explore Our Programs
          </Button>
        </div>
      </div>
    </section>
  )
}

