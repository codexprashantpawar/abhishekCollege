"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function FacilitiesPage() {
  const facilities = [
    {
      title: "Biology Lab",
      description: "Our Biology Lab is equipped with the latest tools and equipment to provide hands-on learning experiences for students. The lab is designed to foster curiosity and experimentation.",
      image: "/images/Facilities/Bio.jpeg"
    },
    {
      title: "IT Lab",
      description: "Our IT Lab is equipped with high-speed computers and software, providing students with the best environment to develop their technical skills.",
      image: "/images/Facilities/it.jpeg"
    },
    {
      title: "Chemistry Lab",
      description: "The Chemistry Lab is designed to provide students with a practical understanding of chemical reactions and experiments. It is well-stocked with the necessary equipment for safe and effective learning.",
      image: "/images/Facilities/chem.jpeg"
    }
  ];

  const additionalFacilities = [
    {
      title: "CCTV Surveillance",
      description: "Our campus is under 24/7 CCTV surveillance, ensuring the safety and security of all students and staff.",
      icon: "https://cdn-icons-png.flaticon.com/512/3031/3031727.png"
    },
    {
      title: "Awareness Programmes",
      description: "We conduct regular awareness programs on various social and environmental issues, encouraging students to be proactive citizens.",
      icon: "https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
    },
    {
      title: "Generator Backup",
      description: "The college is equipped with a generator backup system to ensure that classes run smoothly during power outages.",
      icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png"
    },
    {
      title: "Fire Safety Alarm",
      description: "Our campus is equipped with fire safety alarms and extinguishers to ensure the safety of everyone in case of emergencies.",
      icon: "https://cdn-icons-png.flaticon.com/512/2936/2936886.png"
    },
    {
      title: "Aqua Guard Drinking Water",
      description: "Clean drinking water is available throughout the campus, with Aqua Guard water purifiers installed at various points.",
      icon: "https://cdn-icons-png.flaticon.com/512/4163/4163914.png"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header with background image */}
      <div className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
      
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Facilities</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Abhishek Arts, Commerce & Science Junior College provides state-of-the-art facilities to support students' learning and well-being.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/campus/facilities" className="text-gray-500 hover:text-primary">
              Facilities
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-primary font-medium">Our Facilities</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Main Facilities */}
        <div className="space-y-16 mb-16">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              <div className="md:w-1/2 h-64 md:h-96 lg:h-[450px] relative rounded-xl overflow-hidden shadow-lg">
  <Image
    src={facility.image}
    alt={facility.title}
    fill
    className="object-cover"
  />
</div>

              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold text-primary mb-4">{facility.title}</h2>
                <p className="text-gray-700">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Facilities */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-8 text-center">Additional Facilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFacilities.map((facility, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start gap-4"
              >
                <div className="bg-gray-100 p-3 rounded-full flex-shrink-0">
                  <Image
                    src={facility.icon}
                    alt={facility.title}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{facility.title}</h3>
                  <p className="text-gray-700">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 pb-12 text-center">
        <Link href="/campus">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Campus
          </Button>
        </Link>
      </div>
    </main>
  )
}