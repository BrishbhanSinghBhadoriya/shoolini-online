"use client";
import React from "react";

interface CardProps {
  title: string;
  desc: string;
  variant: "primary" | "secondary";
}

const Card: React.FC<CardProps> = ({ title, desc, variant }) => {
  const isPrimary = variant === "primary";

  return (
    <div
      className={`p-10 md:p-12 flex flex-col justify-center h-full rounded-md ${
        isPrimary
          ? "bg-[#ff2b57] text-white"
          : "bg-[#e9e2dd] text-[#2d2d2d]"
      }`}
    >
      <h3 className="text-2xl md:text-3xl font-semibold mb-4">
        {title}
      </h3>
      <p className="text-base md:text-lg leading-relaxed opacity-90">
        {desc}
      </p>
    </div>
  );
};

export default function WhyChooseSection() {
  return (
    <div className="bg-[#f3f3f3] py-16 px-4 md:px-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-[#ff2b57]">Why Choose</span>
          <br />
          <span className="text-[#2d2d2d]">
            Shoolini Online University
          </span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-0 max-w-8xl mx-auto overflow-hidden rounded-lg">
        <Card
          variant="primary"
          title="Personalised Mentorship"
          desc="Shoolini University Online offers expert-led sessions guidance to help you navigate real-world career paths with industry insight."
        />

        <Card
          variant="secondary"
          title="Resume Development"
          desc="Optimise your resume and LinkedIn profile through guided support from Shoolini University’s career development team."
        />

        <Card
          variant="secondary"
          title="AI Interview with Experts"
          desc="Online Shoolini University offers AI-powered interview preparation from Siqandar, helping to boost your job placement readiness."
        />

        <Card
          variant="primary"
          title="Portfolio Showcasing"
          desc="Create a standout portfolio or file a patent with Shoolini University Online’s innovation-driven project support platform."
        />
      </div>
    </div>
  );
}