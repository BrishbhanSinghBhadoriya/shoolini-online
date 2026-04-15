"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface HeroSectionProps {
  onOpenModal: () => void;
  campaign?: string;
}

const HeroSection = ({ onOpenModal, campaign = "Google_search" }: HeroSectionProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    state: "",
    campaign: campaign
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Immediately redirect to thank-you page
    router.push("/thank-you");

    // 2. Send data in background (using fetch with keepalive to ensure completion)
    fetch("/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      keepalive: true,
    }).catch((error) => {
      console.error("Background submission error:", error);
    });

    // Reset form after a slight delay (not strictly necessary but good practice)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", course: "", state: "", campaign: campaign });
      setIsSubmitting(false);
    }, 100);
  };

  return (
    <section className="w-full bg-[#fdf2f2] py-16 overflow-hidden">
      
      {/* ✅ EQUAL HEIGHT GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

        {/* LEFT */}
        <div className="flex flex-col justify-between h-full space-y-6">
          <div>
            <p className="text-black text-sm font-medium">
              #ThinkSuccessWithShoolini
            </p>

            <h1 className="text-3xl md:text-5xl font-extrabold text-[#ff2b57] leading-tight mt-2">
              Shoolini University <br /> Online Degree Programs
            </h1>

            <p className="text-black text-lg font-medium mt-3">
              Learn with purpose. Grow with confidence.
            </p>
          </div>

          <div className="bg-[#ff2b57] text-white text-xl font-semibold p-6 rounded-xl shadow">
            Up to 30% scholarship available
          </div>

          <p className="text-black font-semibold">
            MBA | MCA | MA | BCOM | BBA | BCA
          </p>

          {/* Desktop Button */}
          <button
            onClick={onOpenModal}
            className="hidden md:block bg-[#ff2b57] text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition w-fit"
          >
            Download Brochure
          </button>

          {/* Mobile Image */}
          <div className="md:hidden w-full flex justify-center">
            <Image
              src="/university-logo.jpg"
              alt="University Logo"
              width={350}
              height={180}
              className="object-contain rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* ✅ CENTER IMAGE (FULL HEIGHT MATCH) */}
        <div className="hidden lg:flex h-full relative items-end">
          <div className="relative w-full h-full flex items-end justify-center">
            <Image
              src="/student.png"
              alt="Student"
              width={1200}
              height={2000}
              className="object-contain lg:scale-[2] origin-bottom object-bottom"
              priority
            />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="flex h-full items-center">
          <div className="bg-white rounded-2xl shadow-lg p-5 w-full flex flex-col justify-between">

            <div>
              <h3 className="text-center text-[#ff2b57] text-2xl font-bold">
                Cost Free Consultation
              </h3>
              <p className="text-center text-black text-xs mb-3">
                From Higher Experience Counselor
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2.5">

              <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-2.5 text-sm rounded-lg bg-gray-100 outline-none focus:ring-1 focus:ring-[#ff2b57]/30 transition"
                />

                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-2.5 text-sm rounded-lg bg-gray-100 outline-none focus:ring-1 focus:ring-[#ff2b57]/30 transition"
                />

                <input
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="w-full p-2.5 text-sm rounded-lg bg-gray-100 outline-none focus:ring-1 focus:ring-[#ff2b57]/30 transition"
                />

                <select
                  required
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full p-2.5 text-sm rounded-lg bg-gray-100 outline-none focus:ring-1 focus:ring-[#ff2b57]/30 transition"
                >
                  <option value="">Select Course</option>
                  <option value="MBA">MBA</option>
                <option value="MCA">MCA</option>
                <option value="MA">MA</option>
                <option value="BBA">BBA</option>
                <option value="BCOM">BCOM</option>
               <option value="BCA">BCA</option>
                </select>

                <select
                  required
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-2.5 text-sm rounded-lg bg-gray-100 outline-none focus:ring-1 focus:ring-[#ff2b57]/30 transition"
                >
                  <option value="">Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                </select>

                <button
                  disabled={isSubmitting}
                  className="w-full bg-[#ff2b57] text-white py-2.5 rounded-lg font-semibold text-sm shadow hover:opacity-90 transition"
                >
                  {isSubmitting ? "Submitting..." : "Apply Now"}
                </button>

              </form>
            </div>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;