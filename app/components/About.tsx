import React from "react";

interface ShooliniCardProps {
  onOpenModal: () => void;
}

export default function ShooliniCard({ onOpenModal }: ShooliniCardProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f3f2] p-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* LEFT TEXT */}
        <div>
        <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-[#ff3b5c] to-[#ff5fa2] bg-clip-text text-transparent leading-tight">
  Shoolini Online JEETO CAREER KI RACE
</h1>

          <p className="mt-6 text-black leading-relaxed text-lg">
            Shoolini University Online is a leader in outcome-based education,
            offering flexible online degrees that align with today’s industry
            needs. Recognised by UGC and NAAC, and compliant with AICTE, DEC,
            and NBA standards, online programs ensure academic quality and
            career relevance.
          </p>

          <p className="mt-4 text-black leading-relaxed text-lg">
            What makes it stand out is its unique Pay After Placement model.
            You only pay after securing a job, ensuring your investment results
            in measurable outcomes.
          </p>

          {/* BOX */}
          <div className="mt-8 border-2 border-gray-800 p-6 rounded-xl bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-black">Here’s how it works:</h3>
            <p className="font-medium text-black">
              Pay 70% upfront and the remaining 30% after placement.
            </p>
            <ul className="mt-3 list-disc list-inside text-gray-600">
              <li>Pay-After-Placement</li>
            </ul>
            <button 
              onClick={onOpenModal}
              className="mt-6 w-full bg-[#ff3b5c] text-white py-3 rounded-lg font-bold hover:bg-[#ff5fa2] transition shadow-md"
            >
              Get More Details
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="border-4 border-[#ff3b5c] rounded-3xl p-3">
            <img
              src="/pay-after-placement.webp"
              alt="promo"
              className="rounded-2xl object-cover w-[450px] md:w-[520px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
