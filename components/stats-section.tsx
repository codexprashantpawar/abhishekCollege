"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Users, Award, BookOpen, Home } from "lucide-react"

interface CounterProps {
  end: number
  duration: number
  suffix?: string
  title: string
  icon: React.ReactNode
}

function Counter({ end, duration, suffix = "", title, icon }: CounterProps) {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isVisible])

  return (
    <div ref={counterRef} className="text-center">
      <div className="flex justify-center mb-4">
        <div className="p-4 rounded-full bg-white text-primary shadow-medium animate-3d-float">{icon}</div>
      </div>
      <h3 className="text-5xl font-bold font-heading mb-2 text-white">
        {count}
        {suffix}
      </h3>
      <p className="text-white/80 text-lg">{title}</p>
    </div>
  )
}

export default function StatsSection() {
  // Remove the mouse tracking effect code and simplify the 3D effects

  // 1. Remove the mousePosition state and sectionRef:
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // 2. Remove the useEffect hook that handles mouse movement

  // const sectionRef = useRef<HTMLDivElement>(null)
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // // 3D effect on mouse move
  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     if (!sectionRef.current) return

  //     const { left, top, width, height } = sectionRef.current.getBoundingClientRect()
  //     const x = (e.clientX - left) / width - 0.5
  //     const y = (e.clientY - top) / height - 0.5

  //     setMousePosition({ x, y })
  //   }

  //   window.addEventListener("mousemove", handleMouseMove)

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove)
  //   }
  // }, [])

  return (
    // 3. Update the main div to use a simpler 3D effect:
    <div className="py-20 bg-teal-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">Our Achievements</h2>
          <p className="text-white/80 text-lg">
           Abhishek Arts, Commerce & Science Junior College has a proven track record of excellence in education
          </p>
        </div>

        {/* 4. Update the grid container to use simpler 3D effects: */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Counter end={1500} duration={2000} suffix="+" title="Students" icon={<Users className="h-8 w-8" />} />
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Counter
              end={20}
              duration={2000}
              suffix="+"
              title="Years of Excellence"
              icon={<Award className="h-8 w-8" />}
            />
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Counter
              end={100}
              duration={2000}
              suffix="%"
              title="Success Rate"
              icon={<BookOpen className="h-8 w-8" />}
            />
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Counter end={50} duration={2000} suffix="+" title="Classrooms" icon={<Home className="h-8 w-8" />} />
          </div>
        </div>
      </div>
    </div>
  )
}

