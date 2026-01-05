"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ChevronRight, User, Search } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

// Define the type for menu items
type MenuItem = {
  name: string
  href: string
  dropdown?: { name: string; href: string }[]
}

// Define the menu structure
const menuItems: MenuItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
    dropdown: [
      { name: "Our History", href: "/about/history" },
      { name: "President Desk", href: "/about/president-desk" },
      { name: "Director Desk", href: "/about/director-desk" },
      { name: "Principal Desk", href: "/about/principal-desk" },
      { name: "Vision & Mission", href: "/about/vision-mission" },
    ],
  },
  {
    name: "Academics",
    href: "#",
    dropdown: [
      { name: "Curriculum", href: "/academics/curriculum" },
      { name: "Syllabus", href: "/academics/syllabus" },
      { name: "Faculty", href: "/academics/faculty" },
    ],
  },
  {
    name: "Admission",
    href: "#",
    dropdown: [
      { name: "Admission Procedure Overview", href: "/admission/process" },
        { name: "Documents Required", href: "/admission/documents" },
      { name: "Fee Structure", href: "/admission/fee-structure" },
      
    ],
  },
  {
    name: "Campus Life",
    href: "#",
    dropdown: [
      { name: "Facilities", href: "/campus-life/facilities" },

       { name: "Career Guidance Seminar", href: "/campus-life/career-guidance" },
             { name: "Sports", href: "/campus-life/sports" },
      { name: "Infrastructure", href: "/campus-life/infra" },
      { name: "Rules & Regulations", href: "/campus-life/rules-regulations" },
    ],
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Contact",
    href: "/contact",
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<string[]>([])
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Toggle mobile dropdown
  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdowns((prev) => (prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]))
  }

  // Check if mobile dropdown is open
  const isMobileDropdownOpen = (name: string) => {
    return openMobileDropdowns.includes(name)
  }

  return (
    <nav
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-medium py-2" : "shadow-soft py-4"
      }`}
    >
   
          {/* Logo */}
       <div className="container mx-auto px-4">
  <div className="flex justify-between items-center">
    {/* Logo */}
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/images/abhishe-college-logo.jpg" // Update with your actual logo path
        alt="Abhishek Arts, Commerce & Science Junior College Logo"
        width={50} // Adjust the width of the logo
        height={50} // Adjust the height of the logo
        className="object-contain"
      />
      <div className="flex flex-col space-y-0.5 transition-transform duration-300 group">
        <span className="text-xl font-bold font-heading text-primary">
          Abhishek Arts, Commerce & Science Junior College
        </span>
        <span className="text-xs text-body">Moshi Pradhikaran</span>
      </div>
    </Link>



          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-secondary hover:text-primary font-medium transition-colors focus:outline-none px-3 py-1 rounded-md hover:bg-smoke">
                      {item.name} <ChevronDown className="ml-1 h-4 w-10" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-48 animate-scale shadow-medium bg-white">
                      {item.dropdown.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.name} asChild>
                          <Link
                            href={dropdownItem.href}
                            className="w-full cursor-pointer hover:bg-smoke hover:text-primary"
                          >
                            {dropdownItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className="text-secondary hover:text-primary font-medium transition-colors px-3 py-2 rounded-md hover:bg-smoke block"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-secondary hover:text-primary p-2 rounded-full hover:bg-smoke transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <Button className="bg-primary hover:bg-primary-600 text-white font-medium shadow-teal-glow">
              <User className="mr-2 h-4 w-4" />
              Login
            </Button>
            <Button className="bg-secondary hover:bg-secondary-800 text-white font-medium">Apply Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-secondary hover:text-primary p-2 rounded-full hover:bg-smoke transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary hover:text-primary p-2 rounded-md hover:bg-smoke transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="py-3 border-t mt-3 animate-slideDown">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 pr-10 rounded-md border border-smoke-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-body" />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4 animate-slideDown">
            <div className="flex flex-col space-y-1">
              {menuItems.map((item) => (
                <div key={item.name} className="border-b border-smoke pb-2">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="flex w-full justify-between items-center text-secondary hover:text-primary font-medium py-2 transition-colors"
                      >
                        {item.name}
                        <ChevronRight
                          className={`h-5 w-5 transition-transform duration-300 ${
                            isMobileDropdownOpen(item.name) ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      {isMobileDropdownOpen(item.name) && (
                        <div className="pl-4 mt-1 space-y-1 border-l-2 border-primary-100 animate-slideDown">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block text-body hover:text-primary text-sm py-2 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-secondary hover:text-primary font-medium py-2 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Action Buttons */}
              <div className="pt-4 flex flex-col space-y-2">
                <Button className="bg-primary hover:bg-primary-600 text-white font-medium shadow-teal-glow">
                  <User className="mr-2 h-4 w-4" />
                  Login
                </Button>
                <Button className="bg-secondary hover:bg-secondary-800 text-white font-medium">Apply Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
