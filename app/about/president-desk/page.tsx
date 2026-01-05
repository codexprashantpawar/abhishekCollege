"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { User } from "lucide-react"  // Using icon for the President

export default function PresidentDeskPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">President's Desk</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">A message from our visionary leader</p>
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
            <span className="text-primary font-medium">President's Desk</span>
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
                <li className="border-l-4 border-primary pl-3 text-primary font-medium">
                  <Link href="/about/president-desk">President Desk</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
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
                  <h2 className="text-2xl font-bold mb-4 text-primary">Message from the President</h2>
                  <p className="text-gray-700 mb-4">
                    <span className="text-xl font-semibold text-primary">Dear Parents and Students,</span>
                  </p>
                  <p className="text-gray-700 mb-4">
                    It is with great pride and pleasure that I welcome you to Abhishek Arts, Commerce & Science Junior
                    College. As the President of this esteemed institution, I am committed to fostering an environment
                    where education transcends traditional boundaries and prepares students for the challenges of tomorrow.
                  </p>
                  <p className="text-gray-700">
                    At Abhishek College, we believe that education is not merely about academic excellence but about
                    nurturing well-rounded individuals who can contribute meaningfully to society. Our approach combines
                    rigorous academics with character development, ensuring that our students emerge as confident,
                    compassionate, and capable leaders.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                Since our inception, we have strived to create a learning environment that encourages curiosity,
                critical thinking, and creativity. Our state-of-the-art facilities, dedicated faculty, and comprehensive
                curriculum are designed to provide students with the tools they need to excel in an increasingly
                competitive world.
              </p>

              <p className="text-gray-700 mb-4">
                We recognize that each child is unique, with their own strengths, interests, and learning styles. Our
                personalized approach to education ensures that every student receives the attention and support they
                need to reach their full potential. We celebrate diversity and foster an inclusive community where
                students learn to respect and appreciate different perspectives.
              </p>

              <p className="text-gray-700 mb-4">
                As we navigate the complexities of the 21st century, we remain committed to adapting our educational
                practices to meet the evolving needs of our students. We embrace innovation while staying true to our
                core values of excellence, integrity, and service.
              </p>

              <p className="text-gray-700 mb-4">
                I invite you to explore our website and learn more about what makes Abhishek College a leader in
                education. Whether you are a prospective parent, a current student, or an alumnus, I hope you will
                find our community welcoming and our commitment to excellence inspiring.
              </p>

              <p className="text-gray-700 mb-6">
                Thank you for your interest in our school. I look forward to partnering with you on this educational
                journey.
              </p>

              <div className="text-gray-800">
                <p className="font-semibold">Warm regards,</p>
                <p className="font-bold text-primary mt-2">Dr. S.N. Bhatnagar</p>
                <p>President, Abhishek Arts, Commerce & Science Junior College</p>
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
