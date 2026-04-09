"use client";

import Image from "next/image";
import { useState } from "react";
import axios from "axios";

interface HeroSectionProps {
  onOpenModal: () => void;
  campaign?: string;
}

const HeroSection = ({ onOpenModal, campaign = "Google_search" }: HeroSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    state: "",
    campaign: campaign
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await axios.post("/api/enquiry", formData);
      if (res.status === 201) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", course: "", state: "", campaign: campaign });
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#fdf2f2] py-16 overflow-hidden">
      
      {/* ✅ EQUAL HEIGHT GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

        {/* LEFT */}
        <div className="flex flex-col justify-between h-full space-y-6">
          <div>
            <p className="text-gray-500 text-sm font-medium">
              #ThinkSuccessWithShoolini
            </p>

            <h1 className="text-3xl md:text-5xl font-extrabold text-[#ff2b57] leading-tight mt-2">
              Shoolini University <br /> Online Degree Programs
            </h1>

            <p className="text-gray-700 text-lg font-medium mt-3">
              Learn with purpose. Grow with confidence.
            </p>
          </div>

          <div className="bg-[#ff2b57] text-white text-xl font-semibold p-6 rounded-xl shadow">
            Up to 30% scholarship available
          </div>

          <p className="text-gray-800 font-semibold">
            MBA | MCA | MA | BCOM | BBA | BCA
          </p>

          <button
            onClick={onOpenModal}
            className="bg-[#ff2b57] text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition w-fit"
          >
            Download Brochure
          </button>
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
        <div className="flex h-full">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full flex flex-col justify-between">

            <div>
              <h3 className="text-center text-[#ff2b57] text-xl font-bold">
                Free Consultation
              </h3>
              <p className="text-center text-gray-500 text-sm mb-4">
                Expert Counselor Support
              </p>
            </div>

            {submitStatus === "success" ? (
              <div className="text-center py-10">
                <h4 className="text-lg font-bold text-green-600">Thank You!</h4>
                <p className="text-gray-600">We will contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">

                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-gray-100"
                />

                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-gray-100"
                />

                <input
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="w-full p-3 rounded-lg bg-gray-100"
                />

                <select
                  required
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-100"
                >
                  <option value="">Select Course</option>
                  <option value="MBA">MBA</option>
                <option value="MCA">MCA</option>
                <option value="MA">MA</option>
                <option value="BCOM">BCOM</option>
                <option value="BBA">BBA</option>
                <option value="BCA">BCA</option>
                </select>

                <select
                  required
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-100"
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

                {submitStatus === "error" && (
                  <p className="text-red-500 text-xs text-center">
                    Failed to submit
                  </p>
                )}

                <button
                  disabled={isSubmitting}
                  className="w-full bg-[#ff2b57] text-white py-3 rounded-lg font-semibold"
                >
                  {isSubmitting ? "Submitting..." : "Apply Now"}
                </button>

              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;