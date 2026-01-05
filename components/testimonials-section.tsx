"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Parent of Grade 8 Student",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Abhishek Arts, Commerce & Science Junior College has provided my child with an excellent learning environment. The teachers are dedicated and the facilities are top-notch.",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    role: "Parent of Grade 5 Student",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The holistic approach to education at Abhishek Arts, Commerce & Science Junior College has helped my daughter develop not just academically, but also in sports and arts. We couldn't be happier with our choice.",
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Parent of Grade 10 Student",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The individual attention given to each student is remarkable. My son has flourished academically and gained confidence since joining P K International School.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Alumni, Batch of 2020",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The values and education I received at Abhishek Arts, Commerce & Science Junior College have been instrumental in my success at university. I'm forever grateful for the foundation they provided.",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
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

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, isVisible])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-slideDown" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-secondary">
            What <span className="text-primary">Parents Say</span>
          </h2>
          <p className="text-body text-lg">Hear from our community of parents and students about their experience</p>
        </div>

        <div
          className={`max-w-4xl mx-auto relative ${isVisible ? "animate-fadeIn" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          <div className="absolute -top-10 left-0 opacity-10">
            <Quote className="h-24 w-24 text-primary" />
          </div>

          <div className="bg-smoke p-8 md:p-12 rounded-lg shadow-3d relative z-10 transform transition-all duration-500 hover:shadow-3d-hover hover:scale-105">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="md:w-1/4 flex flex-col items-center md:items-start">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-medium">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-bold font-heading text-secondary text-center md:text-left">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-body text-center md:text-left">{testimonial.role}</p>
                  </div>

                  <div className="md:w-3/4">
                    <p className="text-body italic text-lg md:text-xl leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevSlide}
              className="bg-white p-3 rounded-full shadow-soft hover:shadow-medium transition-all transform hover:scale-110 duration-200 focus:outline-none text-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Indicators */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true)
                      setCurrentIndex(index)
                      setTimeout(() => setIsAnimating(false), 500)
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white p-3 rounded-full shadow-soft hover:shadow-medium transition-all transform hover:scale-110 duration-200 focus:outline-none text-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

