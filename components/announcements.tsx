"use client"

import { useRef, useEffect, useState } from "react"
import { Bell, Calendar, Award, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const announcements = [
  {
    icon: <Calendar className="h-5 w-5 text-primary-500" />,
    title: "Parent-Teacher Meeting",
    date: "April 15, 2025",
    description: "Annual parent-teacher meeting for all classes.",
    color: "primary",
  },
  {
    icon: <Award className="h-5 w-5 text-secondary-500" />,
    title: "Annual Sports Day",
    date: "May 10, 2025",
    description: "Join us for our annual sports day celebration.",
    color: "secondary",
  },
  {
    icon: <BookOpen className="h-5 w-5 text-primary-500" />,
    title: "New Curriculum Launch",
    date: "June 1, 2025",
    description: "Introducing our enhanced curriculum for the new academic year.",
    color: "primary",
  },
]

export default function Announcements() {
  const sectionRef = useRef<HTMLDivElement>(null)
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={sectionRef} className="py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
      <div
        className="absolute bottom-20 left-0 w-64 h-64 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-12">
          <Bell className="h-6 w-6 text-secondary-500 mr-3 animate-bounce" />
          <h2 className="text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
            Latest Announcements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? "animate-slideUp opacity-100" : "opacity-0"
              } ${announcement.color === "primary" ? "shadow-3d-blue border-l-4 border-primary-500" : "shadow-3d-pink border-l-4 border-secondary-500"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-3">
                <div
                  className={`p-2 rounded-full ${announcement.color === "primary" ? "bg-primary-100" : "bg-secondary-100"}`}
                >
                  {announcement.icon}
                </div>
                <h3
                  className={`text-lg font-semibold ml-2 ${announcement.color === "primary" ? "text-primary-600" : "text-secondary-600"}`}
                >
                  {announcement.title}
                </h3>
              </div>
              <div className="text-sm text-gray-500 mb-3">{announcement.date}</div>
              <p className="text-gray-700 mb-4">{announcement.description}</p>
              <Button
                className={`w-full transform hover:scale-105 transition-transform ${
                  announcement.color === "primary"
                    ? "bg-primary-500 hover:bg-primary-600 text-white shadow-3d-blue"
                    : "bg-secondary-500 hover:bg-secondary-600 text-white shadow-3d-pink"
                }`}
              >
                Read More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

