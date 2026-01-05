"use client"

import { useState, useEffect } from "react"
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
      "The holistic approach to education at P K International has helped my daughter develop not just academically, but also in sports and arts. We couldn't be happier with our choice.",
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

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

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
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
      <div
        className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
          What Parents Say
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-10 left-0 opacity-10">
            <Quote className="h-24 w-24 text-primary-500" />
          </div>

          <div className="bg-white p-8 rounded-xl shadow-3d-blue relative z-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden mb-4 border-4 border-gradient-to-r from-primary-200 to-secondary-200 shadow-lg">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-700 italic mb-6 text-lg">{testimonial.quote}</p>
                  <h4 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevSlide}
              className="bg-white p-3 rounded-full shadow-3d-blue hover:shadow-3d-pink transition-all transform hover:scale-110 duration-200 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-primary-500" />
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
                    index === currentIndex
                      ? "bg-gradient-to-r from-primary-500 to-secondary-500 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white p-3 rounded-full shadow-3d-blue hover:shadow-3d-pink transition-all transform hover:scale-110 duration-200 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-primary-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

