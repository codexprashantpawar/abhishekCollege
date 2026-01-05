"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/images/College Infra_1.jpeg",
    title: "Nurturing Minds, Shaping Futures",
    description: "Providing quality education with modern facilities and experienced faculty",
    cta: "Explore Programs",
    ctaLink: "/programs",
  },
  {
    id: 2,
    image: "/images/College Infra_3.jpeg",
    title: "Excellence in Education",
    description: "Fostering academic growth, character development, and lifelong learning",
    cta: "Our Approach",
    ctaLink: "/about",
  },
  {
    id: 3,
    image: "/images/College Infra_2.jpeg",
    title: "Join Our Community",
    description: "Admissions open for the academic year 2025-26. Limited seats available.",
    cta: "Apply Now",
    ctaLink: "/admission",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [currentSlide])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // 3D tilt effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [currentSlide])

  return (
    <div ref={heroRef} className="relative h-[85vh] overflow-hidden bg-secondary">
      {/* 3D Floating Elements */}
      <div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl z-10 animate-3d-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary-dark/20 rounded-full blur-xl z-10 animate-3d-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/3 w-24 h-24 bg-yellow/20 rounded-full blur-xl z-10 animate-3d-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image with overlay */}
          <div className="relative h-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70"></div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1
                  className="text-4xl md:text-6xl font-bold font-heading text-white mb-4 opacity-0 animate-slideDown"
                  style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
                >
                  {slide.title}
                </h1>
                <div
                  className="w-20 h-1 bg-primary mb-6 opacity-0 animate-slideDown"
                  style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
                ></div>
                <p
                  className="text-xl text-white/90 mb-8 max-w-2xl opacity-0 animate-slideDown"
                  style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
                >
                  {slide.description}
                </p>
                <div
                  className="opacity-0 animate-slideDown"
                  style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
                >
                  <Button className="bg-primary hover:bg-primary-600 text-white px-8 py-6 rounded-md text-lg font-medium shadow-teal-glow group">
                    {slide.cta}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true)
                setCurrentSlide(index)
                setTimeout(() => setIsAnimating(false), 500)
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary w-10" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all transform hover:scale-110 duration-200 backdrop-blur-sm z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all transform hover:scale-110 duration-200 backdrop-blur-sm z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

