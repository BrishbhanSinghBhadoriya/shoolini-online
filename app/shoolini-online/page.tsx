"use client";

import { useState } from "react";
import Header from "@/app/components/header";
import HeroSection from "@/app/components/HeroSection";
import Accreditation from "@/app/components/Accreditation";
import CourseCards from "@/app/components/CourseCards";
import ShooliniCard from "@/app/components/About";
import WhyChooseSection from "@/app/components/Whychoose";
import Placement from "@/app/components/placement";
import FAQ from "@/app/components/FAQ";
import Footer from "@/app/components/Footer";
import EnquiryModal from "@/app/components/EnquiryModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const openModal = (course = "") => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      <Header onOpenModal={() => openModal()} />
      <HeroSection onOpenModal={() => openModal()} campaign="Meta_search" />
      <div id="approvals">
        <Accreditation />
      </div>
      <div id="course">
        <CourseCards onOpenModal={(course) => openModal(course)} />
      </div>
      <div id="about">
        <ShooliniCard onOpenModal={() => openModal()} />
      </div>
      <div id="why-us">
        <WhyChooseSection />
      </div>
      <Placement />
      <FAQ />
      <Footer />

      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        courseName={selectedCourse}
        campaign="Meta_search"
      />
    </main>
  );
}

