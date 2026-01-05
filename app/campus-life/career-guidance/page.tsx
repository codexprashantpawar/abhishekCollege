import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function CareerGuidanceSeminar() {
  // Realistic professional images from placeholder services
  const speakers = [
    {
      name: "Dr. Vilas Deotare",
      title: "Dean R&D, NMIE",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=faces" // Professional woman
    },
    {
      name: "Prof. Manisha Gondhale",
      title: "Memory Trainer, NMIE",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=faces" // Professional man
    },
    {
      name: "Mr. Jitendra Pawan",
      title: "B.Tech, IIT Bombay",
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=300&h=300&fit=crop&crop=faces" // Indian professional
    },
    {
      name: "Mrs. Varsha Desai",
      title: "Principal, AJC",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=faces" // Professional woman
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Header with College Background */}
      <div className="relative bg-primary text-white py-16 overflow-hidden">
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-primary z-0"></div>
        
       
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
            Free Seminar on Career Guidance
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 text-blue-100">
            Join us for an insightful career guidance seminar with renowned experts in various fields
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/campus/events" className="text-gray-500 hover:text-primary transition-colors">
              Events
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-primary font-medium">Career Guidance Seminar</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Seminar Overview with College Image */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
  <Image
    src="/images/career.jpeg"
    alt="Students in seminar"
    layout="fill"
    objectFit="cover"
  />
</div>

              <div className="p-6 md:p-8 md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Seminar Overview</h2>
                <div className="prose prose-blue max-w-none">
                  <p className="text-gray-700 mb-4">
                    Abhishek Arts, Commerce & Science Junior College is proud to present a <strong>Free Seminar on Career Guidance</strong>. 
                    This exclusive event is designed to provide students and parents with valuable insights into various career paths.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our esteemed panel of speakers from diverse professional backgrounds will share their expertise, 
                    covering topics from traditional career options to emerging fields in technology and management.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-primary p-4 my-4 rounded-r">
                    <p className="text-primary font-medium">
                      Special focus will be given to competitive exam preparation, skill development, and 
                      understanding the evolving job market landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Speakers Section */}
          {/* <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Meet Our Esteemed Speakers</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {speakers.map((speaker, index) => (
                <div key={index} className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-64 w-full">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-primary transition-colors">
                      {speaker.name}
                    </h4>
                    <p className="text-primary text-sm font-medium">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Event Details with Venue Image */}
          {/* <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <Image
                  src="/images/College Infra_3.jpeg"
                  alt="College auditorium"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 md:p-8 md:w-2/3">
                <h3 className="text-2xl font-bold text-primary mb-6">Event Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Date & Time</h4>
                      <p className="text-gray-700">May 16th, 2024</p>
                      <p className="text-gray-700">11:00 AM to 2:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Venue</h4>
                      <p className="text-gray-700">Abhishek International School & Junior College</p>
                      <p className="text-gray-700">Sector 6, Near Jalvayu Vihar</p>
                      <p className="text-gray-700">Moshi-Pradhikaran, Pune</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Schedule</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>11:00 AM - Registration & Welcome</li>
                        <li>11:30 AM - Keynote Address</li>
                        <li>12:15 PM - Panel Discussion</li>
                        <li>1:30 PM - Q&A Session</li>
                        <li>2:00 PM - Networking & Refreshments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Registration CTA with Student Image */}
          {/* <div className="relative bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="md:flex " style={{justifyContent:'center'}}>
            
              <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Ready to Shape Your Future?</h3>
                <p className="text-gray-700 mb-6">
                  Limited seats available! Register now to secure your spot for this transformative career guidance seminar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-primary hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all">
                    Register Now
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-lg">
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
          </div> */}

          {/* Back Button */}
          <div className="text-center">
            <Link href="/campus/events">
              <Button variant="outline" className="border-primary text-primary hover:bg-blue-50 flex items-center mx-auto">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}