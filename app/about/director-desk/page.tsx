"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { User } from "lucide-react"  // Using icon for the Director

export default function DirectorDeskPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Director's Desk</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">Guiding our institution towards excellence</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/about" className="text-gray-500 hover:text-primary">
              About
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-primary font-medium">Director's Desk</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-primary">About Us</h3>
              <ul className="space-y-2">
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/history">Our History</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/president-desk">President Desk</Link>
                </li>
                <li className="border-l-4 border-primary pl-3 text-primary font-medium">
                  <Link href="/about/director-desk">Director Desk</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/principal-desk">Principal Desk</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/vision-mission">Vision & Mission</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/leadership">Leadership</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/faculty">Faculty</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/achievements">Achievements</Link>
                </li>
              </ul>

              <div className="mt-8 bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-semibold text-primary mb-2">Have a question?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Contact our admissions office for more information about our school.
                </p>
                <Button className="w-full">Contact Us</Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
                <div className="flex justify-center items-center h-32 w-32 bg-gray-200 rounded-full">
                  <User className="h-16 w-16 text-primary" />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Message from the Director</h2>
                  <p className="text-gray-700 mb-4">
                    <span className="text-xl font-semibold text-primary">Dear Students and Parents,</span>
                  </p>
                  <p className="text-gray-700 mb-4">
                    As the Director of Abhishek Arts, Commerce & Science Junior College, it is my privilege to lead
                    an institution that is dedicated to providing a holistic education that prepares students for
                    success in a rapidly changing world.
                  </p>
                  <p className="text-gray-700">
                    Education is a powerful tool that can transform lives and shape futures. At Abhishek College, we are
                    committed to harnessing this power to help our students develop not only academically but also socially,
                    emotionally, and ethically.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                Our educational philosophy is centered on the belief that every child has unique talents and abilities
                that should be nurtured and developed. We strive to create a learning environment that is stimulating,
                supportive, and inclusive, where students feel valued and empowered to reach their full potential.
              </p>

              <p className="text-gray-700 mb-4">
                At Abhishek College, we understand that the world our students will enter as adults is vastly different
                from the one we knew. Therefore, our curriculum is designed to equip them with the knowledge, skills,
                and attitudes they need to navigate the complexities of the 21st century.
              </p>

              <p className="text-gray-700 mb-4">
                We also recognize the importance of character development in education. Our values-based approach helps
                students develop integrity, empathy, resilience, and a sense of social responsibility.
              </p>

              <p className="text-gray-700 mb-4">
                As we look to the future, we remain committed to continuous improvement and innovation in our
                educational practices. We are constantly exploring new ways to enhance the learning experience.
              </p>

              <p className="text-gray-700 mb-6">
                I invite you to join us on this exciting educational journey. Together, we can make a difference in the
                lives of our students and help them become the leaders, innovators, and responsible citizens of tomorrow.
              </p>

              <div className="text-gray-800">
                <p className="font-semibold">With warm regards,</p>
                <p className="font-bold text-primary mt-2">Dr. Rajesh Kumar</p>
                <p>Director, Abhishek Arts, Commerce & Science Junior College</p>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/about">
                <Button variant="outline" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
