"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "/placeholder.svg?height=800&width=1600",
    alt: "School Building",
    title: "Modern Campus",
    subtitle: "State-of-the-art facilities for optimal learning",
  },
  {
    src: "/placeholder.svg?height=800&width=1600",
    alt: "Students in Classroom",
    title: "Academic Excellence",
    subtitle: "Fostering critical thinking and creativity",
  },
  {
    src: "/placeholder.svg?height=800&width=1600",
    alt: "Sports Activities",
    title: "Sports & Recreation",
    subtitle: "Developing physical fitness and team spirit",
  },
  {
    src: "/placeholder.svg?height=800&width=1600",
    alt: "Cultural Event",
    title: "Cultural Enrichment",
    subtitle: "Celebrating diversity and artistic expression",
  },
]

export default function ImageSlider() {
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-secondary-900/70"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="mb-6 animate-float">
          <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium mb-2">
            Welcome to P K International School
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-slideDown drop-shadow-lg">
          Nurturing <span className="text-secondary-300">Excellence</span>, Building{" "}
          <span className="text-primary-300">Future</span>
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mb-8 animate-slideUp">{images[currentIndex].subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn">
          <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-3d-blue">
            Explore Programs
          </button>
          <button className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-3d-pink">
            Apply Now
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all transform hover:scale-110 duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all transform hover:scale-110 duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true)
                setCurrentIndex(index)
                setTimeout(() => setIsAnimating(false), 500)
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Animated Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary-500/20 rounded-full blur-3xl animate-pulse"></div>
    </div>
  )
}

