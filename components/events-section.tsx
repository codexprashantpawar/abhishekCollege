"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Inauguration of New Academic Year",
    date: "June 5, 2025",
    image: "/images/inauguration.jpg", // Update with actual event image path
    description: "Join us for the inauguration of the new academic year with a grand ceremony.",
  },
  {
    id: 2,
    title: "Inter-College Debate Competition",
    date: "July 15, 2025",
    image: "/images/debate-competition.jpg", // Update with actual event image path
    description: "Compete with other colleges in a debate competition to showcase your intellectual abilities.",
  },
  {
    id: 3,
    title: "Annual College Festival",
    date: "August 20, 2025",
    image: "/images/college-festival.jpg", // Update with actual event image path
    description: "A two-day festival filled with cultural programs, food stalls, and exciting activities.",
  },
  {
    id: 4,
    title: "Inter-College Sports Championship",
    date: "September 10, 2025",
    image: "/images/sports-championship.jpg", // Update with actual event image path
    description: "A sports event where students from various colleges participate in various sports.",
  },
  {
    id: 5,
    title: "Guest Lecture on Career Opportunities",
    date: "October 5, 2025",
    image: "/images/guest-lecture.jpg", // Update with actual event image path
    description: "A guest lecture by industry experts to guide students on career opportunities and growth.",
  },
]

export default function EventsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [animatedItems, setAnimatedItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setAnimatedItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    const eventElements = document.querySelectorAll(".event-card")
    eventElements.forEach((el) => {
      observer.observe(el)
    })

    return () => {
      eventElements.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  return (
    <div ref={sectionRef} className="py-20 bg-smoke relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-secondary">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="text-body text-lg">Stay updated with the latest happenings at Abhishek Arts, Commerce & Science Junior College</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              data-index={index}
              className={`event-card bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-3d transition-all duration-500 transform ${
                animatedItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              } hover:-translate-y-2 group`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-primary mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <h3 className="text-xl font-semibold font-heading mb-2 text-secondary group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-body mb-4">{event.description}</p>
                <Button className="bg-primary hover:bg-primary-600 text-white shadow-soft group-hover:shadow-teal-glow transition-all duration-300">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
