"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName?: string;
  campaign?: string;
}

const EnquiryModal = ({ isOpen, onClose, courseName = "", campaign = "" }: EnquiryModalProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: courseName,
    state: "",
    campaign: campaign,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ 
      ...prev, 
      course: courseName || prev.course,
      campaign: campaign || prev.campaign
    }));
  }, [courseName, campaign]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Close modal and redirect to thank you page
    onClose();
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

    // Reset form after a slight delay
    setTimeout(() => {
      setFormData({ 
        name: "", 
        email: "", 
        phone: "", 
        course: courseName, 
        state: "",
        campaign: campaign 
      });
      setIsSubmitting(false);
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          <h3 className="text-center text-[#ff2b57] text-3xl font-extrabold mb-1">
            Cost Free Consultation
          </h3>
          <p className="text-center text-gray-500 text-sm mb-8 font-medium">
            From Higher Experience Counselor
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="w-full p-4 rounded-xl bg-gray-100 outline-none text-gray-700 font-medium focus:ring-2 focus:ring-[#ff2b57]/20 transition"
              />
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="w-full p-4 rounded-xl bg-gray-100 outline-none text-gray-700 font-medium focus:ring-2 focus:ring-[#ff2b57]/20 transition"
              />
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Number"
                className="w-full p-4 rounded-xl bg-gray-100 outline-none text-gray-700 font-medium focus:ring-2 focus:ring-[#ff2b57]/20 transition"
              />

              <select 
                required
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-gray-100 outline-none text-black font-medium focus:ring-2 focus:ring-[#ff2b57]/20 transition appearance-none"
              >
                <option value="">Select Your Course</option>
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
                className="w-full p-4 rounded-xl bg-gray-100 outline-none text-black font-medium focus:ring-2 focus:ring-[#ff2b57]/20 transition appearance-none"
              >
                <option value="">Select Your State</option>
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

              <p className="text-[10px] text-black leading-tight">
                I authorize a representative to contact me via phone and/or email.
                This will override registry on DND/NDNC.
              </p>

              <button 
                disabled={isSubmitting}
                type="submit"
                className={`w-full bg-gradient-to-r from-[#ff2b57] to-[#ff5fa2] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : "Apply Now"}
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
