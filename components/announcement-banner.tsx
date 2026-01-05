"use client"

import { useState } from "react"
import { Bell, X } from "lucide-react"

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-primary text-white py-3 relative overflow-hidden">
      <div className="absolute inset-0 bg-diagonal-lines bg-[length:10px_10px] opacity-10"></div>
      <div className="container mx-auto px-4 flex items-center justify-center relative">
        <Bell className="h-5 w-5 mr-3 animate-bounce" />
        <p className="text-center font-medium">
          <span className="hidden sm:inline">Admissions Open for Academic Year 2025-26!</span>
          <span className="sm:hidden">Admissions Open 2025-26!</span>
          <span className="ml-2 underline underline-offset-2 font-semibold cursor-pointer hover:text-white/90 transition-colors">
            Apply Now
          </span>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 text-white/80 hover:text-white transition-colors"
          aria-label="Close announcement"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

