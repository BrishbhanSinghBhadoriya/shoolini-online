"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Q1. How can I apply for admission to Shoolini University?",
    answer:
      "You can apply for Shoolini University Online admission online by filling out the application form and submitting the required documents digitally.",
  },
  {
    question: "Q2. What online courses are available at Shoolini University?",
    answer: "Shoolini University offers a variety of online undergraduate and postgraduate programs across multiple disciplines.",
  },
  {
    question:
      "Q3. What is the fee structure for the Shoolini University MBA online program?",
    answer:
      "The fee structure varies depending on the specialization and payment plan. Please check the official website for updated details.",
  },
  {
    question: "Q4. Is the Shoolini Online MBA degree recognised?",
    answer:
      "Yes, the degree is recognised by UGC and other relevant authorities, ensuring its validity and acceptance.",
  },
  {
    question:
      "Q5. Does Shoolini University offer placement support for online learners?",
    answer:
      "Yes, Shoolini University provides placement support including mentorship, resume building, and interview preparation.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f5f5f5] py-16 px-6 md:px-20">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#1f4b7a] mb-10">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className="space-y-6">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div key={index} className="border-b border-gray-300 pb-4">
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3
                  className={`text-lg md:text-xl font-semibold ${
                    isOpen ? "text-black" : "text-gray-500"
                  }`}
                >
                  {faq.question}
                </h3>

                <span
                  className={`text-2xl font-bold transition-all duration-300 ${
                    isOpen ? "text-[#1f4b7a]" : "text-gray-400"
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {isOpen && (
                <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}