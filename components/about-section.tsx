"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
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
    <div ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image with 3D effect */}
          <div
            className={`relative ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
            style={{
              transformStyle: "preserve-3d",
              transform: "perspective(1000px) rotateX(3deg) rotateY(-3deg)",
              transition: "transform 0.3s ease",
            }}
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-3d">
              <Image
                src="/images/College Infra_1.jpeg" // Replace with your actual image
                alt="College Campus"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating elements with simpler animations */}
            <div
              className="absolute -top-5 -right-5 w-32 h-32 bg-primary/10 rounded-lg shadow-soft z-10 animate-float"
              style={{
                transform: "translateZ(40px)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-5xl font-bold font-heading text-primary">20+</span>
              </div>
            </div>
            <div
              className="absolute -bottom-5 -left-5 w-32 h-32 bg-yellow/10 rounded-lg shadow-soft z-10 animate-float"
              style={{
                animationDelay: "1s",
                transform: "translateZ(30px)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-5xl font-bold font-heading text-primary">A+</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`${isVisible ? "animate-slideRight" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-secondary">
              About <span className="text-primary">Abhishek Arts, Commerce & Science Junior College</span>
            </h2>

            <p className="text-body mb-6">
              Abhishek Arts, Commerce & Science Junior College is a premier educational institution committed to providing a
              holistic education that nurtures excellence, builds character, and inspires future leaders. Since our establishment,
              we have been dedicated to creating a learning environment that fosters academic achievement, personal growth, and
              social responsibility.
            </p>

            <p className="text-body mb-6">
              Our comprehensive approach to education combines rigorous academics with character development, ensuring that our
              students emerge as confident, compassionate, and capable individuals ready to face the challenges of an ever-changing world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3">
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                </div>
                <p className="text-body">State-of-the-art infrastructure</p>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3">
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                </div>
                <p className="text-body">Experienced faculty members</p>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3">
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                </div>
                <p className="text-body">Comprehensive curriculum</p>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3">
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                </div>
                <p className="text-body">Focus on holistic development</p>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary-600 text-white shadow-teal-glow group">
              Learn More About Us <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
