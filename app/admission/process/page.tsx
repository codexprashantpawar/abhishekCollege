import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ClipboardList, Calendar, FileCheck, CreditCard } from "lucide-react"

export default function AdmissionProcessPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Admission Process</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Your guide to joining the Abhishek Arts, Commerce & Science Junior College family
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
            <span className="text-primary font-medium">Admission Process</span>
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
                <li className="border-l-4 border-primary pl-3 text-primary font-medium">
                  <Link href="/admission/process">Admission Process</Link>
                </li>
                <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
                  <Link href="/admission/documents">Documents Required</Link>
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
              <h2 className="text-2xl font-bold mb-6 text-primary">Admission Process Overview</h2>

              <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/Admission Poster.jpeg"
                  alt="Students at Abhishek Arts, Commerce & Science Junior College"
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-gray-700 mb-6">
                Abhishek Arts, Commerce & Science Junior College follows a detailed admission process for students seeking
                to join our academic programs. The following outlines both the centralized admission procedure and in-house
                quota admission guidelines.
              </p>

              {/* In-House / Management Quota */}
              <div className="space-y-6 mt-8">
                <h3 className="text-xl font-semibold text-primary">
                  IN-HOUSE / MANAGEMENT QUOTA
                </h3>

                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>
                    The students those who have passed their SSC from Abhishek International
                    School will be eligible for In-house Quota Admission.
                  </li>
                  <li>
                    Students need to fill Part-1 and Part - 2 forms online for quota admission
                    too; students also have to click on Yes for In-house Quota.
                  </li>
                  <li>
                    Students have to submit hand written application for In-house or Management
                    Quota Admission along with photocopy of X mark sheet.
                  </li>
                  <li>
                    All the received applications will be arranged in sequence and preference
                    will be given to the students as per their merits.
                  </li>
                  <li>
                    Students will receive a call from college office for the confirmation of
                    admission.
                  </li>
                  <li>
                    Students can confirm the admission by paying the fees, filling the
                    admission form and submission of the relevant documents.
                  </li>
                  <li>
                    Same day the college will be admitting those students online and students
                    will get online admitted letter.
                  </li>
                  <li>
                    In-house Quota Admissions will be completed before centralized regular
                    rounds and Management Quota seats will be filled during regular rounds.
                  </li>
                </ul>
              </div>

              {/* Centralized Admission Procedure */}
              <div className="space-y-6 mt-8">
                <h3 className="text-xl font-semibold text-primary">
                  CENTRALIZED ADMISSION PROCEDURE (CAP)
                </h3>

                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>
                    There will be appx. 4 Regular Rounds + 1 Special Round + First Come First
                    Serve (FCFS) Round for Centralized Admission Process.
                  </li>
                  <li>
                    While giving the college preferences students have to check the college
                    cut off.
                  </li>
                  <li>
                    Centralized Admission Regular Round - I allotted students list issued by
                    Deputy Director will be displayed on the college notice board along with
                    the all requirements and information.
                  </li>
                  <li>Students have to check their allotment status in their login.</li>
                  <li>
                    If the students want to confirm the admission in allotted college they
                    have to click on "Proceed for Admission" and also upload the required
                    documents.
                  </li>
                  <li>
                    Students have to confirm the admission by paying the fees, filling the
                    admission form and submission of the relevant documents within stipulated
                    time period given by centralized admission committee.
                  </li>
                  <li>
                    Same day the college will be admitting those students online and students
                    will get online admitted letter.
                  </li>
                  <li>
                    The admission procedure will be same for all 4 Regular Rounds + Special
                    Round.
                  </li>
                  <li>
                    If the student is not allotted as per his desired college he can wait for
                    next round also he / she can shuffle the college preference list of Part -
                    2 forms after each round.
                  </li>
                  <li>
                    The students who wish to take admission in ABHISHEK ARTS, COMMERCE & SCIENCE
                    JUNIOR COLLEGE, MOSHI PRADHIKARAN have to give first preference in option
                    form.
                  </li>
                  <li>
                    Students who are not admitted in any college or in any round are eligible
                    to participate in Fist Come First Serve (FCFS) Round.
                  </li>
                  <li>
                    As per the schedule of FCFS Round, students can confirm the admission by
                    paying the fees, filling the admission form and submission of the relevant
                    documents.
                  </li>
                  <li>
                    Information regarding Uniform, Books and College Reopening will be
                    communicated with the students and parents through college.
                  </li>
                </ul>
              </div>



            </div>



            <div className="bg-accent text-primary p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Need Assistance?</h2>
              <p className="mb-4">
                Our admission team is here to help you through every step of the process. Feel free to contact us with
                any questions.
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
