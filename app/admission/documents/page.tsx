import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, ClipboardList } from "lucide-react"

export default function DocumentsRequiredPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Documents Required</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Ensure you have all the required documents for a smooth admission process.
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
            <Link href="/admission" className="text-gray-500 hover:text-primary">
              Admission
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-primary font-medium">Documents Required</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-primary">Admission</h3>
              <ul className="space-y-2">
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/admission/process">Admission Process</Link>
                </li>
                <li className="border-l-4 border-primary pl-3 text-primary font-medium">
                  <Link href="/admission/documents-required">Documents Required</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/admission/fee-structure">Fee Structure</Link>
                </li>
              </ul>

              <div className="mt-8 bg-gray-50 p-4 rounded-lg border">
                <h4 className="font-semibold text-primary mb-2">Ready to Apply?</h4>
                <p className="text-sm text-gray-600 mb-4">Download the application form or apply online.</p>
                <Button className="w-full mb-2">Apply Online</Button>
                <Button variant="outline" className="w-full">
                  Download Form
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-primary">Documents Required for Admission</h2>

              {/* <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Documents Required"
                  fill
                  className="object-cover"
                />
              </div> */}

              <p className="text-gray-700 mb-6">
                To complete the admission process, please ensure you have all the required documents ready. This will
                help expedite your application and avoid any delays in processing.
              </p>

              {/* List of Documents */}
<div className="space-y-6 mt-8">
  <h3 className="text-xl font-semibold text-primary">
    Required Documents
  </h3>

  <ul className="list-disc pl-5 text-gray-700 space-y-1">
    <li>Confirmation of Proceed for Admission & Uploaded Documents</li>
    <li>Leaving Certificate (Original).</li>
    <li>Xerox copy of Std. X Mark sheet.</li>
    <li>
      Online Allotment Letter / Part - I form for In-house or Management Quota
      Admission.
    </li>
    <li>Xerox copy of Aadhar Card (Student, Mother, Father)</li>
    <li>Two photos of the student.</li>
    <li>Caste Certificate (if applicable).</li>
    <li>
      Passing Certificate & Original Migration Certificate for other than SSC
      Board. [Compulsory]
    </li>
  </ul>
</div>


              <div className="mt-8">
                <h3 className="text-xl font-semibold text-primary">Important Notes:</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>All documents must be submitted in original along with photocopies.</li>
                  <li>Documents must be submitted before the admission deadline for successful confirmation.</li>
                  <li>Ensure that all documents are clear, legible, and signed where required.</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent text-primary p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Need Assistance?</h2>
              <p className="mb-4">
                If you have any questions or need help with the documentation process, feel free to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-accent hover:bg-gray-100">Contact Admissions</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Download Brochure
                </Button>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/admission">
                <Button variant="outline" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Admission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
