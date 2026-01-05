"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Medal, Trophy, Award } from "lucide-react"
import Link from "next/link"

export default function SportsPage() {
  const achievements = [
    {
      name: "Shreya Milind Dande",
      class: "XII - Science",
      image: "/images/Shreya Dande.jpg",
      accomplishments: [
        { icon: <Medal className="text-yellow-500" />, text: "India Book of Records in Talvar Baji" },
        { icon: <Medal className="text-gray-400" />, text: "3 Silver Medals in National Championship at Tamil Nadu" },
        { icon: <Trophy className="text-yellow-600" />, text: "1 Silver and 1 Bronze Medal at International Championship in Malaysia" },
        { icon: <Medal className="text-gray-400" />, text: "2 Silver Medals in Open Asian Championship in Qatar" },
        { icon: <Award className="text-blue-500" />, text: "Star Student of the Year (2024)" },
        { icon: <Trophy className="text-yellow-600" />, text: "Selected for Paralympics" }
      ]
    },
    {
      name: "Sid Kami",
      class: "XII - Commerce",
      image: "/images/Sid Kami.jpg",
      accomplishments: [
        { icon: <Medal className="text-yellow-500" />, text: "Maharashtra State Kickboxing Championship Gold Medal 2022" },
        { icon: <Medal className="text-yellow-500" />, text: "Gold Medal in International Kickboxing Championship in Delhi 2024" },
        { icon: <Trophy className="text-yellow-600" />, text: "All India Open Karate DO Championship at Chhatrapati Chashak 2025" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/sports-bg.jpg')] bg-cover bg-center z-0"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Extraordinary Sports Achievements</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Our students continue to excel in various sports, showcasing exceptional skills and bringing pride to the college.
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
            <span className="text-primary font-medium">Sports Achievements</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-primary mb-12 text-center">Student Achievements</h2>

        {/* Achievements Cards */}
        <div className="space-y-16">
          {achievements.map((student, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                {/* Student Image */}
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-contain"
                  />
                </div>
                
                {/* Student Details */}
                <div className="p-6 md:p-8 md:w-2/3">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary">{student.name}</h3>
                    <p className="text-lg font-bold text-secondary">{student.class}</p>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-primary mb-4">Achievements:</h4>
                  <ul className="space-y-3">
                    {student.accomplishments.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 mt-1">{item.icon}</span>
                        <span className="text-gray-700">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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