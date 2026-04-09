"use client";

import Image from "next/image";

interface CourseCardsProps {
  onOpenModal: (course: string) => void;
}

const courses = [
  {
    title: "MBA",
    fullName: "Master of Business Administration",
    duration: "24 Month",
    description: "Shoolini Online MBA degree develops business leaders through case-based learning, mentorship, and hands-on specialisation training.",
    image: "/mba-shoolini.webp"
  },
  {
    title: "MA",
    fullName: "Master of Arts",
    duration: "24 Month",
    description: "Shoolini Online MA degree course in English blends literary theory with communication and literature analysis for language-driven professions.",
    image: "/ma-shoolini.webp"
  },
  {
    title: "MCA",
    fullName: "Master of Computer Application",
    duration: "24 Month",
    description: "Shoolini University's Online MCA program lays a strong foundation in AI, cloud computing, and coding for emerging software and data careers.",
    image: "/mca-shoolini.png"
  },
  {
    title: "BBA",
    fullName: "Bachelor of Business Administration",
    duration: "36 Month",
    description: "Shoolini Online BBA offers skill-building in marketing, HR, and finance with internships and a placement-linked structure.",
    image: "/bba-shoolini.webp"
  },
  {
    title: "BCOM",
    fullName: "Bachelor of Commerce",
    duration: "36 Month",
    description: "Shoolini Online BCom course prepares students in taxation, accounting, and financial systems using practical, industry-oriented modules.",
    image: "/bcom-shoolini.webp"
  },
  {
    title: "BCA",
    fullName: "Bachelor of Computer Application",
    duration: "36 Month",
    description: "Shoolini University Online BCA covers programming, networks, and systems with electives in AI, data, and cybersecurity.",
    image: "/bca-shoolini.webp"
  },
];

const CourseCards = ({ onOpenModal }: CourseCardsProps) => {
  return (
    <section className="w-full py-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          Top UG/PG Courses for Shoolini Online University
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col"
            >
              {/* Top Image Section */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-gray-800 font-bold text-lg mb-1">
                  {course.fullName}
                </h4>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {course.duration}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  {course.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <button 
                    onClick={() => onOpenModal(course.title)}
                    className="flex-1 bg-gradient-to-r from-[#ff2b57] to-[#ff5fa2] text-white py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition shadow-md"
                  >
                    Apply now
                  </button>
                  <button 
                    onClick={() => onOpenModal(course.title)}
                    className="flex-1 border-2 border-[#ff2b57] text-[#ff2b57] py-2.5 rounded-lg font-semibold text-sm hover:bg-red-50 transition flex items-center justify-center gap-1"
                  >
                    Download Brochure 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCards;
