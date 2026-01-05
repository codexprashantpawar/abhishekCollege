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
  color: "primary" | "secondary"
}

function Counter({ end, duration, suffix = "", title, icon, color }: CounterProps) {
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
        <div
          className={`p-4 rounded-full ${color === "primary" ? "bg-primary-100 text-primary-500" : "bg-secondary-100 text-secondary-500"} animate-float`}
        >
          {icon}
        </div>
      </div>
      <h3 className={`text-4xl font-bold mb-2 ${color === "primary" ? "text-primary-600" : "text-secondary-600"}`}>
        {count}
        {suffix}
      </h3>
      <p className="text-gray-600">{title}</p>
    </div>
  )
}

export default function CounterSection() {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 to-pink-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter
            end={1500}
            duration={2000}
            suffix="+"
            title="Students"
            icon={<Users className="h-8 w-8" />}
            color="primary"
          />
          <Counter
            end={20}
            duration={2000}
            suffix="+"
            title="Years of Excellence"
            icon={<Award className="h-8 w-8" />}
            color="secondary"
          />
          <Counter
            end={100}
            duration={2000}
            suffix="%"
            title="Success Rate"
            icon={<BookOpen className="h-8 w-8" />}
            color="primary"
          />
          <Counter
            end={50}
            duration={2000}
            suffix="+"
            title="Classrooms"
            icon={<Home className="h-8 w-8" />}
            color="secondary"
          />
        </div>
      </div>
    </div>
  )
}

