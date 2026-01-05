"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { User } from "lucide-react"  // Using icon for the Principal

export default function PrincipalDeskPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Principal's Desk</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Leading our academic community with vision and dedication
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
            <span className="text-primary font-medium">Principal's Desk</span>
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
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
                <div className="flex justify-center items-center h-32 w-32 bg-gray-200 rounded-full">
                  <User className="h-16 w-16 text-primary" />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Message from the Principal</h2>
                  <p className="text-gray-700 mb-4">
                    <span className="text-xl font-semibold text-primary">Dear Students and Parents,</span>
                  </p>
                  <p className="text-gray-700 mb-4">
                    It is with great pleasure that I welcome you to Abhishek Arts, Commerce & Science Junior College.
                    As the Principal, I am honored to lead a community of dedicated educators and enthusiastic learners
                    who are committed to excellence in all aspects of education.
                  </p>
                  <p className="text-gray-700">
                    At Abhishek College, we believe that education is a partnership between the school, students, and
                    parents. Together, we can create an environment that nurtures intellectual curiosity, personal
                    growth, and a love for learning.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                Our school is more than just a place of academic learning; it is a community where students develop
                character, confidence, and a sense of responsibility. We strive to provide a balanced education that
                addresses the intellectual, physical, emotional, and social needs of our students.
              </p>

              <p className="text-gray-700 mb-4">
                The curriculum at Abhishek College is designed to be challenging and engaging, encouraging students to
                think critically, solve problems creatively, and communicate effectively. We incorporate the latest
                educational research and technology to enhance the learning experience and prepare students for the
                demands of higher education and the workplace.
              </p>

              <p className="text-gray-700 mb-4">
                Beyond academics, we offer a wide range of co-curricular activities that allow students to explore
                their interests, develop new skills, and discover their talents. Whether in sports, arts, or community
                service, we encourage our students to participate actively and strive for excellence.
              </p>

              <p className="text-gray-700 mb-4">
                As educators, we recognize that each student is unique, with different strengths, challenges, and
                learning styles. Our teachers are committed to providing personalized attention and support to help
                every student succeed. We celebrate diversity and create an inclusive environment where all students
                feel valued and respected.
              </p>

              <p className="text-gray-700 mb-6">
                I invite you to explore our school and discover the many opportunities we offer. Our doors are always
                open to parents and visitors who wish to learn more about our programs and philosophy. I look forward to
                working with you to provide the best possible education for our students.
              </p>

              <div className="text-gray-800">
                <p className="font-semibold">Sincerely,</p>
                <p className="font-bold text-primary mt-2">Dr. Rajesh Patel</p>
                <p>Principal, Abhishek Arts, Commerce & Science Junior College</p>
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
