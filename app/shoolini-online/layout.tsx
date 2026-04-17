import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "Shoolini University Online Courses Admission 2026",
  description:
    "Apply for Shoolini University online courses like MBA, BBA, BCA. Check fees, eligibility and admission process.",
};

export default function ShooliniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ❌ No html, no body */}
      <div className="bg-white text-gray-900 min-h-screen">
        {children}
      </div>
    </>
  );
}