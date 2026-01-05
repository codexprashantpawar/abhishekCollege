"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Target, Compass, Award, Users, BookOpen, Globe } from "lucide-react"

export default function VisionMissionPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Vision & Mission</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Guiding principles that shape our educational philosophy
          </p>
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
            <span className="text-primary font-medium">Vision & Mission</span>
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
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/about/director-desk">Director Desk</Link>
                </li>
                <li className="border-l-4 border-primary pl-3 text-primary font-medium">
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
            {/* Vision Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-primary">Our Vision</h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-700 mb-4">
                  To be a premier educational institution that nurtures global citizens who are innovative thinkers,
                  compassionate leaders, and lifelong learners committed to making a positive impact on society.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary mt-4">
                  <p className="text-gray-700 italic">
                    "We envision a learning community where every student discovers their potential, develops their
                    talents, and is empowered to shape a better world."
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Compass className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
              </div>
              <div className="pl-11">
                <p className="text-gray-700 mb-4">
                  Abhishek Arts, Commerce & Science Junior College is committed to providing a holistic education that balances academic excellence with character development. We strive to:
                </p>
                <ul className="space-y-4 mt-6">
                  <li className="flex">
                    <BookOpen className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <span className="font-semibold">Foster Academic Excellence:</span> Provide a rigorous and
                      comprehensive curriculum that challenges students to think critically, solve problems creatively,
                      and communicate effectively.
                    </p>
                  </li>
                  <li className="flex">
                    <Users className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <span className="font-semibold">Develop Character and Values:</span> Instill integrity, respect,
                      responsibility, and empathy, preparing students to be ethical leaders and responsible citizens.
                    </p>
                  </li>
                  <li className="flex">
                    <Globe className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <span className="font-semibold">Promote Global Awareness:</span> Cultivate an understanding and
                      appreciation of diverse cultures, perspectives, and global issues, preparing students to thrive in
                      an interconnected world.
                    </p>
                  </li>
                  <li className="flex">
                    <Award className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <span className="font-semibold">Nurture Individual Talents:</span> Recognize and develop the
                      unique abilities and interests of each student through a balanced program of academics, arts,
                      athletics, and extracurricular activities.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-primary">Our Core Values</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">Excellence</h3>
                  <p className="text-gray-700">
                    We strive for the highest standards in all aspects of education, encouraging our students to reach
                    their full potential.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">Integrity</h3>
                  <p className="text-gray-700">
                    We promote honesty, ethical behavior, and accountability in all interactions and decisions.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">Respect</h3>
                  <p className="text-gray-700">
                    We value diversity, foster inclusivity, and treat all individuals with dignity and consideration.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">Innovation</h3>
                  <p className="text-gray-700">
                    We embrace creativity, critical thinking, and adaptability in our approach to teaching and learning.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">Collaboration</h3>
                  <p className="text-gray-700">
                    We believe in the power of teamwork and partnership among students, teachers, parents, and the
                    community.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">Service</h3>
                  <p className="text-gray-700">
                    We encourage compassion, social responsibility, and a commitment to making a positive difference in
                    the world.
                  </p>
                </div>
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
