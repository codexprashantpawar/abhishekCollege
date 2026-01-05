import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full mix-blend-overlay filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full mix-blend-overlay filter blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-6 text-white">About Abhishek Junior College</h3>
            <div className="mb-6">
           
              <span className="block text-xl font-bold text-white">Abhishek Arts, Commerce & Science Junior College</span>
              <span className="text-xs text-gray-4">Moshi Pradhikaran</span>
            </div>
            <p className="text-gray-4 mb-6">
             Abhishek Arts, Commerce & Science Junior College  is committed to providing quality education that nurtures excellence, builds
              character, and inspires future leaders.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-4 hover:text-primary-dark transition-colors transform hover:scale-110 duration-200"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-4 hover:text-primary-dark transition-colors transform hover:scale-110 duration-200"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-4 hover:text-primary-dark transition-colors transform hover:scale-110 duration-200"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-4 hover:text-primary-dark transition-colors transform hover:scale-110 duration-200"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-4 hover:text-primary-dark transition-colors flex items-center group"
                >
                  <span className="transform group-hover:translate-x-2 transition-transform">About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-gray-4 hover:text-primary-dark transition-colors flex items-center group"
                >
                  <span className="transform group-hover:translate-x-2 transition-transform">Academics</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admission"
                  className="text-gray-4 hover:text-primary-dark transition-colors flex items-center group"
                >
                  <span className="transform group-hover:translate-x-2 transition-transform">Admission</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/campus"
                  className="text-gray-4 hover:text-primary-dark transition-colors flex items-center group"
                >
                  <span className="transform group-hover:translate-x-2 transition-transform">Campus Life</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-4 hover:text-primary-dark transition-colors flex items-center group"
                >
                  <span className="transform group-hover:translate-x-2 transition-transform">Gallery</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-4 hover:text-primary-dark transition-colors flex items-center group"
                >
                  <span className="transform group-hover:translate-x-2 transition-transform">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary-dark group-hover:animate-pulse" />
                <span className="text-gray-4"> Abhishek Arts, Commerce & Science Junior College ,Moshi Pradhikaran</span>
              </li>
              <li className="flex items-center group">
                <Phone className="h-5 w-5 mr-3 text-primary-dark group-hover:animate-pulse" />
                <span className="text-gray-4">+91 8446713030</span>
              </li>
              <li className="flex items-center group">
                <Mail className="h-5 w-5 mr-3 text-primary-dark group-hover:animate-pulse" />
                <span className="text-gray-4">abhishekjuniorcollegemoshi@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-6 text-white">College Hours</h3>
            <ul className="space-y-3 text-gray-4">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="text-primary-dark">8:00 AM - 3:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-primary-dark">8:00 AM - 12:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-primary-dark">Closed</span>
              </li>
              <li className="pt-3 font-medium">Office Hours</li>
              <li className="flex justify-between">
                <span>Monday - Saturday:</span>
                <span className="text-primary-dark">9:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-7 pt-8 text-center text-gray-4">
          <p>© Created By Sunrayz Technology {new Date().getFullYear()}  . All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

