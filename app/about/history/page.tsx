import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"

export default function OurHistoryPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Our History</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            The journey of excellence and innovation that shaped SNBP INTERNATIONAL School
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
            <span className="text-primary font-medium">Our History</span>
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
                <li className="border-l-4 border-primary pl-3 text-primary font-medium">
                  <Link href="/about/history">Our History</Link>
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
                  Contact our admissions office for more information about our school's history and legacy.
                </p>
                <Button className="w-full">Contact Us</Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-primary">The SNBP Story</h2>
              <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="SNBP School Historical Photo"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-700 mb-4">
                SNBP INTERNATIONAL School was founded in 1995 with a vision to provide world-class education that
                nurtures excellence, builds character, and inspires future leaders. What began as a small institution
                with just a handful of students has now grown into one of the most prestigious educational institutions
                in the region.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, Dr. S.N. Bhatnagar, believed that education should go beyond textbooks and exams. He
                envisioned a school that would foster creativity, critical thinking, and a global perspective among
                students. His pioneering approach to education laid the foundation for what SNBP is today.
              </p>
              <p className="text-gray-700">
                Over the years, SNBP has evolved and adapted to changing educational needs while staying true to its
                core values of excellence, integrity, and innovation. Today, we continue to build on our rich legacy
                while embracing modern teaching methodologies and technologies.
              </p>
            </div>

            {/* Timeline */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-primary">Our Journey Through the Years</h2>

              <div className="space-y-8">
                {/* 1995 */}
                <div className="relative pl-8 pb-8 border-l-2 border-primary">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">1995</h3>
                  </div>
                  <p className="text-gray-700">
                    SNBP School was founded with its first campus and 120 students. The school focused on providing
                    quality education with a strong emphasis on values and character building.
                  </p>
                </div>

                {/* 2000 */}
                <div className="relative pl-8 pb-8 border-l-2 border-primary">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">2000</h3>
                  </div>
                  <p className="text-gray-700">
                    Expansion of facilities with the addition of state-of-the-art science laboratories, computer labs,
                    and a library. Student enrollment crossed 500.
                  </p>
                </div>

                {/* 2005 */}
                <div className="relative pl-8 pb-8 border-l-2 border-primary">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">2005</h3>
                  </div>
                  <p className="text-gray-700">
                    SNBP achieved its first major academic milestone with 100% pass results and top ranks in board
                    examinations. The school also introduced comprehensive sports programs.
                  </p>
                </div>

                {/* 2010 */}
                <div className="relative pl-8 pb-8 border-l-2 border-primary">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">2010</h3>
                  </div>
                  <p className="text-gray-700">
                    Upgraded to SNBP INTERNATIONAL School with the introduction of international curriculum and exchange
                    programs. New campus inaugurated to accommodate growing student population.
                  </p>
                </div>

                {/* 2015 */}
                <div className="relative pl-8 pb-8 border-l-2 border-primary">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">2015</h3>
                  </div>
                  <p className="text-gray-700">
                    Celebrated 20 years of excellence with the launch of innovative STEM programs and digital learning
                    initiatives. Received national recognition for educational excellence.
                  </p>
                </div>

                {/* 2020 */}
                <div className="relative pl-8 border-l-2 border-primary">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">2020 - Present</h3>
                  </div>
                  <p className="text-gray-700">
                    Successfully navigated the challenges of the pandemic with robust online learning systems. Expanded
                    facilities with a new sports complex and performing arts center. Student strength now exceeds 2000
                    across all grades.
                  </p>
                </div>
              </div>
            </div>

            {/* Legacy */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Legacy of Excellence</h2>
              <p className="text-gray-700 mb-4">
                Throughout our history, SNBP INTERNATIONAL School has remained committed to providing an education that
                prepares students not just for examinations, but for life. Our alumni have gone on to excel in various
                fields including medicine, engineering, arts, sports, and business.
              </p>
              <p className="text-gray-700 mb-4">
                We take pride in our tradition of academic excellence, character development, and holistic education. As
                we look to the future, we remain dedicated to our founding principles while embracing innovation and
                change.
              </p>
              <div className="mt-6">
                <Link href="/">
                  <Button variant="outline" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

