import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Info, FileText, School } from "lucide-react"

export default function GeneralInformationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">General Information</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">Essential details about SNBP INTERNATIONAL School</p>
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
            <Link href="/mpd" className="text-gray-500 hover:text-primary">
              MPD
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-primary font-medium">General Information</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-primary">MPD</h3>
              <ul className="space-y-2">
                <li className="border-l-4 border-primary pl-3 text-primary font-medium">
                  <Link href="/mpd/general-information">General Information</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/mpd/staff">Staff (Teaching)</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/mpd/infrastructure">School Infrastructure</Link>
                </li>
              </ul>

              <div className="mt-8 bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-semibold text-primary mb-2">Have a question?</h4>
                <p className="text-sm text-gray-600 mb-4">Contact our office for more information about our school.</p>
                <Button className="w-full">Contact Us</Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Info className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-primary">School Information</h2>
              </div>

              <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="SNBP School Building"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">School Name</h3>
                  <p className="text-gray-700">SNBP INTERNATIONAL School</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">Established</h3>
                  <p className="text-gray-700">1995</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">Affiliation</h3>
                  <p className="text-gray-700">CBSE (Central Board of Secondary Education)</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">Medium of Instruction</h3>
                  <p className="text-gray-700">English</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">Classes</h3>
                  <p className="text-gray-700">Nursery to Class XII</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">Campus Area</h3>
                  <p className="text-gray-700">5 Acres</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-primary">School Timings</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Classes
                      </th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Monday to Friday
                      </th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Saturday
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">Nursery to KG</td>
                      <td className="py-3 px-4 text-sm text-gray-700">9:00 AM - 12:30 PM</td>
                      <td className="py-3 px-4 text-sm text-gray-700">9:00 AM - 12:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">Classes I to V</td>
                      <td className="py-3 px-4 text-sm text-gray-700">8:00 AM - 2:30 PM</td>
                      <td className="py-3 px-4 text-sm text-gray-700">8:00 AM - 12:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">Classes VI to XII</td>
                      <td className="py-3 px-4 text-sm text-gray-700">8:00 AM - 3:30 PM</td>
                      <td className="py-3 px-4 text-sm text-gray-700">8:00 AM - 12:30 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <School className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-primary">Contact Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">Address</h3>
                  <p className="text-gray-700">123 Education Street, Knowledge City, India</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">Phone</h3>
                  <p className="text-gray-700">+91 98765 43210</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">Email</h3>
                  <p className="text-gray-700">info@snbpinternational.edu</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-primary">Website</h3>
                  <p className="text-gray-700">www.snbpinternational.edu</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/mpd">
                <Button variant="outline" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to MPD
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

