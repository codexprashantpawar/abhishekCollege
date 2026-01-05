import Link from "next/link"
import { Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react"

export default function TopBar() {
  return (
    <div className="bg-gray-1 text-white py-2 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-6 mb-2 sm:mb-0">
          <div className="flex items-center group">
            <Phone className="h-4 w-4 mr-2 text-primary-dark group-hover:animate-pulse" />
            <span className="text-sm group-hover:text-primary-dark transition-colors">+91 8446713030</span>
          </div>
          <div className="flex items-center group">
            <Mail className="h-4 w-4 mr-2 text-primary-dark group-hover:animate-pulse" />
            <span className="text-sm group-hover:text-primary-dark transition-colors">
             abhishekjuniorcollegemoshi@gmail.com
            </span>
          </div>
          <div className="hidden md:flex items-center group">
            <Clock className="h-4 w-4 mr-2 text-primary-dark group-hover:animate-pulse" />
            <span className="text-sm group-hover:text-primary-dark transition-colors">Mon-Sat: 8:00 AM - 4:00 PM</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            className="text-white/80 hover:text-primary-dark transition-colors transform hover:scale-110 duration-200"
          >
            <Facebook className="h-4 w-4" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            className="text-white/80 hover:text-primary-dark transition-colors transform hover:scale-110 duration-200"
          >
            <Instagram className="h-4 w-4" />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            className="text-white/80 hover:text-primary-dark transition-colors transform hover:scale-110 duration-200"
          >
            <Youtube className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

