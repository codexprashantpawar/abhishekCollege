"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function RulesAndRegulationsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Rules & Regulations</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            The rules and regulations are designed to ensure the smooth functioning of the college and to maintain a positive learning environment. All students are expected to follow them diligently.
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
            <Link href="/campus-life" className="text-gray-500 hover:text-primary">
              Campus Life
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-primary font-medium">Rules & Regulations</span>
          </div>
        </div>
      </div>

      {/* Content */}
<div className="container mx-auto px-4 py-12">
  <h2 className="text-2xl font-bold text-primary mb-6 text-center">
    College Rules & Regulations
  </h2>

  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-700 mb-4">
      The College attaches great importance to discipline and the same must be
      scrupulously observed by all students. Failure to comply with any of its
      rule, regulations or requirements notified from time to time will lead to
      strict disciplinary action.
    </p>

    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li>
        Students must always wear the valid Identity Card issued by the college
        with their recent photograph affixed, bearing the signature of the
        Principal, around the neck.
      </li>
      <li>
        No student shall be allowed to attend Lectures, Practical etc; unless he
        /she have his/ her Identity Card with him/ her.
      </li>
      <li>
        Students must attend Lectures / Practicals regularly. Defaulters may face
        disciplinary Action. Minimum 75% attendance per term is necessary as per
        H.S.C Board regulation.
      </li>
      <li>
        Any act which will disturb the academic work of the college is strictly
        banned.
      </li>
      <li>
        Moving in the corridors during class hours is strictly prohibited.
      </li>
      <li>
        Students must not loiter in the college premises whenever they have a
        free period.
      </li>
      <li>
        Students must be in their classes on time. Late comers may not be allowed
        to enter the classes.
      </li>
      <li>
        Students must not do anything inside or outside the college that will in
        any way interfere with its orderly administration and discipline.
      </li>
      <li>
        Students are liable to lose their term for disobedience, misconduct,
        misbehavior or for any act of indiscipline.
      </li>
      <li>
        Students must take proper care of all the college property. Any damage
        done to the property of the college by disfiguring walls, doors, windows,
        fittings, furniture and such other things is breach of discipline and
        will be considered a punishable offence.
      </li>
      <li>
        Use of Mobile Phones, I-pods, I-pad, Laptops etc in college premises is
        strictly prohibited.
      </li>
      <li>
        Strict discipline in the class-room during teaching is to be maintained.
        Decent behavior with the teaching, non-teaching staff and fellow students
        is expected.
      </li>
      <li>
        Discipline is expected on the ground during sport activities.
      </li>
      <li>
        The students have to park their Bicycles in the parking area.
      </li>
      <li>
        If students join an unofficial picnic or tour, the College shall not be
        responsible for anything that happens in the picnic or tour.
      </li>
      <li>
        Students joining the College should observe all the Rules and Regulations
        of the College laid down from time to time.
      </li>
      <li>
        Any sort of physical and mental torture (ragging) is a crime. In case of
        any complaint, legal action will be taken.
      </li>
      <li>
        Matters not covered by the existing rules will be at the discretion of
        the Principal.
      </li>
    </ul>
  </div>

  {/* Back Button */}
  <div className="mt-6 text-center">
    <Link href="/campus-life">
      <Button variant="outline" className="flex items-center justify-center">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Campus Life
      </Button>
    </Link>
  </div>
</div>

    </main>
  )
}
