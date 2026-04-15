"use client";

import { useState } from "react";
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import Accreditation from "./components/Accreditation";
import CourseCards from "./components/CourseCards";
import ShooliniCard from "./components/About";
import WhyChooseSection from "./components/Whychoose";
import Placement from "./components/placement";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import EnquiryModal from "./components/EnquiryModal";
import StickyFooter from "./components/StickyFooter";

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
      <HeroSection onOpenModal={() => openModal()} />
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
        campaign="Google_search"
      />

      <StickyFooter onOpenModal={() => openModal()} />
    </main>
  );
}
