"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import TopBar from "@/components/top-bar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [animatedItems, setAnimatedItems] = useState<string[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the id from the data attribute
            const id = entry.target.getAttribute("data-id") || ""
            setAnimatedItems((prev) => [...prev, id])
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => {
      observer.observe(el)
    })

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="min-h-screen bg-smoke">
        {/* Header */}
        <div className="bg-teal-gradient text-white py-20 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-dots bg-[length:20px_20px] opacity-5"></div>
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full mix-blend-overlay filter blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">About Abhishek Arts, Commerce & Science Junior College</h1>
              <p className="text-xl text-white/90">
                Nurturing Excellence, Building Character, Inspiring Future Leaders
              </p>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm">
              <Link href="/" className="text-body hover:text-primary">
                Home
              </Link>
              <span className="mx-2 text-gray-300">/</span>
              <span className="text-primary font-medium">About</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12" ref={contentRef}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div
                className="animate-on-scroll bg-white p-8 rounded-lg shadow-soft"
                data-id="section-1"
                style={{
                  opacity: animatedItems.includes("section-1") ? 1 : 0,
                  transform: animatedItems.includes("section-1") ? "translateY(0)" : "translateY(50px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                <h2 className="text-2xl font-bold font-heading mb-6 text-secondary">
                  Welcome to Abhishek Arts, Commerce & Science Junior College
                </h2>

                <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden shadow-3d">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="P K International School Campus"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-body mb-4">
                Abhishek Arts, Commerce & Science Junior Collegeis a premier educational institution committed to providing a holistic
                  education that nurtures excellence, builds character, and inspires future leaders. Since our
                  establishment, we have been dedicated to creating a learning environment that fosters academic
                  achievement, personal growth, and social responsibility.
                </p>

                <p className="text-body mb-4">
                  Our comprehensive approach to education combines rigorous academics with character development,
                  ensuring that our students emerge as confident, compassionate, and capable individuals ready to face
                  the challenges of an ever-changing world.
                </p>

                <p className="text-body mb-4">
                  At Abhishek Arts, Commerce & Science Junior College, we believe that education is not merely about acquiring knowledge but about
                  developing the skills, values, and attitudes necessary for success in all aspects of life. Our
                  dedicated faculty, state-of-the-art facilities, and innovative teaching methodologies create an
                  environment where students can discover their potential, pursue their passions, and achieve their
                  dreams.
                </p>

                <p className="text-body">
                  We invite you to explore our website and learn more about what makes P K International School a leader
                  in education. Whether you are a prospective parent, a current student, or an alumnus, we hope you will
                  find our community welcoming and our commitment to excellence inspiring.
                </p>
              </div>

              <div
                className="animate-on-scroll bg-white p-8 rounded-lg shadow-soft"
                data-id="section-2"
                style={{
                  opacity: animatedItems.includes("section-2") ? 1 : 0,
                  transform: animatedItems.includes("section-2") ? "translateY(0)" : "translateY(50px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  transitionDelay: "0.2s",
                }}
              >
                <h2 className="text-2xl font-bold font-heading mb-6 text-secondary">Our Mission & Vision</h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold font-heading mb-3 text-primary">Our Mission</h3>
                  <p className="text-body">
                    To provide a nurturing and stimulating environment where students can develop their intellectual,
                    physical, creative, and social potential. We are committed to fostering a love for learning,
                    promoting critical thinking, and instilling values that will guide our students to become
                    responsible global citizens.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold font-heading mb-3 text-primary">Our Vision</h3>
                  <p className="text-body">
                    To be a center of educational excellence that prepares students to be lifelong learners, innovative
                    thinkers, and compassionate leaders who contribute positively to society and thrive in a rapidly
                    changing world.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div
                className="animate-on-scroll bg-white p-6 rounded-lg shadow-soft sticky top-24"
                data-id="sidebar"
                style={{
                  opacity: animatedItems.includes("sidebar") ? 1 : 0,
                  transform: animatedItems.includes("sidebar") ? "translateX(0)" : "translateX(50px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                <h3 className="text-xl font-bold font-heading mb-4 text-secondary">About Us</h3>
                <ul className="space-y-3">
                  <li className="border-l-4 border-primary pl-3 text-primary font-medium">
                    <Link href="/about">Overview</Link>
                  </li>
                  <li className="border-l-4 border-transparent hover:border-primary pl-3 text-body hover:text-primary transition-colors">
                    <Link href="/about/history">Our History</Link>
                  </li>
                  <li className="border-l-4 border-transparent hover:border-primary pl-3 text-body hover:text-primary transition-colors">
                    <Link href="/about/president-desk">President Desk</Link>
                  </li>
                  <li className="border-l-4 border-transparent hover:border-primary pl-3 text-body hover:text-primary transition-colors">
                    <Link href="/about/director-desk">Director Desk</Link>
                  </li>
                  <li className="border-l-4 border-transparent hover:border-primary pl-3 text-body hover:text-primary transition-colors">
                    <Link href="/about/principal-desk">Principal Desk</Link>
                  </li>
                  <li className="border-l-4 border-transparent hover:border-primary pl-3 text-body hover:text-primary transition-colors">
                    <Link href="/about/vision-mission">Vision & Mission</Link>
                  </li>
                </ul>

                <div className="mt-8 bg-smoke p-6 rounded-lg border border-smoke-2 hover:shadow-3d transition-all duration-300">
                  <h4 className="font-semibold font-heading text-secondary mb-2">Interested in Admission?</h4>
                  <p className="text-sm text-body mb-4">Learn more about our admission process and fee structure.</p>
                  <Button className="w-full bg-primary hover:bg-primary-600 text-white shadow-teal-glow group">
                    Admission Information{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

