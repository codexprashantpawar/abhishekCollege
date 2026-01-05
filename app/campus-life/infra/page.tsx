"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { title } from "process"

export default function InfrastructurePage() {
  const facilities = [
  
    {
      title: "Fire Safety",
      description: "The safety of our students and staff is a top priority. Our campus is equipped with fire extinguishers and a fire safety system to handle any emergency situation effectively.",
      image: "/images/Fire Extinguisher.jpeg" // Replace with actual path
    },
    {
      title: "Aqua Guard Drinking Water",
      description: "We ensure the availability of safe drinking water through Aqua Guard systems installed across the campus for the convenience of our students and staff.",
      image: "/images/Drinking Water Aqua.jpeg" // Replace with actual path
    },
    {
      title: "Campus Grounds",
      description: "Our campus is surrounded by beautiful greenery and open spaces, providing a calm and conducive environment for learning.",
      image: "/images/Ground.jpeg" // Replace with actual path
    },{
        title:'School Infrastructure',
        description:'Our school is equipped with modern infrastructure to provide a comfortable and safe learning environment.',
        image:'/images/College Infra_3.jpeg' // Replace with actual path
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/campus-bg.jpg')] bg-cover bg-center z-0"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Infrastructure</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Our campus is equipped with modern facilities and infrastructure to enhance the learning experience for our students.
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
            <span className="text-primary font-medium">Infrastructure</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-primary mb-12 text-center">Campus Facilities</h2>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 gap-12">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 bg-white rounded-xl shadow-md overflow-hidden`}
            >
              <div className="md:w-1/2 h-64 md:h-80 relative">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <h3 className="text-xl font-semibold text-primary mb-4">{facility.title}</h3>
                <p className="text-gray-700">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link href="/">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}