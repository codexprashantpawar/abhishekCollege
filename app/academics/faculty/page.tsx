// "use client"

// import { Button } from "@/components/ui/button"
// import { ArrowLeft } from "lucide-react"
// import Link from "next/link"

// export default function FacultyPage() {
//   const facultyMembers = [
//   { id: 1, name: "Mrs. Varsha Desai", qualification: "MA, B.Ed, BPEd", designation: "Principal" },
//   { id: 2, name: "Mrs. Rakhi Baviskar", qualification: "MA, B.Ed", designation: "Coordinator" },
//   { id: 3, name: "Mrs. Bharati Gagare", qualification: "M.Sc, B.Ed", designation: "Lecturer" },
//   { id: 4, name: "Mrs. Sonali Pokharkar", qualification: "M.Com, B.Ed, DSM", designation: "Lecturer" },
//   { id: 5, name: "Mrs. Archana Suryavanshi", qualification: "BHMS, ADCRM", designation: "Lecturer" },
//   { id: 6, name: "Mrs. Priya Amle", qualification: "M.Sc, B.Ed", designation: "Lecturer" },
//   { id: 7, name: "Mrs. Rutuja Bankar", qualification: "BE. Computer", designation: "Lecturer" },
//   { id: 8, name: "Mrs. Priti Aranya", qualification: "M.A. B.Ed. D.S.M.", designation: "Lecturer" },
//   { id: 9, name: "Mrs. Seema Desai", qualification: "M.Sc, B.Ed., M.B.S", designation: "Lecturer" },
//   { id: 10, name: "Mrs. Sujata Bachate", qualification: "M.Sc, B.Ed.", designation: "Lecturer" },
//   { id: 11, name: "Mrs. Mayuri Patil", qualification: "BCA, M.Sc IT", designation: "Admin" }
// ];


//   return (
//     <main className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-primary text-white py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-3xl md:text-5xl font-bold mb-4">Faculty</h1>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto">
//             Meet our dedicated and experienced faculty members who play an essential role in shaping the future of our students.
//           </p>
//         </div>
//       </div>

//       {/* Breadcrumb */}
//       <div className="bg-white border-b shadow-sm">
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex items-center text-sm">
//             <Link href="/" className="text-gray-500 hover:text-primary transition-colors">
//               Home
//             </Link>
//             <span className="mx-2 text-gray-400">/</span>
//             <span className="text-primary font-medium">Faculty</span>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-4 py-12">
//         <h2 className="text-2xl font-bold text-primary mb-8 text-center">College Faculty</h2>

//         {/* Faculty Table */}
//         <div className="overflow-x-auto bg-white rounded-lg shadow-md">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-primary">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Sr.No</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Qualification</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Designation</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {facultyMembers.map((member) => (
//                 <tr key={member.id} className="hover:bg-gray-50 transition-colors">
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{member.id}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{member.qualification}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{member.designation}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Back Button */}
//         <div className="mt-8 text-center">
//           <Link href="/">
//             <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Home
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </main>
//   )
// }



"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react";
export default function FacultyPage() {
 const [activeTab, setActiveTab] = useState("college"); // Default tab
  const facultyMembers = [
    { id: 1, name: "Mrs. Varsha Desai", qualification: "MA, B.Ed, BPEd", designation: "Principal" },
    { id: 2, name: "Mrs. Rakhi Baviskar", qualification: "MA, B.Ed", designation: "Coordinator" },
    { id: 3, name: "Mrs. Bharati Gagare", qualification: "M.Sc, B.Ed", designation: "Lecturer" },
    { id: 4, name: "Mrs. Sonali Pokharkar", qualification: "M.Com, B.Ed, DSM", designation: "Lecturer" },
    { id: 5, name: "Mrs. Archana Suryavanshi", qualification: "BHMS, ADCRM", designation: "Lecturer" },
    { id: 6, name: "Mrs. Priya Amle", qualification: "M.Sc, B.Ed", designation: "Lecturer" },
    { id: 7, name: "Mrs. Rutuja Bankar", qualification: "BE. Computer", designation: "Lecturer" },
    { id: 8, name: "Mrs. Priti Aranya", qualification: "M.A. B.Ed. D.S.M.", designation: "Lecturer" },
    { id: 9, name: "Mrs. Seema Desai", qualification: "M.Sc, B.Ed., M.B.S", designation: "Lecturer" },
    { id: 10, name: "Mrs. Sujata Bachate", qualification: "M.Sc, B.Ed.", designation: "Lecturer" },
    { id: 11, name: "Mrs. Mayuri Patil", qualification: "BCA, M.Sc IT", designation: "Admin" }
  ]

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Faculty</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Meet our dedicated and experienced faculty members who play an essential role in shaping the future of our students.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-primary font-medium">Faculty</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">

        {/* Faculty Table */}
        <h2 className="text-2xl font-bold text-primary mb-8 text-center">College Faculty</h2>

        <div className="overflow-x-auto bg-white rounded-lg shadow-md mb-12">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-primary">
              <tr>
                <th className="px-6 py-3 text-white text-xs uppercase">Sr.No</th>
                <th className="px-6 py-3 text-white text-xs uppercase">Name</th>
                <th className="px-6 py-3 text-white text-xs uppercase">Qualification</th>
                <th className="px-6 py-3 text-white text-xs uppercase">Designation</th>
              </tr>
            </thead>
            <tbody>
              {facultyMembers.map((m) => (
                <tr key={m.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">{m.id}</td>
                  <td className="px-6 py-4 text-sm font-medium">{m.name}</td>
                  <td className="px-6 py-4 text-sm">{m.qualification}</td>
                  <td className="px-6 py-4 text-sm">{m.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= NEW TAB SECTION ================= */}
<h2 className="text-2xl font-bold text-primary mb-6 text-center">
  Institute Information
</h2>

{/* Tabs as Centered Buttons */}
<div className="flex justify-center mb-6 gap-3">
  <button
    className="px-4 py-2 rounded-md bg-primary text-white font-semibold hover:bg-primary/80 transition"
    onClick={() => setActiveTab("college")}
  >
    🏫 College Info
  </button>
  <button
    className="px-4 py-2 rounded-md bg-primary text-white font-semibold hover:bg-primary/80 transition"
    onClick={() => setActiveTab("school")}
  >
    🎓 School Info
  </button>
  <button
    className="px-4 py-2 rounded-md bg-primary text-white font-semibold hover:bg-primary/80 transition"
    onClick={() => setActiveTab("management")}
  >
    👥 Management
  </button>
</div>

 {/* Tab Content */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md p-6 max-w-5xl mx-auto">
        {activeTab === "college" && (
          <table className="min-w-full divide-y divide-gray-200">
            <tbody>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Sanstha Name</th>
                <td className="px-6 py-3 text-sm text-gray-700">Abhishek Vidyalayam</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">College Name</th>
                <td className="px-6 py-3 text-sm text-gray-700">
                  Abhishek Art`s , Commerce & Science Junior College, Moshi Pradhikaran
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Registration No.</th>
                <td className="px-6 py-3 text-sm text-gray-700">SFS-1021/LNo 636/SM-2 - 13/03/2023</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Type</th>
                <td className="px-6 py-3 text-sm text-gray-700">Self Finance</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Udise No.</th>
                <td className="px-6 py-3 text-sm text-gray-700">27252003142</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Index No.</th>
                <td className="px-6 py-3 text-sm text-gray-700">J11.16.092</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Board</th>
                <td className="px-6 py-3 text-sm text-gray-700">Maharashtra State Board</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Email-ID</th>
                <td className="px-6 py-3 text-sm text-blue-600 underline cursor-pointer">
                  abhishekjuniorcollegemoshi@gmail.com
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Address</th>
                <td className="px-6 py-3 text-sm text-gray-700">
                  Plot no.2, Sector 6, Near Jalvayu Vihar, Moshi Pradhikaran
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Contact Details</th>
                <td className="px-6 py-3 text-sm text-gray-700">8446713030</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">College Principal</th>
                <td className="px-6 py-3 text-sm text-gray-700">Mrs. Varsha Desai Ma`am</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Principal Contact</th>
                <td className="px-6 py-3 text-sm text-gray-700">9552078381</td>
              </tr>
            </tbody>
          </table>
        )}

        {activeTab === "school" && (
          <table className="min-w-full divide-y divide-gray-200">
            <tbody>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Sanstha Name</th>
                <td className="px-6 py-3 text-sm text-gray-700">Abhishek Vidyalayam</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">School Name</th>
                <td className="px-6 py-3 text-sm text-gray-700">
                  Abhishek International School, Moshi Pradhikaran
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Registration No.</th>
                <td className="px-6 py-3 text-sm text-gray-700">F19149(Maharashtra)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Type</th>
                <td className="px-6 py-3 text-sm text-gray-700">Self Finance</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Udise No.</th>
                <td className="px-6 py-3 text-sm text-gray-700">27252003124</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Affiliation No.</th>
                <td className="px-6 py-3 text-sm text-gray-700">1131099</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Board</th>
                <td className="px-6 py-3 text-sm text-gray-700">CBSE Board</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Email-ID</th>
                <td className="px-6 py-3 text-sm text-blue-600 underline cursor-pointer">
                  abhishekinternational.cbse@gmail.com
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Address</th>
                <td className="px-6 py-3 text-sm text-gray-700">
                  Plot no.2, Sector 6, Near Jalvayu Vihar, Moshi Pradhikaran
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Contact Details</th>
                <td className="px-6 py-3 text-sm text-gray-700">8446713030</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">School Principal</th>
                <td className="px-6 py-3 text-sm text-gray-700">Mrs. Sudha Bhat Ma`am</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Principal Contact</th>
                <td className="px-6 py-3 text-sm text-gray-700">9766087579</td>
              </tr>
            </tbody>
          </table>
        )}

        {activeTab === "management" && (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-primary">
              <tr>
                <th className="px-6 py-3 text-white text-xs uppercase">Designation</th>
                <th className="px-6 py-3 text-white text-xs uppercase">Name Of the Management</th>
                <th className="px-6 py-3 text-white text-xs uppercase">Date Of Birth</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">Chairman</td>
                <td className="px-6 py-4 text-sm font-medium">Mr. Gururaj Charantimath Sir</td>
                <td className="px-6 py-4 text-sm">23rd September</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">Director</td>
                <td className="px-6 py-4 text-sm font-medium">Mrs. Geeta Charantimath Ma`am</td>
                <td className="px-6 py-4 text-sm">22nd July</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">Manager</td>
                <td className="px-6 py-4 text-sm font-medium">Miss. Gayatri Charantimath Ma`am</td>
                <td className="px-6 py-4 text-sm">12th July</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">Members</td>
                <td className="px-6 py-4 text-sm font-medium">
                  1. Mr. Abhishek Charantimath Sir<br/>
                  2. Mrs. Varshali Charantimath Ma`am
                </td>
                <td className="px-6 py-4 text-sm">27th October & 6th January</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">College Principal</td>
                <td className="px-6 py-4 text-sm font-medium">Mrs. Varsha Desai Ma`am</td>
                <td className="px-6 py-4 text-sm">20th August</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">School Principal</td>
                <td className="px-6 py-4 text-sm font-medium">Mrs. Sudha Bhat Ma`am</td>
                <td className="px-6 py-4 text-sm">16th March</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>



        {/* Back Button */}
        <div className="mt-10 text-center">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

      </div>
    </main>
  )
}
